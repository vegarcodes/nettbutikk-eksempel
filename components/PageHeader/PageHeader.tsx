import Link from "next/link";
import Form from "next/form";
import "./PageHeader.css";
import { MagnifyingGlassIcon } from "@phosphor-icons/react/dist/ssr";

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
          className="pageheader__search"
        >
          <input 
            type="search"
            name="q"
            className="pageheader__search__input"
          />
          <button
            type="submit"
            className="pageheader__search__submit"
          >
            <MagnifyingGlassIcon />
          </button>
        </Form>
       
    </header>
  );
}