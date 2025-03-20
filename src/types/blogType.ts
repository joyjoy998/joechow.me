import { SanityDocument, PortableTextBlock } from "@sanity/types";

export interface Blog extends SanityDocument {
  _id: string;
  title: string;
  publishedAt: string;
  updatedAt: string;
  slug: { current: string };
  summary: string;
  imageUrl: string;
  author: string;
  content: PortableTextBlock[];
  tag: string;
}
