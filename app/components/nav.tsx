import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import Link from "next/link";

const navItems = {
  "mailto:falkowskimarcin98@gmail.com": {
    icon: <Email style={{ color: "#1d242c" }} />,
  },
  "https://www.linkedin.com/in/marcin-falkowski-2a7364209/": {
    icon: <LinkedIn style={{ color: "#1d242c" }} />,
  },
  "https://github.com/Marcin-Falkowski": {
    icon: <GitHub style={{ color: "#1d242c" }} />,
  },
};

export function Navbar() {
  return (
    <aside className="tracking-tight w-full">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row justify-end items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 px-20 pt-16 items-center justify-between w-full">
            <p className="uppercase text-2xl font-black">Portfolio.</p>
            <div className="flex items-center flex-row">
              {Object.entries(navItems).map(([path, { icon }]) => {
                return (
                  <Link
                    key={path}
                    href={path}
                    className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                  >
                    {icon}
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>
      </div>
    </aside>
  );
}
