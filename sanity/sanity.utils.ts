import { createClient } from "next-sanity";
import {
  HOME_QUERY,
  MARK_MAKING_QUERY,
  SINGLE_MARK_MAKING_QUERY,
  ABOUT_QUERY,
  FOOTER_SETTINGS,
  PERFORMANCE_QUERY,
  SINGLE_PERFORMANCE_QUERY,
  FILM_QUERY,
  SINGLE_FILM_QUERY,
  SITE_SETTINGS,
} from "./lib/queries";

export const client = createClient({
  projectId: "5wl8so4j",
  dataset: "production",
  apiVersion: "2025-07-23",
  useCdn: true,
});

export async function getHome() {
  const client = createClient({
    projectId: "5wl8so4j",
    dataset: "production",
    apiVersion: "2025-07-23",
    useCdn: true,
  });

  return client.fetch(HOME_QUERY);
}

export async function getPerformanceWorks() {
  const client = createClient({
    projectId: "5wl8so4j",
    dataset: "production",
    apiVersion: "2025-07-23",
    useCdn: true,
  });

  return client.fetch(PERFORMANCE_QUERY);
}

export async function getPerformanceWork(slug: string) {
  const client = createClient({
    projectId: "5wl8so4j",
    dataset: "production",
    apiVersion: "2025-07-23",
    useCdn: true,
  });

  return client.fetch(SINGLE_PERFORMANCE_QUERY, { slug });
}

export async function getFilmWorks() {
  const client = createClient({
    projectId: "5wl8so4j",
    dataset: "production",
    apiVersion: "2025-07-23",
    useCdn: true,
  });

  return client.fetch(FILM_QUERY);
}

export async function getFilmWork(slug: string) {
  const client = createClient({
    projectId: "5wl8so4j",
    dataset: "production",
    apiVersion: "2025-07-23",
    useCdn: true,
  });

  return client.fetch(SINGLE_FILM_QUERY, { slug });
}

export async function getMarkMakingWorks() {
  const client = createClient({
    projectId: "5wl8so4j",
    dataset: "production",
    apiVersion: "2025-07-23",
    useCdn: true,
  });

  return client.fetch(MARK_MAKING_QUERY);
}

export async function getMarkMakingWork(slug: string) {
  const client = createClient({
    projectId: "5wl8so4j",
    dataset: "production",
    apiVersion: "2025-07-23",
    useCdn: true,
  });

  return client.fetch(SINGLE_MARK_MAKING_QUERY, { slug });
}

export async function getAbout() {
  const client = createClient({
    projectId: "5wl8so4j",
    dataset: "production",
    apiVersion: "2025-07-23",
    useCdn: true,
  });

  return client.fetch(ABOUT_QUERY);
}

export async function getFooterSettings() {
  const client = createClient({
    projectId: "5wl8so4j",
    dataset: "production",
    apiVersion: "2025-07-23",
    useCdn: true,
  });

  return client.fetch(FOOTER_SETTINGS);
}

export async function getSiteSettings() {
  const client = createClient({
    projectId: "5wl8so4j",
    dataset: "production",
    apiVersion: "2025-07-23",
    useCdn: true,
  });

  return client.fetch(SITE_SETTINGS, {}, { next: { revalidate: 60 } });
}
