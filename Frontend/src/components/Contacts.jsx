import useGetContacts from "../hooks/useGetContacts";
import Contact from "./Contact"

const Contacts = () => {
  const {contacts} = useGetContacts();
  return (
    <div className="flex flex-col py-2 overflow-auto">
        {contacts.map((contact , index) => (
          <Contact
           key = {contact._id}
           contact = {contact}
           lastIdx = {index === contacts.length -1}
          />
        ))}
    </div>
  )
} 

export default Contacts