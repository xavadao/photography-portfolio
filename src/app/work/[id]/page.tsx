import View from '@/site/pages/ProjectDetail';
import { projects } from '@/site/data/projects';

export function generateStaticParams() {
  return projects.map(({ id }) => ({ id }));
}

export const dynamicParams = false;

export default function Page() {
  return <View />;
}
