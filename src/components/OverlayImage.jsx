import Image from "next/image";

function OverlayImage({baseImage, uploadedImage, thumb}) {
    return (
      thumb ? (
      <div className="relative w-[117px] h-[117px] overflow-hidden">
          <Image
          src={baseImage}// Thumbnail Background image
          alt="Background"
          layout="fill"
          objectFit="cover"
          priority
        />
  
        <Image
          src={uploadedImage} // Thumbnail Overlay image
          alt="Overlay"
          className="absolute top-[18px] left-[18px] z-[10] opacity-[0.75]"
          width={84}
          height={84}
        />
      </div>)
      : (<div className="relative w-[500px] h-[500px] overflow-hidden">
        <Image
          src={baseImage} // Background image
          alt="Background"
          layout="fill"
          objectFit="cover"
          priority
        />
  
        <Image
          src={uploadedImage} // Overlay image
          alt="Overlay"
          className="absolute top-[72px] left-[72px] z-[10] opacity-[0.75]"
          width={360}
          height={360}
        />
      </div>)
    );
}

export default OverlayImage;