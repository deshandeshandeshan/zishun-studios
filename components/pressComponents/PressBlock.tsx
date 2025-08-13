import { HOME_QUERYResult } from "@/sanity/types";

type pressBlockProps = Extract<
  NonNullable<NonNullable<HOME_QUERYResult>["content"]>[number],
  { _type: "pressBlock" }
>;

export function PressBlock({}: pressBlockProps) {
  return <section className="press-block"></section>;
}
