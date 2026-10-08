import { Product } from "@/types/Product.type";
import "./ProductGrid.css";
import ProductCard from "@/components/ProductCard/ProductCard";

export type ProductGridProps = {
  products: Product[]
}

export default function ProductGrid({
  products
}: ProductGridProps) {
  return (
    <section className="product-grid">
      {products.map((item: Product) => (
          <ProductCard 
            key={item.id}
            productItem={item}
          />
        ))}
    </section>
  )
}