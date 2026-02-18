import { Suspense } from "react";
import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Suspense
          fallback={
            <div className="flex min-h-[50vh] items-center justify-center">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-brand-200 border-t-brand-600" />
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
