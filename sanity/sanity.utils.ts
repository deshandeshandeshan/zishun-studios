import { createClient } from "next-sanity";
import {
  HOME_QUERY,
  SELECTED_WORKS_QUERY,
  SINGLE_SELECTED_WORK_QUERY,
  PAINTINGS_QUERY,
  SINGLE_PAINTING_QUERY,
  ABOUT_QUERY,
  FOOTER_SETTINGS,
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

export async function getSelectedWorks() {
  const client = createClient({
    projectId: "5wl8so4j",
    dataset: "production",
    apiVersion: "2025-07-23",
    useCdn: true,
  });

  return client.fetch(SELECTED_WORKS_QUERY);
}

export async function getSelectedWork(slug: string) {
  const client = createClient({
    projectId: "5wl8so4j",
    dataset: "production",
    apiVersion: "2025-07-23",
    useCdn: true,
  });

  return client.fetch(SINGLE_SELECTED_WORK_QUERY, { slug });
}

export async function getPaintings() {
  const client = createClient({
    projectId: "5wl8so4j",
    dataset: "production",
    apiVersion: "2025-07-23",
    useCdn: true,
  });

  return client.fetch(PAINTINGS_QUERY);
}

export async function getPainting(slug: string) {
  const client = createClient({
    projectId: "5wl8so4j",
    dataset: "production",
    apiVersion: "2025-07-23",
    useCdn: true,
  });

  return client.fetch(SINGLE_PAINTING_QUERY, { slug });
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
