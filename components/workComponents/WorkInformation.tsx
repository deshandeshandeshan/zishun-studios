import { HOME_QUERYResult } from "@/sanity/types";

type workInformationProps = Extract<
  NonNullable<NonNullable<HOME_QUERYResult>["content"]>[number],
  { _type: "workInformation" }
>;

export function WorkInformation({}: workInformationProps) {
  return <section className="work-information"></section>;
}
