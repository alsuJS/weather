import { SearchBar } from "@/Component/SearchBar";
import { SearchResultsList } from "@/Component/SearchResultsList";
import { useState } from "react";

function Hailt(){
const [results, setResults]=useState([])
    return (<div>
       <SearchBar setResults={setResults} />
       <SearchResultsList results={results} />
    </div>)
}

export default Hailt;