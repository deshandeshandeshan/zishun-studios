import { HOME_QUERYResult } from "@/sanity/types";

type imageCarouselProps = Extract<
  NonNullable<NonNullable<HOME_QUERYResult>["content"]>[number],
  { _type: "imageCarousel" }
>;

export function ImageCarousel({}: imageCarouselProps) {
  return <section className="image-carousel"></section>;
}
