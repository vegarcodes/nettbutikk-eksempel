import Link from "next/link";
import Image from "next/image";
import "./ProductCard.css";
import { type Product } from "@/types/Product.type";

export type ProductCardProps = {
  productItem: Product
};

export default function ProductCard({
  productItem
}: ProductCardProps) {
 return (
  <article className="product-card">
    <Image 
      src={productItem.thumbnail} 
      alt=""
      width={400}
      height={300} 
    />
    <h2>
      {productItem.title} <span className="product-card__price">{productItem.price}</span>
    </h2>
    <p>{productItem.description}</p>
    <p>
      <Link href={`/nettbutikk/${productItem.id}`}>Kjøp {productItem.title}</Link>
    </p>
  </article>
 )
}