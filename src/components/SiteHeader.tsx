import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import {
  Search,
  ShoppingBag,
  Heart,
  Menu,
  X,
  User,
  Home,
  Compass,
  Phone,
} from "lucide-react";
import logoImg from "@/assets/logo.png";

const secondaryLinks = [
  {
    label: "Employee Gifts",
    children: [
      "Employee Welcome Kit",
      "Rewards and Recognition",
      "Learning & Workshops",
    ],
  },

  {
    label: "Calendar Special Days",
    children: [
      "Diwali",
      "Christmas",
      "Eid",
      "New Year",
      "Women's Day",
      "Men's Day",
      "Birthday",
    ],
  },

  {
    label: "Business & Tech Gifts",
    children: [
      "VIP and Executive Gifting",
      "Milestone Gifts",
      "Seminar Gifts",

      {
        label: "Tech Gifts",
        children: [
          "Everyday Tech and Utility Gadgets",
          "Personal Entertainment and Lifestyle Tech",
          "Smart Innovative and Premium Tech",
        ],
      },
    ],
  },

  {
    label: "Office & Work Essentials",
    children: [
      "Desk Essentials",
      "Meeting and Conference Essentials",
      "Office Carry Essentials",
    ],
  },

  {
    label: "Lifestyle & Wellness",
    children: [
      {
        label: "Home & Living",
        children: [
          "Electricals and Appliances",
          "Kitchen and Dining",
          "Home Decor and Ambience",
        ],
      },

      "Travel",
      "Apparels",
      "Eco Friendly Items",
      "Food and Gourmet",
      "De Stress Gift Items",
      "Physical Fitness",
    ],
  },

  {
  label: "Personalization Items",
  children: [],
},

  {
    label: "Others",
    children: [
      "International Gifts",
      "Cultural Heritage Gifting",

      {
        label: "Digital Rewards",
        children: [
          "Celebration Gift Cards",
          "Retail Fashion and Lifestyle",
          "Experiences",
          "Dining and Leisure",
        ],
      },
    ],
  },
] as const;


