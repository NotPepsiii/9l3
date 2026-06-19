/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MenuItem, Review, OpeningHour } from '../types';

export const OPENING_HOURS: OpeningHour[] = [
  { day: 'Monday', openTime: '16:30', closeTime: '22:00' },
  { day: 'Tuesday', openTime: '16:30', closeTime: '22:00' },
  { day: 'Wednesday', openTime: '16:30', closeTime: '22:00' },
  { day: 'Thursday', openTime: '16:30', closeTime: '22:00' },
  { day: 'Friday', openTime: '16:30', closeTime: '22:00' },
  { day: 'Saturday', openTime: '16:30', closeTime: '22:00' },
  { day: 'Sunday', openTime: '16:30', closeTime: '22:00' },
];

export const CONTACT_INFO = {
  address: "1 St Patrick's Rd, Clondalkin, Dublin 22, D22 F662, Ireland",
  phone: "014573267",
  phoneDisplay: "(01) 457 3267",
  coordinates: { lat: 53.3224, lng: -6.3912 },
  deliveryFee: 3.50,
  minDeliveryOrder: 15.00,
  freeDeliveryThreshold: 50.00
};

export const REVIEWS: Review[] = [
  {
    id: "rev-1",
    author: "IrelandsGrub",
    rating: 5,
    source: "Google Review",
    timeAgo: "a year ago",
    content: "One of the best chippers I've had, there's a lot of duds out there but this place isn't one of them. Out the door busy, staff were very friendly, chatting, and the service was rapid."
  },
  {
    id: "rev-2",
    author: "Thomas V",
    rating: 5,
    source: "Google Review",
    timeAgo: "7 months ago",
    content: "One of the best chippers I’ve had! Never seen a chipper so busy but food was really good and great service!"
  },
  {
    id: "rev-3",
    author: "Niamh O'Connor",
    rating: 5,
    source: "Google Review",
    timeAgo: "3 months ago",
    content: "Can’t beat the 9th Lough special share box after a long week. Consistently high quality and chips are always freshly cut and perfectly crispy. Standard of Clondalkin chippers."
  },
  {
    id: "rev-4",
    author: "Declan Murphy",
    rating: 5,
    source: "Google Review",
    timeAgo: "1 month ago",
    content: "Legendary spot in Clondalkin! The Gary Burger is exceptional and the curry sauce matches the chips beautifully. Staff are superstars despite it being so busy."
  }
];

