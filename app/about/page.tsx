import { urlFor } from "@/sanity/lib/image";
import { getAbout } from "@/sanity/sanity.utils";
import Image from "next/image";

export const revalidate = 5;

export default async function About() {
  const aboutInformation = await getAbout();

  return (
    <main>
      <div>
        <h2>ABOUT</h2>
        <p>{aboutInformation?.description}</p>
      </div>
      <div>
        <h2>CONTACT</h2>
        <p>{aboutInformation?.email}</p>
        {aboutInformation?.aboutSocialLinks?.map((link, index) => (
          <div key={index}>
            <a href={link?.url || ""} target="_blank" rel="noopener noreferrer">
              {link?.platform}
            </a>
          </div>
        ))}
      </div>
      {aboutInformation?.aboutImage?.asset?.url && (
        <Image
          src={urlFor(aboutInformation?.aboutImage)
            .width(3840)
            .auto("format")
            .quality(85)
            .url()}
          width={800}
          height={1600}
          alt={aboutInformation?.aboutImage.alt || ""}
          className="header-media-img"
          priority={false}
        />
      )}
    </main>
  );
}
