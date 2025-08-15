import { HOME_QUERYResult } from "@/sanity/types";

type creditsAndAwardsProps = Extract<
  NonNullable<NonNullable<HOME_QUERYResult>["content"]>[number],
  { _type: "creditsAndAwards" }
>;

export function CreditsAndAwards({}: creditsAndAwardsProps) {
  return <section className="credits-and-awards"></section>;
}
