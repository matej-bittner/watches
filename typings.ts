// admin
export type AllProductsType = {
  parts: { title: string } | null;
  collection: { title: string } | null;
  id: string;
  price: number;
  stock: number;
  color: string | null;
};
export type AllOrdersType = {
  id: number;
  createdAt: string;
  note: number;
  price: number;
  status: string;
};
