import { SearchCity } from "../Component/SearchCity";
import { Moon } from "@/Component/Moon";
import { Sun } from "@/Component/Sun";
import React from "react";

export default function Home() {
  return (
    <div className="flex gap-12">
      <div className="w-[800px] bg-amber-200 z-0 h-[1200px]">
        <div>
          <SearchCity />
          <div>
            <img className="-z-10 absolute" src="sun-little.webp" alt="" />
            <div className="ml-[90px] w-[300px] ">
              <Sun />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[800px] bg-black h-[1200px]">
        <div>
          <div>
            <div className="border-1 w-[300px]">
              <Moon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
