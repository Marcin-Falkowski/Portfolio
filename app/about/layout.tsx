import { Navbar } from "app/components/nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <body className="antialiased max-w-full text-black bg-white dark:text-white dark:bg-main">
      <main className="flex-auto min-w-0 mt-0 flex flex-col px-2 md:px-0">
        <Navbar />
        {children}
      </main>
    </body>
  );
}
