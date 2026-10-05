import Link from "next/link";
import "./PageHeader.css";

export default function PageHeader() {
  return (
    <header className="pageheader">
        <h1 className="pageheader__logo">
          Hansen Kjøtt & Data
        </h1>
        <nav className="pageheader__nav">
          <Link href={"/"}>Hjem</Link>
          <Link href={"/om-oss"}>Om oss</Link>
          <Link href={"/nettbutikk"}>Nettbutikk</Link>
        </nav>
    </header>
  );
}