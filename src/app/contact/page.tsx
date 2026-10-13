import { pageMetadata } from '@/lib/seo';

import View from '@/site/pages/Contact';

export default function Page() {
	return <View />;
}

export const metadata = pageMetadata('/contact', "Contact", "Try the Lumi\u00e8re demo contact form. Messages are not sent or saved.");
