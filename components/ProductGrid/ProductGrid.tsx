import "./ProductGrid.css";

export type ProductGridProps = {
  children: React.ReactNode
}

export default function ProductGrid({
  children
}: ProductGridProps) {
  return (
    <section className="product-grid">
      {children}
    </section>
  )
}