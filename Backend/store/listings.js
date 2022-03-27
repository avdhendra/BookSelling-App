const listings = [
  {
    id: 201,
    title: "Harry Potter and Sorccer Stone",
    images: [{ fileName: "harry1" }],
    price: 30,
    rating: 4.6,
    categoryId: 5,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 3,
    title: "Harry Potter and the Chamber",
    images: [{ fileName: "harry2" }],
    categoryId: 1,
    rating:4.7,
    price: 45,
    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 1,
    title: "Harry Potter and the Prisinor of Askaban",
    description:
      "I'm selling my furniture at a discount price. Pick up at Venice. DM me asap.",
    images: [
      { fileName: "harry3" },
         ],
    price: 48,
    rating:4.8,
    categoryId: 1,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 2,
    title: "Harry Potter and the Deathly Hallows",
    images: [{ fileName: "harry4" }],
    categoryId: 5,
    rating:4.8,
    price: 48,
    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 102,
    title: "Harry Potter and the Cursed Child",
    images: [{ fileName: "harry5" }],
    price: 50,
    rating:4.8,
    categoryId: 3,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 101,
    title: "The Chronicle of Narnia",
    images: [{ fileName: "Narnia1" }],
    price: 50,
    rating:4.9,
    categoryId: 3,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 4,
    title: "The Chronicle of Narnia",
    
    images: [{ fileName: "Narnia2" }],
    categoryId: 1,
    price: 40,
    rating:4.2,
    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 6,
    title: "The Chronicle of Narnia",
    images: [{ fileName: "Narnia3" }],
    categoryId: 5,
    price: 50,
    rating:4.1,
    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
];

const addListing = (listing) => {
  listing.id = listings.length + 1;
  listings.push(listing);
};

const getListings = () => listings;

const getListing = (id) => listings.find((listing) => listing.id === id);

const filterListings = (predicate) => listings.filter(predicate);

module.exports = {
  addListing,
  getListings,
  getListing,
  filterListings,
};
