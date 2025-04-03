import { useState, useEffect } from "react";
import Image from "next/image";

function ImageUploader({setUploadImage}) {

    const [image, setImage] = useState(null);
    
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setImage(reader.result);
            setUploadImage(reader.result)
            localStorage.setItem('key', JSON.stringify(reader.result));
          };
          reader.readAsDataURL(file);
        }
    };
    
    const handleRemoveImage = () => {
        setImage(null);
        setUploadImage(null);
        localStorage.setItem('key', JSON.stringify(''));
    };

    useEffect(() => {
        if(typeof window !== undefined) {
            setImage(JSON.parse(localStorage.getItem('key')))
        }
    },[])

    return (
        <div className="flex flex-col items-center">
            <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: 'none' }}
                id="file-input"
            />
            <label htmlFor="file-input" className="py-[10px] px-[20px] bg-white text-[#F42F77] custor-pointer rounded-[5px] text-center mb-[20px] block border border-[#F42F77]">
                <Image src={'/icons/upload-file.svg'} className="flex m-auto" alt='upload' height={30} width={30}/>
                Upload Design
            </label>

            {image ? (
                <div className="relative">
                    <img src={image} alt="Preview" className="w-full max-w-[200px] h-auto rounded-[8px] border border-[#F42F77]" />
                    <button onClick={handleRemoveImage} className="absolute top-[5px] right-[5px] bg-red-600 text-white border-none rounded-full cursor-pointer hover:bg-bg-red-800 px-2 py1">
                        X
                    </button>
                </div>
            ) : (
                <p>No image selected</p>
            )}
        </div>
    );
}

export default ImageUploader;