export const MENU_ITEMS: MenuItem[] = [
  // --- Party Deals ---
  {
    id: "party-meal-deal",
    name: "Party Meal Deal",
    price: 33.00,
    description: "6 Pieces of Chicken, 2 Chips, 1 Portion of Nuggets (6), 1 Portion of Cocktail Sausages (10), 1 Sauce, 1 Large Drink",
    category: "Party Deals"
  },

  // --- Specials ---
  {
    id: "spec-9th-lough-share",
    name: "The 9th Lough Share Box",
    price: 35.00,
    description: "Our signature bumper variety box ideal for sharing. Loaded with crispy tenders, sausages, mouth-watering wedges or chips, wings, onion rings, and a tub of curry/taco sauce.",
    category: "Specials"
  },
  {
    id: "spec-swifty-box",
    name: "The Swifty Box",
    price: 8.50,
    description: "Chips, Curry Sauce, Cod Portion, Chicken Fillet",
    category: "Specials",
    allergens: ["Gluten"]
  },
  {
    id: "spec-munch-box",
    name: "Munch Box",
    price: 9.50,
    description: "3 Mini Battered Sausages, 3 Chicken Wings, 3 Chicken Tenders, 3 Potato Cakes",
    category: "Specials",
    allergens: ["Gluten"]
  },
  {
    id: "spec-mad-box",
    name: "Mad Box",
    price: 8.00,
    description: "Chips, Chicken Breast, Crispy Bacon, Taco Sauce & Lettuce in a Tray",
    category: "Specials"
  },
  {
    id: "spec-odd-box",
    name: "The Odd Box",
    price: 8.50,
    description: "Steak, Chicken Fillet, Chips, Lettuce, Cabbage, Chilli & Garlic Sauce",
    category: "Specials",
    allergens: ["Gluten"]
  },
  {
    id: "spec-off-the-wall",
    name: "Off The Wall",
    price: 8.00,
    description: "Kebab Meat, Chicken Breast, Chips, Cheese, Garlic & Chilli Sauce in a Tray",
    category: "Specials",
    allergens: ["Milk"]
  },
  {
    id: "spec-chicken-balls",
    name: "Chicken Balls Special",
    price: 8.00,
    description: "4 Chicken Balls, Chips, Small Curry Sauce",
    category: "Specials",
    allergens: ["Gluten", "Celery", "Mustard"]
  },
  {
    id: "spec-stonner-kebab",
    name: "The Stonner Kebab",
    price: 6.00,
    description: "Sausage wrapped in Kebab Meat in a delicious golden batter.",
    category: "Specials",
    allergens: ["Gluten"]
  },
  {
    id: "spec-chicken-gravy",
    name: "Chicken Gravy Cup",
    price: 2.50,
    description: "Rich and flavorful hot chicken gravy.",
    category: "Specials"
  },

  // --- Chips ---
  {
    id: "chips-regular",
    name: "Chips",
    price: 4.50,
    description: "Freshly cut, double-cooked classic Irish chipper chips.",
    category: "Chips"
  },
  {
    id: "chips-taco",
    name: "Taco Chips",
    price: 8.50,
    description: "Topped with seasoned mince, cheese, and garlic-taco sauce.",
    category: "Chips",
    allergens: ["Gluten"]
  },
  {
    id: "chips-garlic",
    name: "Garlic Chips",
    price: 6.50,
    description: "Topped with rich creamy house garlic sauce.",
    category: "Chips"
  },
  {
    id: "chips-garlic-cheese",
    name: "Garlic Chips with Cheese",
    price: 8.00,
    description: "Classic chips with garlic sauce and generous grated cheddar cheese.",
    category: "Chips",
    allergens: ["Milk"]
  },
  {
    id: "chips-garlic-cheese-bacon",
    name: "Garlic Chips with Cheese & Bacon",
    price: 9.00,
    description: "Decadent chips with garlic sauce, melted cheese, and crispy bacon bits.",
    category: "Chips",
    allergens: ["Milk"]
  },
  {
    id: "chips-curry",
    name: "Curry Chips",
    price: 7.00,
    description: "Topped with our legendary classic spicy chipper curry sauce.",
    category: "Chips",
    allergens: ["Gluten", "Celery", "Mustard"]
  },
  {
    id: "chips-curry-cheese",
    name: "Curry Chips with Cheese",
    price: 8.00,
    description: "Spicy curry sauce combined with melted grated stringy cheese.",
    category: "Chips",
    allergens: ["Gluten", "Milk", "Celery", "Mustard"]
  },
  {
    id: "chips-cheese",
    name: "Cheese Chips",
    price: 7.00,
    description: "Chips topped with shredded premium cheddar cheese.",
    category: "Chips",
    allergens: ["Milk"]
  },
  {
    id: "chips-roll",
    name: "Chip Roll with Sauce",
    price: 7.00,
    description: "Fluffy roll filled with chips and your choice of house sauce.",
    category: "Chips",
    allergens: ["Gluten", "Milk"]
  },
  {
    id: "chips-steak-onions-pepper",
    name: "Chips, Steak, Onions & Pepper Sauce",
    price: 9.00,
    description: "Hearty meal of golden chips, juicy steak strips, fried onions and rich pepper sauce.",
    category: "Chips",
    allergens: ["Milk"]
  },

  // --- Burgers ---
  {
    id: "burger-9th-lough-special",
    name: "9th Lough Special Burger",
    price: 8.50,
    description: "Our signature stack burger with triple toppings, salad, and special sauce.",
    category: "Burgers"
  },
  {
    id: "burger-qtr-pounder",
    name: "Quarter Pounder",
    price: 6.00,
    category: "Burgers"
  },
  {
    id: "burger-qtr-cheese",
    name: "Quarter Pounder with Cheese",
    price: 6.50,
    category: "Burgers",
    allergens: ["Milk"]
  },
  {
    id: "burger-qtr-cheese-bacon",
    name: "Quarter Pounder with Cheese & Bacon",
    price: 8.00,
    category: "Burgers",
    allergens: ["Milk"]
  },
  {
    id: "burger-gary",
    name: "Gary Burger",
    price: 8.00,
    description: "Quarter Pounder stacked with savory Kebab Meat, Cheese, crisp Lettuce, and dynamic Chilli & Garlic Sauce.",
    category: "Burgers"
  },
  {
    id: "burger-d",
    name: "D'Burger",
    price: 8.00,
    description: "Kebab Meat, Grilled Chicken Breast, Cheese, Lettuce, Chilli & Garlic Sauce.",
    category: "Burgers"
  },
  {
    id: "burger-p",
    name: "P'Burger",
    price: 8.00,
    description: "Quarter Pounder, Grilled Chicken Breast, Cheese, Lettuce, Chilli & Garlic Sauce.",
    category: "Burgers"
  },
  {
    id: "burger-skylander",
    name: "Skylander Burger",
    price: 8.50,
    description: "Deluxe Chicken Fillet, crispy Bacon, fresh Lettuce, red Onions, double melted Cheese, Chilli & Garlic Sauce.",
    category: "Burgers",
    allergens: ["Milk"]
  },
  {
    id: "burger-radius",
    name: "Radius Burger",
    price: 9.00,
    description: "Tender Chicken, Double Beef patties, smoky Bacon, fresh Lettuce, dynamic Chilli & Garlic Sauce.",
    category: "Burgers"
  },
  {
    id: "burger-battered-cheese",
    name: "Battered Cheese Burger",
    price: 6.00,
    description: "Classic cheeseburger deep-battered to crunchy, melty perfection.",
    category: "Burgers",
    allergens: ["Gluten", "Milk"]
  },
  {
    id: "burger-battered-cheese-bun",
    name: "Battered Cheese Burger in a Bun",
    price: 8.00,
    description: "Crispy fried battered cheeseburger served inside a warm toasted bun.",
    category: "Burgers",
    allergens: ["Gluten", "Milk"]
  },
  {
    id: "burger-bun",
    name: "Bun Burger",
    price: 3.30,
    category: "Burgers",
    allergens: ["Gluten"]
  },
  {
    id: "burger-cheese",
    name: "Cheese Burger",
    price: 3.50,
    category: "Burgers",
    allergens: ["Gluten", "Milk"]
  },
  {
    id: "burger-salad",
    name: "Salad Burger",
    price: 4.00,
    category: "Burgers",
    allergens: ["Gluten"]
  },
  {
    id: "burger-double",
    name: "Double Burger",
    price: 5.50,
    category: "Burgers",
    allergens: ["Gluten"]
  },
  {
    id: "burger-chicken",
    name: "Chicken Burger",
    price: 6.00,
    category: "Burgers",
    allergens: ["Gluten"]
  },
  {
    id: "burger-chicken-fillet",
    name: "Chicken Fillet Burger",
    price: 7.50,
    description: "Premium crisp southern-fried whole chicken breast fillet with iceberg lettuce and mayonnaise.",
    category: "Burgers",
    allergens: ["Gluten"]
  },
  {
    id: "burger-whirly",
    name: "Whirly Burger",
    price: 7.50,
    category: "Burgers",
    allergens: ["Gluten"]
  },
  {
    id: "burger-kebab",
    name: "Kebab Burger",
    price: 7.50,
    description: "Shaved tender doner kebab meat layered inside a burger bun with dressing.",
    category: "Burgers",
    allergens: ["Gluten"]
  },
  {
    id: "burger-veggie",
    name: "Veggie Burger",
    price: 5.00,
    category: "Burgers",
    allergens: ["Gluten"]
  },

  // --- Meal Deals ---
  {
    id: "meal-mixed-kebab",
    name: "Mixed Kebab Meal",
    price: 16.00,
    description: "Bumper combination of shaved Doner and Chicken Kebab, served with Chips and a Drink.",
    category: "Meal Deals"
  },
  {
    id: "meal-kebab",
    name: "Kebab Meal",
    price: 14.50,
    description: "Doner or Chicken Fillet Kebab, served with fresh Chips and a soft drink.",
    category: "Meal Deals"
  },
  {
    id: "meal-wrap",
    name: "Wrap Meal",
    price: 13.50,
    description: "Doner or Chicken Wrap, served with crunchy Chips and a beverage.",
    category: "Meal Deals"
  },
  {
    id: "meal-chicken-fillet",
    name: "Chicken Fillet Burger Meal",
    price: 13.50,
    description: "Juicy Chicken Fillet Burger, chips, and a refreshing drink.",
    category: "Meal Deals"
  },
  {
    id: "meal-qtr-cheese",
    name: "Quarter Pounder Cheese Meal",
    price: 13.00,
    description: "Classic flame-grilled Qtr Pounder with melted cheese, served with chips and a drink.",
    category: "Meal Deals"
  },
  {
    id: "meal-qtr-cheese-bacon",
    name: "Quarter Pounder Cheese & Bacon Meal",
    price: 14.00,
    description: "Quarter Pounder Cheese & Smoky Bacon burger, chips, and a beverage.",
    category: "Meal Deals"
  },
  {
    id: "meal-cod",
    name: "Cod Meal Deal",
    price: 16.00,
    description: "Fresh crispy Fillet of Cod, standard side of chips, and a drink.",
    category: "Meal Deals"
  },
  {
    id: "meal-battered-sausage",
    name: "Battered Sausage Meal Deal",
    price: 9.50,
    description: "Golden battered premium pork sausages, chips, and a drink.",
    category: "Meal Deals"
  },
  {
    id: "meal-chicken-tender",
    name: "Chicken Tender Meal Deal",
    price: 12.50,
    description: "Crispy chicken breast tenders, chips, and a drink.",
    category: "Meal Deals"
  },
  {
    id: "meal-9th-lough-special",
    name: "9th Lough Special Meal Deal",
    price: 13.50,
    description: "Our signature 9th Lough burger, chips, and a refreshing drink.",
    category: "Meal Deals"
  },

  // --- Kids Menu ---
  {
    id: "kids-nuggets",
    name: "Kids Meal Chicken Nuggets",
    price: 6.50,
    description: "Golden chicken nuggets served with mini chips & Capri Sun.",
    category: "Kids Menu"
  },
  {
    id: "kids-bun-burger",
    name: "Kids Meal Bun Burger",
    price: 6.50,
    description: "Plain junior patty burger served with mini chips & Capri Sun.",
    category: "Kids Menu"
  },
  {
    id: "kids-fish-goujons",
    name: "Kids Meal Fish Goujons",
    price: 6.50,
    description: "Crispy light fish goujons served with mini chips & Capri Sun.",
    category: "Kids Menu"
  },
  {
    id: "kids-cocktail-sausages",
    name: "Kids Meal Cocktail Sausages",
    price: 6.50,
    description: "Junior serving of premium cocktail sausages, mini chips & Capri Sun.",
    category: "Kids Menu"
  },

  // --- Sauces ---
  {
    id: "sauce-curry",
    name: "Curry Sauce",
    price: 3.50,
    category: "Sauces",
    allergens: ["Gluten", "Celery", "Mustard"]
  },
  {
    id: "sauce-kebab",
    name: "Kebab Sauce",
    price: 3.50,
    category: "Sauces"
  },
  {
    id: "sauce-garlic",
    name: "Garlic Sauce",
    price: 2.80,
    category: "Sauces"
  },
  {
    id: "sauce-taco",
    name: "Taco Sauce",
    price: 2.80,
    category: "Sauces"
  },
  {
    id: "sauce-chilli",
    name: "Chilli Sauce",
    price: 2.80,
    category: "Sauces"
  },
  {
    id: "sauce-burger",
    name: "Burger Sauce",
    price: 2.80,
    category: "Sauces"
  },
  {
    id: "sauce-bbq",
    name: "BBQ Sauce",
    price: 2.80,
    category: "Sauces",
    allergens: ["Crustaceans"]
  },
  {
    id: "sauce-cajun",
    name: "Cajun Sauce",
    price: 2.80,
    category: "Sauces",
    allergens: ["Gluten"]
  },
  {
    id: "sauce-sweet-chilli",
    name: "Sweet Chilli Sauce",
    price: 2.80,
    category: "Sauces"
  },
  {
    id: "sauce-pepper",
    name: "Pepper Sauce",
    price: 2.80,
    category: "Sauces",
    allergens: ["Milk"]
  },
  {
    id: "sauce-blue-cheese",
    name: "Blue Cheese",
    price: 2.80,
    category: "Sauces",
    allergens: ["Milk"]
  },
  {
    id: "sauce-sticky-bbq",
    name: "Sticky BBQ Sauce",
    price: 2.80,
    category: "Sauces",
    allergens: ["Gluten"]
  },
  {
    id: "sauce-hot-spicy",
    name: "Hot & Spicy Sauce",
    price: 2.80,
    category: "Sauces"
  },
  {
    id: "sauce-vinegar",
    name: "Bottle of Vinegar",
    price: 4.00,
    category: "Sauces"
  },
  {
    id: "sauce-ranch",
    name: "Ranch Sauce",
    price: 2.80,
    category: "Sauces"
  },
  {
    id: "sauce-dynamite",
    name: "Dynamite Sauce",
    price: 2.50,
    category: "Sauces",
    isOutOfStock: true
  },
  {
    id: "sauce-mayo",
    name: "Tub Mayonnaise",
    price: 2.80,
    category: "Sauces"
  },
  {
    id: "sauce-chicken-gravy",
    name: "Chicken Gravy tub",
    price: 2.50,
    category: "Sauces"
  },
  {
    id: "sauce-tartare",
    name: "Tartare Sauce",
    price: 2.50,
    category: "Sauces"
  },

  // --- Wraps & Baguettes ---
  {
    id: "wrap-doner",
    name: "Doner Wrap",
    price: 6.00,
    category: "Wraps & Baguettes",
    allergens: ["Gluten"]
  },
  {
    id: "wrap-chicken",
    name: "Chicken Wrap",
    price: 6.00,
    category: "Wraps & Baguettes",
    allergens: ["Gluten"]
  },
  {
    id: "wrap-mixed",
    name: "Mixed Wrap",
    price: 7.00,
    category: "Wraps & Baguettes",
    allergens: ["Gluten"]
  },
  {
    id: "wrap-steak",
    name: "Steak Wrap",
    price: 6.00,
    category: "Wraps & Baguettes",
    allergens: ["Gluten"]
  },
  {
    id: "wrap-rib-steak",
    name: "Rib Steak Wrap",
    price: 6.00,
    category: "Wraps & Baguettes",
    allergens: ["Gluten"]
  },
  {
    id: "bag-chicken",
    name: "Chicken Baguette",
    price: 6.50,
    category: "Wraps & Baguettes",
    allergens: ["Gluten"]
  },
  {
    id: "bag-doner",
    name: "Doner Baguette",
    price: 6.50,
    category: "Wraps & Baguettes",
    allergens: ["Gluten"]
  },
  {
    id: "bag-steak",
    name: "Steak Baguette",
    price: 6.50,
    category: "Wraps & Baguettes",
    allergens: ["Gluten"]
  },
  {
    id: "bag-mixed",
    name: "Mixed Baguette",
    price: 7.50,
    category: "Wraps & Baguettes",
    allergens: ["Gluten"]
  },
  {
    id: "bag-popcorn-chicken",
    name: "Popcorn Chicken Baguette",
    price: 6.00,
    category: "Wraps & Baguettes",
    allergens: ["Gluten"]
  },

  // --- Chicken ---
  {
    id: "chk-junior",
    name: "Junior Box",
    price: 6.50,
    description: "1 Piece of fried Chicken & golden Chips.",
    category: "Chicken"
  },
  {
    id: "chk-junior-breast",
    name: "Junior Breast Box",
    price: 7.50,
    description: "1 premium crispy Breast portion of Chicken & Chips.",
    category: "Chicken"
  },
  {
    id: "chk-snack-box",
    name: "Snack Box",
    price: 8.50,
    description: "2 Pieces of traditional Southern Fried Chicken & Chips.",
    category: "Chicken"
  },
  {
    id: "chk-lunch-box",
    name: "Lunch Box",
    price: 10.50,
    description: "3 Pieces of crisp fried Chicken & Chips.",
    category: "Chicken"
  },
  {
    id: "chk-dinner-box",
    name: "Dinner Box",
    price: 13.50,
    description: "4 Pieces of delicious Southern Fried Chicken & Chips.",
    category: "Chicken"
  },
  {
    id: "chk-family-box",
    name: "Family Box",
    price: 20.00,
    description: "7 Pieces of golden Chicken & 2 snack-size Chips.",
    category: "Chicken"
  },
  {
    id: "chk-single-piece",
    name: "Chicken Leg/Wing/Thigh",
    price: 3.00,
    category: "Chicken"
  },
  {
    id: "chk-southern-breast",
    name: "Southern Fried Breast",
    price: 5.00,
    category: "Chicken"
  },
  {
    id: "chk-popcorn-box",
    name: "Popcorn Chicken Box",
    price: 7.50,
    description: "Crunchy bite-size popcorn chicken bites served atop delicious chips.",
    category: "Chicken"
  },
  {
    id: "chk-popcorn-only",
    name: "Popcorn Chicken Standard",
    price: 5.50,
    category: "Chicken",
    allergens: ["Gluten", "Milk"]
  },
  {
    id: "chk-roast-breast",
    name: "Roast Breast of Chicken",
    price: 7.00,
    category: "Chicken",
    allergens: ["Sulphites"]
  },
  {
    id: "chk-balls",
    name: "Chicken Balls",
    price: 7.00,
    description: "Golden delicious battered chicken breast balls.",
    category: "Chicken",
    allergens: ["Gluten"]
  },
  {
    id: "chk-tenders",
    name: "Chicken Tenders",
    price: 6.00,
    description: "Whole inner-fillet chicken tenders in breadcrumbs.",
    category: "Chicken",
    allergens: ["Gluten"]
  },
  {
    id: "chk-goujons-spicy",
    name: "Chicken Goujons Spicy",
    price: 6.00,
    category: "Chicken",
    allergens: ["Gluten", "Celery"]
  },
  {
    id: "chk-nuggets",
    name: "Chicken Nuggets",
    price: 4.50,
    category: "Chicken",
    allergens: ["Gluten"]
  },
  {
    id: "chk-wings-crispy",
    name: "Crispy Chicken Wings",
    price: 9.00,
    description: "Wings with deep crunch, comes with complimentary Garlic Sauce.",
    category: "Chicken",
    allergens: ["Celery"]
  },
  {
    id: "chk-wings-standard",
    name: "Chicken Wings (Tender)",
    price: 9.50,
    category: "Chicken"
  },
  {
    id: "chk-wings-boneless",
    name: "Boneless Chicken Wings",
    price: 8.50,
    category: "Chicken"
  },

  // --- Kebabs ---
  {
    id: "kebab-doner",
    name: "Doner Kebab",
    price: 9.00,
    category: "Kebabs",
    allergens: ["Gluten", "Crustaceans"]
  },
  {
    id: "kebab-taco",
    name: "Taco Kebab",
    price: 9.00,
    category: "Kebabs",
    allergens: ["Gluten"]
  },
  {
    id: "kebab-chicken-fillet",
    name: "Chicken Fillet Kebab",
    price: 9.00,
    category: "Kebabs",
    allergens: ["Gluten", "Sesame Seeds"]
  },
  {
    id: "kebab-jumbo",
    name: "Jumbo Kebab",
    price: 10.50,
    category: "Kebabs",
    allergens: ["Gluten", "Crustaceans"]
  },
  {
    id: "kebab-mixed",
    name: "Mixed Kebab",
    price: 10.50,
    category: "Kebabs",
    allergens: ["Gluten", "Crustaceans"]
  },
  {
    id: "kebab-steak",
    name: "Steak Kebab",
    price: 9.00,
    category: "Kebabs",
    allergens: ["Gluten"]
  },
  {
    id: "kebab-rib-steak",
    name: "Rib Steak Kebab",
    price: 9.00,
    category: "Kebabs",
    allergens: ["Gluten", "Crustaceans"]
  },
  {
    id: "kebab-veggie",
    name: "Veggie Kebab",
    price: 7.00,
    category: "Kebabs",
    allergens: ["Gluten"]
  },
  {
    id: "kebab-chip",
    name: "Chip Kebab",
    price: 6.50,
    category: "Kebabs",
    allergens: ["Gluten"]
  },
  {
    id: "kebab-tray",
    name: "Kebab Tray",
    price: 8.50,
    category: "Kebabs"
  },
  {
    id: "kebab-tray-steak",
    name: "Steak Kebab Tray",
    price: 8.50,
    category: "Kebabs"
  },
  {
    id: "kebab-tray-chicken",
    name: "Chicken Kebab Tray",
    price: 8.50,
    category: "Kebabs"
  },
  {
    id: "kebab-tray-mix",
    name: "Mix Kebab Tray",
    price: 9.50,
    category: "Kebabs"
  },
  {
    id: "kebab-meal-mix-standalone",
    name: "Mix Kebab Meal Box",
    price: 16.00,
    description: "Comes with Chips and a Bottle of soft drink",
    category: "Kebabs"
  },
  {
    id: "kebab-pitta",
    name: "Pitta Bread",
    price: 1.00,
    category: "Kebabs"
  },

  // --- Fish ---
  {
    id: "fish-cod-fillet",
    name: "Fresh Fillet of Cod",
    price: 9.50,
    description: "Classic golden battered premium fresh cod fillet.",
    category: "Fish",
    allergens: ["Gluten"]
  },
  {
    id: "fish-smoked-cod",
    name: "Smoked Cod",
    price: 9.50,
    category: "Fish",
    allergens: ["Gluten"]
  },
  {
    id: "fish-cod-portion",
    name: "Cod Portion",
    price: 6.00,
    category: "Fish",
    allergens: ["Gluten"]
  },
  {
    id: "fish-scampi",
    name: "Scampi",
    price: 6.50,
    category: "Fish",
    allergens: ["Gluten"]
  },
  {
    id: "fish-box",
    name: "Fish Box",
    price: 9.50,
    description: "Battered fish and fresh cut chips.",
    category: "Fish",
    allergens: ["Gluten"]
  },
  {
    id: "fish-goujons",
    name: "Fish Goujons",
    price: 6.50,
    category: "Fish"
  },

  // --- General ---
  {
    id: "gen-sausage-plain",
    name: "Plain Sausage",
    price: 2.00,
    category: "General",
    allergens: ["Gluten", "Sulphites"]
  },
  {
    id: "gen-sausage-battered",
    name: "Battered Sausage",
    price: 3.50,
    category: "General",
    allergens: ["Gluten", "Sulphites"]
  },
  {
    id: "gen-sausages-cocktail",
    name: "Cocktail Sausages",
    price: 4.50,
    category: "General",
    allergens: ["Gluten", "Sulphites"]
  },
  {
    id: "gen-sausage-box",
    name: "Sausage Box",
    price: 6.50,
    description: "Pork sausages served with chips in a container.",
    category: "General",
    allergens: ["Gluten", "Sulphites"]
  },
  {
    id: "gen-battered-sausage-box",
    name: "Mini Battered Sausage Box",
    price: 6.50,
    category: "General",
    allergens: ["Gluten", "Sulphites"]
  },
  {
    id: "gen-onion-rings",
    name: "Onion Rings",
    price: 4.00,
    category: "General",
    allergens: ["Gluten"]
  },
  {
    id: "gen-wagon-wheel",
    name: "Wagon Wheel Onion Ring",
    price: 2.50,
    category: "General",
    allergens: ["Gluten"]
  },
  {
    id: "gen-potato-cakes",
    name: "Potato Cakes",
    price: 4.50,
    category: "General",
    allergens: ["Gluten"]
  },
  {
    id: "gen-battered-mushrooms",
    name: "Battered Mushrooms",
    price: 4.50,
    category: "General",
    allergens: ["Gluten"]
  },
  {
    id: "gen-garlic-mushrooms",
    name: "Garlic Mushrooms",
    price: 5.00,
    category: "General",
    allergens: ["Gluten"]
  },
  {
    id: "gen-battered-burger",
    name: "Battered Burger",
    price: 4.50,
    category: "General",
    allergens: ["Gluten", "Crustaceans", "Milk"]
  },
  {
    id: "gen-spice-burger",
    name: "Spice Burger",
    price: 4.00,
    description: "Legendary Irish spicy minced beef & cereal burger deep-fried.",
    category: "General",
    allergens: ["Gluten", "Crustaceans"]
  },
  {
    id: "gen-curry-roll",
    name: "Curry Roll",
    price: 4.50,
    category: "General",
    allergens: ["Gluten", "Mustard"]
  },
  {
    id: "gen-rib-steak",
    name: "Rib Steak Stack",
    price: 3.00,
    category: "General",
    allergens: ["Crustaceans"]
  },
  {
    id: "gen-rib-roll",
    name: "Rib Roll",
    price: 5.00,
    category: "General",
    allergens: ["Gluten", "Crustaceans"]
  },
  {
    id: "gen-hot-dog",
    name: "Hot Dog",
    price: 5.00,
    category: "General",
    allergens: ["Gluten"]
  },
  {
    id: "gen-chilli-dog",
    name: "Chilli Dog",
    price: 5.00,
    category: "General",
    allergens: ["Gluten"]
  },
  {
    id: "gen-spring-roll",
    name: "Spring Roll",
    price: 5.00,
    category: "General",
    allergens: ["Gluten", "Crustaceans", "Celery"]
  },
  {
    id: "gen-steak-kidney",
    name: "Steak & Kidney Pie",
    price: 4.00,
    category: "General",
    allergens: ["Gluten", "Milk"]
  },

  // --- Drinks ---
  {
    id: "drk-cola",
    name: "Coca-Cola",
    price: 2.35,
    category: "Drinks"
  },
  {
    id: "drk-diet-cola",
    name: "Diet Coke",
    price: 2.35,
    category: "Drinks"
  },
  {
    id: "drk-zero-cola",
    name: "Coke Zero",
    price: 2.35,
    category: "Drinks"
  },
  {
    id: "drk-fanta-orange",
    name: "Fanta Orange",
    price: 2.35,
    category: "Drinks"
  },
  {
    id: "drk-fanta-lemon",
    name: "Fanta Lemon Can",
    price: 2.35,
    description: "Includes €0.15 DRS, 330ml Can",
    category: "Drinks"
  },
  {
    id: "drk-7up",
    name: "7Up",
    price: 2.00,
    category: "Drinks"
  },
  {
    id: "drk-club-orange",
    name: "Club Orange Bottle",
    price: 2.95,
    description: "Includes €0.15 DRS, 500ml Bottle",
    category: "Drinks"
  },
  {
    id: "drk-diet-7up",
    name: "Diet 7Up Bottle",
    price: 2.95,
    description: "Includes €0.15 DRS, 500ml Bottle",
    category: "Drinks"
  },
  {
    id: "drk-lucozade",
    name: "Lucozade ENERG",
    price: 2.80,
    category: "Drinks"
  },
  {
    id: "drk-rock-shandy",
    name: "Rock Shandy Bottle",
    price: 2.95,
    description: "Includes €0.15 DRS, 500ml Bottle",
    category: "Drinks"
  },
  {
    id: "drk-water",
    name: "Mineral Water",
    price: 2.15,
    description: "Includes €0.15 DRS",
    category: "Drinks"
  },
  {
    id: "drk-capri-sun",
    name: "Capri Sun",
    price: 1.50,
    category: "Drinks"
  },
  {
    id: "drk-fanta-exotic",
    name: "Fanta Exotic Can",
    price: 2.50,
    description: "330ml Can",
    category: "Drinks"
  }
];

export const CATEGORIES = [
  "Party Deals",
  "Specials",
  "Chips",
  "Burgers",
  "Meal Deals",
  "Wraps & Baguettes",
  "Chicken",
  "Kebabs",
  "Fish",
  "Kids Menu",
  "General",
  "Sauces",
  "Drinks"
];

export const ALLERGENS = [
  "Gluten",
  "Milk",
  "Celery",
  "Mustard",
  "Crustaceans",
  "Sulphites",
  "Sesame Seeds"
];
