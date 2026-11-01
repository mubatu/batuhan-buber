import { getCollection, type CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<'projects'>;
export type ProjectStatus = 'live' | 'open-source' | 'case-study';

// The card type follows from the links a project has
export function getStatus(project: Project): ProjectStatus {
  if (project.data.links.website) return 'live';
  if (project.data.links.github) return 'open-source';
  return 'case-study';
}

// Projects with a markdown body get their own detail page
export function hasDetails(project: Project): boolean {
  return Boolean(project.body?.trim());
}

// Where a click on the card goes: details page first, then website, then GitHub
export function getCardHref(project: Project): string | undefined {
  if (hasDetails(project)) return `/projects/${project.id}`;
  return project.data.links.website ?? project.data.links.github;
}

export async function getProjects(): Promise<Project[]> {
  const projects = await getCollection('projects');
  return projects.sort(
    (a, b) => a.data.order - b.data.order || a.data.title.localeCompare(b.data.title)
  );
}
