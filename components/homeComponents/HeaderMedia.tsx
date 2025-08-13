import { HOME_QUERYResult } from "@/sanity/types";

type headerMediaProps = Extract<
  NonNullable<NonNullable<HOME_QUERYResult>["content"]>[number],
  { _type: "headerMedia" }
>;

export function HeaderMedia({}: headerMediaProps) {
  return <section className="header-media"></section>;
}
