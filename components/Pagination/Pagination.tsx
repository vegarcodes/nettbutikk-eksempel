import Link from "next/link";
import "./Pagination.css";

export type PaginationProps = {
  pageNumber: number;
  skip: number;
  limit: number;
  total: number;
}

export default function Pagination({
  pageNumber,
  skip,
  limit,
  total
}: PaginationProps) {
  return (
    <nav className="pagination">
      <div>
        {pageNumber > 1 && (
          <Link href={`/nettbutikk/side/${pageNumber - 1}`}>Forrige side</Link>
        )}
      </div>

      <div>
        {skip + limit < total && (
          <Link href={`/nettbutikk/side/${pageNumber + 1}`}>Neste side</Link>
        )}
      </div>
    </nav>
  )
}