import React from "react";
import Image, { StaticImageData } from "next/image";

type Props = {
  image: { src: StaticImageData; alt: string };
};

export const CoverImage = ({ image }: Props) => (
  <Image
    className="object-cover h-56 md:h-80 mt-0"
    src={image.src}
    alt={image.alt}
    width="642"
    height="642"
    quality={90}
  />
);
