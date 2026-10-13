import Pagination from "@/components/Pagination/Pagination";
import ProductGrid from "@/components/ProductGrid/ProductGrid";
import { PRODUCT_API_ENDPOINT } from "@/constants/product-api";

export default async function Home() {
  if (process.env.NODE_ENV === "development") {
    await new Promise(resolve => setTimeout(resolve, 15000));
  }
  
  const response = await fetch(PRODUCT_API_ENDPOINT);

  if (!response.ok) {
    console.log("Not OK!");
  }

  const { products, limit, total, skip } = await response.json();

  return (
    <>
      <h1>Nettbutikk</h1>

      <ProductGrid products={products} />

      <Pagination
        pageNumber={1}
        limit={limit}
        total={total}
        skip={skip}
      />
    </>
  );
}
