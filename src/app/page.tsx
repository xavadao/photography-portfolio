import { pageMetadata } from '@/lib/seo';

import View from '@/site/pages/Home';

export default function Page() {
	return <View />;
}

export const metadata = pageMetadata('/', "Photography portfolio", "A photography portfolio demo exploring editorial, portraits, fashion, architecture, and fine art.");
