"use client";

import { urlFor } from "@/sanity/lib/image";
import { SINGLE_SELECTED_WORK_QUERYResult } from "@/sanity/types";
import Image from "next/image";

import "./DoublePortrait.css";
import "@/components/Grid.css";
import { useState } from "react";
import { Lightbox } from "../Lightbox";

type doublePortraitProps = Extract<
  NonNullable<NonNullable<SINGLE_SELECTED_WORK_QUERYResult>["content"]>[number],
  { _type: "doublePortrait" }
>;

export function DoublePortrait({ leftImage, rightImage }: doublePortraitProps) {
  const [activeImage, setActiveImage] = useState<{
    src: string;
    alt?: string;
  } | null>(null);

  return (
    <section className="double-portrait">
      <div className="images grid">
        <div className="double-portrait-left-image">
          {leftImage ? (
            <Image
              onClick={() =>
                setActiveImage({
                  src: urlFor(leftImage).url(),
                  alt: leftImage.alt || "",
                })
              }
              src={urlFor(leftImage).auto("format").quality(90).url()}
              alt={leftImage?.alt ?? ""}
              width={2160}
              height={3840}
              className="double-portrait-left-img"
            />
          ) : null}
        </div>
        <div className="double-portrait-right-image">
          {rightImage ? (
            <Image
              onClick={() =>
                setActiveImage({
                  src: urlFor(rightImage).url(),
                  alt: rightImage.alt || "",
                })
              }
              src={urlFor(rightImage).auto("format").quality(90).url()}
              alt={rightImage?.alt ?? ""}
              width={2160}
              height={3840}
              className="double-portrait-right-img"
            />
          ) : null}
        </div>
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
