
export interface Restaurant {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  images: string[];
  cuisine: string[];
  location: string;
  address: string;
  rating: number;
  priceRange: string;
  hours: {
    [key: string]: string;
  };
  reviewCount: number;
  featured: boolean;
  reviews: Review[];
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface Review {
  id: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  date: string;
  text: string;
  images?: string[];
}

export const restaurants: Restaurant[] = [
  {
    id: "rest-001",
    name: "La Belle Époque",
    description: "An elegant French bistro offering classic dishes with a modern twist. The intimate setting with dim lighting and vintage décor creates the perfect ambiance for a romantic dinner or special celebration.",
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    images: [
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      "https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    ],
    cuisine: ["French", "European", "Fine Dining"],
    location: "Downtown",
    address: "123 Gourmet Avenue, New York, NY 10001",
    rating: 4.7,
    priceRange: "$$$",
    hours: {
      "Monday": "5:00 PM - 10:00 PM",
      "Tuesday": "5:00 PM - 10:00 PM",
      "Wednesday": "5:00 PM - 10:00 PM",
      "Thursday": "5:00 PM - 11:00 PM",
      "Friday": "5:00 PM - 11:00 PM",
      "Saturday": "5:00 PM - 11:00 PM",
      "Sunday": "5:00 PM - 9:00 PM"
    },
    reviewCount: 235,
    featured: true,
    reviews: [
      {
        id: "rev-001-1",
        userName: "Emily Johnson",
        userAvatar: "https://randomuser.me/api/portraits/women/12.jpg",
        rating: 5,
        date: "March 15, 2023",
        text: "The coq au vin was simply divine! The atmosphere transported me straight to Paris. Will definitely be coming back for more of that incredible chocolate soufflé.",
        images: [
          "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        ]
      },
      {
        id: "rev-001-2",
        userName: "Michael Chen",
        userAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 4,
        date: "February 22, 2023",
        text: "Excellent food and wine selection. The service was impeccable, though the portions were a bit small for the price. The escargot were the highlight of the meal."
      }
    ],
    coordinates: {
      lat: 40.7128,
      lng: -74.0060
    }
  },
  {
    id: "rest-002",
    name: "Sakura Sushi House",
    description: "Premium Japanese dining experience featuring the freshest sushi and sashimi prepared by master chefs. The minimalist interior design with authentic Japanese elements creates a serene atmosphere for enjoying traditional cuisine.",
    imageUrl: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    images: [
      "https://images.unsplash.com/photo-1611143669185-af224c5e3252?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
      "https://images.unsplash.com/photo-1562802378-063ec186a863?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
      "https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80"
    ],
    cuisine: ["Japanese", "Sushi", "Asian"],
    location: "Midtown",
    address: "456 Ocean Drive, San Francisco, CA 94102",
    rating: 4.5,
    priceRange: "$$$$",
    hours: {
      "Monday": "12:00 PM - 2:30 PM, 5:00 PM - 10:00 PM",
      "Tuesday": "12:00 PM - 2:30 PM, 5:00 PM - 10:00 PM",
      "Wednesday": "12:00 PM - 2:30 PM, 5:00 PM - 10:00 PM",
      "Thursday": "12:00 PM - 2:30 PM, 5:00 PM - 10:30 PM",
      "Friday": "12:00 PM - 2:30 PM, 5:00 PM - 11:00 PM",
      "Saturday": "5:00 PM - 11:00 PM",
      "Sunday": "5:00 PM - 10:00 PM"
    },
    reviewCount: 189,
    featured: true,
    reviews: [
      {
        id: "rev-002-1",
        userName: "David Rodriguez",
        userAvatar: "https://randomuser.me/api/portraits/men/45.jpg",
        rating: 5,
        date: "March 28, 2023",
        text: "Best omakase experience in the city. Chef Tanaka's knife skills are mesmerizing to watch and the fish quality is exceptional. The sake pairing was perfect."
      },
      {
        id: "rev-002-2",
        userName: "Sarah Kim",
        userAvatar: "https://randomuser.me/api/portraits/women/22.jpg",
        rating: 4,
        date: "March 10, 2023",
        text: "Amazing sushi, very authentic. The uni was particularly fresh and melted in my mouth. It's pricey but worth the splurge for special occasions.",
        images: [
          "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1278&q=80"
        ]
      }
    ],
    coordinates: {
      lat: 37.7749,
      lng: -122.4194
    }
  },
  {
    id: "rest-003",
    name: "Trattoria Milano",
    description: "Family-run Italian restaurant serving homemade pasta and wood-fired pizzas. The cozy interior with checkered tablecloths and the aroma of fresh garlic and basil creates an authentic Italian dining environment.",
    imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    images: [
      "https://images.unsplash.com/photo-1458644267420-66bc8a5f21e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80",
      "https://images.unsplash.com/photo-1595295333158-4742f28fbd85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
    ],
    cuisine: ["Italian", "Mediterranean", "Pizza"],
    location: "North End",
    address: "789 Pasta Lane, Boston, MA 02113",
    rating: 4.3,
    priceRange: "$$",
    hours: {
      "Monday": "Closed",
      "Tuesday": "11:30 AM - 9:30 PM",
      "Wednesday": "11:30 AM - 9:30 PM",
      "Thursday": "11:30 AM - 9:30 PM",
      "Friday": "11:30 AM - 10:30 PM",
      "Saturday": "11:30 AM - 10:30 PM",
      "Sunday": "12:00 PM - 9:00 PM"
    },
    reviewCount: 312,
    featured: false,
    reviews: [
      {
        id: "rev-003-1",
        userName: "Jessica Martinez",
        userAvatar: "https://randomuser.me/api/portraits/women/55.jpg",
        rating: 5,
        date: "April 2, 2023",
        text: "Incredible carbonara - maybe the most authentic I've had outside of Rome. The owner came to our table and shared stories about his grandmother's recipes. Such a warm, welcoming place!",
        images: [
          "https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
        ]
      },
      {
        id: "rev-003-2",
        userName: "Robert Thomson",
        userAvatar: "https://randomuser.me/api/portraits/men/67.jpg",
        rating: 3,
        date: "March 25, 2023",
        text: "The pasta was good but the service was slow. We waited almost an hour for our main courses. The tiramisu was excellent though, would come back just for that."
      }
    ],
    coordinates: {
      lat: 42.3601,
      lng: -71.0589
    }
  },
  {
    id: "rest-004",
    name: "The Spice Route",
    description: "Contemporary Indian cuisine featuring regional specialties and innovative cocktails. The restaurant boasts intricate hand-carved wooden panels, colorful textiles, and soft lighting that create an exotic and inviting atmosphere.",
    imageUrl: "https://images.unsplash.com/photo-1514412076816-d228b5c0973c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    images: [
      "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1142&q=80",
      "https://images.unsplash.com/photo-1596797038530-2c107aa4a185?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
      "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    ],
    cuisine: ["Indian", "Contemporary", "Fusion"],
    location: "West End",
    address: "101 Curry Road, Chicago, IL 60607",
    rating: 4.6,
    priceRange: "$$$",
    hours: {
      "Monday": "5:00 PM - 10:00 PM",
      "Tuesday": "5:00 PM - 10:00 PM",
      "Wednesday": "5:00 PM - 10:00 PM",
      "Thursday": "5:00 PM - 10:00 PM",
      "Friday": "5:00 PM - 11:00 PM",
      "Saturday": "4:00 PM - 11:00 PM",
      "Sunday": "4:00 PM - 9:00 PM"
    },
    reviewCount: 178,
    featured: false,
    reviews: [
      {
        id: "rev-004-1",
        userName: "Aisha Patel",
        userAvatar: "https://randomuser.me/api/portraits/women/37.jpg",
        rating: 5,
        date: "April 5, 2023",
        text: "Finally, a proper Indian restaurant that doesn't shy away from authentic spice levels! Their butter chicken had the perfect balance of creaminess and heat, and the naan was freshly made and delicious.",
        images: [
          "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        ]
      },
      {
        id: "rev-004-2",
        userName: "Thomas Wilson",
        userAvatar: "https://randomuser.me/api/portraits/men/22.jpg",
        rating: 4,
        date: "March 30, 2023",
        text: "The lamb vindaloo was spectacular - perfectly spiced and tender. The cocktail menu is creative with lots of Indian-inspired ingredients. The only downside was that it was quite noisy."
      }
    ],
    coordinates: {
      lat: 41.8781,
      lng: -87.6298
    }
  },
  {
    id: "rest-005",
    name: "Farm & Table",
    description: "A farm-to-table restaurant committed to sustainable practices and locally-sourced ingredients. The rustic-chic décor features reclaimed wood tables, mason jar lighting, and an open kitchen where guests can watch chefs prepare their meals.",
    imageUrl: "https://images.unsplash.com/photo-1540914124281-342587941389?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    images: [
      "https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1464500422302-6188776dcbf7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
      "https://images.unsplash.com/photo-1574966740793-953ad374e8ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2833&q=80"
    ],
    cuisine: ["American", "Farm-to-table", "Organic"],
    location: "Countryside",
    address: "234 Harvest Lane, Portland, OR 97205",
    rating: 4.8,
    priceRange: "$$$",
    hours: {
      "Monday": "Closed",
      "Tuesday": "Closed",
      "Wednesday": "5:00 PM - 9:00 PM",
      "Thursday": "5:00 PM - 9:00 PM",
      "Friday": "5:00 PM - 10:00 PM",
      "Saturday": "10:00 AM - 2:00 PM, 5:00 PM - 10:00 PM",
      "Sunday": "10:00 AM - 2:00 PM"
    },
    reviewCount: 203,
    featured: true,
    reviews: [
      {
        id: "rev-005-1",
        userName: "Olivia Green",
        userAvatar: "https://randomuser.me/api/portraits/women/72.jpg",
        rating: 5,
        date: "April 8, 2023",
        text: "What an incredible dining experience! You can taste the freshness in every bite. The chef's tasting menu with wine pairings was worth every penny - each course told a story about local producers.",
        images: [
          "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
          "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        ]
      },
      {
        id: "rev-005-2",
        userName: "James Peterson",
        userAvatar: "https://randomuser.me/api/portraits/men/51.jpg",
        rating: 4,
        date: "March 22, 2023",
        text: "Beautiful setting and exceptional food. The seasonal menu means there's always something new to try. Their house-made sourdough bread alone is worth the visit."
      }
    ],
    coordinates: {
      lat: 45.5152,
      lng: -122.6784
    }
  },
  {
    id: "rest-006",
    name: "Meze Mediterranean",
    description: "Vibrant tapas restaurant featuring small plates from Greece, Morocco, Spain, and Lebanon. The colorful mosaic tiles, hanging lanterns, and Mediterranean blues create a lively and inviting space for sharing food with friends.",
    imageUrl: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    images: [
      "https://images.unsplash.com/photo-1615247001958-f4bc92fa6a4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      "https://images.unsplash.com/photo-1543353071-10c8ba85a904?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1573225342350-16731dd9bf3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
    ],
    cuisine: ["Mediterranean", "Tapas", "Greek", "Spanish"],
    location: "Harbor District",
    address: "567 Olive Street, Seattle, WA 98101",
    rating: 4.4,
    priceRange: "$$",
    hours: {
      "Monday": "4:00 PM - 10:00 PM",
      "Tuesday": "4:00 PM - 10:00 PM",
      "Wednesday": "4:00 PM - 10:00 PM",
      "Thursday": "4:00 PM - 11:00 PM",
      "Friday": "4:00 PM - 11:30 PM",
      "Saturday": "12:00 PM - 11:30 PM",
      "Sunday": "12:00 PM - 9:00 PM"
    },
    reviewCount: 287,
    featured: false,
    reviews: [
      {
        id: "rev-006-1",
        userName: "Sophia Papadopoulos",
        userAvatar: "https://randomuser.me/api/portraits/women/89.jpg",
        rating: 5,
        date: "April 10, 2023",
        text: "The best mezze platter in the city! The hummus was creamy, the dolmas were perfectly seasoned, and the grilled halloumi was heavenly. Great for date night - we loved trying a bit of everything.",
        images: [
          "https://images.unsplash.com/photo-1541013406133-94ed77ee8ba8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        ]
      },
      {
        id: "rev-006-2",
        userName: "Daniel Brown",
        userAvatar: "https://randomuser.me/api/portraits/men/33.jpg",
        rating: 3,
        date: "March 18, 2023",
        text: "Good food but portions are quite small for the price. The sangria was excellent and they have a nice patio for outdoor seating. Service was a bit hit or miss."
      }
    ],
    coordinates: {
      lat: 47.6062,
      lng: -122.3321
    }
  }
];

export const getFeaturedRestaurants = (): Restaurant[] => {
  return restaurants.filter(restaurant => restaurant.featured);
};

export const getRestaurantById = (id: string): Restaurant | undefined => {
  return restaurants.find(restaurant => restaurant.id === id);
};

export const getAllRestaurants = (): Restaurant[] => {
  return [...restaurants];
};

export const getRecentReviews = (limit: number = 5): { restaurant: Restaurant, review: Review }[] => {
  const reviews: { restaurant: Restaurant, review: Review }[] = [];
  
  restaurants.forEach(restaurant => {
    restaurant.reviews.forEach(review => {
      reviews.push({ restaurant, review });
    });
  });
  
  // Sort by date (most recent first) and limit
  return reviews
    .sort((a, b) => new Date(b.review.date).getTime() - new Date(a.review.date).getTime())
    .slice(0, limit);
};
