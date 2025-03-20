import { SanityDocument } from "@sanity/types";

export interface Project extends SanityDocument {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  tags: string[];
}
