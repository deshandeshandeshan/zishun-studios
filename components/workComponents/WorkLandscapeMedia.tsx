import { HOME_QUERYResult } from "@/sanity/types";

type workLandscapeMediaProps = Extract<
  NonNullable<NonNullable<HOME_QUERYResult>["content"]>[number],
  { _type: "workLandscapeMedia" }
>;

export function WorkLandscapeMedia({}: workLandscapeMediaProps) {
  return <section className="work-landscape-media"></section>;
}
