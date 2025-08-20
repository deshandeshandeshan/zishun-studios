import { urlFor } from "@/sanity/lib/image";
import { HOME_QUERYResult } from "@/sanity/types";
import Image from "next/image";

type creditsAndAwardsProps = Extract<
  NonNullable<NonNullable<HOME_QUERYResult>["content"]>[number],
  { _type: "creditsAndAwards" }
>;

export function CreditsAndAwards({
  credits,
  awards,
  image,
}: creditsAndAwardsProps) {
  return (
    <section className="credits-and-awards">
      <div>
        {image ? (
          <Image
            src={urlFor(image).auto("format").quality(90).url()}
            alt={image?.alt || ""}
            width={2160}
            height={3840}
            className="event-img"
          />
        ) : null}
      </div>
      <div>
        <ul>
          {credits?.map((credit, index) => (
            <li key={index}>
              <h3>{credit.roleInWork}</h3>
              <p>{credit.name}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul>
          {awards?.map((award, index) => (
            <li key={index}>
              <h3>{award.awardName}</h3>
              <p>{award.awardedFrom}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
