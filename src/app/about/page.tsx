import { pageMetadata } from '@/lib/seo';

import View from '@/site/pages/About';

export default function Page() {
	return <View />;
}

export const metadata = pageMetadata('/about', "About", "Meet the sample creative behind Lumi\u00e8re, explore the portfolio story and creative approach.");
