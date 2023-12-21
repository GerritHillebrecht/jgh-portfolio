/* eslint-disable @nx/enforce-module-boundaries */
import { StrapiImage } from '@data-access/strapi';

export interface Reference {
  Titel: string;
  Beschreibung: string;
  Datum: Date;
  slug: string;
  Bilder: StrapiImage;
  surroundView?: string[];
  createdBy?: {
    id: number;
    firstname: string;
    lastname: string;
  };
  updatedBy?: {
    id: number;
    firstname: string;
    lastname: string;
  };
}
