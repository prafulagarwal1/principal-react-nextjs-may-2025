import Link from "next/link";

export default function Logo() {
    return (
        <Link
            href="/"
            className="text-xl font-bold tracking-wide uppercase hidden md:block"
        >
            Mantra
        </Link>
    );
}