import Pagination from "@/components/Pagination/Pagination";
import ProductCard from "@/components/ProductCard/ProductCard";
import ProductGrid from "@/components/ProductGrid/ProductGrid";
import { 
  PRODUCT_PAGE_SIZE, 
  PRODUCT_PAGE_API_ENDPOINT 
} from "@/constants/product-api";
import { Product } from "@/types/Product.type";
import Link from "next/link";

export type ProductPaginationPageProps = {
  params: Promise<{
    pageNumber: string;
  }>
}

export default async function ProductPaginationPage({ 
  params 
}: ProductPaginationPageProps) {
  const { pageNumber } = await params;

  const response = await fetch(`${PRODUCT_PAGE_API_ENDPOINT}?skip=${PRODUCT_PAGE_SIZE * (parseInt(pageNumber) - 1)}`);

  if (!response.ok) {
    throw new Error("Noe gikk galt i henting fra API!");
  }

  const { products, total, skip, limit } = await response.json();

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
        {parseInt(pageNumber) > 1 && (
          <Link href={`/nettbutikk/side/${parseInt(pageNumber) - 1}`}>Forrige side</Link>
        )}
        
        {total > skip + limit && (
          <Link href={`/nettbutikk/side/${parseInt(pageNumber) + 1}`}>Neste side</Link>
        )}
      </Pagination>
    </>
    
  )
}