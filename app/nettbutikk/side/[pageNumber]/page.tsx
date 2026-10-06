import ProductGrid from "@/components/ProductGrid/ProductGrid";
import ProductCard from "@/components/ProductCard/ProductCard";
import { Product } from "@/types/Product.type";
import { PRODUCT_API_ENDPOINT, PRODUCTS_PER_PAGE } from "@/constants/product-api";
import Pagination from "@/components/Pagination/Pagination";
import Link from "next/link";

export type PaginatedStorePageProps = {
  params: Promise<{ pageNumber: string }>
}

export default async function PaginatedStorePage({ 
  params 
}: PaginatedStorePageProps) {
  const { pageNumber } = await params;
  const skipAmount = PRODUCTS_PER_PAGE * (parseInt(pageNumber) - 1);

  if (isNaN(skipAmount)) {
    throw new Error("skipAmount er ikke et tall!");
  }

  const response = await fetch(`${PRODUCT_API_ENDPOINT}?skip=${skipAmount}`);

  if (!response.ok) {
    console.log("Not OK!");
  }

  const { products } = await response.json();

  return (
    <>
      <h1>Nettbutikk, side {pageNumber}</h1>
      <ProductGrid>
        {products.map((item: Product) => (
          <ProductCard 
            key={item.id}
            productItem={item}
          />
        ))}
      </ProductGrid>
      <Pagination>
        <Link href={`/nettbutikk/side/${parseInt(pageNumber) - 1}`}>Forrige side</Link>
        <Link href={`/nettbutikk/side/${parseInt(pageNumber) + 1}`}>Neste side</Link>
      </Pagination>
    </>
  );
}