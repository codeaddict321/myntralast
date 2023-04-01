
import { useState } from "react"


export default function SearchBar({search,setSearch}){
   
    function handleSearch(e){
        setSearch(e.target.value)
       
      
        
       }
       function handleForm(e){
       e.preventDefault()
       }
    return (
        <form onSubmit={handleForm}>
        <input type="text" name="search" id="search" value={search} onChange={handleSearch} placeholder="search your product"/>
       </form>
    )
}