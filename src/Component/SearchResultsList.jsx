import { SearchRusult } from "./SearchResult"

export const SearchResultsList = ({results})=> {
    return <div>
        {
          results.map((result, id)=>{
            return <SearchRusult result={result} key={id}/>
          })
          }
        </div>
    }