import ProductGrid from "@/components/ProductGrid/ProductGrid";
import ProductCard from "@/components/ProductCard/ProductCard";
import { Product } from "@/types/Product.type";

export default async function Home() {
  const response = await fetch("https://dummyjson.com/products");

  if (!response.ok) {
    console.log("Not OK!");
  }

  const { products } = await response.json();

  return (
    <>
      <h1>Nettbutikk</h1>
      <ProductGrid>
        {products.map((item: Product) => (
          <ProductCard 
            key={item.id}
            productItem={item}
          />
        ))}
      </ProductGrid>
    </>
  );
}
