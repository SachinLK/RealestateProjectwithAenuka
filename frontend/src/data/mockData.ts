import { Property, Service } from '../types';

export const PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'The Obsidian Pavilion',
    type: 'sale',
    price: '$8,500,000',
    location: 'Beverly Hills, CA',
    beds: 5,
    baths: 6,
    sqft: 7200,
    thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6199f7d009?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    video: 'https://assets.mixkit.co/videos/preview/mixkit-modern-luxury-house-exterior-at-night-25032-large.mp4',
    gallery: [
      'https://images.unsplash.com/photo-1600607687940-4e524cb35397?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dcea464dd?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'A masterpiece of contemporary architecture, the Obsidian Pavilion blends raw basalt textures with floor-to-ceiling glass to create a living space that feels both grounded and ethereal.',
    features: ['Infinity Pool', 'Home Cinema', 'Smart Wine Cellar', 'Basalt Fireplace'],
    virtualTourUrl: 'https://my.matterport.com/show/?m=example'
  },
  {
    id: '2',
    title: 'Azure Heights Penthouse',
    type: 'rent',
    price: '$25,000 / mo',
    location: 'Miami Beach, FL',
    beds: 3,
    baths: 3.5,
    sqft: 3400,
    thumbnail: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    video: 'https://assets.mixkit.co/videos/preview/mixkit-luxurious-apartment-interior-with-a-view-of-the-city-41258-large.mp4',
    gallery: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Hovering above the Atlantic, this three-story penthouse offers panoramic ocean views and a private rooftop garden designed for ultimate tranquility.',
    features: ['Rooftop Terrace', 'Private Elevator', '24/7 Concierge', 'Italian Marble Flooring'],
    virtualTourUrl: 'https://my.matterport.com/show/?m=example'
  },
  {
    id: '3',
    title: 'Elysian Meadow Estate',
    type: 'sale',
    price: '$4,200,000',
    location: 'Aspen, CO',
    beds: 6,
    baths: 7,
    sqft: 8500,
    thumbnail: 'https://images.unsplash.com/photo-1580587767526-d367a11fdd03?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    video: 'https://assets.mixkit.co/videos/preview/mixkit-beautiful-aerial-shot-of-a-house-in-the-forest-42517-large.mp4',
    gallery: [
      'https://images.unsplash.com/photo-1512918766168-de43379927f7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512914890251-2f96ade9069a?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Tucked away in the serene mountains of Aspen, this estate is a sanctuary of warmth and luxury, featuring reclaimed oak beams and six stone fireplaces.',
    features: ['Ski-in/Ski-out', 'Heated Outdoor Pool', 'Wine Grotto', 'Gourmet Kitchen'],
    virtualTourUrl: 'https://my.matterport.com/show/?m=example'
  },
  {
    id: '4',
    title: 'Monolith Residence',
    type: 'rent',
    price: '$18,500 / mo',
    location: 'New York, NY',
    beds: 2,
    baths: 2,
    sqft: 2100,
    thumbnail: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    video: 'https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-with-city-lights-at-night-42217-large.mp4',
    gallery: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'A minimalist dream in the heart of Tribeca. This loft features polished concrete floors and a curated selection of contemporary art.',
    features: ['Art Gallery Walls', 'Smart Home System', 'Floor-to-ceiling Windows'],
    virtualTourUrl: 'https://my.matterport.com/show/?m=example'
  },
  {
    id: '5',
    title: 'Lumina Waterfront Villa',
    type: 'sale',
    price: '$6,900,000',
    location: 'Malibu, CA',
    beds: 4,
    baths: 5,
    sqft: 5200,
    thumbnail: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    video: 'https://assets.mixkit.co/videos/preview/mixkit-luxury-beachfront-villa-with-palm-trees-42417-large.mp4',
    gallery: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Direct beach access and sunset views from every room. The Lumina Villa is the pinnacle of coastal luxury living.',
    features: ['Beach Access', 'Outdoor Deck', 'Master Suite with Ocean View'],
    virtualTourUrl: 'https://my.matterport.com/show/?m=example'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'media-1',
    name: 'Cinematic Property Film',
    description: 'Elevate your listing with a 4K lifestyle-driven property walkthrough designed to evoke emotion and prestige.',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80',
    packages: [
      { id: 'p1', name: 'Standard', price: '$850', features: ['Up to 2 minutes', 'Drone footage', 'Social media teaser'], type: 'media' },
      { id: 'p2', name: 'Premium', price: '$1,500', features: ['Up to 4 minutes', 'Night shots', 'Agent intro/outro', 'Full editing'], type: 'media' }
    ]
  },
  {
    id: 'media-2',
    name: '3D Virtual Tours',
    description: 'Immersive Matterport experiences that allow prospective buyers to explore every corner of the property from anywhere in the world.',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=80',
    packages: [
      { id: 'p3', name: 'Full Scan', price: '$450', features: ['Matterport 3D', 'Floor plans', '1 year hosting'], type: 'media' }
    ]
  },
  {
    id: 'arch-1',
    name: 'Architectural Concept Design',
    description: 'Full-scale luxury design concepts, from initial sketches to high-fidelity 3D renderings.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    packages: [
      { id: 'p4', name: 'Concept Phase', price: 'Contact for Quote', features: ['Space planning', 'Material selection', '3 renderings'], type: 'architecture' }
    ]
  }
];
