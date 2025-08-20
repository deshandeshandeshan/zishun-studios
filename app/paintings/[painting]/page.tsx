import { ImageSlider } from "@/components/ImageSlider";
import { getPainting } from "@/sanity/sanity.utils";
import { notFound } from "next/navigation";

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
      <div>
        <h2>{painting?.title}</h2>
        <p>{painting?.yearCreated}</p>
      </div>
      <div>
        <h3>DESCRIPTION</h3>
        <p>{painting?.description}</p>
      </div>
      <div>
        <ImageSlider imageUrls={imageUrls} />
      </div>
    </main>
  );
}
