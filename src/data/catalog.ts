import type { Destination, Tour } from '../types';

export const DESTINATIONS: Destination[] = [
  {
    id: 'bali',
    city: 'Bali',
    country: 'Indonesia',
    category: 'Beach',
    subtitle: 'Beach and Sea',
    count: '74 places',
    price: 2100,
    badgeColor: 'bg-[#FF5733]',
    rating: 4.9,
    reviewsCount: 1240,
    temp: '27°C',
    duration: '5 Days and 4 Nights',
    dates: '16–20 June',
    tag: 'Bali & Beaches',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1573790387438-4da905039392?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&w=400&q=80'
    ],
    overview: 'Bali is renowned for its forested volcanic mountains, iconic rice paddies, beaches, and coral reefs. Stay in luxury overwater villas and experience ancient cliffside sea temples.',
    highlights: ['Ubud Jungle Sanctuary & Rice Terraces', 'Nusa Penida Crystal Bay Snorkeling', 'Uluwatu Sunset Temple & Kecak Dance'],
    bestSeason: 'May to September'
  },
  {
    id: 'santorini',
    city: 'Santorini',
    country: 'Greece',
    category: 'Popular',
    subtitle: 'Aegean Caldera',
    count: '58 places',
    price: 1140,
    badgeColor: 'bg-[#1294F2]',
    rating: 4.8,
    reviewsCount: 980,
    temp: '24°C',
    duration: '5 Days and 4 Nights',
    dates: '10–15 July',
    tag: 'Aegean Caldera',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=900&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=400&q=80'
    ],
    overview: 'Greece is world-famous for its whitewashed cliffside villages in Oia, blue-domed churches overlooking the deep Aegean Sea, and unforgettable volcanic sunset cruises.',
    highlights: ['Private Catamaran Caldera Cruise', 'Wine Tasting in Pyrgos', 'Sunset Dinner in Oia Cliffside'],
    bestSeason: 'June to October'
  },
  {
    id: 'krabi',
    city: 'Krabi',
    country: 'Thailand',
    category: 'Beach',
    subtitle: 'Emerald Lagoons',
    count: '45 places',
    price: 1300,
    badgeColor: 'bg-[#109E6B]',
    rating: 4.7,
    reviewsCount: 820,
    temp: '30°C',
    duration: '4 Days and 3 Nights',
    dates: '22–26 June',
    tag: 'Emerald Lagoons',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=900&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?auto=format&fit=crop&w=400&q=80'
    ],
    overview: 'Towering limestone karsts rise straight out of crystal-clear emerald waters. Island-hop by traditional longtail boat across Railay Beach and Phi Phi lagoons.',
    highlights: ['Railay Rock Climbing & Caves', 'Phi Phi Island Longtail Tour', 'Emerald Pool Jungle Hike'],
    bestSeason: 'November to April'
  },
  {
    id: 'banff',
    city: 'Banff',
    country: 'Canada',
    category: 'Mountain',
    subtitle: 'Alpine Peaks',
    count: '42 places',
    price: 1850,
    badgeColor: 'bg-[#1294F2]',
    rating: 4.9,
    reviewsCount: 1100,
    temp: '14°C',
    duration: '6 Days and 5 Nights',
    dates: '04–10 Aug',
    tag: 'Glacial Lakes',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1434394354979-a235cd36269d?auto=format&fit=crop&w=400&q=80'
    ],
    overview: 'Surrounded by the Canadian Rockies, Banff offers turquoise glacial lakes, scenic gondola rides, and crisp pine-scented hiking trails.',
    highlights: ['Lake Louise Canoe Safari', 'Banff Gondola & Sulphur Mountain', 'Icefields Parkway Scenic Drive'],
    bestSeason: 'June to September'
  }
];

