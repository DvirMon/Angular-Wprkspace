export interface Destination {
  city: string;
  country: string;
}
export interface DestinationItem {
  cities: string[];
  country: string;
}

export interface Activity {
  id: string;
  name: string;
}

export interface Places {
  id: string;
  destination: Destination;
  price: number;
  takeoff: Date;
  landing: Date;
  imageUrl: string;
  activities: string[];
  rating: number; // Optional: Rating out of 5
}
