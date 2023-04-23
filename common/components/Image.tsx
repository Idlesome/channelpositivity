// import React from "react";
// import { DetailedHTMLProps, ImgHTMLAttributes } from "react";
// import Img from "react-optimized-image";

// /**
//  * Borrowed from "react-optimized-image" as it's not exported
//  */
// export interface ImgProps
//   extends Omit<
//     Omit<
//       DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>,
//       "sizes"
//     >,
//     "src"
//   > {
//   src: ImgSrc;
//   type?: string;
//   webp?: boolean;
//   inline?: boolean;
//   url?: boolean;
//   original?: boolean;
//   sizes?: number[];
//   densities?: number[];
//   breakpoints?: number[];
// }

// export const Image = ({ src, width, height }: ImgProps) => (
//   <Img
//     src={src}
//     // webp
//     sizes={[Number(width), Number(width) * 2]}
//     width={width}
//     height={height}
//   />
// );
export {};
