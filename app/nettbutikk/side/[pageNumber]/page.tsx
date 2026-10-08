import Pagination from "@/components/Pagination/Pagination";
import ProductGrid from "@/components/ProductGrid/ProductGrid";
import { PRODUCT_API_ENDPOINT, PRODUCTS_PER_PAGE } from "@/constants/product-api";

export type PaginatedStorePageProps = {
  params: Promise<{ pageNumber: string }>
}

export default async function PaginatedStorePage({ 
  params 
} : PaginatedStorePageProps) {
  const { pageNumber } = await params;

  const productsToSkip = PRODUCTS_PER_PAGE * (parseInt(pageNumber) - 1);

  if (isNaN(productsToSkip)) {
    throw new Error("Feil: sidenummeret er ikke et tall!");
  }

  const response = await fetch(`${PRODUCT_API_ENDPOINT}?skip=${productsToSkip}`);

  if (!response.ok) {
    throw new Error("Kunne ikke hente data fra endepunktet.");
  }

  const { products, total, skip, limit } = await response.json();

  return (
    <>
      <h1>Nettbutikk, side {pageNumber}</h1>

      <ProductGrid products={products} />

      <Pagination 
        pageNumber={parseInt(pageNumber)}
        limit={limit}
        skip={skip}
        total={total}
      />
    </>
  )
}