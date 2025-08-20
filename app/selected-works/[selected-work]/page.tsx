import { PageBuilder } from "@/components/PageBuilder";
import { getSelectedWork } from "@/sanity/sanity.utils";
import { notFound } from "next/navigation";

export const revalidate = 5;

type Props = {
  params: Promise<{ "selected-work": string }>;
};

export default async function SelectedWork({ params }: Props) {
  const { "selected-work": slug } = await params;
  const selectedWork = await getSelectedWork(slug);

  if (!selectedWork) {
    notFound();
  }

  return selectedWork?.content ? (
    <div>
      <PageBuilder content={selectedWork.content} />
    </div>
  ) : null;
}
