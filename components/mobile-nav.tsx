import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { menuItems } from "@/lib/menus"; // 메뉴 데이터 import
import { ChevronRight, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function MobileNav() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleSubMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <div className="flex items-center justify-between w-full p-4">
      {/* 로고 (왼쪽) */}
      <div className="flex items-center">
        <Link href={"/"}>
          <Image
            src="/logo/smt_logo_L.png"
            alt="Logo"
            width={200} // 원하는 너비
            height={(120 / 3685) * 463} // 원본 비율 유지
            layout="intrinsic"
          />
        </Link>
      </div>

      {/* 햄버거 메뉴 (오른쪽) */}
      <Sheet>
        <SheetTrigger>
          <Menu className="w-8 h-8 text-gray-700" />
        </SheetTrigger>
        <SheetContent side="right" className="w-64">
          <nav className="flex flex-col space-y-2 mt-6">
            {menuItems.map((menu) => (
              <div key={menu.label} className="flex flex-col">
                {menu.items.length > 0 ? (
                  <>
                    {/* 하위 메뉴가 있는 경우 */}
                    <button
                      onClick={() => toggleSubMenu(menu.label)}
                      className="flex items-center justify-between text-lg font-medium text-gray-800 px-4 py-2 w-full"
                    >
                      {menu.label}
                      <ChevronRight
                        className={`w-5 h-5 transition-transform ${
                          openMenu === menu.label ? "rotate-90" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openMenu === menu.label ? "max-h-40" : "max-h-0"
                      }`}
                    >
                      {menu.items.map((subItem) => (
                        <a
                          key={subItem.label}
                          href="#"
                          className="block px-6 py-2 text-gray-700"
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  </>
                ) : (
                  /* 하위 메뉴가 없는 경우 */
                  <a
                    href="#"
                    className="text-lg font-medium text-gray-800 px-4 py-2"
                  >
                    {menu.label}
                  </a>
                )}
              </div>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
