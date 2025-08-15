import { PageBuilder } from "@/components/PageBuilder";
import { getHome } from "@/sanity/sanity.utils";

export default function Home() {
  const homeContent = getHome();

  return homeContent?.content ? (
    <div className="home">
      <PageBuilder content={homeContent.content} />
    </div>
  ) : null;
}
