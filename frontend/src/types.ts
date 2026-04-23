export type ListingType = 'sale' | 'rent';

export interface Property {
  id: string;
  title: string;
  type: ListingType;
  price: string;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  thumbnail: string;
  video: string;
  gallery: string[];
  description: string;
  features: string[];
  virtualTourUrl?: string;
}

export interface ServicePackage {
  id: string;
  name: string;
  price: string;
  features: string[];
  type: 'media' | 'architecture';
}

export interface Service {
  id: string;
  name: string;
  description: string;
  image: string;
  packages: ServicePackage[];
}
