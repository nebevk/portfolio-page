import Link from "next/link";

const Footer = () => (
  <footer className="w-full py-3 bg-black text-center text-white ">
    <div className="mb-2 flex items-center justify-center gap-5 text-sm font-light">
      Get printable CV{" "}
      <Link href="/cv-slo">
        <button className="px-3 py-0 bg-transparent border border-blue-700 hover:bg-blue-700 rounded text-white font-light text-sm">
          SLO
        </button>
      </Link>
      <Link href="/cv-eng">
        <button className="px-3 py-0 bg-transparent border border-blue-700 hover:bg-blue-700 rounded text-white font-light text-sm">
          ENG
        </button>
      </Link>
    </div>
  </footer>
);

export default Footer;
