import ProductGrid from "@/components/ProductGrid/ProductGrid";
import { PRODUCT_API_ENDPOINT, PRODUCTS_PER_PAGE } from "@/constants/product-api";
import Pagination from "@/components/Pagination/Pagination";

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

  const { products, total, skip, limit } = await response.json();

  return (
    <>
      <h1>Nettbutikk, side {pageNumber}</h1>

      <ProductGrid products={products} />

      <Pagination
        pageNumber={parseInt(pageNumber)}
        limit={limit}
        total={total}
        skip={skip}
      />
    </>
  );
}