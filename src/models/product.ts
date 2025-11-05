// src/product.ts
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

export const products: Product[] = [
  {
    id: 1,
    title: "Gấu bông Hachiware",
    price: 200,
    description: "Gấu bông dễ thương",
    category: "plushie",
    image:
      "https://i.pinimg.com/1200x/e0/18/04/e018049ad8d0fceb7dd245ac4f7e6c75.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 2,
    title: "Gấu bông Hachiware dỗi ",
    price: 500,
    description: "gấu bông dễ thương.",
    category: "plushie",
    image:
      "https://i.pinimg.com/736x/5e/ca/e6/5ecae6e8bc029cce27a05aee2490024f.jpg",
    rating: {
      rate: 4.1,
      count: 259,
    },
  },
  {
    id: 3,
    title: "Gấu bông Hachiware ngủ",
    price: 51,
    description: "Gấu bông dễ thương",
    category: "plushie",
    image:
      "https://i.pinimg.com/1200x/4c/a4/6f/4ca46f7320b893370d5ca9d2e796ee05.jpg",
    rating: {
      rate: 4.7,
      count: 500,
    },
  },
  {
    id: 4,
    title: "Gấu bông Hachiware biến hình",
    price: 52,
    description: "Gấu bông dễ thương",
    category: "plushie",
    image:
      "https://i.pinimg.com/736x/c7/96/8d/c7968d6dda1afb5442503a3916117bf1.jpg",
    rating: {
      rate: 2.1,
      count: 430,
    },
  },
  {
    id: 5,
    title: "Gấu bông Hachiware hello kitty ",
    price: 67,
    description: "Gấu bông dễ thương",
    category: "plushie",
    image:
      "https://i.pinimg.com/736x/2f/37/ef/2f37efe99bde2047b28c9fc1c187204f.jpg",
    rating: {
      rate: 4.6,
      count: 400,
    },
  },
  {
    id: 6,
    title: "Gấu bông Hachiware bánh mì ",
    price: 168,
    description: " Gấu bông dễ thương",
    category: "Gấu bông",
    image:
      "https://i.pinimg.com/1200x/56/8e/d0/568ed0d9980a1f820dcde8e927496de7.jpg",
    rating: {
      rate: 3.9,
      count: 70,
    },
  },
  {
    id: 7,
    title: "Gấu bông hachiware bắc cực",
    price: 89,
    description: " Gấu bông dễ thương",
    category: "Gấu bông",
    image:
      "https://i.pinimg.com/1200x/1d/66/47/1d664748dd27f83910fc9bc71b023a21.jpg",
    rating: {
      rate: 3,
      count: 400,
    },
  },
  {
    id: 8,
    title: "Gấu bông Hachiware bakery",
    price: 10.99,
    description: "gấu bông dễ thương",
    category: "Gấu bông",
    image:
      "https://i.pinimg.com/736x/56/6d/b3/566db31363222a4e5bf0b5010da42575.jpg",
    rating: {
      rate: 1.9,
      count: 100,
    },
  },
  {
    id: 9,
    title: "Gấu bông Hachiware usagi ",
    price: 64,
    description: "gấu bông dễ thương",
    category: "Gấu bông",
    image:
      "https://i.pinimg.com/1200x/91/e5/d6/91e5d6cc460f5877523fe18af71d18c6.jpg",
    rating: {
      rate: 3.3,
      count: 203,
    },
  },
  {
    id: 10,
    title: "Gấu bông Hachiware ",
    price: 109,
    description: " gấu bông dễ thương",
    category: "gấu bông ",
    image:
      "https://i.pinimg.com/1200x/fa/4d/d8/fa4dd88c32ae1fabb33ba9dcffd4e4fc.jpg",
    rating: {
      rate: 2.9,
      count: 470,
    },
  },
  {
    id: 11,
    title: "Gấu bông Hachiware usagi",
    price: 109,
    description: ".  gấu bông dễ thương",
    category: "gấu bông",
    image:
      "https://i.pinimg.com/1200x/75/a5/d4/75a5d47cf45665df29f6d8ee121511b0.jpg",
    rating: {
      rate: 4.8,
      count: 319,
    },
  },
  {
    id: 12,
    title: "Gấu bông Hachiware usagi",
    price: 114,
    description: "gấu bông dễ thương",
    category: "gấu bông",
    image:
      "https://i.pinimg.com/736x/63/d4/c6/63d4c6a9cfe669a7176524b80ac4bcdc.jpg",
    rating: {
      rate: 4.8,
      count: 400,
    },
  },
];
