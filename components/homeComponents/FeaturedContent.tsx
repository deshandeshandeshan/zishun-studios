import { HOME_QUERYResult } from "@/sanity/types";
import Image from "next/image";

type featuredContentProps = Extract<
  NonNullable<NonNullable<HOME_QUERYResult>["content"]>[number],
  { _type: "featuredContent" }
>;

export function FeaturedContent({
  selectedWorks,
  categories,
}: featuredContentProps) {
  return (
    <section className="featured-content">
      <div>
        <h2>Selected Works</h2>
        <ul>
          {selectedWorks?.map((work, index) => (
            <li key={index}>
              <small>{index}</small>
              <h2>{work.workTitle}</h2>
              {work.selectedWorkImage?.asset?.url && (
                <Image
                  src={work.selectedWorkImage.asset.url}
                  alt={work.selectedWorkImage.alt || ""}
                  width={2160}
                  height={3840}
                />
              )}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Categories</h2>
        <ul>
          {categories?.map((category, index) => (
            <li key={index}>
              <small>{index}</small>
              <h2>{category.categoryName}</h2>
              {category.categoryImage?.asset?.url && (
                <Image
                  src={category.categoryImage.asset.url}
                  alt={category.categoryImage.alt || ""}
                  width={2160}
                  height={3840}
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
