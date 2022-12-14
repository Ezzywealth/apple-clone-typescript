type LayoutType = {
  children: JSX.Element;
  title: string;
};

interface ButtonProps {
  title: string;
  width?: string;
  padding?: string;
  loading?: boolean;
  noIcon?: boolean;
  onClick?: () => void;
}

interface CategoryProps {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _type: "category";
  slug: {
    _type: "slug";
    current: string;
  };
  title: string;
}

interface Image {
  _key: string;
  _type: "image";
  asset: {
    url: string;
  };
}
interface ProductsProps {
  _id: string;
  stock: number;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _type: "product";
  categories: {
    _ref: string;
    _type: "reference";
  };
  price: number;
  image: Image[];
  slug: {
    _type: "slug";
    current: string;
  };
  title: string;
  description?: string;
  quantityOrdered: number;
}

interface CatProps {
  categories: CategoryProps[];
  products: ProductsProps[];
}

type Data = {
  products: ProductsProps[];
  cartItems: ProductsProps[];
};
type Data3 = {
  products: ProductsProps[];
};
type Data2 = {
  cartItems: ProductsProps[];
};

interface ActiveProductsProps {
  activeProducts: ProductsProps[];
}

interface StripeProduct {
  id: string;
  amount_discount: number;
  amount_subtotal: number;
  amount_tax: number;
  currency: string;
  description: string;
  object: string;
  quantity: number;
  price: {
    unit_amount: number;
  };
}
