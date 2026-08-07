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

export interface WeddingData {
  monogram: string;
  hashtag: string;
  coupleNames: string;
  dateString: string;
  location: string;
  targetDate: string;
  events: EventItem[];
  galleryPlaceholders: GalleryItem[];
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
};