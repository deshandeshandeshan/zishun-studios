"use client";

import { urlFor } from "@/sanity/lib/image";
import { HOME_QUERYResult } from "@/sanity/types";
import MuxPlayerElement from "@mux/mux-player";
import MuxPlayer from "@mux/mux-player-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

type workLandscapeMediaProps = Extract<
  NonNullable<NonNullable<HOME_QUERYResult>["content"]>[number],
  { _type: "workLandscapeMedia" }
>;

export function WorkLandscapeMedia({
  title,
  description,
  video,
  image,
}: workLandscapeMediaProps) {
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView && playerRef.current) {
      playerRef.current.play();
    }

    if (!inView && playerRef.current) {
      playerRef.current.pause();
    }
  }, [inView]);

  const playerRef = useRef<MuxPlayerElement | null>(null);

  return (
    <section className="work-landscape-media">
      <div>
        <h2 className="work-landscape-title">{title}</h2>
        {image?.asset?.url ? (
          <Image
            src={urlFor(image).url()}
            width={1600}
            height={800}
            alt={image.alt || ""}
            className="work-landscape-media-img"
          />
        ) : video?.asset?.playbackId ? (
          <div
            ref={inViewRef}
            className="work-landscape-media-mux-video-container"
          >
            <MuxPlayer
              playbackId={video.asset.playbackId}
              ref={playerRef}
              autoPlay={false}
              muted
              loop
              playsInline
              className="work-landscape-media-mux-video-player"
            />
          </div>
        ) : null}
        <p className="work-landscape-description">{description}</p>
      </div>
    </section>
  );
}
