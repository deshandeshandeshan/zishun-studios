import { urlFor } from "@/sanity/lib/image";
import { getFilmWorks } from "@/sanity/sanity.utils";
import Image from "next/image";
import Link from "next/link";
import "./Film.css";

export default async function FilmWorks() {
  const filmWorks = await getFilmWorks();

  return (
    <main className="film-works-page">
      <ul className="film-works-list film-works-grid">
        {filmWorks.map((film) => (
          <li key={film._id} className="film-works-item">
            {film.filmImage?.asset?.url && (
              <Image
                src={urlFor(film.filmImage?.asset?.url)
                  .auto("format")
                  .quality(90)
                  .url()}
                alt={film.filmImage?.alt || ""}
                width={2160}
                height={3840}
                className="film-works-image"
              />
            )}
            <div className="film-works-info">
              <h2 className="film-works-title type-body-bold">{film.title}</h2>
              <p className="type-body film-works-role">{film.role}</p>
              <Link
                href={`/film/${film.slug}`}
                className="type-body film-works-link"
              >
                See more &rarr;
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
