import { urlFor } from "@/sanity/lib/image";
import { getPerformanceWorks } from "@/sanity/sanity.utils";
import Image from "next/image";
import Link from "next/link";
import "./Performance.css";

export default async function PerformanceWorks() {
  const performances = await getPerformanceWorks();

  return (
    <main className="performances-page">
      <ul className="performances-list performances-grid">
        {performances.map((performance) => (
          <li key={performance._id} className="performance-item">
            {performance.performanceImage?.asset?.url && (
              <Image
                src={urlFor(performance.performanceImage?.asset?.url)
                  .auto("format")
                  .quality(90)
                  .url()}
                alt={performance.performanceImage?.alt || ""}
                width={2160}
                height={3840}
                className="performance-image"
              />
            )}
            <div className="performance-info">
              <h2 className="performance-title type-body-bold">
                {performance.title}
              </h2>
              <p className="type-body performance-role">{performance.role}</p>
              <Link
                href={`/performance/${performance.slug}`}
                className="type-body performance-link"
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
