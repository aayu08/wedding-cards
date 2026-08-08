export interface EventItem {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  dressCode: string;
  mapUrl: string;
}

export interface GalleryItem {
  id: string;
  aspect: 'portrait' | 'landscape' | 'square';
}

export interface SectionBackground {
  sectionId: string;
  imageUrl: string;
  alt: string;
}

export interface WeddingData {
  monogram: string;
  hashtag: string;
  coupleNames: string;
  dateString: string;
  location: string;
  targetDate: string;
  events: EventItem[];
  galleryPlaceholders: GalleryItem[];
  sectionBackgrounds: Record<string, SectionBackground>;
}

export const weddingData: WeddingData = {
  monogram: 'A&A',
  hashtag: '#AayushGotAnjali',
  coupleNames: 'Aayush & Anjali',
  dateString: 'January 17–18, 2027',
  location: 'Dharamshala, Himachal Pradesh',
  targetDate: '2027-01-17T10:00:00',
  events: [
    {
      id: '1',
      title: 'Sangeet & Ring Ceremony',
      date: 'January 17, 2027',
      time: '05:00 PM Onwards',
      venue: 'The Grand Pavilion',
      address: 'Tea Garden Road, Dharamshala, Himachal Pradesh',
      dressCode: 'Indo-Western / Royal Velvet',
      mapUrl: 'https://maps.google.com',
    },
    {
      id: '2',
      title: 'Wedding Ceremony (Pheras)',
      date: 'January 18, 2027',
      time: '10:00 AM Onwards',
      venue: 'Dhauladhar Heritage Resort',
      address: 'Upper Dharamshala, Himachal Pradesh',
      dressCode: 'Traditional Himachali / Regal Ethnic',
      mapUrl: 'https://maps.google.com',
    },
  ],
  galleryPlaceholders: [
    { id: 'g1', aspect: 'portrait' },
    { id: 'g2', aspect: 'square' },
    { id: 'g3', aspect: 'square' },
    { id: 'g4', aspect: 'landscape' },
  ],
  // Dynamic Background Placeholders (Curated High-Res Unsplash Images)
  sectionBackgrounds: {
    hero: {
      sectionId: 'hero',
      imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=80',
      alt: 'Dhauladhar Mountains Sunset',
    },
    story: {
      sectionId: 'story',
      imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=80',
      alt: 'Romantic Candlelight Ambient',
    },
    celebrations: {
      sectionId: 'celebrations',
      imageUrl: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=2000&q=80',
      alt: 'Indian Wedding Sangeet Lights',
    },
    dresscode: {
      sectionId: 'dresscode',
      imageUrl: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=2000&q=80',
      alt: 'Royal Fabrics & Velvet Accents',
    },
    venue: {
      sectionId: 'venue',
      imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=80',
      alt: 'Scenic Mountain Resort',
    },
    gallery: {
      sectionId: 'gallery',
      imageUrl: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=2000&q=80',
      alt: 'Floral Bokeh Celebration',
    },
    thankyou: {
      sectionId: 'thankyou',
      imageUrl: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=2000&q=80',
      alt: 'Starry Himalayan Night Sky',
    },
  },
};