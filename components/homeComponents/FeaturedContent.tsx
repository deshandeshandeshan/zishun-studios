import { HOME_QUERYResult } from "@/sanity/types";

type featuredContentProps = Extract<
  NonNullable<NonNullable<HOME_QUERYResult>["content"]>[number],
  { _type: "featuredContent" }
>;

export function FeaturedContent({}: featuredContentProps) {
  return <section className="featured-content"></section>;
}
