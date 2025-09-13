import { urlFor } from "@/sanity/lib/image";
import { getAbout } from "@/sanity/sanity.utils";
import Image from "next/image";
import "./About.css";
import "@/components/Grid.css";
import { PageBuilder } from "@/components/PageBuilder";

export const revalidate = 5;

export default async function About() {
  const aboutInformation = await getAbout();

  if (!aboutInformation) return null;

  return (
    <main className="about-page">
      <div className="grid">
        <div className="about-page-image spacing-24">
          {aboutInformation?.aboutImage?.asset?.url && (
            <Image
              src={urlFor(aboutInformation?.aboutImage)
                .auto("format")
                .quality(85)
                .url()}
              width={800}
              height={800}
              alt={aboutInformation?.aboutImage.alt || ""}
              className="about-page-img"
              priority={false}
            />
          )}
        </div>
        <h2 className="about-heading type-body-bold">ABOUT</h2>
        <p className="about-body-text spacing-32 type-body">
          {aboutInformation?.description}
        </p>
        <h2 className="about-contact-heading type-body-bold">CONTACT</h2>
        <p className="about-contact-body-text spacing-24 type-body">
          {aboutInformation?.email}
        </p>
        {aboutInformation?.aboutSocialLinks?.map((link, index) => (
          <div key={index} className="about-page-social-links">
            <a
              href={link?.url || ""}
              target="_blank"
              rel="noopener noreferrer"
              className="about-page-social-links spacing-32 type-body"
            >
              {link?.platform}
            </a>
          </div>
        ))}
        {Array.isArray(aboutInformation.content) && (
          <div>
            <PageBuilder content={aboutInformation.content} />
          </div>
        )}
      </div>
    </main>
  );
}
