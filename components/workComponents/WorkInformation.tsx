import { HOME_QUERYResult } from "@/sanity/types";
import "./WorkInformation.css";
import "@/components/Grid.css";

type workInformationProps = Extract<
  NonNullable<NonNullable<HOME_QUERYResult>["content"]>[number],
  { _type: "workInformation" }
>;

export function WorkInformation({
  title,
  description,
  workDetails,
}: workInformationProps) {
  return (
    <section className="work-information grid mobile-padding">
      <div className="work-info-heading-container spacing-16">
        <h1 className="work-info-heading type-sub">{title}</h1>
      </div>
      <div className="work-info-description-container spacing-32">
        <p className="work-info-description type-body">{description}</p>
      </div>
      <ul className="work-info-details type-body">
        <li className="spacing-4">{workDetails?.role}</li>
        <li className="spacing-4">{workDetails?.location}</li>
        <li className="spacing-4">{workDetails?.year}</li>
      </ul>
    </section>
  );
}
