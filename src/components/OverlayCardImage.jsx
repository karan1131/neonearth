import Image from "next/image";

const productDetails = {
  tapestry: {
    top: '32px',
    left: '32px',
    width: 158,
    height: 158,
  },
  frame: {
    top: '36px',
    left: '36px',
    width: 146,
    height: 146,
  },
  wallArt: {
    top: '84px',
    left: '60px',
    width: 95,
    height: 95,
  },
  pillow: {
    top: '31px',
    left: '31px',
    width: 160,
    height: 160,
  },
  bag: {
    top: '133px',
    left: '95px',
    width: 30,
    height: 30,
  },
};

function OverlayCardImage({ baseImage, uploadedImage, productType }) {
  const details = productDetails[productType];

  if (!details) return null;

  return (
    <div className="relative w-[219px] h-[219px] overflow-hidden">
      <Image
        src={baseImage} // Background image
        alt="Background"
        layout="fill"
        objectFit="cover"
        priority
      />

      {/* Overlay image */}
      <Image
        src={uploadedImage}
        alt="Overlay"
        className="absolute z-[10] opacity-[0.75]"
        height={details.height}
        width={details.width}
        style={{
          top: details.top,
          left: details.left
        }}
      />
    </div>
  );
}

export default OverlayCardImage;