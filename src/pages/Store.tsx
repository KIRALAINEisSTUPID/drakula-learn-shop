import { ProductCard } from "@/components/ProductCard";

const PRODUCTS = [
  {
    id: 1,
    title: "School Backpack",
    description: "Durable and spacious backpack perfect for carrying books and supplies",
    price: 49.99,
    image: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Premium Notebook Set",
    description: "Set of 3 high-quality notebooks with premium paper",
    price: 24.99,
    image: "/placeholder.svg",
  },
  {
    id: 3,
    title: "Scientific Calculator",
    description: "Advanced calculator for math and science courses",
    price: 29.99,
    image: "/placeholder.svg",
  },
];

const Store = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold text-dracula-purple mb-8">School Store</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Store;