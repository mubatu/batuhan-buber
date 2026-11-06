import { getCollection, type CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<'projects'>;
export type ProjectStatus = 'live' | 'design' | 'open-source' | 'tools';

// The card type follows from the links a project has
export function getStatus(project: Project): ProjectStatus {
  if (project.data.links.website) return 'live';
  if (project.data.gallery.length > 0) return 'design';
  if (project.data.links.github) return 'open-source';
  return 'tools';
}

// Projects with a markdown body or a gallery get their own detail page
export function hasDetails(project: Project): boolean {
  return Boolean(project.body?.trim()) || project.data.gallery.length > 0;
}

// Where a click on the card goes: details page first, then website, then GitHub
export function getCardHref(project: Project): string | undefined {
  if (hasDetails(project)) return `/projects/${project.id}`;
  const { website, github, instagram } = project.data.links;
  return website ?? github ?? instagram;
}

export async function getProjects(): Promise<Project[]> {
  const projects = await getCollection('projects');
  return projects.sort(
    (a, b) => a.data.order - b.data.order || a.data.title.localeCompare(b.data.title)
  );
}
