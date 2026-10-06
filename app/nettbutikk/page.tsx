import ProductGrid from "@/components/ProductGrid/ProductGrid";
import ProductCard from "@/components/ProductCard/ProductCard";
import { Product } from "@/types/Product.type";
import { PRODUCT_PAGE_API_ENDPOINT } from "@/constants/product-api";
import Link from "next/link";
import Pagination from "@/components/Pagination/Pagination";

export default async function Home() {
  const response = await fetch(PRODUCT_PAGE_API_ENDPOINT);

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
      <Pagination>
        <Link href={`/nettbutikk/side/2`}>Neste side</Link>
      </Pagination>
    </>
  );
}