export const TOURS: Tour[] = [
  {
    id: 'tour-bali-luxury',
    title: 'Bali Caldera & Overwater Luxury Retreat',
    destinationId: 'bali',
    category: 'Luxury',
    location: 'Bali, Indonesia',
    price: 2100,
    originalPrice: 2600,
    rating: 4.9,
    reviewsCount: 310,
    duration: '5 Days / 4 Nights',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1573790387438-4da905039392?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=400&q=80'
    ],
    overview: 'An immersive 5-day luxury journey through Bali featuring private villa stays, curated culinary experiences, and guided cultural tours.',
    highlights: ['Private overwater villa check-in', 'Sunrise hike at Mount Batur', 'Jimbaran Bay seafood sunset dinner'],
    inclusions: ['Luxury airport transfers', 'All daily breakfasts & dinners', 'Private English-speaking guide', 'Spa package'],
    exclusions: ['International airfare', 'Personal shopping expenses'],
    availableDates: ['16 Jun - 20 Jun', '01 Jul - 05 Jul', '18 Aug - 22 Aug'],
    itinerary: [
      {
        day: 1,
        dateLabel: '20 June',
        activities: [
          { id: 'a1', title: 'Flight Arrival', subtitle: 'Ngurah Rai International', time: '8:30 AM', color: 'bg-[#FF5733]', iconType: 'flight' },
          { id: 'a2', title: 'Hotel Rest & Check-in', subtitle: 'Palm Springs Overwater Villa', time: '11:00 AM', color: 'bg-[#109E6B]', iconType: 'hotel' },
          { id: 'a3', title: 'Outdoor Dinner', subtitle: 'Jimbaran Bay Seafood Grill', time: '09:00 PM', color: 'bg-[#1294F2]', iconType: 'dining' }
        ]
      },
      {
        day: 2,
        dateLabel: '21 June',
        activities: [
          { id: 'a4', title: 'Sunrise Trek', subtitle: 'Mount Batur Ridge Trail', time: '05:30 AM', color: 'bg-[#FF5733]', iconType: 'adventure' },
          { id: 'a5', title: 'Coral Reef Snorkel', subtitle: 'Nusa Penida Crystal Bay', time: '01:15 PM', color: 'bg-[#1294F2]', iconType: 'adventure' }
        ]
      },
      {
        day: 3,
        dateLabel: '22 June',
        activities: [
          { id: 'a6', title: 'Terrace Brunch', subtitle: 'Tegallalang Rice Valley', time: '09:30 AM', color: 'bg-[#109E6B]', iconType: 'dining' },
          { id: 'a7', title: 'Balinese Spa Ritual', subtitle: 'Ubud Jungle Sanctuary', time: '02:00 PM', color: 'bg-purple-600', iconType: 'adventure' }
        ]
      }
    ]
  },
  {
    id: 'tour-santorini-sailing',
    title: 'Santorini Aegean Sunset & Caldera Cruise',
    destinationId: 'santorini',
    category: 'Cultural',
    location: 'Santorini, Greece',
    price: 1140,
    rating: 4.8,
    reviewsCount: 195,
    duration: '5 Days / 4 Nights',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=900&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&w=400&q=80'
    ],
    overview: 'Sail the azure waters of the Aegean Sea, explore whitewashed caldera villages, and dine under the stars in Oia.',
    highlights: ['Catamaran sunset cruise', 'Wine tasting with caldera view', 'Guided walking tour of Oia'],
    inclusions: ['Accommodation in boutique cave hotel', 'Daily breakfast', 'Catamaran cruise ticket'],
    exclusions: ['Personal expenses', 'Optional gratuities'],
    availableDates: ['10 Jul - 15 Jul', '02 Aug - 07 Aug'],
    itinerary: [
      {
        day: 1,
        dateLabel: '10 July',
        activities: [
          { id: 's1', title: 'Airport Arrival', subtitle: 'Thira Airport Transfer', time: '10:00 AM', color: 'bg-[#1294F2]', iconType: 'flight' },
          { id: 's2', title: 'Cave Suite Check-in', subtitle: 'Oia Cliffside Boutique', time: '01:00 PM', color: 'bg-[#109E6B]', iconType: 'hotel' }
        ]
      },
      {
        day: 2,
        dateLabel: '11 July',
        activities: [
          { id: 's3', title: 'Catamaran Sailing', subtitle: 'Caldera & Hot Springs', time: '03:00 PM', color: 'bg-[#FF5733]', iconType: 'adventure' }
        ]
      }
    ]
  }
];
