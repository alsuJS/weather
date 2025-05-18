import { Search } from "lucide-react";
export const SearchCity = ({ getSearchValue, getValue }) => {

  return (
    <div className="flex border-1 w-[350px] rounded-[50px]">
      <Search className="m-auto"/>
      <input
        onKeyDown={getValue}
        onChange={getSearchValue}
        type="text"
        placeholder="Search"
        className="w-[280px] h-[40px] pl-5 ml-1 outline-none"
      />
    </div>
  );
};