export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const pathname = useRouterState({
    select: (s) => s.location.pathname,
  });

  const giftingPaths = [
    "/product",
    "/employee-welcome-kit",
    "/rewards-recognition",
    "/learning-workshops",
    "/milestone-gifts",
    "/vip-executive-gifting",
    "/event-seminar-gifts",
    "/tech-gifts",
    "/desk-essentials",
    "/meetings-conference-essentials",
    "/office-carry-essentials",
    "/home-living",
    "/travel",
    "/apparels",
    "/eco-friendly",
    "/food-gourmet",
    "/de-stress-kits",
    "/physical-fitness-kit",
  ];

  const isMainGiftingPage = pathname === "/gifting";
  const isProductOrCategoryPage = giftingPaths.some((p) => pathname.startsWith(p));
  const showExploreTraining = isMainGiftingPage || isProductOrCategoryPage;
  const showExploreGifting = pathname.startsWith("/training");
  const showExploreBoth = pathname.startsWith("/about");
  const showNavLinks = isMainGiftingPage;
  const isHome = pathname === "/";

  return (
    <>
      {/* TOP BLUE STRIP */}
      {!isHome && (
        <div className="bg-[#061B49] text-[#F7F3EE] text-[11px] py-2 text-center px-4 font-light tracking-[0.2em] uppercase">
          PAN-INDIA DELIVERY · CUSTOM BRANDING · BULK CORPORATE ORDERS
        </div>
      )}

      {/* HEADER */}
      <header className="fixed top-0 inset-x-0 z-50">
        <div className="bg-[#F7F3EE] rounded-b-[28px] overflow-visible border-b border-[#E8E1D8] shadow-sm">

          {/* TOP ROW */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">

              {/* LOGO */}
              <Link to="/" className="flex items-center gap-3 group">
                <img
                  src={logoImg}
                  alt="PUNYA"
                  className="h-[65px] w-[65px]"
                />
              </Link>

              {/* RIGHT ICONS */}
              <div className="flex items-center gap-1 sm:gap-2">

                <IconBtn aria-label="Search">
                  <Search className="w-[18px] h-[18px]" />
                </IconBtn>

                <IconBtn aria-label="Wishlist">
                  <Heart className="w-[18px] h-[18px]" />
                </IconBtn>

                <IconBtn aria-label="Cart">
                  <ShoppingBag className="w-[18px] h-[18px]" />

                  <span className="absolute top-1 right-1 w-4 h-4 text-[10px] rounded-full bg-[#D8A13B] text-[#061B49] flex items-center justify-center font-medium">
                    0
                  </span>
                </IconBtn>

                <IconBtn aria-label="Account">
                  <User className="w-[18px] h-[18px]" />
                </IconBtn>

                <IconBtn aria-label="Home" asChild>
                  <Link
                    to="/"
                    className="w-10 h-10 flex items-center justify-center relative"
                  >
                    <Home className="w-[18px] h-[18px]" />
                  </Link>
                </IconBtn>

                <Link
                  to="/about"
                  className="hidden sm:inline-flex ml-3 text-sm text-[#374151] hover:text-[#061B49] transition-colors tracking-wide"
                >
                  about
                </Link>
               <div className="ml-4">
  <IconBtn aria-label="Call">
    <a href="tel:+919876543210">
      <Phone className="w-[18px] h-[18px]" />
    </a>
  </IconBtn>
</div>
                {/* MOBILE MENU BUTTON */}
                <button
                  className="lg:hidden w-10 h-10 flex items-center justify-center ml-1"
                  onClick={() => setMobileOpen((v) => !v)}
                  aria-label="Menu"
                >
                  {mobileOpen ? (
                    <X className="w-5 h-5" />
                  ) : (
                    <Menu className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* SECONDARY NAVBAR */}
          <div
            className={`hidden lg:block overflow-visible transition-all duration-500 ease-out ${
              showExploreTraining ||
              showExploreGifting ||
              showExploreBoth
                ? "max-h-20 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="border-t border-[#E5E7EB] bg-transparent">

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex items-center h-12 gap-4">

                  {/* EXPLORE TRAINING */}
                  {(showExploreTraining || showExploreBoth) && (
                    <Link
                      to="/training"
                      className="inline-flex items-center gap-2 px-5 h-9 rounded-md bg-[#102A56] text-white text-[11px] font-medium tracking-[0.18em] uppercase hover:opacity-90 transition-all"
                    >
                      <Compass className="w-3.5 h-3.5 text-[#D8A13B]" />
                      Explore Training
                    </Link>
                  )}

                  {/* EXPLORE GIFTING */}
                  {showExploreBoth && (
                    <Link
                      to="/gifting"
                      className="inline-flex items-center gap-2 px-5 h-9 rounded-md bg-[#102A56] text-white text-[11px] font-medium tracking-[0.18em] uppercase hover:opacity-90 transition-all"
                    >
                      <Compass className="w-3.5 h-3.5 text-[#D8A13B]" />
                      Explore Gifting
                    </Link>
                  )}

                  {(showExploreTraining || showExploreBoth) && (
                    <div className="h-5 w-px bg-[#D1D5DB]" />
                  )}

                  {/* NAV LINKS */}
                  {showNavLinks && (
                    <nav className="flex items-center gap-7 text-[13px]">
  {secondaryLinks.map((item) => (
    <div key={item.label} className="relative group">
      <button className="text-[#4B5563] hover:text-[#061B49] transition-colors tracking-wide">
  {item.label}
</button>

{item.children && item.children.length > 0 && (
<div className="absolute left-0 top-full mt-2 min-w-[280px] bg-white border border-[#E5E7EB] rounded-xl shadow-xl hidden group-hover:block z-[9999]">
<div className="py-2">
          {item.children?.map((child, index) => (

            typeof child === "string" ? (

              <div
                key={index}
                className="px-4 py-2 text-sm text-[#4B5563] hover:bg-[#F7F3EE] hover:text-[#061B49] cursor-pointer"
              >
                {child}
              </div>

            ) : (

             <div
  key={child.label}
  className="relative"
  onMouseEnter={(e) => {
    const menu = e.currentTarget.querySelector(".nested-menu");
    menu?.classList.remove("hidden");
  }}
  onMouseLeave={(e) => {
    const menu = e.currentTarget.querySelector(".nested-menu");
    menu?.classList.add("hidden");
  }}
>
                <div className="px-4 py-2 text-sm text-[#4B5563] hover:bg-[#F7F3EE] hover:text-[#061B49] cursor-pointer flex justify-between">
                  {child.label}
                  ▶️
                </div>

                {/* Second Level Dropdown */}
              <div
  className={`nested-menu absolute ${
    child.label === "Digital Rewards"
      ? "right-full mr-1"
      : "left-full ml-1"
  } top-0 min-w-[300px] bg-white border border-[#E5E7EB] rounded-xl shadow-xl hidden`}>
                  <div className="py-2">
                    {child.children.map((subChild) => (
                      <div
                        key={subChild}
                        className="px-4 py-2 text-sm text-[#4B5563] hover:bg-[#F7F3EE] hover:text-[#061B49] cursor-pointer"
                      >
                        {subChild}
                      </div>
                    ))}
                  </div>

                </div>
              </div>

            )

          ))}
        </div>
      </div>
    )}
  </div>
))}

                  </nav>
                  )}

                  {/* RIGHT BUTTON */}
                  {showExploreGifting && (
                    <Link
                      to="/gifting"
                      className="ml-auto inline-flex items-center gap-2 px-5 h-9 rounded-md bg-[#102A56] text-white text-[11px] font-medium tracking-[0.18em] uppercase hover:opacity-90 transition-all"
                    >
                      <Compass className="w-3.5 h-3.5 text-[#D8A13B]" />
                      Explore Gifting
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* MOBILE MENU */}
          {mobileOpen && (
            <div className="lg:hidden border-t border-[#E5E7EB] bg-[#F7F3EE] animate-fade-in">

              <div className="px-4 py-4 flex flex-col">

                {showExploreTraining && (
                  <Link
                    to="/training"
                    onClick={() => setMobileOpen(false)}
                    className="mb-2 inline-flex justify-center items-center gap-2 px-5 h-10 rounded-md bg-[#102A56] text-white text-xs uppercase tracking-[0.2em]"
                  >
                    <Compass className="w-4 h-4 text-[#D8A13B]" />
                    Explore Training
                  </Link>
                )}

                {secondaryLinks.map((l) => (
  <div
    key={l.label}
    className="py-3 border-b border-[#E5E7EB] text-sm text-[#374151]"
  >
    {l.label}
  </div>
))}

                <Link
                  to="/bulk-orders"
                  onClick={() => setMobileOpen(false)}
                  className="mt-4 inline-flex justify-center px-5 h-11 items-center rounded-full bg-[#102A56] text-white text-sm"
                >
                  Request Quote
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}

function IconBtn({
  children,
  asChild,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
}) {

  if (asChild) return <>{children}</>;

  return (
    <button
      {...rest}
      className="relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#EFE7DD] transition-colors text-[#374151]"
    >
      {children}
    </button>
  );
}
