export type Category = {
  id: number;
  title: string;
};

export type MenuItem = {
  id: number;
  name: string;
  description?: string;
  price: number;
  category?: Category;
};
