import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { menuItems } from "@/lib/menus"; // 메뉴 데이터 import
import Image from "next/image";
import Link from "next/link";

export default function DesktopNav() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* Logo Section */}
      <div className="my-5">
        <Link href={"/"}>
          <Image
            src="/logo/smt_logo_L.png"
            alt="Logo"
            width={500} // 원하는 너비
            height={(120 / 3685) * 463} // 원본 비율 유지
            layout="intrinsic"
          />
        </Link>
      </div>

      {/* Menu Bar Section */}
      <Menubar className="w-full justify-center border-none shadow-none">
        {menuItems.map((menu) => (
          <MenubarMenu key={menu.label}>
            <MenubarTrigger>{menu.label}</MenubarTrigger>
            <MenubarContent>
              {menu.items.map((item, index) => (
                <div key={`${menu.label}-${item.label}`}>
                  <MenubarItem>{item.label}</MenubarItem>
                  {index !== menu.items.length - 1 && <MenubarSeparator />}
                </div>
              ))}
            </MenubarContent>
          </MenubarMenu>
        ))}
      </Menubar>
    </div>
  );
}
