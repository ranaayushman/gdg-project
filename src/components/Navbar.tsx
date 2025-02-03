"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun, User, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

// Shadcn UI Imports
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Separate home-only links and regular links
const HOME_ONLY_LINKS = [
  { href: "#about", label: "About Us" },
  { href: "#testimonials", label: "Testimonials" },
];

const REGULAR_LINKS = [
  { href: "/", label: "Home" },
  { href: "/members", label: "Members" },
  { href: "/events", label: "Events" },
  { href: "/contact-us", label: "Contact us" },
  { href: "/recruitment", label: "Recruitment" },
];

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { data: session } = useSession();
  const isHomePage = pathname === "/";

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Get current navigation links based on the page
  const currentNavLinks = useMemo(() => {
    return isHomePage ? [...REGULAR_LINKS, ...HOME_ONLY_LINKS] : REGULAR_LINKS;
  }, [isHomePage]);

  // Handle smooth scroll for anchor links
  const handleLinkClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        setIsMenuOpen(false);
      }
    }
  }, []);

  const toggleDarkMode = useCallback(() => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("darkMode", JSON.stringify(newMode));
  }, [isDarkMode]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    setIsScrolled(scrollY > 20);

    if (scrollY > 50 && isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

    let initialDarkMode = prefersDarkMode;

    try {
      if (savedDarkMode !== null) {
        const parsedMode = JSON.parse(savedDarkMode);
        if (typeof parsedMode === "boolean") {
          initialDarkMode = parsedMode;
        }
      }
    } catch (error) {
      console.warn("Failed to parse dark mode preference:", error);
    }

    setIsDarkMode(initialDarkMode);
    document.documentElement.classList.toggle("dark", initialDarkMode);

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const navbarBackgroundClasses = useMemo(() => {
    if (isScrolled) {
      return isDarkMode
        ? "bg-black/60 backdrop-blur-xl"
        : "bg-white/70 backdrop-blur-xl";
    }
    return isDarkMode
      ? "bg-black"
      : "bg-gradient-to-r from-white via-white/95 to-white";
  }, [isScrolled, isDarkMode]);

  const getLinkClasses = useCallback(
    (href: string) => {
      const isActive = pathname === href;
      return `
        relative px-4 py-2 rounded-xl text-sm font-medium
        group transition-all duration-300 ease-in-out
        ${
          isActive
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800/50"
        }
        ${isDarkMode ? "dark:hover:border-blue-400 dark:hover:border" : ""}
      `;
    },
    [pathname, isDarkMode]
  );

  const getLinkTextClasses = useCallback(
    (href: string) => {
      return pathname === href
        ? "text-white"
        : isDarkMode
        ? "text-gray-100"
        : "text-gray-800";
    },
    [pathname, isDarkMode]
  );

  const mobileMenuBackgroundClasses = useMemo(() => {
    return `
      p-4 my-2 rounded-2xl
      ${
        isDarkMode
          ? "bg-black/90 border border-gray-800/50"
          : "bg-white/90 border border-gray-200/20"
      }
      backdrop-blur-xl
      transform transition-all duration-500 ease-in-out
      ${
        isMenuOpen
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-4 scale-95"
      }
    `;
  }, [isDarkMode, isMenuOpen]);

  const handleSignOut = () => {
    signOut({ callbackUrl: "/" });
  };

  return (
    <nav
      className={`
        fixed top-0 w-full transition-all duration-300 z-50
        ${navbarBackgroundClasses}
      `}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Navbar Container */}
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                height={170}
                width={180}
                src="/assets/logo-gdg.png"
                alt="Google Developer Groups"
                className="h-auto w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-2">
            {currentNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`
                  ${getLinkClasses(link.href)}
                  ${!isDarkMode ? "group" : ""}
                `}
              >
                <span
                  className={`
                    relative z-10 
                    ${getLinkTextClasses(link.href)}
                    ${!isDarkMode && pathname !== link.href ? "nav-link-glaze" : ""}
                  `}
                >
                  {link.label}
                </span>
              </Link>
            ))}

            {/* User Profile with Shadcn Dropdown */}
            {session ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-2 focus:outline-none">
                    {session.user?.image && (
                      <Image
                        src={session.user.image}
                        alt="Profile"
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                    )}
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                      {session.user?.name || "User"}
                    </span>
                    <ChevronDown className="h-4 w-4 text-gray-500 dark:text-gray-300" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onSelect={() => router.push(`/user/${session.user?.id}`)}
                    className="cursor-pointer"
                  >
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onSelect={handleSignOut}
                    className="cursor-pointer text-red-600 focus:text-red-700"
                  >
                    Sign out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <button
                onClick={() => router.push("/Login")}
                className="flex items-center justify-center h-8 w-8 bg-gray-200 dark:bg-gray-800 rounded-full"
              >
                <User className="h-5 w-5 text-gray-700 dark:text-gray-200" />
              </button>
            )}

            {/* Theme Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleDarkMode}
                className={`
                  p-2 rounded-full transition-all duration-500 
                  bg-transparent
                  text-gray-700 dark:text-gray-200
                `}
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <Sun className="h-5 w-5 text-yellow-400 transition-transform duration-300 hover:rotate-45" />
                ) : (
                  <Moon className="h-5 w-5 text-blue-600 transition-transform duration-300 hover:rotate-45" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-2">
            {/* Mobile Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`
                p-2 rounded-full transition-all duration-500 relative group
                bg-transparent
              `}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-yellow-400 transition-transform duration-300 hover:rotate-45" />
              ) : (
                <Moon className="h-5 w-5 text-blue-600 transition-transform duration-300 hover:rotate-45" />
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMenu}
              className={`
                p-2 rounded-full transition-all duration-300 relative overflow-hidden
                bg-transparent
              `}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <span
                  className={`
                    absolute left-0 w-6 h-0.5 
                    ${isDarkMode ? "bg-white" : "bg-black"}
                    transform transition-all duration-300
                    ${isMenuOpen ? "top-3 rotate-45" : "top-2"}
                  `}
                />
                <span
                  className={`
                    absolute left-0 top-3 w-6 h-0.5 
                    ${isDarkMode ? "bg-white" : "bg-black"}
                    transform transition-all duration-300
                    ${isMenuOpen ? "opacity-0" : "opacity-100"}
                  `}
                />
                <span
                  className={`
                    absolute left-0 w-6 h-0.5 
                    ${isDarkMode ? "bg-white" : "bg-black"}
                    transform transition-all duration-300
                    ${isMenuOpen ? "top-3 -rotate-45" : "top-4"}
                  `}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`
            md:hidden overflow-hidden transition-all duration-500 ease-in-out
            ${isMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <div className={mobileMenuBackgroundClasses}>
            {currentNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  handleLinkClick(e, link.href);
                  toggleMenu();
                }}
                className={`
                  block px-4 py-3 rounded-xl text-base font-medium
                  transition-all duration-300 mb-2 last:mb-0
                  ${
                    pathname === link.href
                      ? "bg-blue-600 text-white"
                      : isDarkMode
                      ? "text-gray-100 hover:bg-gray-800/50 hover:border hover:border-blue-400"
                      : "text-gray-800 hover:bg-gray-100"
                  }
                  transform transition-transform duration-300 hover:scale-[1.02]
                `}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;