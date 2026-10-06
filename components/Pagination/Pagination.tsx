import "./Pagination.css";

export type PaginationProps = {
  children: React.ReactNode
};

export default function Pagination({
  children
}: PaginationProps) {
  return (
    <nav className="pagination">
      {children}
    </nav>
  )
}