import { Product } from "@/types/Product.type";
import Image from "next/image";

export type ProductPageProps = {
  params: Promise<{
    id: string
  }>
};

export default async function ProductPage({ params } : ProductPageProps) {
  const { id } = await params;

  const response = await fetch(`https://dummyjson.com/products/${id}`);

  if (!response.ok) {
    
  }

  const product: Product = await response.json();

  return (
    <>
      <h1>{product.title}</h1>

      <Image src={product.thumbnail} alt="" width={800} height={600} />

      <p>
        {product.description}
      </p>

      <p>Pris: ${product.price}</p>
    </>
    
  )
}