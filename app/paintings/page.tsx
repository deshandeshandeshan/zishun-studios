import { urlFor } from "@/sanity/lib/image";
import { getPaintings } from "@/sanity/sanity.utils";
import Image from "next/image";
import Link from "next/link";

export default async function Paintings() {
  const paintings = await getPaintings();

  return (
    <main>
      <ul>
        {paintings.map((painting) => (
          <li key={painting._id}>
            {painting.paintingImage?.asset?.url && (
              <Image
                src={urlFor(painting.paintingImage?.asset?.url)
                  .auto("format")
                  .quality(90)
                  .url()}
                alt={painting.paintingImage?.alt || ""}
                width={2160}
                height={3840}
                className=""
              />
            )}
            <h2>{painting.title}</h2>
            <Link href={`/paintings/${painting.slug}`}>See more</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
