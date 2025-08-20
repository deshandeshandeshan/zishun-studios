"use client";

import Link from "next/link";
import "./Nav.css";
import { useState } from "react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav className="nav mobile-padding">
        <div className="nav-content">
          <div className="nav-header">
            <h1 className="type-body-bold">ZISHUN STUDIOS</h1>
            <p className="type-body">
              BY MIGRANT MULTIDISCIPLINARY ARTIST ZED 榛子瞬 XU
            </p>
          </div>
          <div className="nav-links-container">
            <h2 className="type-body-bold">NAVIGATION</h2>
            <ul className="nav-links type-body">
              <li className="nav-link">
                <Link href="/">HOME,</Link>
              </li>
              <li className="nav-link">
                <Link href="/painting">PAINTING,</Link>
              </li>
              <li className="nav-link">
                <Link href="/selected-works">SELECTED WORKS,</Link>
              </li>
              <li className="nav-link">
                <Link href="/about">ABOUT</Link>
              </li>
            </ul>
          </div>
          <button
            className="menu-button type-body"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>

        {menuOpen && (
          <ul className="mobile-nav-links">
            <li>
              <Link href="/">HOME</Link>
            </li>
            <li>
              <Link href="/painting">PAINTING</Link>
            </li>
            <li>
              <Link href="/selected-works">SELECTED WORKS</Link>
            </li>
            <li>
              <Link href="/about">ABOUT</Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
