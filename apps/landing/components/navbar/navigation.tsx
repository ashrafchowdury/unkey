import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import { PrimaryButton, SecondaryButton } from "../button";
import { DesktopNavLink, MobileNavLink } from "./link";

export function Navigation() {
  return (
    <nav className="container flex items-center justify-between h-20 mx-auto ">
      <div className="flex items-center justify-between w-full sm:w-auto sm:gap-12 lg:gap-20">
        <Link href="/">
          <Logo className="min-w-[50px]" />
        </Link>
        <MobileLinks className="md:hidden" />
        <DesktopLinks className="hidden md:flex" />
      </div>
      <div className="hidden sm:flex">
        <Link href="/auth/sign-up">
          <SecondaryButton
            label="Create Account"
            IconRight={ChevronRight}
            className="h-8 text-sm"
          />
        </Link>
        <Link href="/app">
          <PrimaryButton label="Sign In" IconRight={ChevronRight} className="h-8" />
        </Link>
      </div>
    </nav>
  );
}

const MobileLinks: React.FC<{ className: string }> = ({ className }) => (
  <div className={className}>
    <Drawer>
      <DrawerTrigger asChild>
        <button
          type="button"
          className="flex items-center justify-center h-8 gap-2 px-3 py-2 mr-3 text-sm duration-150 text-white/60 hover:text-white"
        >
          Menu
          <ChevronDown className="w-4 h-4 relative top-[1px]" />
        </button>
      </DrawerTrigger>
      <DrawerContent className="bg-black/90">
        <DrawerHeader className="flex justify-center">
          <Logo />
        </DrawerHeader>
        <div className="relative w-full mx-auto antialiased">
          <ul className="flex flex-col px-8 divide-y divide-white/25">
            <MobileNavLink href="/" label="Home" />
            <MobileNavLink href="/about" label="About" />
            <MobileNavLink href="/blog" label="Blog" />
            <MobileNavLink href="/pricing" label="Pricing" />
            <MobileNavLink href="/changelog" label="Changelog" />
            <MobileNavLink href="/docs" label="Docs" />
          </ul>
        </div>
        <DrawerFooter>
          <Link href="/app">
            <PrimaryButton
              label="Sign In"
              IconRight={ChevronRight}
              className="flex justify-center w-full text-center"
            />
          </Link>
          <DrawerClose asChild>
            <button
              type="button"
              className={cn(
                "px-4 duration-500 text-white/75 hover:text-white h-10 border rounded-lg text-center bg-black",
                className,
              )}
            >
              Close
            </button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  </div>
);

const DesktopLinks: React.FC<{ className: string }> = ({ className }) => (
  <ul className={cn("items-center hidden gap-8 md:flex xl:gap-12", className)}>
    <DesktopNavLink href="/about" label="About" />
    <DesktopNavLink href="/blog" label="Blog" />
    <DesktopNavLink href="/pricing" label="Pricing" />
    <DesktopNavLink href="/changelog" label="Changelog" />
    <DesktopNavLink href="/docs" label="Docs" />
  </ul>
);

const Logo: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="93"
    height="40"
    viewBox="0 0 93 40"
  >
    <path
      d="M10.8 30.3C4.8 30.3 1.38 27.12 1.38 21.66V9.9H4.59V21.45C4.59 25.5 6.39 27.18 10.8 27.18C15.21 27.18 17.01 25.5 17.01 21.45V9.9H20.25V21.66C20.25 27.12 16.83 30.3 10.8 30.3ZM26.3611 30H23.1211V15.09H26.0911V19.71H26.3011C26.7511 17.19 28.7311 14.79 32.5111 14.79C36.6511 14.79 38.6911 17.58 38.6911 21.03V30H35.4511V21.9C35.4511 19.11 34.1911 17.7 31.1011 17.7C27.8311 17.7 26.3611 19.38 26.3611 22.62V30ZM44.8181 30H41.5781V9.9H44.8181V21H49.0781L53.5481 15.09H57.3281L51.7181 22.26L57.2981 30H53.4881L49.0781 23.91H44.8181V30ZM66.4219 30.3C61.5319 30.3 58.3219 27.54 58.3219 22.56C58.3219 17.91 61.5019 14.79 66.3619 14.79C70.9819 14.79 74.1319 17.34 74.1319 21.87C74.1319 22.41 74.1019 22.83 74.0119 23.28H61.3519C61.4719 26.16 62.8819 27.69 66.3319 27.69C69.4519 27.69 70.7419 26.67 70.7419 24.9V24.66H73.9819V24.93C73.9819 28.11 70.8619 30.3 66.4219 30.3ZM66.3019 17.34C63.0019 17.34 61.5619 18.81 61.3819 21.48H71.0719V21.42C71.0719 18.66 69.4819 17.34 66.3019 17.34ZM78.9586 35.1H76.8286V32.16H79.7386C81.0586 32.16 81.5986 31.8 82.0486 30.78L82.4086 30L75.0586 15.09H78.6886L82.4986 23.01L83.9686 26.58H84.2086L85.6186 22.98L89.1286 15.09H92.6986L84.9286 31.62C83.6986 34.29 82.0186 35.1 78.9586 35.1Z"
      fill="url(#paint0_radial_301_76)"
    />
    <defs>
      <radialGradient
        id="paint0_radial_301_76"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="rotate(23.2729) scale(101.237 101.088)"
      >
        <stop offset="0.26875" stopColor="white" />
        <stop offset="0.904454" stopColor="white" stopOpacity="0.5" />
      </radialGradient>
    </defs>
  </svg>
);
