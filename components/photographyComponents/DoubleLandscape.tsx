"use client";

import { urlFor } from "@/sanity/lib/image";
import { HOME_QUERYResult } from "@/sanity/types";
import Image from "next/image";

import "./DoubleLandscape.css";
import "@/components/Grid.css";
import { useState } from "react";
import { Lightbox } from "../Lightbox";

type doubleLandscapeProps = Extract<
  NonNullable<NonNullable<HOME_QUERYResult>["content"]>[number],
  { _type: "doubleLandscape" }
>;

export function DoubleLandscape({
  leftImage,
  rightImage,
}: doubleLandscapeProps) {
  const [activeImage, setActiveImage] = useState<{
    src: string;
    alt?: string;
  } | null>(null);

  return (
    <section className="double-landscape mobile-padding">
      <div className="images grid">
        <div className="double-landscape-left-image">
          {leftImage ? (
            <Image
              onClick={() =>
                setActiveImage({
                  src: urlFor(leftImage).url(),
                  alt: leftImage?.alt || "",
                })
              }
              src={urlFor(leftImage).auto("format").quality(90).url()}
              alt={leftImage?.alt || ""}
              width={2160}
              height={3840}
              className="double-landscape-left-img"
            />
          ) : null}
        </div>
        <div className="double-landscape-right-image">
          {rightImage ? (
            <Image
              onClick={() =>
                setActiveImage({
                  src: urlFor(rightImage).url(),
                  alt: rightImage?.alt || "",
                })
              }
              src={urlFor(rightImage).auto("format").quality(90).url()}
              alt={rightImage?.alt || ""}
              width={2160}
              height={3840}
              className="double-landscape-right-img"
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
