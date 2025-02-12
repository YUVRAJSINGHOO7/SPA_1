import { Outlet } from "react-router-dom"; // it makes the place where the child route elements should be rendered

import MainNavigation from "../components/MainNavigation";

export default function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}
