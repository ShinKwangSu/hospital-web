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
import { useRouter } from "next/navigation";

export default function DesktopNav() {
  const router = useRouter();

  const handleMenuClick = (path: string) => {
    router.push(path);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* Logo Section */}
      <div className="border-b py-8 w-full flex justify-center">
        <Link href={"/"}>
          <Image
            className="custom-logo"
            src="/logo/smt_logo_L.png"
            alt="Logo"
            width={400} // 원하는 너비
            height={(120 / 3685) * 463} // 원본 비율 유지
            layout="intrinsic"
          />
        </Link>
      </div>

      {/* Menu Bar Section */}
      <Menubar className="w-full my-2 xl:my-4 *:text-lg *:xl:text-xl justify-center border-none shadow-none">
        {menuItems.map((menu) => (
          <MenubarMenu key={menu.label}>
            <MenubarTrigger>{menu.label}</MenubarTrigger>
            <MenubarContent>
              {menu.items.map((item, index) => (
                <div key={`${menu.label}-${item.label}`}>
                  <MenubarItem onClick={() => handleMenuClick(item.path)}>
                    {item.label}
                  </MenubarItem>
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
