import Link from "next/link";
import "./Pagination.css";

export type PaginationProps = {
  pageNumber: number;
  total: number;
  skip: number;
  limit: number;
}

export default function Pagination({
  pageNumber,
  total,
  skip,
  limit
}: PaginationProps) {
  return (
    <nav className="pagination">
      <div>
        {pageNumber >= 2 && (
          <Link
            href={`/nettbutikk/side/${pageNumber - 1}`}>
              Forrige side
          </Link>
        )}
      </div>

      <div>
        {total > (skip + limit) && (
          <Link 
            href={`/nettbutikk/side/${pageNumber + 1}`}>
              Neste side
          </Link>
        )}
      </div>
    </nav>
  );
}