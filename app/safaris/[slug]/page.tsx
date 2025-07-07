import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { safariPackages } from '../../../src/constants/safaris';
import SafariClient from './safari-client';

function getSafariBySlug(slug: string) {
  return safariPackages.find((safari) => safari.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const safari = getSafariBySlug(slug);

  if (!safari) {
    return {
      title: 'Safari Not Found | Dawnlight Journeys',
    };
  }

  return {
    title: `${safari?.title} | Dawnlight Journeys`,
    description: safari?.description,
    openGraph: {
      title: `${safari?.title} | Dawnlight Journeys`,
      description: safari?.description,
      images: [safari?.image],
      type: 'article',
      url: `https://dawnlightjourneys.com/safaris/${safari?.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${safari?.title} | Dawnlight Journeys`,
      description: safari?.description,
      images: [safari?.image],
    },
    keywords: [
      safari?.title?.toLowerCase(),
      safari?.location?.toLowerCase(),
      'safari',
      'uganda',
      'rwanda',
      'africa',
      'wildlife',
      'adventure',
    ],
  };
}

export default async function SafariDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const safari = getSafariBySlug(slug);
  if (!safari) return notFound();

  return <SafariClient safari={safari} />;
}
