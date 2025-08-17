"use client";

import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { useState } from "react";

type ImageSliderProps = {
  imageUrls: string[];
};

export function ImageSlider({ imageUrls }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0);

  const showPrevImage = () => {
    setImageIndex((index) => {
      if (index === 0) return imageUrls.length - 1;
      return index - 1;
    });
  };

  const showNextImage = () => {
    setImageIndex((index) => {
      if (index === imageUrls.length - 1) return imageUrls.length - 1;
      return index + 1;
    });
  };

  return (
    <div>
      <Image
        src={urlFor(imageUrls[imageIndex]).auto("format").quality(90).url()}
        alt={""}
        width={2160}
        height={3840}
        className=""
      />
      <button onClick={showPrevImage}>&lt;</button>
      <button onClick={showNextImage}>&gt;</button>
    </div>
  );
}
