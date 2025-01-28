import { useState } from "react"
import {IoSearchSharp} from "react-icons/io5"
import useGetContacts from "../hooks/useGetContacts";
import { useContact } from "../context/ContactContext";
import toast from "react-hot-toast";

const SearchInput = () => {
  const [search , setSearch] = useState("");
  const {contacts} = useGetContacts();
  const {setSelected} = useContact();
  const handelSearch = (e) => {
    e.preventDefault();
    if(!search) return;
    if(search.length < 3){
      return toast.error("Search term must be at least 3 charecters long")
    }
    const conversation = contacts.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()))
    if(conversation){
      setSelected(conversation);
      setSearch("");
    }else{
      toast.error("user not found")
    }
  }
  return (
    <form className="flex items-center gap-2" onSubmit={handelSearch}>
        <input type="text" placeholder="Search..." className="input input-bordered rounded-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" className="btn btn-circle bg-sky-500 text-white">
            <IoSearchSharp className="w-6 h-6 outline-none" />
        </button>
    </form>
  )
}

export default SearchInput