import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import './styles.css';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import OverlayImage from './OverlayImage';

function ProductSlider({uploadImage, setUploadImage}) {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    useEffect(() => {
        if(typeof window !== undefined) {
            setUploadImage(JSON.parse(localStorage.getItem('key')))
        }
    },[])

    return (
        <>
            <Swiper
                style={{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
                }}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                <SwiperSlide className='h-auto w-[100px]'>
                    {uploadImage ? <OverlayImage baseImage={"/images/PDP/design/tapestry.webp"} uploadedImage={uploadImage} thumb={false}/> : <img src="/images/PDP/design/tapestry.webp" />}
                </SwiperSlide>
                <SwiperSlide className='h-auto w-[100px]'>
                    <img src="/images/PDP/1.webp" />
                </SwiperSlide>
                <SwiperSlide className='h-auto w-[100px]'>
                    <img src="/images/PDP/2.webp" />
                </SwiperSlide>
                <SwiperSlide className='h-auto w-[100px]'>
                    <img src="/images/PDP/3.webp" />
                </SwiperSlide>
                <SwiperSlide className='h-auto w-[100px]'>
                    <img src="/images/PDP/4.webp" />
                </SwiperSlide>
                <SwiperSlide className='h-auto w-[100px]'>
                    <img src="/images/PDP/5.webp" />
                </SwiperSlide>
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
                // direction='vertical'
            >
                <SwiperSlide className='h-auto w-[20px]'>
                    {uploadImage ? <OverlayImage baseImage={"/images/PDP/design/tapestry.webp"} uploadedImage={uploadImage} thumb={true}/> : <img src="/images/PDP/design/tapestry.webp" />}
                </SwiperSlide>
                <SwiperSlide className='h-auto w-[20px]'>
                    <img src="/images/PDP/1.webp" />
                </SwiperSlide>
                <SwiperSlide className='h-auto w-[20px]'>
                    <img src="/images/PDP/2.webp" />
                </SwiperSlide>
                <SwiperSlide className='h-auto w-[20px]'>
                    <img src="/images/PDP/3.webp" />
                </SwiperSlide>
                <SwiperSlide className='h-auto w-[20px]'>
                    <img src="/images/PDP/4.webp" />
                </SwiperSlide>
                <SwiperSlide className='h-auto w-[20px]'>
                    <img src="/images/PDP/5.webp" />
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default ProductSlider;