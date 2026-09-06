"use client";

import { HOME_QUERYResult } from "@/sanity/types";
import Image from "next/image";
import { useState } from "react";

import "./FeaturedContent.css";
import "@/app/globals.css";
import "../Grid.css";
import Link from "next/link";

type featuredContentProps = Extract<
  NonNullable<NonNullable<HOME_QUERYResult>["content"]>[number],
  { _type: "featuredContent" }
>;

type ProjectImage = { asset?: { url?: string | null } | null } | null;

export function FeaturedContent({
  selectedProjects,
  categories,
}: featuredContentProps) {
  const getImageUrl = (img?: ProjectImage) => img?.asset?.url ?? "";

  const slides = [
    ...(selectedProjects ?? []).map((work, index) => ({
      id: `project-${index}`,
      url: getImageUrl(work.selectedProjectImage),
    })),
    ...(categories ?? []).map((category, index) => ({
      id: `category-${index}`,
      url: getImageUrl(category.categoryImage),
    })),
  ].filter((slide) => slide.url);

  const [activeId, setActiveId] = useState(slides[0]?.id ?? "none");

  return (
    <section className="featured-content grid mobile-padding">
      <div className="fc-selections">
        <h3 className="type-body spacing-4">Selected Works</h3>
        <ul className="spacing-40">
          {selectedProjects?.map((work, index) => {
            const id = `project-${index}`;
            const key = work._key ?? id;
            return (
              <li
                key={key}
                className={
                  activeId === id ? "is-active spacing-12" : "spacing-12"
                }
              >
                <small className="detail-text type-details-regular">
                  {index + 1}.
                </small>
                <Link
                  href={work.projectRoute || "#"}
                  type="button"
                  className="selected-project-title type-sub"
                  onMouseEnter={() => setActiveId(id)}
                  onFocus={() => setActiveId(id)}
                >
                  {work.projectTitle}
                </Link>
              </li>
            );
          })}
        </ul>

        <h3 className="type-body spacing-4">Categories</h3>
        <ul>
          {categories?.map((category, index: number) => {
            const id = `category-${index}`;
            const key = category._key ?? id;
            return (
              <li
                key={key}
                className={
                  activeId === id ? "is-active spacing-12" : "spacing-12"
                }
              >
                <small className="type-details-regular detail-text">
                  {index + 1}.
                </small>
                <Link
                  href={category.workRoute || "#"}
                  type="button"
                  className="category-title type-sub"
                  onMouseEnter={() => setActiveId(id)}
                  onFocus={() => setActiveId(id)}
                >
                  {category.categoryName}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="fc-image-col">
        <div className="fc-image-frame">
          {slides.length > 0 ? (
            slides.map((slide) => (
              <Image
                key={slide.id}
                src={slide.url}
                alt="Selected work preview"
                priority
                fill
                sizes="(min-width: 480px) 42vw, 100vw"
                quality={80}
                className={
                  slide.id === activeId ? "fc-image is-active" : "fc-image"
                }
              />
            ))
          ) : (
            <div className="fc-image-placeholder">No preview available</div>
          )}
        </div>
      </div>
    </section>
  );
}
