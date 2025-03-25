"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Menu } from "lucide-react";
import Image from "next/image";
import { ModeToggle } from "./ModeToggle";

const navItems = ["How it works", "Features", "Blueprints", "Company"];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-500 container mx-20 mt-4 ${
        isScrolled
          ? "bg-white dark:bg-black/40 dark:border-2 backdrop-blur-md duration-500 shadow-md mt-4 rounded-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-3xl font-bold tracking-tighter">
            <Image
              src="https://xwipmlfvxtqnizhwoppi.supabase.co/storage/v1/object/public/logo//400dpiLogoCropped.png"
              alt="logo"
              width={30}
              height={30}
            />
          </Link>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu />
            </Button>
          </div>
          <nav
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:block absolute md:relative top-full left-0 w-full md:w-auto bg-white md:bg-transparent`}
          >
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 p-4 md:p-0">
              {navItems.map((item) => (
                <li key={item}>
                  <Link
                    href="#howitworks"
                    className="text-md font-medium hover:text-gray-700"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-1">
          <ModeToggle />
          <Button variant={"outline"} size={"icon"}>
            <Link href={"https://x.com/LeerooAI"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1200"
                height="1227"
                fill="none"
                viewBox="0 0 1200 1227"
                className="w-4 h-4"
              >
                <title>X</title>
                <path
                  fill="currentColor"
                  d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"
                />
              </svg>
            </Link>
          </Button>
          <Button variant={"outline"} size={"icon"}>
            <Link href={"https://github.com/Leeroo-AI"}>
              <Github />
            </Link>
          </Button>
          <Link href={"https://platform.leeroo.com"} target="_blank">
            <Button className="cursor-pointer font-medium">Get started</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
