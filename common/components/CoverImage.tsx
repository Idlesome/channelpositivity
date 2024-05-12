import React from "react";
import ExportedImage from "next-image-export-optimizer";

type Props = {
  image: CoverImage;
  className?: string;
};

export const CoverImage = ({ image, className = "" }: Props) => (
  <ExportedImage
    className={`object-cover h-56 md:h-80 ${className}`}
    src={`/images/${image.src}`}
    alt={image.alt}
    width="642"
    height="642"
    style={{ backgroundColor: image.color }}
    priority
    // quality={90}
  />
);
