import { getMarkMakingWork } from "@/sanity/sanity.utils";
import { notFound } from "next/navigation";
import "./MarkMaking.css";
import { MarkMakingImageSlider } from "@/components/MarkMakingImageSlider";
import { PortableTextBlock } from "next-sanity";

export const revalidate = 5;

type Props = {
  params: Promise<{ markMaking: string }>;
};

interface GalleryImage {
  url: string | null;
  alt?: string | null;
  caption?: string | null;
}

export default async function MarkMakingItem({ params }: Props) {
  const { markMaking: slug } = await params;
  const markMakingWork = await getMarkMakingWork(slug);

  const imageUrls = (markMakingWork?.galleryImages ?? [])
    .map((g: GalleryImage) => g.url)
    .filter((url): url is string => typeof url === "string");

  if (!markMakingWork) {
    notFound();
  }

  return (
    <main className="mark-making-page-container">
      <MarkMakingImageSlider
        imageUrls={imageUrls}
        yearCreated={markMakingWork.yearCreated ?? ""}
        markMakingTitle={markMakingWork.title ?? ""}
        markMakingDescription={
          (markMakingWork.description as PortableTextBlock[] | null) ?? []
        }
      />
    </main>
  );
}
