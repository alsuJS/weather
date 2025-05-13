import { Search } from "lucide-react";

export const SearchCity = () => {
  return (
    <div className="flex border-1 w-[300px] rounded-[50px]">
      <Search />
      <input type="text" placeholder="Search" className="w-[250px]"/>
    </div>
  );
};
