import { ImageSlider } from "@/components/ImageSlider";
import { getPainting } from "@/sanity/sanity.utils";
import { notFound } from "next/navigation";
import "./Painting.css";

export const revalidate = 5;

type Props = {
  params: Promise<{ painting: string }>;
};

export default async function Painting({ params }: Props) {
  const { painting: slug } = await params;
  const painting = await getPainting(slug);
  interface GalleryImage {
    url: string | null;
    alt?: string | null;
    caption?: string | null;
  }

  const imageUrls = (painting?.galleryImages ?? [])
    .map((g: GalleryImage) => g.url)
    .filter((url): url is string => typeof url === "string");

  if (!painting) {
    notFound();
  }

  return (
    <main>
      <div className="mobile-padding">
        <h2 className="painting-page-title type-body-bold">
          {painting?.title}
        </h2>
        <p className="painting-page-year-created type-body">
          {painting?.yearCreated}
        </p>
        <h3 className="painting-page-description-header type-body-bold">
          DESCRIPTION
        </h3>
        <p className="painting-page-description type-body">
          {painting?.description}
        </p>
        <ImageSlider imageUrls={imageUrls} />
      </div>
    </main>
  );
}
