"use client";

import { HOME_QUERYResult } from "@/sanity/types";
import "./VimeoBlock.css";
import "../Grid.css";

type VimeoBlockProps = Extract<
  NonNullable<NonNullable<HOME_QUERYResult>["content"]>[number],
  { _type: "vimeoBlock" }
>;

function getVimeoId(url: string): string | null {
  const match = url.match(
    /(?:vimeo\.com\/)(?:video\/)?(?:channels\/[^/]+\/)?(\d+)/
  );
  return match ? match[1] : null;
}

export function VimeoBlock({ url }: VimeoBlockProps) {
  if (!url) return null;

  const videoId = getVimeoId(url);
  if (!videoId) return null;

  return (
    <section className="vimeo-block grid mobile-padding">
      <div className="vimeo-block__frame">
        <iframe
          src={`https://player.vimeo.com/video/${videoId}`}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="vimeo-block__iframe"
          title="Vimeo video"
        />
      </div>
    </section>
  );
}
