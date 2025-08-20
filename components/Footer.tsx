import { getFooterSettings } from "@/sanity/sanity.utils";

export default async function Footer() {
  const footerContent = await getFooterSettings();
  console.log("Footer Content:", footerContent);

  return (
    <footer className="footer">
      <div>
        <h3>ZISHUN STUDIOS</h3>
        <a href={`mailto:${footerContent}`}></a>
      </div>
      <p></p>
      <p>Designed by Zishun</p>
    </footer>
  );
}
