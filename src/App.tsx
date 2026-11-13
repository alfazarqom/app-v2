// ... existing code ...
import React, { useState, useMemo, useRef, useEffect } from 'react';
import {
  Compass,
  MapPin,
  User,
  Heart,
  Search,
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Bookmark,
  Sun,
  CheckCircle2,
  XCircle,
  Briefcase,
  Bell,
  Settings,
  HelpCircle,
  Users,
  Phone,
  Mail,
  ShieldCheck,
  Award,
  Clock,
  Percent,
  Sparkles,
  QrCode,
  Home
} from 'lucide-react';

// ============================================================================
// DATASETS
// ============================================================================
type CategoryType = 'All' | 'Popular' | 'Beach' | 'Mountain' | 'Adventure';

interface Destination {
  id: string;
  city: string;
  country: string;
  category: CategoryType;
  subtitle: string;
  count: string;
  price: number;
  badgeColor: string;
  rating: number;
  reviewsCount: number;
  temp: string;
  duration: string;
  dates: string;
  tag: string;
  image: string;
  gallery: string[];
  overview: string;
  highlights: string[];
  bestSeason: string;
}

const DESTINATIONS: Destination[] = [
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

interface Tour {
  id: string;
  title: string;
  destinationId: string;
  category: string;
  location: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  duration: string;
  image: string;
  gallery: string[];
  overview: string;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  availableDates: string[];
  itinerary: {
    day: number;
    dateLabel: string;
    activities: {
      id: string;
      title: string;
      subtitle: string;
      time: string;
      color: string;
      iconType: 'flight' | 'hotel' | 'dining' | 'shopping' | 'adventure';
    }[];
  }[];
}

const TOURS: Tour[] = [
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

interface Booking {
  id: string;
  bookingCode: string;
  tourTitle: string;
  location: string;
  image: string;
  date: string;
  guestsCount: number;
  totalPaid: number;
  status: 'Confirmed' | 'Pending' | 'Failed' | 'Cancelled' | 'Expired';
  paymentMethod: string;
  travelerName: string;
  travelerEmail: string;
  trackingSteps: { label: string; time: string; done: boolean }[];
}

export default function App() {
  const [activeTab, setActiveTab] = useState<'Home' | 'Explore' | 'Tours' | 'Bookings' | 'Profile'>('Home');
  const [showOnboarding, setShowOnboarding] = useState<boolean>(true);

  // Explore State
  const [exploreSearch, setExploreSearch] = useState<string>('');
  const [exploreCategory, setExploreCategory] = useState<CategoryType>('All');
  const [showExploreFilters, setShowExploreFilters] = useState<boolean>(false);
  const [exploreMaxPrice, setExploreMaxPrice] = useState<number>(2500);
  const [exploreMinRating, setExploreMinRating] = useState<number>(4.5);
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [destHeroImg, setDestHeroImg] = useState<string | null>(null);

  // Tours State
  const [tourSearch, setTourSearch] = useState<string>('');
  const [tourCategory, setTourCategory] = useState<string>('All');
  const [showTourFilters, setShowTourFilters] = useState<boolean>(false);
  const [tourMaxDays, setTourMaxDays] = useState<number>(6);
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [tourHeroImg, setTourHeroImg] = useState<string | null>(null);
  const [tourDetailSection, setTourDetailSection] = useState<'overview' | 'itinerary' | 'inclusions'>('overview');
  const [selectedItineraryDay, setSelectedItineraryDay] = useState<number>(1);
  const [selectedTourDate, setSelectedTourDate] = useState<string>(TOURS[0].availableDates[0]);
  const [selectedTourGuests, setSelectedTourGuests] = useState<number>(2);

  // Wishlist & Bookings State
  const [wishlistIds, setWishlistIds] = useState<Set<string>>(() => {
    try { return new Set<string>(JSON.parse(localStorage.getItem('voyage:wishlist') ?? '[]')); }
    catch { return new Set<string>(); }
  });
  // Booking data must be stored by a protected backend, not browser storage.
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);

  // Profile State
  const [profileSubView, setProfileSubView] = useState<'overview' | 'personal' | 'travelers' | 'wishlist' | 'notifications' | 'help' | 'settings'>('overview');
  const [personalInfo, setPersonalInfo] = useState({ fullName: '', email: '', phone: '', city: '' });
  // Passport details remain session-only until secure account storage is configured.
  const [savedTravelers, setSavedTravelers] = useState<Array<{ id: string; name: string; relation: string; passport: string; nationality: string }>>([]);
  const [newTravelerName, setNewTravelerName] = useState('');
  const [newTravelerPassport, setNewTravelerPassport] = useState('');
  const [notifSettings, setNotifSettings] = useState(() => {
    try {
      const saved = localStorage.getItem('voyage:notifications');
      return saved ? JSON.parse(saved) as { flightAlerts: boolean; priceDrops: boolean; itineraryReminders: boolean } : { flightAlerts: true, priceDrops: true, itineraryReminders: false };
    } catch {
      return { flightAlerts: true, priceDrops: true, itineraryReminders: false };
    }
  });
  const [currency, setCurrency] = useState<'USD' | 'IDR' | 'EUR'>(() => {
    const saved = localStorage.getItem('voyage:currency');
    return saved === 'IDR' || saved === 'EUR' ? saved : 'USD';
  });
  const [exchangeRates, setExchangeRates] = useState<Record<string, number> | null>(null);
  const [exchangeRateUpdatedAt, setExchangeRateUpdatedAt] = useState<string | null>(null);

  // Toast System
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const toastTimerRef = useRef<any>(null);

  useEffect(() => {
    localStorage.setItem('voyage:wishlist', JSON.stringify(Array.from(wishlistIds)));
  }, [wishlistIds]);
  useEffect(() => { localStorage.setItem('voyage:currency', currency); }, [currency]);
  useEffect(() => { localStorage.setItem('voyage:notifications', JSON.stringify(notifSettings)); }, [notifSettings]);
  useEffect(() => {
    const controller = new AbortController();
    fetch('https://open.er-api.com/v6/latest/USD', { signal: controller.signal })
      .then((response) => { if (!response.ok) throw new Error('Rate request failed'); return response.json(); })
      .then((data: { result?: string; rates?: Record<string, number>; time_last_update_utc?: string }) => {
        if (data.result !== 'success' || !data.rates) throw new Error('Invalid rate response');
        setExchangeRates(data.rates);
        setExchangeRateUpdatedAt(data.time_last_update_utc ?? null);
      })
      .catch((error: unknown) => { if (error instanceof Error && error.name !== 'AbortError') setExchangeRates(null); });
    return () => controller.abort();
  }, []);
  const formatPrice = (usdAmount: number) => {
    const rate = currency === 'USD' ? 1 : exchangeRates?.[currency];
    if (rate === undefined) return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(usdAmount);
    return new Intl.NumberFormat(currency === 'IDR' ? 'id-ID' : 'en-US', { style: 'currency', currency, maximumFractionDigits: currency === 'IDR' ? 0 : 2 }).format(usdAmount * rate);
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    toastTimerRef.current = setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const toggleWishlist = (id: string, name: string) => {
    setWishlistIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
        showToast(`Removed ${name} from wishlist`);
      } else {
        next.add(id);
        showToast(`Added ${name} to wishlist!`);
      }
      return next;
    });
  };

  useEffect(() => () => { if (toastTimerRef.current) clearTimeout(toastTimerRef.current); }, []);

  const handleSwitchTab = (tab: 'Home' | 'Explore' | 'Tours' | 'Bookings' | 'Profile') => {
    setActiveTab(tab);
    if (tab !== 'Explore') setSelectedDestination(null);
    if (tab !== 'Tours') setSelectedTour(null);
    if (tab !== 'Bookings') setSelectedBooking(null);
    if (tab === 'Profile') setProfileSubView('overview');
  };

  const openDestinationDetail = (dest: Destination) => {
    setSelectedDestination(dest);
    setDestHeroImg(dest.image);
    setActiveTab('Explore');
  };

  const openTourDetail = (tour: Tour) => {
    setSelectedTour(tour);
    setSelectedTourDate(tour.availableDates[0] ?? '');
    setSelectedItineraryDay(1);
    setTourDetailSection('overview');
    setTourHeroImg(tour.image);
    setActiveTab('Tours');
  };

  const handleConfirmBooking = (tour: Tour) => {
    if (!selectedTourDate || !tour.availableDates.includes(selectedTourDate)) {
      showToast('Please select a valid departure date for this tour.');
      return;
    }
    if (selectedTourGuests < 1 || !personalInfo.fullName.trim() || !personalInfo.email.trim()) {
      showToast('Please complete your contact details and traveler count.');
      return;
    }
    const newBooking: Booking = {
      id: `bk-${Date.now()}`,
      bookingCode: `VYG-${Date.now().toString().slice(-6)}`,
      tourTitle: tour.title,
      location: tour.location,
      image: tour.image,
      date: selectedTourDate,
      guestsCount: selectedTourGuests,
      totalPaid: tour.price * selectedTourGuests,
      status: 'Pending',
      paymentMethod: 'Awaiting payment setup',
      travelerName: personalInfo.fullName.trim(),
      travelerEmail: personalInfo.email.trim(),
      trackingSteps: [
        { label: 'Booking request received', time: 'Just now', done: true },
        { label: 'Payment verification', time: 'Pending', done: false },
        { label: 'Tour arrangements', time: 'Pending', done: false },
        { label: 'Ready for Departure', time: 'Pending', done: false }
      ]
    };
    setBookings(prev => [newBooking, ...prev]);
    showToast('Booking request created. Payment is not yet verified.');
    setSelectedTour(null);
    setActiveTab('Bookings');
  };

  const filteredDestinations = useMemo(() => {
    return DESTINATIONS.filter(d => {
      const matchesSearch = !exploreSearch ||
        d.city.toLowerCase().includes(exploreSearch.toLowerCase()) ||
        d.country.toLowerCase().includes(exploreSearch.toLowerCase());
      const matchesCat = exploreCategory === 'All' || d.category === exploreCategory;
      const matchesPrice = d.price <= exploreMaxPrice;
      const matchesRating = d.rating >= exploreMinRating;
      return matchesSearch && matchesCat && matchesPrice && matchesRating;
    });
  }, [exploreSearch, exploreCategory, exploreMaxPrice, exploreMinRating]);

  const filteredTours = useMemo(() => {
    return TOURS.filter(t => {
      const matchesSearch = !tourSearch ||
        t.title.toLowerCase().includes(tourSearch.toLowerCase()) ||
        t.location.toLowerCase().includes(tourSearch.toLowerCase());
      const matchesCat = tourCategory === 'All' || t.category === tourCategory;
      const durationDays = Number(t.duration.match(/\d+/)?.[0] ?? 0);
      const matchesDuration = durationDays > 0 && durationDays <= tourMaxDays;
      return matchesSearch && matchesCat && matchesDuration;
    });
  }, [tourSearch, tourCategory, tourMaxDays]);

  const renderActivityIcon = (type: string) => {
    switch (type) {
      case 'flight':
        return <Compass className="w-4 h-4 text-white" />;
      case 'hotel':
        return <Home className="w-4 h-4 text-white" />;
      case 'dining':
        return <Sun className="w-4 h-4 text-white" />;
      default:
        return <Sparkles className="w-4 h-4 text-white" />;
    }
  };

  return (
    <div className="bg-[#E8ECEF] min-h-screen flex items-center justify-center p-0 sm:p-6 font-sans antialiased text-slate-900 selection:bg-[#FF5733] selection:text-white">
      <div className="relative w-full max-w-[1440px] min-h-screen lg:min-h-[800px] h-screen bg-[#FAFAFB] sm:rounded-[28px] shadow-[0_30px_70px_-15px_rgba(15,23,42,0.2)] overflow-hidden flex flex-col border-0 sm:border-[8px] sm:border-white">
        
        {/* =====================================================================
            ONBOARDING / WELCOME SPLASH (Dismissible into Home)
            ===================================================================== */}
        {showOnboarding ? (
          <section className="w-full h-full flex flex-col bg-white z-30">
            <div className="relative h-[62%] w-full bg-[#1294F2]/10 overflow-hidden hero-curve">
              <img
                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=85"
                alt="Explore Nature"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
              <div className="absolute top-10 left-6 flex items-center gap-2 bg-white/25 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/30">
                <span className="w-2 h-2 rounded-full bg-[#FF5733] animate-pulse" />
                <span className="text-white text-xs font-normal tracking-wider uppercase">Voyage</span>
              </div>
            </div>

            <div className="relative flex-1 bg-white -mt-10 bottom-sheet-curve px-8 pt-9 pb-8 flex flex-col items-center justify-between text-center shadow-[0_-10px_30px_rgba(0,0,0,0.04)]">
              <div>
                <h1 className="font-serif text-[31px] leading-[1.18] font-bold text-slate-900 tracking-tight">
                  Explore Your
                  <br />
                  Dream Destination
                </h1>
                <p className="mt-3 text-xs text-slate-400 font-normal leading-relaxed max-w-[265px] mx-auto">
                  Curated destinations, guided tours, instant booking tracking, and personalized itineraries.
                </p>
              </div>

              <div className="w-full flex flex-col items-center gap-3">
                <button
                  onClick={() => {
                    setShowOnboarding(false);
                    setActiveTab('Home');
                  }}
                  className="group w-full max-w-[245px] py-3.5 px-7 rounded-full bg-gradient-to-r from-[#1294F2] to-[#0B7AD1] text-white font-normal text-sm shadow-[0_10px_25px_-5px_rgba(18,148,242,0.4)] hover:shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Explore Now</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
                <button
                  onClick={() => {
                    setShowOnboarding(false);
                    setActiveTab('Bookings');
                  }}
                  className="text-xs font-normal text-slate-400 hover:text-[#FF5733] transition-colors cursor-pointer"
                >
                  View My Active Bookings →
                </button>
              </div>
            </div>
          </section>
        ) : (
          <>
            {/* =====================================================================
                PAGE 1: HOME
                ===================================================================== */}
            {activeTab === 'Home' && (
              <div className="flex-1 overflow-y-auto no-scrollbar pb-28 bg-[#FAFAFB]">
                {/* 1.1 Hero Header */}
                <div className="relative h-[280px] w-full bg-slate-900 overflow-hidden hero-curve">
                  <img
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=85"
                    alt="Home Hero"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
                  <div className="absolute top-10 inset-x-6 flex items-center justify-between text-white">
                    <div className="flex items-center gap-3">
                      <img
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
                        alt="Avatar"
                        className="w-10 h-10 rounded-2xl object-cover border-2 border-white"
                      />
                      <div>
                        <p className="text-[10px] text-white/70 font-normal">Welcome back</p>
                        <h3 className="text-xs font-normal text-white">{personalInfo.fullName}</h3>
                      </div>
                    </div>
                    <button
                      onClick={() => setActiveTab('Profile')}
                      className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white cursor-pointer"
                    >
                      <Bell className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="text-[10px] font-normal uppercase tracking-wider bg-[#FF5733] px-2.5 py-0.5 rounded-full">
                      Curated 2026 Escapes
                    </span>
                    <h1 className="font-serif text-2xl font-bold mt-1">
                      Where will you travel next?
                    </h1>
                  </div>
                </div>

                {/* 1.2 SearchBar */}
                <div className="px-6 -mt-5 relative z-10">
                  <div
                    onClick={() => setActiveTab('Explore')}
                    className="bg-white rounded-2xl p-3.5 shadow-md border border-slate-100 flex items-center gap-3 cursor-pointer"
                  >
                    <Search className="w-4 h-4 text-[#FF5733]" />
                    <span className="text-xs font-normal text-slate-400">Search destinations, beaches, mountains...</span>
                  </div>
                </div>

                {/* 1.3 FeaturedDestinations */}
                <div className="mt-6">
                  <div className="px-6 flex items-center justify-between mb-3">
                    <div>
                      <h2 className="font-serif text-lg font-bold text-slate-900">
                        Featured Destinations
                      </h2>
                      <p className="text-[11px] text-slate-400 font-normal">
                        Handpicked escapes across the globe
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setSelectedDestination(null);
                        setActiveTab('Explore');
                      }}
                      className="text-xs font-normal text-[#FF5733] hover:underline cursor-pointer"
                    >
                      Explore All
                    </button>
                  </div>
                  <div className="flex gap-3 overflow-x-auto no-scrollbar px-6">
                    {DESTINATIONS.map((dest) => (
                      <div
                        key={dest.id}
                        onClick={() => openDestinationDetail(dest)}
                        className="w-[150px] h-[210px] shrink-0 rounded-2xl overflow-hidden relative shadow-sm cursor-pointer group"
                      >
                        <img
                          src={dest.image}
                          alt={dest.city}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                        <div className="absolute top-2.5 left-2.5 bg-[#FF5733] text-white text-[10px] font-normal px-2 py-0.5 rounded-md">
                          {formatPrice(dest.price)}
                        </div>
                        <div className="absolute bottom-3 left-3 right-3 text-white">
                          <div className="text-xs font-normal">{dest.city}</div>
                          <div className="text-[10px] text-white/70 font-normal">{dest.country}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 1.4 PopularTours */}
                <div className="px-6 mt-6">
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="font-serif text-lg font-bold text-slate-900">Popular Tours</h2>
                    <button
                      onClick={() => {
                        setSelectedTour(null);
                        setActiveTab('Tours');
                      }}
                      className="text-xs font-normal text-[#1294F2] hover:underline cursor-pointer"
                    >
                      All Tours
                    </button>
                  </div>
                  <div className="space-y-3">
                    {TOURS.slice(0, 2).map((tour) => (
                      <div
                        key={tour.id}
                        onClick={() => openTourDetail(tour)}
                        className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-3.5 hover:border-[#FF5733]/30 transition-all cursor-pointer"
                      >
                        <img
                          src={tour.image}
                          alt={tour.title}
                          className="w-16 h-16 rounded-xl object-cover shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <span className="text-[10px] font-normal text-[#109E6B] bg-[#109E6B]/10 px-2 py-0.5 rounded-full">
                            {tour.duration}
                          </span>
                          <h3 className="text-xs font-normal text-slate-900 truncate mt-1">
                            {tour.title}
                          </h3>
                          <div className="mt-1 flex items-center justify-between text-[11px]">
                            <span className="text-slate-400 font-normal">{tour.location}</span>
                            <span className="font-normal text-[#FF5733]">
                              {formatPrice(tour.price)}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 1.5 SpecialOffers */}
                <div className="px-6 mt-6">
                  <div className="relative rounded-3xl bg-gradient-to-r from-[#FF5733] to-[#FF7B47] p-5 text-white overflow-hidden shadow-[0_12px_25px_-5px_rgba(255,87,51,0.4)]">
                    <div className="relative z-10 max-w-[230px]">
                      <div className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-xs px-2.5 py-0.5 rounded-full text-[10px] font-normal uppercase tracking-wider">
                        <Percent className="w-3 h-3" /> Special Offer
                      </div>
                      <h3 className="font-serif text-lg font-bold mt-2 leading-snug">
                        Save 20% on Summer Caldera & Bali Packages
                      </h3>
                      <p className="text-[11px] text-white/85 font-normal mt-1">
                        Use code <span className="font-normal underline">VOYAGE20</span> at checkout.
                      </p>
                      <button
                        onClick={() => openTourDetail(TOURS[0])}
                        className="mt-3 px-4 py-2 rounded-full bg-white text-[#FF5733] text-xs font-normal shadow-sm active:scale-95 transition-transform cursor-pointer"
                      >
                        Claim Deal
                      </button>
                    </div>
                    <Sparkles className="w-24 h-24 text-white/15 absolute -right-3 -bottom-3" />
                  </div>
                </div>

                {/* 1.6 WhyChooseUs */}
                <div className="px-6 mt-6">
                  <h2 className="font-serif text-lg font-bold text-slate-900 mb-3">Why Choose Us</h2>
                  <div className="grid grid-cols-3 gap-2.5">
                    {[
                      {
                        icon: ShieldCheck,
                        title: '100% Protected',
                        sub: 'Flexible rescheduling',
                        color: 'text-[#109E6B] bg-[#109E6B]/10',
                      },
                      {
                        icon: Award,
                        title: 'Curated Stays',
                        sub: 'Top 1% villas & guides',
                        color: 'text-[#1294F2] bg-[#1294F2]/10',
                      },
                      {
                        icon: Clock,
                        title: '24/7 Concierge',
                        sub: 'Live on-trip support',
                        color: 'text-[#FF5733] bg-[#FF5733]/10',
                      },
                    ].map((item, idx) => {
                      const IconComp = item.icon;
                      return (
                        <div
                          key={idx}
                          className="bg-white p-3 rounded-2xl border border-slate-100 shadow-xs text-center"
                        >
                          <div
                            className={`w-9 h-9 rounded-xl ${item.color} flex items-center justify-center mx-auto mb-2`}
                          >
                            <IconComp className="w-4 h-4" />
                          </div>
                          <div className="text-[11px] font-normal text-slate-900 leading-tight">
                            {item.title}
                          </div>
                          <div className="text-[10px] text-slate-400 font-normal mt-0.5 leading-tight">
                            {item.sub}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* 1.7 Testimonials */}
                <div className="mt-6">
                  <div className="px-6 mb-3">
                    <h2 className="font-serif text-lg font-bold text-slate-900">Traveler Stories</h2>
                  </div>
                  <div className="flex gap-3 overflow-x-auto no-scrollbar px-6">
                    {[
                      {
                        name: 'Elena Rostova',
                        trip: 'Bali Sanctuary Tour',
                        quote:
                          'Every transfer, villa check-in, and sunrise hike ran like clockwork. Truly effortless luxury.',
                        avatar:
                          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
                      },
                      {
                        name: 'Marcus Vance',
                        trip: 'Santorini Caldera Sailing',
                        quote:
                          'The private catamaran sunset in Oia was the highlight of our year. Worth every penny.',
                        avatar:
                          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
                      },
                    ].map((rev, i) => (
                      <div
                        key={i}
                        className="w-[265px] shrink-0 bg-white p-4 rounded-2xl border border-slate-100 shadow-xs"
                      >
                        <div className="flex items-center gap-2.5 mb-2">
                          <img
                            src={rev.avatar}
                            alt={rev.name}
                            className="w-9 h-9 rounded-full object-cover"
                          />
                          <div>
                            <div className="text-xs font-normal text-slate-900">{rev.name}</div>
                            <div className="text-[10px] font-normal text-[#109E6B]">{rev.trip}</div>
                          </div>
                        </div>
                        <p className="text-[11px] text-slate-500 font-normal leading-relaxed italic">
                          "{rev.quote}"
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 1.8 TravelInspiration */}
                <div className="px-6 mt-6">
                  <h2 className="font-serif text-lg font-bold text-slate-900 mb-3">
                    Travel Inspiration
                  </h2>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      {
                        title: '7 Hidden Beaches in Nusa Penida',
                        readTime: '4 min read',
                        img: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=400&q=80',
                        dest: DESTINATIONS[0],
                      },
                      {
                        title: 'Packing Guide for Canadian Rockies',
                        readTime: '6 min read',
                        img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80',
                        dest: DESTINATIONS[3],
                      },
                    ].map((art, i) => (
                      <div
                        key={i}
                        onClick={() => openDestinationDetail(art.dest)}
                        className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-xs cursor-pointer group"
                      >
                        <div className="h-24 overflow-hidden">
                          <img
                            src={art.img}
                            alt={art.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          />
                        </div>
                        <div className="p-3">
                          <span className="text-[10px] font-normal text-[#1294F2]">{art.readTime}</span>
                          <h4 className="text-xs font-normal text-slate-900 mt-0.5 line-clamp-2 leading-snug">
                            {art.title}
                          </h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* =====================================================================
                PAGE 2: EXPLORE
                ===================================================================== */}
            {activeTab === 'Explore' && !selectedDestination && (
              <div className="flex-1 overflow-y-auto no-scrollbar pb-28 bg-[#FAFAFB]">
                <header className="px-6 pt-10 pb-3 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-normal text-slate-400">Discover World</p>
                    <h1 className="font-serif text-2xl font-bold text-slate-900">
                      Explore Destinations
                    </h1>
                  </div>
                  <div className="w-10 h-10 rounded-2xl bg-[#FF5733]/10 text-[#FF5733] flex items-center justify-center">
                    <Compass className="w-5 h-5" />
                  </div>
                </header>

                <div className="px-6 mt-2 flex items-center gap-2.5">
                  <div className="flex-1 bg-white rounded-2xl px-4 py-3 flex items-center gap-2.5 shadow-xs border border-slate-100">
                    <Search className="w-4 h-4 text-slate-400 shrink-0" />
                    <input
                      type="text"
                      value={exploreSearch}
                      onChange={(e) => setExploreSearch(e.target.value)}
                      placeholder="Search country, city, vibe..."
                      className="w-full text-xs font-normal text-slate-700 placeholder:text-slate-400 focus:outline-none"
                    />
                  </div>
                  <button
                    onClick={() => setShowExploreFilters((prev) => !prev)}
                    className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-colors cursor-pointer ${
                      showExploreFilters
                        ? 'bg-[#FF5733] text-white'
                        : 'bg-[#1294F2] text-white shadow-sm'
                    }`}
                  >
                    <SlidersHorizontal className="w-5 h-5" />
                  </button>
                </div>

                {showExploreFilters && (
                  <div className="mx-6 mt-3 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm space-y-3">
                    <div>
                      <div className="flex justify-between text-xs font-normal text-slate-700 mb-1">
                        <span>Max Budget</span>
                        <span className="text-[#FF5733]">{formatPrice(exploreMaxPrice)}</span>
                      </div>
                      <input
                        type="range"
                        min={1000}
                        max={2500}
                        step={100}
                        value={exploreMaxPrice}
                        onChange={(e) => setExploreMaxPrice(Number(e.target.value))}
                        className="w-full accent-[#FF5733]"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-normal text-slate-700">Min Rating</span>
                      <div className="flex gap-1.5">
                        {[4.5, 4.7, 4.8].map((r) => (
                          <button
                            key={r}
                            onClick={() => setExploreMinRating(r)}
                            className={`px-2.5 py-1 rounded-lg text-[11px] font-normal cursor-pointer ${
                              exploreMinRating === r
                                ? 'bg-slate-900 text-white'
                                : 'bg-slate-100 text-slate-600'
                            }`}
                          >
                            ★ {r}+
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-4 flex gap-2 overflow-x-auto no-scrollbar px-6">
                  {(['All', 'Popular', 'Beach', 'Mountain', 'Adventure'] as CategoryType[]).map(
                    (cat) => (
                      <button
                        key={cat}
                        onClick={() => setExploreCategory(cat)}
                        className={`px-4 py-2 rounded-full text-xs font-normal shrink-0 transition-all cursor-pointer ${
                          exploreCategory === cat
                            ? 'bg-[#FF5733] text-white shadow-sm'
                            : 'bg-white text-slate-500 border border-slate-100 hover:text-slate-900'
                        }`}
                      >
                        {cat}
                      </button>
                    )
                  )}
                </div>

                <div className="px-6 mt-5 grid grid-cols-2 gap-3.5">
                  {filteredDestinations.length === 0 ? (
                    <div className="col-span-2 bg-white rounded-3xl p-8 text-center border border-slate-100">
                      <p className="text-xs font-normal text-slate-700">
                        No destinations match your filters.
                      </p>
                      <button
                        onClick={() => {
                          setExploreCategory('All');
                          setExploreSearch('');
                          setExploreMaxPrice(2500);
                          setExploreMinRating(4.5);
                        }}
                        className="mt-2 text-xs font-normal text-[#FF5733] underline cursor-pointer"
                      >
                        Reset All Filters
                      </button>
                    </div>
                  ) : (
                    filteredDestinations.map((dest) => (
                      <div
                        key={dest.id}
                        onClick={() => openDestinationDetail(dest)}
                        className="group relative h-[225px] rounded-[26px] overflow-hidden shadow-sm cursor-pointer bg-slate-200"
                      >
                        <img
                          src={dest.image}
                          alt={dest.city}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                        <div
                          className={`absolute top-0 left-0 ${dest.badgeColor} text-white text-[11px] font-normal px-3 py-1.5 rounded-br-2xl`}
                        >
                          {formatPrice(dest.price)}
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleWishlist(dest.id, dest.city);
                          }}
                          className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white/85 flex items-center justify-center cursor-pointer"
                        >
                          <Heart
                            className={`w-3.5 h-3.5 ${
                              wishlistIds.has(dest.id)
                                ? 'text-[#FF5733] fill-[#FF5733]'
                                : 'text-slate-700'
                            }`}
                          />
                        </button>
                        <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white">
                          <div className="text-sm font-normal leading-tight">{dest.city}</div>
                          <div className="text-[11px] text-white/80 font-normal flex items-center justify-between mt-0.5">
                            <span>{dest.country}</span>
                            <span className="text-amber-300 font-normal">★ {dest.rating}</span>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}

            {/* DestinationDetail View */}
            {activeTab === 'Explore' && selectedDestination && (
              <div className="flex-1 overflow-y-auto no-scrollbar pb-28 bg-white">
                <div className="relative h-[340px] w-full detail-hero-curve overflow-hidden bg-slate-200">
                  <img
                    src={destHeroImg || selectedDestination.image}
                    alt={selectedDestination.city}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

                  <div className="absolute top-10 inset-x-6 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedDestination(null)}
                      className="w-10 h-10 rounded-2xl bg-white/90 backdrop-blur-md text-slate-800 flex items-center justify-center shadow-sm cursor-pointer"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() =>
                        toggleWishlist(selectedDestination.id, selectedDestination.city)
                      }
                      className="w-10 h-10 rounded-2xl bg-white/90 backdrop-blur-md flex items-center justify-center shadow-sm cursor-pointer"
                    >
                      <Bookmark
                        className={`w-5 h-5 ${
                          wishlistIds.has(selectedDestination.id)
                            ? 'text-[#FF5733] fill-[#FF5733]'
                            : 'text-slate-600'
                        }`}
                      />
                    </button>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 text-white flex items-end justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-normal text-white/90">
                        <span>{selectedDestination.country}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Sun className="w-3.5 h-3.5 text-amber-300" />
                          {selectedDestination.temp}
                        </span>
                      </div>
                      <h1 className="font-serif text-3xl font-bold mt-0.5">
                        {selectedDestination.city}
                      </h1>
                    </div>
                    <div className="bg-[#FF5733] px-3.5 py-2 rounded-2xl text-right shadow-md">
                      <div className="text-sm font-normal">
                        {formatPrice(selectedDestination.price)}
                      </div>
                      <div className="text-[9px] text-white/85 font-normal">avg / person</div>
                    </div>
                  </div>
                </div>

                <div className="px-6 mt-4 grid grid-cols-4 gap-2">
                  {[selectedDestination.image, ...selectedDestination.gallery].map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setDestHeroImg(img)}
                      className={`h-16 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                        (destHeroImg || selectedDestination.image) === img
                          ? 'border-[#FF5733] scale-95'
                          : 'border-transparent opacity-80 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="Gallery" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>

                <div className="px-6 mt-5">
                  <div className="flex items-center gap-4 text-xs font-normal text-slate-500 pb-3 border-b border-slate-100">
                    <span className="text-amber-500">
                      ★ {selectedDestination.rating} ({selectedDestination.reviewsCount} reviews)
                    </span>
                    <span>•</span>
                    <span>Best: {selectedDestination.bestSeason}</span>
                  </div>

                  <h2 className="text-base font-normal text-slate-900 mt-4">Overview</h2>
                  <p className="text-xs text-slate-500 font-normal leading-relaxed mt-1.5">
                    {selectedDestination.overview}
                  </p>
                </div>

                <div className="px-6 mt-5">
                  <h2 className="text-base font-normal text-slate-900 mb-2.5">
                    Destination Highlights
                  </h2>
                  <div className="space-y-2">
                    {selectedDestination.highlights.map((hl, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 bg-slate-50 p-3 rounded-xl text-xs font-normal text-slate-700"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#109E6B] shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="px-6 mt-6">
                  <h2 className="text-base font-normal text-slate-900 mb-3">
                    Related Tours in {selectedDestination.city}
                  </h2>
                  <div className="space-y-3">
                    {TOURS.filter(
                      (t) => t.destinationId === selectedDestination.id
                    )
                      .slice(0, 2)
                      .map((tour) => (
                        <div
                          key={tour.id}
                          onClick={() => openTourDetail(tour)}
                          className="p-3 rounded-2xl border border-slate-100 shadow-xs flex items-center justify-between gap-3 hover:border-[#FF5733] cursor-pointer"
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <img
                              src={tour.image}
                              alt={tour.title}
                              className="w-14 h-14 rounded-xl object-cover shrink-0"
                            />
                            <div className="min-w-0">
                              <div className="text-xs font-normal text-slate-900 truncate">
                                {tour.title}
                              </div>
                              <div className="text-[11px] text-slate-400 font-normal mt-0.5">
                                {tour.duration}
                              </div>
                              <div className="text-xs font-normal text-[#FF5733] mt-0.5">
                                {formatPrice(tour.price)}
                              </div>
                            </div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            )}

            {/* =====================================================================
                PAGE 3: TOURS
                ===================================================================== */}
            {activeTab === 'Tours' && !selectedTour && (
              <div className="flex-1 overflow-y-auto no-scrollbar pb-28 bg-[#FAFAFB]">
                <header className="px-6 pt-10 pb-3 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-normal text-slate-400">Guided Experiences</p>
                    <h1 className="font-serif text-2xl font-bold text-slate-900">Tour Packages</h1>
                  </div>
                  <div className="w-10 h-10 rounded-2xl bg-[#1294F2]/10 text-[#1294F2] flex items-center justify-center">
                    <Compass className="w-5 h-5" />
                  </div>
                </header>

                <div className="px-6 mt-2 flex items-center gap-2.5">
                  <div className="flex-1 bg-white rounded-2xl px-4 py-3 flex items-center gap-2.5 shadow-xs border border-slate-100">
                    <Search className="w-4 h-4 text-slate-400 shrink-0" />
                    <input
                      type="text"
                      value={tourSearch}
                      onChange={(e) => setTourSearch(e.target.value)}
                      placeholder="Search guided tours..."
                      className="w-full text-xs font-normal text-slate-700 placeholder:text-slate-400 focus:outline-none"
                    />
                  </div>
                  <button
                    onClick={() => setShowTourFilters((p) => !p)}
                    className={`w-11 h-11 rounded-2xl flex items-center justify-center cursor-pointer ${
                      showTourFilters ? 'bg-[#FF5733] text-white' : 'bg-[#1294F2] text-white'
                    }`}
                  >
                    <SlidersHorizontal className="w-5 h-5" />
                  </button>
                </div>

                {showTourFilters && (
                  <div className="mx-6 mt-3 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                    <div className="flex justify-between text-xs font-normal text-slate-700 mb-1">
                      <span>Max Trip Duration</span>
                      <span className="text-[#1294F2]">Up to {tourMaxDays} Days</span>
                    </div>
                    <input
                      type="range"
                      min={4}
                      max={7}
                      step={1}
                      value={tourMaxDays}
                      onChange={(e) => setTourMaxDays(Number(e.target.value))}
                      className="w-full accent-[#1294F2]"
                    />
                  </div>
                )}

                <div className="mt-4 flex gap-2 overflow-x-auto no-scrollbar px-6">
                  {['All', 'Luxury', 'Cultural', 'Adventure', 'Wildlife'].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setTourCategory(cat)}
                      className={`px-4 py-2 rounded-full text-xs font-normal shrink-0 transition-all cursor-pointer ${
                        tourCategory === cat
                          ? 'bg-[#1294F2] text-white shadow-sm'
                          : 'bg-white text-slate-500 border border-slate-100'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                <div className="px-6 mt-5 space-y-4">
                  {filteredTours.map((tour) => (
                    <div
                      key={tour.id}
                      onClick={() => openTourDetail(tour)}
                      className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 cursor-pointer group"
                    >
                      <div className="relative h-44 overflow-hidden">
                        <img
                          src={tour.image}
                          alt={tour.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <span className="absolute top-3 left-3 bg-slate-900/75 backdrop-blur-xs text-white text-[10px] font-normal px-3 py-1 rounded-full">
                          {tour.category}
                        </span>
                        <span className="absolute top-3 right-3 bg-white/95 text-slate-900 text-xs font-normal px-3 py-1 rounded-full shadow-xs">
                          {formatPrice(tour.price)}
                        </span>
                      </div>
                      <div className="p-4">
                        <div className="flex items-center justify-between text-[11px] font-normal text-slate-400">
                          <span>{tour.location}</span>
                          <span className="text-amber-500 font-normal">
                            ★ {tour.rating} ({tour.reviewsCount})
                          </span>
                        </div>
                        <h3 className="text-sm font-normal text-slate-900 mt-1">{tour.title}</h3>
                        <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between">
                          <span className="text-xs font-normal text-[#109E6B]">{tour.duration}</span>
                          <span className="text-xs font-normal text-[#FF5733] flex items-center gap-1">
                            View Itinerary <ChevronRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TourDetail View */}
            {activeTab === 'Tours' && selectedTour && (
              <div className="flex-1 overflow-y-auto no-scrollbar pb-28 bg-white">
                <div className="relative h-[310px] w-full detail-hero-curve overflow-hidden bg-slate-200">
                  <img
                    src={tourHeroImg || selectedTour.image}
                    alt={selectedTour.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
                  <div className="absolute top-10 inset-x-6 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedTour(null)}
                      className="w-10 h-10 rounded-2xl bg-white/90 text-slate-800 flex items-center justify-center shadow-sm cursor-pointer"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <span className="bg-white/90 text-slate-900 text-xs font-normal px-3.5 py-1.5 rounded-full">
                      {selectedTour.duration}
                    </span>
                  </div>
                  <div className="absolute bottom-5 left-6 right-6 text-white">
                    <div className="text-xs font-normal text-white/85">{selectedTour.location}</div>
                    <h1 className="font-serif text-2xl font-bold leading-snug mt-0.5">
                      {selectedTour.title}
                    </h1>
                  </div>
                </div>

                <div className="px-6 mt-3 grid grid-cols-4 gap-2">
                  {[selectedTour.image, ...selectedTour.gallery].map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setTourHeroImg(img)}
                      className={`h-14 rounded-xl overflow-hidden border-2 cursor-pointer ${
                        (tourHeroImg || selectedTour.image) === img
                          ? 'border-[#FF5733]'
                          : 'border-transparent opacity-75'
                      }`}
                    >
                      <img src={img} alt="Tour thumb" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>

                <div className="px-6 mt-4 flex gap-2 border-b border-slate-100 pb-3">
                  {(
                    [
                      { key: 'overview', label: 'Overview & Highlights' },
                      { key: 'itinerary', label: 'Trip Plan' },
                      { key: 'inclusions', label: 'Inclusions' },
                    ] as const
                  ).map((t) => (
                    <button
                      key={t.key}
                      onClick={() => setTourDetailSection(t.key)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-normal transition-colors cursor-pointer ${
                        tourDetailSection === t.key
                          ? 'bg-slate-900 text-white'
                          : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>

                {tourDetailSection === 'overview' && (
                  <div className="px-6 mt-4 space-y-4">
                    <div>
                      <h3 className="text-sm font-normal text-slate-900">Tour Overview</h3>
                      <p className="text-xs text-slate-500 font-normal leading-relaxed mt-1">
                        {selectedTour.overview}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-normal text-slate-900 mb-2">
                        Tour Highlights
                      </h3>
                      <div className="space-y-2">
                        {selectedTour.highlights.map((hl, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-2.5 bg-slate-50 p-2.5 rounded-xl text-xs font-normal text-slate-700"
                          >
                            <Sparkles className="w-4 h-4 text-[#FF5733] shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {tourDetailSection === 'itinerary' && (
                  <div className="px-6 mt-4">
                    <div className="flex gap-2 mb-5">
                      {selectedTour.itinerary.map((d) => (
                        <button
                          key={d.day}
                          onClick={() => setSelectedItineraryDay(d.day)}
                          className={`px-3.5 py-2 rounded-2xl text-left border transition-all cursor-pointer ${
                            selectedItineraryDay === d.day
                              ? 'border-[#109E6B] bg-[#109E6B]/10'
                              : 'border-slate-100 bg-white opacity-65'
                          }`}
                        >
                          <div className="text-xs font-normal text-slate-900">Day {d.day}</div>
                          <div className="text-[10px] text-slate-500 font-normal">{d.dateLabel}</div>
                        </button>
                      ))}
                    </div>

                    <div className="relative pl-12 space-y-4">
                      <div className="absolute left-[18px] top-3 bottom-4 border-l-2 border-dashed border-slate-200" />
                      {(
                        selectedTour.itinerary.find((d) => d.day === selectedItineraryDay)
                          ?.activities || []
                      ).map((act) => (
                        <div key={act.id} className="relative flex items-center">
                          <div
                            className={`absolute -left-12 w-9 h-9 rounded-full ${act.color} droplet-node flex items-center justify-center shadow-sm z-10`}
                          >
                            {renderActivityIcon(act.iconType)}
                          </div>
                          <div className="w-full bg-white rounded-2xl p-3.5 shadow-sm border border-slate-100 flex items-center justify-between">
                            <div>
                              <div className="text-xs font-normal text-slate-900">
                                {act.title}
                              </div>
                              <div className="text-[11px] text-slate-400 font-normal mt-0.5">
                                {act.subtitle}
                              </div>
                            </div>
                            <span className="text-[11px] font-normal text-slate-800 ml-2 shrink-0">
                              {act.time}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {tourDetailSection === 'inclusions' && (
                  <div className="px-6 mt-4 space-y-4">
                    <div>
                      <h3 className="text-sm font-normal text-[#109E6B] mb-2">
                        What's Included
                      </h3>
                      <div className="space-y-2">
                        {selectedTour.inclusions.map((inc, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs font-normal text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-[#109E6B] shrink-0" />
                            <span>{inc}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-normal text-slate-500 mb-2">Not Included</h3>
                      <div className="space-y-2">
                        {selectedTour.exclusions.map((exc, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs font-normal text-slate-400">
                            <XCircle className="w-4 h-4 text-slate-300 shrink-0" />
                            <span>{exc}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                <div className="px-6 mt-6 pt-5 border-t border-slate-100 space-y-4">
                  <div>
                    <label className="text-xs font-normal text-slate-900 block mb-2">
                      Select Departure Date
                    </label>
                    <div className="flex gap-2 overflow-x-auto no-scrollbar">
                      {selectedTour.availableDates.map((dt) => (
                        <button
                          key={dt}
                          onClick={() => setSelectedTourDate(dt)}
                          className={`px-3.5 py-2 rounded-xl text-xs font-normal shrink-0 border cursor-pointer ${
                            selectedTourDate === dt
                              ? 'border-[#FF5733] bg-[#FF5733]/10 text-[#FF5733]'
                              : 'border-slate-200 text-slate-600'
                          }`}
                        >
                          {dt}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between bg-slate-50 p-3 rounded-2xl">
                    <span className="text-xs font-normal text-slate-700">Travelers</span>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setSelectedTourGuests((g) => Math.max(1, g - 1))}
                        className="w-7 h-7 rounded-lg bg-white border border-slate-200 font-normal text-slate-700 cursor-pointer"
                      >
                        -
                      </button>
                      <span className="text-xs font-normal w-4 text-center">
                        {selectedTourGuests}
                      </span>
                      <button
                        onClick={() => setSelectedTourGuests((g) => Math.min(8, g + 1))}
                        className="w-7 h-7 rounded-lg bg-white border border-slate-200 font-normal text-slate-700 cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div>
                      <div className="text-[11px] font-normal text-slate-400">
                        Total ({selectedTourGuests}{' '}
                        {selectedTourGuests === 1 ? 'person' : 'people'})
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-xl font-normal text-slate-900">
                          {formatPrice(selectedTour.price * selectedTourGuests)}
                        </span>
                        {selectedTour.originalPrice && (
                          <span className="text-xs text-slate-400 font-normal line-through">
                            {formatPrice(selectedTour.originalPrice * selectedTourGuests)}
                          </span>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={() => handleConfirmBooking(selectedTour)}
                      className="px-6 py-3.5 rounded-full bg-gradient-to-r from-[#FF5733] to-[#FF785A] text-white text-xs font-normal shadow-[0_10px_25px_-5px_rgba(255,87,51,0.45)] active:scale-95 transition-transform cursor-pointer"
                    >
                      Book Tour Now
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* =====================================================================
                PAGE 4: BOOKINGS
                ===================================================================== */}
            {activeTab === 'Bookings' && !selectedBooking && (
              <div className="flex-1 overflow-y-auto no-scrollbar pb-28 bg-[#FAFAFB]">
                <header className="px-6 pt-10 pb-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-normal text-slate-400">Your Itineraries</p>
                    <h1 className="font-serif text-2xl font-bold text-slate-900">My Bookings</h1>
                  </div>
                  <span className="text-xs font-normal bg-[#109E6B]/10 text-[#109E6B] px-3 py-1 rounded-full">
                    {bookings.length} Active
                  </span>
                </header>

                <div className="px-6 space-y-4">
                  {bookings.map((bk) => (
                    <div
                      key={bk.id}
                      onClick={() => setSelectedBooking(bk)}
                      className="bg-white rounded-3xl p-4 shadow-sm border border-slate-100 cursor-pointer hover:border-[#FF5733]/40 transition-all"
                    >
                      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                        <span className="text-[11px] font-normal text-slate-400 tracking-wider">
                          {bk.bookingCode}
                        </span>
                        <span
                          className={`text-[10px] font-normal px-2.5 py-0.5 rounded-full ${
                            bk.status === 'Confirmed'
                              ? 'bg-[#109E6B]/10 text-[#109E6B]'
                              : 'bg-[#1294F2]/10 text-[#1294F2]'
                          }`}
                        >
                          {bk.status}
                        </span>
                      </div>

                      <div className="mt-3 flex items-center gap-3.5">
                        <img
                          src={bk.image}
                          alt={bk.tourTitle}
                          className="w-16 h-16 rounded-2xl object-cover shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xs font-normal text-slate-900 truncate">
                            {bk.tourTitle}
                          </h3>
                          <p className="text-[11px] text-slate-400 font-normal mt-0.5">{bk.location}</p>
                          <div className="mt-1.5 flex items-center justify-between text-[11px]">
                            <span className="font-normal text-slate-600">{bk.date}</span>
                            <span className="font-normal text-[#FF5733]">
                              {formatPrice(bk.totalPaid)}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-3 pt-2.5 border-t border-slate-50 flex items-center justify-between text-[11px] font-normal text-[#1294F2]">
                        <span>View E-Ticket & Live Tracking</span>
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'Bookings' && selectedBooking && (
              <div className="flex-1 overflow-y-auto no-scrollbar pb-28 bg-[#FAFAFB]">
                <header className="px-6 pt-10 pb-3 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedBooking(null)}
                    className="w-10 h-10 rounded-2xl bg-white shadow-xs flex items-center justify-center text-slate-800 cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <span className="text-xs font-normal text-slate-800">Booking Details</span>
                  <button
                    onClick={() => {
                      if (selectedBooking.status !== 'Confirmed') { showToast('E-Voucher is available after payment confirmation.'); return; }
                      const voucher = new Blob([`Voyage E-Voucher\nBooking: ${selectedBooking.bookingCode}\nTour: ${selectedBooking.tourTitle}\nDate: ${selectedBooking.date}\nTravelers: ${selectedBooking.guestsCount}`], { type: 'text/plain;charset=utf-8' });
                      const url = URL.createObjectURL(voucher);
                      const link = document.createElement('a'); link.href = url; link.download = `voyage-${selectedBooking.bookingCode}.txt`; link.click(); URL.revokeObjectURL(url);
                    }}
                    className="w-10 h-10 rounded-2xl bg-white shadow-xs flex items-center justify-center text-[#FF5733] cursor-pointer"
                  >
                    <QrCode className="w-5 h-5" />
                  </button>
                </header>

                <div className="px-6 space-y-4 mt-2">
                  <div className="bg-white rounded-3xl p-4 shadow-xs border border-slate-100">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-normal text-slate-400">
                        {selectedBooking.bookingCode}
                      </span>
                      <span className="text-xs font-normal bg-[#109E6B]/10 text-[#109E6B] px-3 py-1 rounded-full">
                        ● {selectedBooking.status}
                      </span>
                    </div>
                    <div className="flex gap-3.5 items-center">
                      <img
                        src={selectedBooking.image}
                        alt={selectedBooking.tourTitle}
                        className="w-16 h-16 rounded-2xl object-cover"
                      />
                      <div>
                        <h2 className="text-sm font-normal text-slate-900">
                          {selectedBooking.tourTitle}
                        </h2>
                        <p className="text-xs text-slate-400 font-normal mt-0.5">{selectedBooking.location}</p>
                        <p className="text-xs font-normal text-[#1294F2] mt-1">
                          {selectedBooking.date} • {selectedBooking.guestsCount} Guest(s)
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-3xl p-5 shadow-xs border border-slate-100">
                    <h3 className="text-xs font-normal text-slate-900 uppercase tracking-wider mb-4">
                      Booking Tracking
                    </h3>
                    <div className="space-y-4 relative pl-6">
                      <div className="absolute left-[7px] top-1.5 bottom-2 w-0.5 bg-slate-200" />
                      {selectedBooking.trackingSteps.map((step, i) => (
                        <div key={i} className="relative">
                          <span
                            className={`absolute -left-6 top-0.5 w-4 h-4 rounded-full border-2 border-white flex items-center justify-center ${
                              step.done ? 'bg-[#109E6B]' : 'bg-slate-300'
                            }`}
                          />
                          <div
                            className={`text-xs font-normal ${
                              step.done ? 'text-slate-900' : 'text-slate-400'
                            }`}
                          >
                            {step.label}
                          </div>
                          <div className="text-[10px] text-slate-400 font-normal mt-0.5">{step.time}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-3xl p-4 shadow-xs border border-slate-100 space-y-2">
                    <h3 className="text-xs font-normal text-slate-900 uppercase tracking-wider">
                      Traveler Information
                    </h3>
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-400 font-normal">Lead Guest</span>
                      <span className="font-normal text-slate-800">
                        {selectedBooking.travelerName}
                      </span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-400 font-normal">Contact Email</span>
                      <span className="font-normal text-slate-800">
                        {selectedBooking.travelerEmail}
                      </span>
                    </div>
                  </div>

                  <div className="bg-white rounded-3xl p-4 shadow-xs border border-slate-100 space-y-2">
                    <h3 className="text-xs font-normal text-slate-900 uppercase tracking-wider">
                      Payment Information
                    </h3>
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-400 font-normal">Payment Method</span>
                      <span className="font-normal text-slate-800">
                        {selectedBooking.paymentMethod}
                      </span>
                    </div>
                    <div className="flex justify-between text-xs pt-2 border-t border-slate-100">
                      <span className="font-normal text-slate-700">{selectedBooking.status === 'Confirmed' ? 'Total Paid' : 'Total Amount'}</span>
                      <span className="text-sm font-normal text-[#FF5733]">
                        {formatPrice(selectedBooking.totalPaid)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* =====================================================================
                PAGE 5: PROFILE
                ===================================================================== */}
            {activeTab === 'Profile' && (
              <div className="flex-1 overflow-y-auto no-scrollbar pb-28 bg-[#FAFAFB]">
                {profileSubView === 'overview' ? (
                  <>
                    <div className="px-6 pt-10 pb-6 bg-white rounded-b-[36px] shadow-xs">
                      <div className="flex items-center gap-4">
                        <img
                          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
                          alt="Profile"
                          className="w-16 h-16 rounded-3xl object-cover border-2 border-[#FF5733]"
                        />
                        <div>
                          <span className="text-[10px] font-normal uppercase tracking-wider bg-[#FF5733]/10 text-[#FF5733] px-2.5 py-0.5 rounded-full">
                            Voyage Gold Member
                          </span>
                          <h1 className="font-serif text-xl font-bold text-slate-900 mt-1">
                            {personalInfo.fullName}
                          </h1>
                          <p className="text-xs text-slate-400 font-normal">{personalInfo.city}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-2.5 mt-5 pt-4 border-t border-slate-100 text-center">
                        <div>
                          <div className="text-base font-normal text-slate-900">
                            {bookings.length}
                          </div>
                          <div className="text-[10px] font-normal text-slate-400">Trips</div>
                        </div>
                        <div>
                          <div className="text-base font-normal text-[#FF5733]">
                            {wishlistIds.size}
                          </div>
                          <div className="text-[10px] font-normal text-slate-400">Wishlist</div>
                        </div>
                        <div>
                          <div className="text-base font-normal text-[#109E6B]">14,250</div>
                          <div className="text-[10px] font-normal text-slate-400">Points</div>
                        </div>
                      </div>
                    </div>

                    <div className="px-6 mt-5 space-y-2.5">
                      {(
                        [
                          {
                            key: 'personal',
                            label: 'Personal Information',
                            sub: 'Name, email, phone & residence',
                            icon: User,
                            color: 'text-[#1294F2] bg-[#1294F2]/10',
                          },
                          {
                            key: 'travelers',
                            label: 'Saved Travelers',
                            sub: `${savedTravelers.length} passport profiles ready`,
                            icon: Users,
                            color: 'text-[#109E6B] bg-[#109E6B]/10',
                          },
                          {
                            key: 'wishlist',
                            label: 'Wishlist',
                            sub: `${wishlistIds.size} saved dream destinations`,
                            icon: Heart,
                            color: 'text-[#FF5733] bg-[#FF5733]/10',
                          },
                          {
                            key: 'notifications',
                            label: 'Notifications',
                            sub: 'Flight alerts & fare drops',
                            icon: Bell,
                            color: 'text-amber-500 bg-amber-500/10',
                          },
                          {
                            key: 'help',
                            label: 'Help Center',
                            sub: '24/7 concierge & FAQs',
                            icon: HelpCircle,
                            color: 'text-purple-600 bg-purple-600/10',
                          },
                          {
                            key: 'settings',
                            label: 'Settings',
                            sub: `Currency (${currency}) & app preferences`,
                            icon: Settings,
                            color: 'text-slate-700 bg-slate-200/70',
                          },
                        ] as const
                      ).map((menu) => {
                        const IconComp = menu.icon;
                        return (
                          <button
                            key={menu.key}
                            onClick={() => setProfileSubView(menu.key)}
                            className="w-full bg-white p-3.5 rounded-2xl border border-slate-100 shadow-xs flex items-center justify-between hover:border-[#FF5733]/30 transition-all cursor-pointer"
                          >
                            <div className="flex items-center gap-3.5 text-left">
                              <div
                                className={`w-10 h-10 rounded-xl ${menu.color} flex items-center justify-center shrink-0`}
                              >
                                <IconComp className="w-5 h-5" />
                              </div>
                              <div>
                                <div className="text-xs font-normal text-slate-900">
                                  {menu.label}
                                </div>
                                <div className="text-[11px] text-slate-400 font-normal">{menu.sub}</div>
                              </div>
                            </div>
                            <ChevronRight className="w-4 h-4 text-slate-400" />
                          </button>
                        );
                      })}
                    </div>
                  </>
                ) : (
                  <div className="px-6 pt-10">
                    <div className="flex items-center gap-3 mb-5">
                      <button
                        onClick={() => setProfileSubView('overview')}
                        className="w-10 h-10 rounded-2xl bg-white shadow-xs flex items-center justify-center text-slate-800 cursor-pointer"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <h2 className="font-serif text-xl font-bold text-slate-900 capitalize">
                        {profileSubView === 'personal' && 'Personal Information'}
                        {profileSubView === 'travelers' && 'Saved Travelers'}
                        {profileSubView === 'wishlist' && 'My Wishlist'}
                        {profileSubView === 'notifications' && 'Notifications'}
                        {profileSubView === 'help' && 'Help Center'}
                        {profileSubView === 'settings' && 'Settings'}
                      </h2>
                    </div>

                    {profileSubView === 'personal' && (
                      <div className="bg-white p-5 rounded-3xl border border-slate-100 space-y-3.5">
                        {(
                          [
                            { label: 'Full Name', key: 'fullName' },
                            { label: 'Email Address', key: 'email' },
                            { label: 'Phone Number', key: 'phone' },
                            { label: 'Home City', key: 'city' },
                          ] as const
                        ).map((field) => (
                          <div key={field.key}>
                            <label className="text-[10px] font-normal text-slate-400 uppercase">
                              {field.label}
                            </label>
                            <input
                              type="text"
                              value={personalInfo[field.key]}
                              onChange={(e) =>
                                setPersonalInfo((prev) => ({
                                  ...prev,
                                  [field.key]: e.target.value,
                                }))
                              }
                              className="mt-1 w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-normal focus:outline-none focus:border-[#FF5733]"
                            />
                          </div>
                        ))}
                        <button
                          onClick={() => {
                            showToast('Personal information updated');
                            setProfileSubView('overview');
                          }}
                          className="w-full py-3 rounded-2xl bg-[#FF5733] text-white text-xs font-normal cursor-pointer"
                        >
                          Save Changes
                        </button>
                      </div>
                    )}

                    {profileSubView === 'travelers' && (
                      <div className="space-y-4">
                        <div className="space-y-2.5">
                          {savedTravelers.map((tr) => (
                            <div
                              key={tr.id}
                              className="bg-white p-4 rounded-2xl border border-slate-100 flex items-center justify-between"
                            >
                              <div>
                                <div className="text-xs font-normal text-slate-900">
                                  {tr.name}
                                </div>
                                <div className="text-[11px] text-slate-400 font-normal">
                                  {tr.relation} • Passport ending {tr.passport.slice(-4).padStart(tr.passport.length, '•')}
                                </div>
                              </div>
                              <span className="text-[10px] font-normal bg-[#109E6B]/10 text-[#109E6B] px-2.5 py-1 rounded-full">
                                In this session
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="bg-white p-4 rounded-2xl border border-slate-100 space-y-2.5">
                          <div className="text-xs font-normal text-slate-800">
                            Add Companion Traveler
                          </div>
                          <input
                            type="text"
                            value={newTravelerName}
                            onChange={(e) => setNewTravelerName(e.target.value)}
                            aria-label="Traveler full name as shown on passport"
                            placeholder="Full Name (as on passport)"
                            className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-normal"
                          />
                          <input
                            type="text"
                            value={newTravelerPassport}
                            onChange={(e) => setNewTravelerPassport(e.target.value)}
                            aria-label="Traveler passport number"
                            placeholder="Passport Number"
                            className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-normal"
                          />
                          <button
                            onClick={() => {
                              if (!newTravelerName.trim() || !newTravelerPassport.trim()) {
                                showToast('Enter the traveler name and passport number.');
                                return;
                              }
                              setSavedTravelers((prev) => [
                                ...prev,
                                {
                                  id: `tr-${Date.now()}`,
                                  name: newTravelerName.trim(),
                                  relation: 'Companion',
                                  passport: newTravelerPassport.trim(),
                                  nationality: 'Indonesia',
                                },
                              ]);
                              setNewTravelerName('');
                              setNewTravelerPassport('');
                              showToast('Companion traveler added for this session.');
                            }}
                            className="w-full py-2.5 rounded-xl bg-slate-900 text-white text-xs font-normal cursor-pointer"
                          >
                            + Add Traveler
                          </button>
                        </div>
                      </div>
                    )}

                    {profileSubView === 'wishlist' && (
                      <div className="space-y-3">
                        {DESTINATIONS.filter((d) => wishlistIds.has(d.id)).length === 0 ? (
                          <div className="bg-white p-8 rounded-3xl text-center text-xs text-slate-400 font-normal">
                            Your wishlist is empty. Tap the heart icon on any destination to save it!
                          </div>
                        ) : (
                          DESTINATIONS.filter((d) => wishlistIds.has(d.id)).map((dest) => (
                            <div
                              key={dest.id}
                              onClick={() => openDestinationDetail(dest)}
                              className="bg-white p-3 rounded-2xl border border-slate-100 flex items-center justify-between cursor-pointer"
                            >
                              <div className="flex items-center gap-3">
                                <img
                                  src={dest.image}
                                  alt={dest.city}
                                  className="w-14 h-14 rounded-xl object-cover"
                                />
                                <div>
                                  <div className="text-xs font-normal text-slate-900">
                                    {dest.city}, {dest.country}
                                  </div>
                                  <div className="text-[11px] font-normal text-[#FF5733] mt-0.5">
                                    From {formatPrice(dest.price)}
                                  </div>
                                </div>
                              </div>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleWishlist(dest.id, dest.city);
                                }}
                                className="p-2 text-[#FF5733] cursor-pointer"
                              >
                                <Heart className="w-4 h-4 fill-[#FF5733]" />
                              </button>
                            </div>
                          ))
                        )}
                      </div>
                    )}

                    {profileSubView === 'notifications' && (
                      <div className="bg-white p-5 rounded-3xl border border-slate-100 space-y-4">
                        {(
                          [
                            {
                              key: 'flightAlerts',
                              title: 'Flight & Transfer Status',
                              sub: 'Real-time gate & chauffeur updates',
                            },
                            {
                              key: 'priceDrops',
                              title: 'Wishlist Price Drops',
                              sub: 'Alert when saved destinations go on sale',
                            },
                            {
                              key: 'itineraryReminders',
                              title: 'Daily Itinerary Reminders',
                              sub: 'Morning summary of scheduled activities',
                            },
                          ] as const
                        ).map((item) => (
                          <div key={item.key} className="flex items-center justify-between">
                            <div>
                              <div className="text-xs font-normal text-slate-900">
                                {item.title}
                              </div>
                              <div className="text-[11px] text-slate-400 font-normal">{item.sub}</div>
                            </div>
                            <button
                              onClick={() =>
                                setNotifSettings((prev) => ({
                                  ...prev,
                                  [item.key]: !prev[item.key],
                                }))
                              }
                              className={`w-11 h-6 rounded-full p-0.5 transition-colors cursor-pointer ${
                                notifSettings[item.key] ? 'bg-[#109E6B]' : 'bg-slate-200'
                              }`}
                            >
                              <div
                                className={`w-5 h-5 rounded-full bg-white transition-transform ${
                                  notifSettings[item.key] ? 'translate-x-5' : 'translate-x-0'
                                }`}
                              />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}

                    {profileSubView === 'help' && (
                      <div className="space-y-3">
                        <div className="bg-white p-4 rounded-2xl border border-slate-100">
                          <h4 className="text-xs font-normal text-slate-900">
                            How do I reschedule a confirmed tour?
                          </h4>
                          <p className="text-[11px] text-slate-500 font-normal mt-1 leading-relaxed">
                            All Voyage packages include free date changes up to 7 days prior to departure via your Booking Detail page.
                          </p>
                        </div>
                        <div className="bg-white p-4 rounded-2xl border border-slate-100">
                          <h4 className="text-xs font-normal text-slate-900">
                            24/7 Emergency Concierge
                          </h4>
                          <div className="mt-2 flex gap-2">
                            <button
                              onClick={() => showToast('Support phone number is not configured yet.')}
                              className="flex-1 py-2.5 rounded-xl bg-[#1294F2] text-white text-xs font-normal flex items-center justify-center gap-1.5 cursor-pointer"
                            >
                              <Phone className="w-3.5 h-3.5" /> Call Support
                            </button>
                            <button
                              onClick={() => showToast('Support email address is not configured yet.')}
                              className="flex-1 py-2.5 rounded-xl bg-slate-100 text-slate-800 text-xs font-normal flex items-center justify-center gap-1.5 cursor-pointer"
                            >
                              <Mail className="w-3.5 h-3.5" /> Email Us
                            </button>
                          </div>
                        </div>
                      </div>
                    )}

                    {profileSubView === 'settings' && (
                      <div className="bg-white p-5 rounded-3xl border border-slate-100 space-y-4">
                        <div>
                          <div className="text-xs font-normal text-slate-900 mb-2">
                            Display Currency
                          </div>
                          <div className="grid grid-cols-3 gap-2">
                            {(['USD', 'IDR', 'EUR'] as const).map((curr) => (
                              <button
                                key={curr}
                                onClick={() => {
                                  setCurrency(curr);
                                  showToast(`Currency set to ${curr}`);
                                }}
                                className={`py-2 rounded-xl text-xs font-normal border cursor-pointer ${
                                  currency === curr
                                    ? 'border-[#FF5733] bg-[#FF5733]/10 text-[#FF5733]'
                                    : 'border-slate-200 text-slate-600'
                                }`}
                              >
                                {curr}
                              </button>
                            ))}
                          </div>
                          <p className="mt-2 text-[10px] text-slate-400" role="status">
                            {currency !== 'USD' && !exchangeRates ? 'Exchange rate unavailable. Prices remain displayed in USD.' : exchangeRateUpdatedAt ? `Rates last updated: ${exchangeRateUpdatedAt}` : 'Loading exchange rates…'}
                          </p>
                        </div>
                        <button
                          onClick={() => setShowOnboarding(true)}
                          className="w-full py-3 rounded-2xl bg-slate-900 text-white text-xs font-normal cursor-pointer"
                        >
                          Replay Welcome Onboarding
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            <nav className="absolute bottom-0 inset-x-0 h-[78px] z-20 select-none">
              <svg
                className="w-full h-full drop-shadow-[0_-8px_20px_rgba(255,87,51,0.22)]"
                viewBox="0 0 400 78"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="coralNavGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FF6337" />
                    <stop offset="50%" stopColor="#FF522B" />
                    <stop offset="100%" stopColor="#FF7438" />
                  </linearGradient>
                </defs>
                <path
                  d="M 0,18 Q 0,0 18,0 L 145,0 C 165,0 172,28 200,28 C 228,28 235,0 255,0 L 382,0 Q 400,0 400,18 L 400,78 L 0,78 Z"
                  fill="url(#coralNavGrad)"
                />
              </svg>

              <button
                onClick={() => handleSwitchTab('Tours')}
                title="Guided Tours"
                className={`absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-gradient-to-tr from-[#FF4B26] to-[#FF7B47] text-white shadow-[0_10px_25px_-5px_rgba(255,87,51,0.5)] border-4 border-[#FAFAFB] flex flex-col items-center justify-center hover:scale-105 active:scale-95 transition-transform cursor-pointer ${
                  activeTab === 'Tours' ? 'ring-2 ring-[#FF5733]' : ''
                }`}
              >
                <Compass className="w-6 h-6" />
              </button>

              <div className="absolute inset-0 px-5 pt-2 flex items-center justify-between text-white">
                <div className="flex items-center gap-6">
                  <button
                    onClick={() => handleSwitchTab('Home')}
                    className={`flex flex-col items-center gap-0.5 px-2 py-1 rounded-xl transition-all cursor-pointer ${
                      activeTab === 'Home' ? 'opacity-100 bg-white/20' : 'opacity-75 hover:opacity-100'
                    }`}
                  >
                    <Home className="w-4 h-4" />
                    <span className="text-[9px] font-normal">Home</span>
                  </button>

                  <button
                    onClick={() => handleSwitchTab('Explore')}
                    className={`flex flex-col items-center gap-0.5 px-2 py-1 rounded-xl transition-all cursor-pointer ${
                      activeTab === 'Explore'
                        ? 'opacity-100 bg-white/20'
                        : 'opacity-75 hover:opacity-100'
                    }`}
                  >
                    <MapPin className="w-4 h-4" />
                    <span className="text-[9px] font-normal">Explore</span>
                  </button>
                </div>

                <div className="flex items-center gap-6">
                  <button
                    onClick={() => handleSwitchTab('Bookings')}
                    className={`flex flex-col items-center gap-0.5 px-2 py-1 rounded-xl transition-all cursor-pointer ${
                      activeTab === 'Bookings'
                        ? 'opacity-100 bg-white/20'
                        : 'opacity-75 hover:opacity-100'
                    }`}
                  >
                    <Briefcase className="w-4 h-4" />
                    <span className="text-[9px] font-normal">Bookings</span>
                  </button>

                  <button
                    onClick={() => handleSwitchTab('Profile')}
                    className={`flex flex-col items-center gap-0.5 px-2 py-1 rounded-xl transition-all cursor-pointer ${
                      activeTab === 'Profile'
                        ? 'opacity-100 bg-white/20'
                        : 'opacity-75 hover:opacity-100'
                    }`}
                  >
                    <User className="w-4 h-4" />
                    <span className="text-[9px] font-normal">Profile</span>
                  </button>
                </div>
              </div>
            </nav>
          </>
        )}

        <div
          className={`pointer-events-none transition-all duration-300 absolute top-12 left-1/2 -translate-x-1/2 z-50 w-[88%] max-w-[340px] bg-slate-900/95 backdrop-blur-md text-white px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 ${
            toastMessage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-[#FF5733] shrink-0" />
          <p className="text-xs font-normal leading-snug">{toastMessage}</p>
        </div>
      </div>
    </div>
  );
}
