import { Suspense } from "react";
import { Outlet, useLocation } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  const location = useLocation();

  const isHome =
    location.pathname === "/" ||
    location.pathname === "/es" ||
    location.pathname === "/en" ||
    location.pathname === "/es/" ||
    location.pathname === "/en/";

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className={`flex-1 ${isHome ? "" : ""}`}>
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

      {!isHome && <Footer />}
    </div>
  );
}