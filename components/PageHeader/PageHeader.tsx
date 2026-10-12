import Link from "next/link";
import Form from "next/form";
import { MagnifyingGlassIcon } from "@phosphor-icons/react/dist/ssr";
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
        <Form
          action="/sok"
          formMethod="GET"
        >
          <div className="pageheader__search">
            <input 
              type="text" 
              className="pageheader__search__input"
              name="q" 
            />

            <button 
              type="submit" 
              className="pageheader__search__button"
            >
              <MagnifyingGlassIcon />
            </button>
          </div>
        </Form>

    </header>
  );
}