import React from "react";
import ExportedImage from "next-image-export-optimizer";

type Props = {
  image: CoverImage;
  className?: string;
};

export const CoverImage = ({ image, className = "" }: Props) => (
  <ExportedImage
    className={`object-cover ${className}`}
    src={`/images/global/${image.src}`}
    alt={image.alt}
    width="642"
    height="642"
    style={{ backgroundColor: image.color }}
    priority
    // quality={90}
  />
);
