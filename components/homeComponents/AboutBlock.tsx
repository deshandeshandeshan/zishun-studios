import { urlFor } from "@/sanity/lib/image";
import { HOME_QUERYResult } from "@/sanity/types";
import Image from "next/image";

type aboutBlockProps = Extract<
  NonNullable<NonNullable<HOME_QUERYResult>["content"]>[number],
  { _type: "aboutBlock" }
>;

export function AboutBlock({ description, aboutBlockImage }: aboutBlockProps) {
  return (
    <section className="event-block">
      <div className="event-block__content">
        <p className="event-block__description">{description}</p>
        {aboutBlockImage && (
          <Image
            src={urlFor(aboutBlockImage).auto("format").quality(90).url()}
            alt={aboutBlockImage?.alt || "About Image"}
            className="event-block__image"
          />
        )}
      </div>
    </section>
  );
}
