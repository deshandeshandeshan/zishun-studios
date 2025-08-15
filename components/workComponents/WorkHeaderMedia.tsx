import { HOME_QUERYResult } from "@/sanity/types";

type workHeaderMediaProps = Extract<
  NonNullable<NonNullable<HOME_QUERYResult>["content"]>[number],
  { _type: "workHeaderMedia" }
>;

export function WorkHeaderMedia({}: workHeaderMediaProps) {
  return <section className="work-header-media"></section>;
}
