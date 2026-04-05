import { Suspense } from "react";
import { Outlet, useLocation } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  const location = useLocation();
  const path = location.pathname;

  const isHome =
    path === "/" ||
    path === "/es" ||
    path === "/en" ||
    path === "/es/" ||
    path === "/en/";

  /*
   * El Header es position:fixed — flota sobre el contenido en TODAS las páginas.
   * Cada página maneja su propio espacio interior si lo necesita.
   * NO se agrega padding-top global aquí: eso rompería los heros full-bleed
   * de Home, Portfolio, Contact y Services donde el header es semitransparente
   * y se superpone sobre el contenido intencionalmente (igual que en producción).
   */

  return (
    <div className="flex min-h-screen flex-col w-full overflow-x-hidden">
      <Header />
      <main className="flex-1 w-full min-w-0">
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