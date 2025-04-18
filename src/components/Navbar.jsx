import React from "react";
import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <div className="flex dark:bg-gray-600 bg-gray-100 p-4 lg:text-lg justify-center gap-6">
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="TopRated" param="fetchTopRated" />
    </div>
  );
}
