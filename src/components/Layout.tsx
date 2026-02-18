import { Suspense } from "react";
import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-24">
        <Suspense
          fallback={
            <div className="flex min-h-[50vh] items-center justify-center bg-black">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#333] border-t-[#fb5000]" />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
