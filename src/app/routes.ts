export type AppTab = 'Home' | 'Explore' | 'Tours' | 'Bookings' | 'Profile';

export type ProfileSubView =
  | 'overview'
  | 'personal'
  | 'travelers'
  | 'wishlist'
  | 'notifications'
  | 'help'
  | 'settings';

export const APP_TABS: readonly AppTab[] = [
  'Home',
  'Explore',
  'Tours',
  'Bookings',
  'Profile',
];
