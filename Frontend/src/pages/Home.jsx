import Conversation from "../components/Conversation";
import SideBar from "../components/SideBar";

const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] p-6 overflow-hidden rounded-lg shadow-md bg-gray-500 bg-clip-padding bg-opacity-30">
      <SideBar />
      <Conversation />
    </div>
  );
};

export default Home;
