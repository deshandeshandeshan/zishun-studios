"use client";

import { urlFor } from "@/sanity/lib/image";
import { HOME_QUERYResult } from "@/sanity/types";
import MuxPlayerElement from "@mux/mux-player";
import MuxPlayer from "@mux/mux-player-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

import "./HeaderMedia.css";

type headerMediaProps = Extract<
  NonNullable<NonNullable<HOME_QUERYResult>["content"]>[number],
  { _type: "headerMedia" }
>;

export function HeaderMedia({ title, video, image }: headerMediaProps) {
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
    <section className="header-media">
      <div>
        <h2>{title}</h2>
        <div className="header-media-content">
          {image?.asset?.url ? (
            <Image
              src={urlFor(image).width(3840).auto("format").quality(85).url()}
              width={1600}
              height={800}
              alt={image.alt || ""}
              className="header-media-img"
              priority={false}
            />
          ) : video?.asset?.playbackId ? (
            <div ref={inViewRef} className="header-media-mux-video-container">
              <MuxPlayer
                playbackId={video.asset.playbackId}
                ref={playerRef}
                autoPlay={false}
                muted
                loop
                playsInline
                className="header-media-mux-video-player"
              />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
