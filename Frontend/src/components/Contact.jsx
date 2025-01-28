/* eslint-disable react/prop-types */

import { useContact } from "../context/ContactContext"

const Contact = ({contact , lastIdx}) => {

  const {selected , setSelected} = useContact();
  const isSelected = selected?._id === contact._id;
  return (
    <>
    <div className={`flex items-center gap-8 hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
     ${isSelected ? "bg-sky-500" : ""}
    `}
    onClick={() => setSelected(contact)}
    >
        <div className="avatar online">
            <div className="w-12 rounded-full">
                <img src={contact.profilepic} alt="user avatar"/>
            </div>
        </div>
        <p className="font-bold text-gray-200">{contact.fullName}</p>
    </div>
    {!lastIdx && <div className="divider my-0 py-0 h-1"/>}
    </>
  )
}

export default Contact