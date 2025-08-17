import { urlFor } from "@/sanity/lib/image";
import { getSelectedWorks } from "@/sanity/sanity.utils";
import Image from "next/image";
import Link from "next/link";

export default async function SelectedWorks() {
  const selectedWorks = await getSelectedWorks();

  return (
    <main>
      <ul>
        {selectedWorks.map((work) => (
          <li key={work._id}>
            {work.selectedWorkImage?.asset?.url && (
              <Image
                src={urlFor(work.selectedWorkImage?.asset?.url)
                  .auto("format")
                  .quality(90)
                  .url()}
                alt={work.selectedWorkImage?.alt || ""}
                width={2160}
                height={3840}
                className=""
              />
            )}
            <h2>{work.title}</h2>
            <p>{work.role}</p>
            <Link href={`/selected-works/${work.slug}`}>See more</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
