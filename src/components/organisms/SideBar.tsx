import { useSidebar } from "@/context/SidebarContext";
import Logo from "@/assets/images/logo.png";
import GridIcon from "@/components/atoms/icons/GridIcon";
import SettingIcon from "@/components/atoms/icons/SettingIcon";
import { cn } from "@/lib/utils";
import Button from "@/components/atoms/Button";

const sidebarsData = [
  {
    id: 1,
    group: "Main",
    label: "Dashboard",
    path: "/",
    isDropDown: false,
    icon: GridIcon,
  },
  {
    id: 2,
    group: "System",
    label: "Setting",
    path: "/",
    isDropDown: true,
    icon: SettingIcon,
  },
];

export default function SideBar() {
  const { isOpen, toggle } = useSidebar();
  console.log(isOpen);
  return (
    <>
      <div
        className={cn(
          "transition-all ease-in-out duration-500 xl:hidden",
          !isOpen
            ? "opacity-0 hidden"
            : "bg-black/70 w-full h-full absolute z-[99]"
        )}
        onClick={toggle}
      />
      <aside
        className={cn(
          "bg-sidebar h-screen shadow-sidebar xl:flex xl:static flex-col duration-500 overflow-hidden transition-all absolute inset-0 z-[9999]",
          isOpen ? "w-[318px]" : "xl:w-0 w-[318px] -translate-x-full"
        )}
      >
        <div
          className={cn(
            "w-full h-full transition-all ease-in-out duration-100",
            isOpen ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="flex flex-col items-center mt-[25px] gap-1">
            <img alt="Logo" src={Logo} className="w-[89px] h-[73px]" />
            <h1 className="uppercase -tracking-[2%] text-[11px] font-bold">
              Asta Computer Vision
            </h1>
          </div>
          <nav className="mt-[35px] flex flex-col px-[19px] gap-[30px]">
            {sidebarsData.map((data) => (
              <div key={data.id} className="flex flex-col">
                <span className=" text-placeholder relative before:absolute before:content-[''] before:top-1/2 before:-translate-y-1/2 before:h-[1px] before:bg-placeholder before:w-full w-fit before:right-full">
                  <div className="px-2.5 text-sm">{data.group}</div>
                </span>

                <Button
                  icon={<data.icon />}
                  variant={data.isDropDown ? "ghost" : "default"}
                  className="rounded-[8px] justify-start mt-[10px] font-light"
                >
                  {data.label}
                </Button>
              </div>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
}
