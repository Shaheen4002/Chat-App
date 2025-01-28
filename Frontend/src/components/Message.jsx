/* eslint-disable react/prop-types */
import { useAuth } from "../context/AuthContext"
import { useContact } from "../context/ContactContext";
import { extractTime } from "../utils/time";

const Message = ({message}) => {
  const {authUser} = useAuth();
  const {selected} = useContact();
  const fromMe = message.senderId === authUser._id;
  const className = fromMe ? 'chat-end' : 'chat-start';
  const profileim = fromMe ? authUser.profilePic : selected?.profilepic;
  const bubleBg = fromMe ? 'bg-blue-500' : 'bg-gray-900';
  const formatedTime = extractTime(message.createdAt)
  return (
    <div className={`chat ${className}`}>
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
            <img src= {profileim} alt="user avatar"/>
            </div>
        </div>
        <div className={`chat-bubble text-white ${bubleBg}`}>{message.message}</div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">{formatedTime}</div>
    </div>
  )
}

export default Message