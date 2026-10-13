import ProductGrid from "@/components/ProductGrid/ProductGrid";
import { PRODUCT_API_ENDPOINT } from "@/constants/product-api";

export type SearchPageProps = {
  searchParams: Promise<{
    q: string | undefined
  }>
};

export default async function SearchPage({
  searchParams
}: SearchPageProps) {
  const { q } = await searchParams;

    const response = await fetch(`${PRODUCT_API_ENDPOINT}/search?q=${q}`);
  
    if (!response.ok) {
      console.log("Not OK!");
    }
  
    const { products } = await response.json();

  return (
    <>
      <h1>Søk etter {q}</h1>

      {products.length === 0 && (
        <p>Ingen resultater funnet.</p>
      )}

      {products.length > 0 && (
        <ProductGrid products={products} />
      )}
      
    </>
  );
}