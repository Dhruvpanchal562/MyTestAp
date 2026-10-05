export interface ListingItem {
  id: string;
  title: string;
  description: string;
  category: string;
  price: string;
  rating: number;
  seller: string;
  status: 'In Stock' | 'Limited' | 'Sold Out';
}

export interface ListingState {
  items: ListingItem[];
  selectedCategory: string;
  isRefreshing: boolean;
}
