import { urlFor } from "@/sanity/lib/image";
import { getSelectedWorks } from "@/sanity/sanity.utils";
import Image from "next/image";
import Link from "next/link";
import "./SelectedWorks.css";

export default async function SelectedWorks() {
  const selectedWorks = await getSelectedWorks();

  return (
    <main className="selected-works-page">
      <ul className="selected-works-list selected-works-grid">
        {selectedWorks.map((work) => (
          <li key={work._id} className="selected-work-item">
            {work.selectedWorkImage?.asset?.url && (
              <Image
                src={urlFor(work.selectedWorkImage?.asset?.url)
                  .auto("format")
                  .quality(90)
                  .url()}
                alt={work.selectedWorkImage?.alt || ""}
                width={2160}
                height={3840}
                className="selected-work-image"
              />
            )}
            <div className="selected-work-info">
              <h2 className="selected-work-title type-body-bold">
                {work.title}
              </h2>
              <p className="type-body selected-work-role">{work.role}</p>
              <Link
                href={`/selected-works/${work.slug}`}
                className="type-body selected-work-link"
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
