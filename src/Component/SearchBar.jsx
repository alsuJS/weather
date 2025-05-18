import { useState } from "react"

export const SearchBar =({setResults})=> {
    const [input, setInput]=useState("");
    const fetchData = (value)=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=> response.json())
        .then((json)=> {
            console.log("json:=====>",json);
            const results = json.filter((user)=>{
    return (value &&
            user && user.name && user.name.toLowerCase().includes(value))
            })
            console.log("results:=====>",results);
            setResults(results)
        })
    }
const handleChange = (value)=>{
    setInput(value)
    fetchData(value)
}

    return(
        <div>
         <input placeholder="Type to search..."
         value={input}
         onChange={(e)=>{handleChange(e.target.value)}} />
        </div>
    )
}