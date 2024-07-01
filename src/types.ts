export type Category = {
  id: string;
  name: string;
  picUrl: string;
};

export type Variant = {
  color: string;
  count: number;
  size: number;
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  description: string;
  short_description: string;
  price: number;
  old_price: number;
  page_title: string;
  meta_description: string;
  category: Category;
  tags: string[];
  images: string[];
  variants: Variant[];
};
