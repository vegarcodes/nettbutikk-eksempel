import ProductGrid from "@/components/ProductGrid/ProductGrid";
import { PRODUCT_API_ENDPOINT } from "@/constants/product-api";

export type SearchPageProps = {
  searchParams: Promise<{ 
    q: string | undefined
  }>
}

export default async function SearchPage({
  searchParams
}: SearchPageProps) {
  const { q } = await searchParams;

  if (!q) {
    throw new Error("Søketekst er tom!");
  }

  const response = await fetch(`${PRODUCT_API_ENDPOINT}/search?q=${encodeURIComponent(q)}`);

  if (!response.ok) {
    throw new Error("Noe gikk galt i henting fra API");
  }

  const { products } = await response.json();

  return (
    <>
      <h1>Søk: {q}</h1>
      <ProductGrid products={products} />
    </>
  )
}