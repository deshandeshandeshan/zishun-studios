import Link from "next/link";

export default function Nav() {
  return (
    <header>
      <nav className="nav">
        <div>
          <h1>ZISHUN STUDIOS</h1>
          <p>BY MIGRANT MULTIDISCIPLINARY ARTIST ZED 榛子瞬 XU</p>
        </div>
        <ul>
          <li>
            <Link href="/">HOME</Link>
          </li>
          <li>
            <Link href="/about">PAINTING</Link>
          </li>
          <li>
            <Link href="/events">SELECTED WORKS</Link>
          </li>
          <li>
            <Link href="/contact">ABOUT</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
