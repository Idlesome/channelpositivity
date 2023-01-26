import React from "react";
// import Image, { StaticImageData } from "next/image";
import ExportedImage from "next-image-export-optimizer";

type Props = {
  image: { src: string; alt: string };
};

export const CoverImage = ({ image }: Props) => (
  <ExportedImage
    className="object-cover h-56 md:h-80 mt-0"
    src={`/images/${image.src}`}
    alt={image.alt}
    width="642"
    height="642"
    // quality={90}
  />
);
