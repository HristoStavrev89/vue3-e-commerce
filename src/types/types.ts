export type Product = {
    id: number;
    name: string;
    price: number;
    description: string;
    discount: number;
    rating: number;
    category: CategoryName;
    image: string;
}

export type CategoryItem = {
    name: CategoryName;
    title: string;
    image: string;
    alt: string;
}

export type CategoryName =
  | "CPU"
  | "GPU"
  | "Memory"
  | "Storage"
  | "Motherboard"
  | "PSU"
  | "Case"
  | "Cooling";