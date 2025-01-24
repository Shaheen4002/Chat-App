import Contacts from "./Contacts"
import LogOutButton from "./LogOutButton"
import SearchInput from "./SearchInput"

const SideBar = () => {
  return (
    <div className="flex flex-col p-4 border-r border-slate-500">
    <SearchInput />
    <div className="divider px-3"></div>
    <Contacts />
    <LogOutButton />
    </div>
  )
}

export default SideBar