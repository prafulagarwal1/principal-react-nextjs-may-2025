import Logo from "./logo/logo";
import DesktopNavigation from "./desktop-navigation/desktop-navigation";
import MobileNavigation from "./mobile-navigation/mobile-navigation";

// server component
export default function MenuNavigation() {
    return (
        <header className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 items-center justify-between h-16 hidden md:flex">
                {/* Logo (server component) */}
                <Logo />

                {/* Desktop Menu (server component) */}
                <DesktopNavigation />
            </div>

            {/* Mobile Menu (client component) */}
            <MobileNavigation />
        </header>
    );
}