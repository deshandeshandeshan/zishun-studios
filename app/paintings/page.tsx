import { urlFor } from "@/sanity/lib/image";
import { getPaintings } from "@/sanity/sanity.utils";
import Image from "next/image";
import Link from "next/link";
import "./Paintings.css";
import "@/components/Grid.css";

export const revalidate = 5;

export default async function Paintings() {
  const paintings = await getPaintings();

  return (
    <main className="paintings-page">
      <ul className="paintings-list painting-grid">
        {paintings.map((painting) => (
          <li key={painting._id} className="painting-item">
            {painting.paintingImage?.asset?.url && (
              <Image
                src={urlFor(painting.paintingImage?.asset?.url)
                  .auto("format")
                  .quality(90)
                  .url()}
                alt={painting.paintingImage?.alt || ""}
                width={2160}
                height={3840}
                className="painting-image"
              />
            )}
            <div className="painting-info">
              <h2 className="painting-title type-body-bold">
                {painting.title}
              </h2>
              <Link
                href={`/paintings/${painting.slug}`}
                className="painting-link type-body"
              >
                See more &rarr;
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
