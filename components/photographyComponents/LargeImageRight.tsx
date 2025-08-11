"use client";

import { urlFor } from "@/sanity/lib/image";
import { SINGLE_SELECTED_WORK_QUERYResult } from "@/sanity/types";
import Image from "next/image";
import "./ImageLargeRight.css";
import "../grid.css";
import { useState } from "react";
import { Lightbox } from "../Lightbox";

type largeImageRightProps = Extract<
  NonNullable<NonNullable<SINGLE_SELECTED_WORK_QUERYResult>["content"]>[number],
  { _type: "largeImageRight" }
>;

export function LargeImageRight({
  leftImage,
  rightImage,
}: largeImageRightProps) {
  const [activeImage, setActiveImage] = useState<{
    src: string;
    alt?: string;
  } | null>(null);

  return (
    <section className="large-image-right grid mobile-padding">
      <div className="large-image-right-left-image">
        {leftImage ? (
          <Image
            onClick={() =>
              setActiveImage({
                src: urlFor(leftImage).url(),
                alt: leftImage.alt || "",
              })
            }
            src={urlFor(leftImage).auto("format").quality(90).url()}
            width={1080}
            height={1920}
            alt={leftImage.alt || ""}
            className="image-large-right-left-img pointer caption-spacing"
          />
        ) : null}
        {leftImage?.caption && (
          <div className="large-image-right-left-caption">
            <p className="type-detail-regular">{leftImage.caption}</p>
          </div>
        )}
      </div>
      <div className="large-image-right-right">
        {rightImage ? (
          <Image
            onClick={() =>
              setActiveImage({
                src: urlFor(rightImage).url(),
                alt: rightImage.alt || "",
              })
            }
            src={urlFor(rightImage).auto("format").quality(90).url()}
            width={1080}
            height={1920}
            alt={rightImage.alt || ""}
            className="large-image-right-right-img pointer caption-spacing"
          />
        ) : null}
        {rightImage?.caption && (
          <div className="large-image-right-right-caption">
            <p className="type-detail-regular">{rightImage.caption}</p>
          </div>
        )}
      </div>

      {activeImage && (
        <Lightbox
          src={activeImage.src}
          alt={activeImage.alt || ""}
          onClose={() => setActiveImage(null)}
        />
      )}
    </section>
  );
}
