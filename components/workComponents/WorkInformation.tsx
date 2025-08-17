import { HOME_QUERYResult } from "@/sanity/types";

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
    <section className="work-information">
      <div>
        <h1>{title}</h1>
      </div>
      <div>
        <p>{description}</p>
      </div>
      <div>
        <ul>
          <li>{workDetails?.role}</li>
          <li>{workDetails?.location}</li>
          <li>{workDetails?.year}</li>
        </ul>
      </div>
    </section>
  );
}
