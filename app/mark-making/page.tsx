import { urlFor } from "@/sanity/lib/image";
import { getMarkMakingWorks } from "@/sanity/sanity.utils";
import Image from "next/image";
import Link from "next/link";
import "./MarkMaking.css";
import "@/components/Grid.css";

export const revalidate = 5;

export default async function MarkMaking() {
  const markMakingWorks = await getMarkMakingWorks();

  return (
    <main className="mark-making-page">
      <ul className="mark-making-list selected-works-grid">
        {markMakingWorks.map((work) => (
          <li key={work._id} className="selected-works-item">
            <Link
              className="image-link link"
              href={`/mark-making/${work.slug}`}
            >
              {work.paintingImage?.asset?.url && (
                <Image
                  src={urlFor(work.paintingImage?.asset?.url)
                    .auto("format")
                    .quality(90)
                    .url()}
                  alt={work.paintingImage?.alt || ""}
                  width={2160}
                  height={3840}
                  className="mark-making-image"
                />
              )}
            </Link>
            <div className="mark-making-info">
              <h2 className="mark-making-title type-body-bold">
                {work.title}
              </h2>
              <Link
                href={`/mark-making/${work.slug}`}
                className="mark-making-link type-body text-red"
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
