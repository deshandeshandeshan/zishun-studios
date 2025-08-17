import { urlFor } from "@/sanity/lib/image";
import { HOME_QUERYResult } from "@/sanity/types";
import Image from "next/image";

type pressBlockProps = Extract<
  NonNullable<NonNullable<HOME_QUERYResult>["content"]>[number],
  { _type: "pressBlock" }
>;

export function PressBlock({ pressSections }: pressBlockProps) {
  return (
    <section className="press-block">
      <ul>
        {pressSections?.map((section, index) => (
          <li key={index} className="press-section">
            <h2>{section.typeOfPress}</h2>
            {section.pressImage && (
              <Image
                src={urlFor(section.pressImage).url()}
                alt={section.pressImage.alt || ""}
                className="press-image"
              />
            )}
            <h3>{section.title}</h3>
            <p>{section.description}</p>
            {section.linkToPress && (
              <a
                href={section.linkToPress}
                target="_blank"
                rel="noopener noreferrer"
              >
                View full press here →
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
