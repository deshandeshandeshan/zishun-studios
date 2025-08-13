import { urlFor } from "@/sanity/lib/image";
import { HOME_QUERYResult } from "@/sanity/types";
import Image from "next/image";

type eventBlockProps = Extract<
  NonNullable<NonNullable<HOME_QUERYResult>["content"]>[number],
  { _type: "eventBlock" }
>;

export function EventBlock({
  title,
  locationTitle,
  eventImage,
  description,
  timeAndDate,
  location,
  details,
  infoAndTickets,
}: eventBlockProps) {
  return (
    <section className="event-block">
      <h2 className="event-block-title">{title}</h2>
      <h3 className="event-block-location-title">{locationTitle}</h3>
      <div>
        {eventImage ? (
          <Image
            src={urlFor(eventImage).auto("format").quality(90).url()}
            alt={eventImage?.alt || ""}
            width={2160}
            height={3840}
            className="event-img"
          />
        ) : null}
      </div>
      <div>{description}</div>
      <div>
        <ul>
          <li>
            <h3>Event Title</h3>
            <p>{timeAndDate?.date}</p>
            <p>{timeAndDate?.time}</p>
          </li>
          <li>
            <h3>Location</h3>
            <p>{location}</p>
          </li>
          <li>
            <h3>Details</h3>
            <p>{details}</p>
          </li>
          <li>
            <h3>Info & Tickets</h3>
            <a href={infoAndTickets || "https://zishunstudios.com"}>
              Info and tickets here →
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
