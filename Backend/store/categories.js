const categories = [
  {
    id: 1,
    name: "MostPopular",
    icon: "floor-lamp",
    backgroundColor: "#fc5c65",
    color: "white"
  },
  {
    id: 2,
    name: "Academic",
    icon: "car",
    backgroundColor: "#fd9644",
    color: "white"
  },
  {
    id: 3,
    name: "Art",
    icon: "camera",
    backgroundColor: "#fed330",
    color: "white"
  },
  {
    id: 4,
    name: "Technology",
    icon: "cards",
    backgroundColor: "#26de81",
    color: "white"
  },
  {
    id: 5,
    name: "Fictional",
    icon: "shoe-heel",
    backgroundColor: "#2bcbba",
    color: "white"
  },
  {
    id: 6,
    name: "Science",
    icon: "basketball",
    backgroundColor: "#45aaf2",
    color: "white"
  },
  {
    id: 7,
    name: "Biography",
    icon: "headphones",
    backgroundColor: "#4b7bec",
    color: "white"
  },
  {
    id: 8,
    name: "Personal Growth",
    icon: "book-open-variant",
    backgroundColor: "#a55eea",
    color: "white"
  },
  {
    id: 9,
    name: "Business",
    icon: "application",
    backgroundColor: "#778ca3",
    color: "white"
  }
];

const getCategories = () => categories;

const getCategory = id => categories.find(c => c.id === id);

module.exports = {
  getCategories,
  getCategory
};
