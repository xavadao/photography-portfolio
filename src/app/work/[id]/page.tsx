import { pageMetadata, StructuredData, siteUrl } from '@/lib/seo';
import View from '@/site/pages/ProjectDetail';
import { projects } from '@/site/data/projects';

export function generateStaticParams() {
  return projects.map(({ id }) => ({ id }));
}

export const dynamicParams = false;

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find((item) => item.id === id);
  return <>{project && <StructuredData data={{ '@context': 'https://schema.org', '@type': 'CreativeWork', name: project.title, description: 'Sample portfolio project. ' + project.description, url: siteUrl + '/work/' + id, image: project.coverImage }} />}<View /></>;
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find((item) => item.id === id);
  return pageMetadata('/work/' + id, project?.title ?? 'Project', 'Sample portfolio project. ' + (project?.description ?? ''), project?.coverImage);
}
