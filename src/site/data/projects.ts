export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  coverImage: string;
  images: string[];
  tags: string[];
}

export const projects: Project[] = [
  {
    id: 'silence-in-motion',
    title: 'Silence in Motion',
    category: 'Editorial',
    year: '2024',
    description:
      'A study of stillness within movement — shot over three weeks in the Icelandic highlands. The series explores the tension between the body\'s desire to rest and the landscape\'s relentless energy.',
    coverImage:
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1600&q=85&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=1600&q=85&auto=format&fit=crop',
    ],
    tags: ['Editorial', 'Fashion', 'Landscape'],
  },
  {
    id: 'golden-hour',
    title: 'Golden Hour',
    category: 'Portrait',
    year: '2024',
    description:
      'Intimate portraits captured in the last 20 minutes of daylight. Each subject was photographed in their own space — the light doing what no studio could replicate.',
    coverImage:
      'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1600&q=85&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1600&q=85&auto=format&fit=crop',
    ],
    tags: ['Portrait', 'Natural Light', 'Documentary'],
  },
  {
    id: 'urban-geometry',
    title: 'Urban Geometry',
    category: 'Architecture',
    year: '2023',
    description:
      'Cities as abstract compositions. Shot across Tokyo, Dubai, and São Paulo — finding the hidden geometry in concrete, glass, and shadow.',
    coverImage:
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=85&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=85&auto=format&fit=crop&crop=top',
      'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1600&q=85&auto=format&fit=crop',
    ],
    tags: ['Architecture', 'Abstract', 'Urban'],
  },
  {
    id: 'the-unseen',
    title: 'The Unseen',
    category: 'Fine Art',
    year: '2023',
    description:
      'A personal series exploring grief, memory, and the spaces between. Shot on medium format film over 18 months — never exhibited, only printed.',
    coverImage:
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1600&q=85&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=1600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1600&q=85&auto=format&fit=crop',
    ],
    tags: ['Fine Art', 'Film', 'Personal'],
  },
  {
    id: 'raw-light',
    title: 'Raw Light',
    category: 'Fashion',
    year: '2024',
    description:
      'A campaign for an independent Parisian atelier — shot in an abandoned industrial space with a single tungsten light source. Minimal intervention, maximum impact.',
    coverImage:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=85&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1600&q=85&auto=format&fit=crop',
    ],
    tags: ['Fashion', 'Commercial', 'Studio'],
  },
  {
    id: 'between-worlds',
    title: 'Between Worlds',
    category: 'Documentary',
    year: '2023',
    description:
      'Six months embedded with a nomadic community in Mongolia. A meditation on belonging, impermanence, and the human need for home.',
    coverImage:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1600&q=85&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1600&q=85&auto=format&fit=crop',
    ],
    tags: ['Documentary', 'Portrait', 'Travel'],
  },
  {
    id: 'noir-collection',
    title: 'Noir Collection',
    category: 'Fashion',
    year: '2022',
    description:
      'A high-fashion editorial for a luxury brand\'s autumn/winter collection. Shot entirely in black and white — form, texture, and shadow as the only language.',
    coverImage:
      'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=1600&q=85&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=1600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=85&auto=format&fit=crop',
    ],
    tags: ['Fashion', 'Black & White', 'Editorial'],
  },
  {
    id: 'first-light',
    title: 'First Light',
    category: 'Landscape',
    year: '2022',
    description:
      'Dawn across five continents — photographed over two years of early mornings. A love letter to the hour before the world wakes.',
    coverImage:
      'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1600&q=85&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=1600&q=85&auto=format&fit=crop',
    ],
    tags: ['Landscape', 'Travel', 'Fine Art'],
  },
];
