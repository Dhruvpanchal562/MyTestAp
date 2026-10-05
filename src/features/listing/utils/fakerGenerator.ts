import { faker } from '@faker-js/faker';
import { ListingItem } from '../types';

const categories = ['Electronics', 'Home & Garden', 'Fashion', 'Sports', 'Automotive', 'Books'];
const statuses: Array<'In Stock' | 'Limited' | 'Sold Out'> = ['In Stock', 'Limited', 'Sold Out'];

export const generateDummyListings = (count = 15): ListingItem[] => {
  return Array.from({ length: count }, (_, index) => {
    const category = categories[index % categories.length];
    const status = statuses[index % statuses.length];

    return {
      id: faker.string.uuid(),
      title: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      category,
      price: `$${faker.commerce.price({ min: 10, max: 999, dec: 2 })}`,
      rating: parseFloat((3.5 + Math.random() * 1.5).toFixed(1)),
      seller: faker.person.fullName(),
      status,
    };
  });
};
