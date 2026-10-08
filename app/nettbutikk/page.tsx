import ProductGrid from "@/components/ProductGrid/ProductGrid";
import { PRODUCT_API_ENDPOINT } from "@/constants/product-api";
import Pagination from "@/components/Pagination/Pagination";

export default async function Home() {
  const response = await fetch(PRODUCT_API_ENDPOINT);

  if (!response.ok) {
    console.log("Not OK!");
  }

  const { products, limit, skip, total } = await response.json();

  return (
    <>
      <h1>Nettbutikk</h1>
      
      <ProductGrid products={products} />
      
      <Pagination 
        pageNumber={1}
        limit={limit}
        skip={skip}
        total={total}
      />
    </>
  );
}
