"use client";

import { HOME_QUERYResult } from "@/sanity/types";
import "./VimeoBlock.css";
import "../Grid.css";

type VimeoBlockProps = Extract<
  NonNullable<NonNullable<HOME_QUERYResult>["content"]>[number],
  { _type: "vimeoBlock" }
>;

type VimeoEmbedParams = { id: string; hash?: string };

function getVimeoEmbedParams(url: string): VimeoEmbedParams | null {
  let parsed: URL;
  try {
    parsed = new URL(url.trim());
  } catch {
    return null;
  }

  const hostname = parsed.hostname.replace(/^www\./, "");
  if (hostname !== "vimeo.com" && hostname !== "player.vimeo.com") {
    return null;
  }

  // Matches /123456789, /video/123456789, /channels/name/123456789,
  // and unlisted-video paths like /123456789/0c6c8f9f1d
  const match = parsed.pathname.match(
    /(?:video\/)?(?:channels\/[^/]+\/)?(\d+)(?:\/([a-zA-Z0-9]+))?/
  );
  if (!match) return null;

  const hash = match[2] ?? parsed.searchParams.get("h") ?? undefined;
  return { id: match[1], hash };
}

export function VimeoBlock({ url }: VimeoBlockProps) {
  if (!url) return null;

  const embedParams = getVimeoEmbedParams(url);
  if (!embedParams) return null;

  const src = embedParams.hash
    ? `https://player.vimeo.com/video/${embedParams.id}?h=${embedParams.hash}`
    : `https://player.vimeo.com/video/${embedParams.id}`;

  return (
    <section className="vimeo-block grid mobile-padding">
      <div className="vimeo-block__frame">
        <iframe
          src={src}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="vimeo-block__iframe"
          title="Vimeo video"
        />
      </div>
    </section>
  );
}
