import { useChatStore } from "../store/useChatStore";
import ChatContainer from "../components/ChatContainer";
import NoChatSelected from "../components/NoChatSelected";
import Sidebar from "../components/Sidebar";

const Home = () => {
   const { selectedUser } = useChatStore();
  return (
    <div className="h-screen bg-purple-950 text-white">
      <div className="flex items-center justify-center pt-20 px-4">
        <div className="bg-purple-700 rounded-xl shadow-xl w-full max-w-6xl h-[calc(100vh-8rem)]">
          <div className="flex h-full rounded-lg overflow-hidden">
            <Sidebar />

  {!selectedUser ? <NoChatSelected /> : <ChatContainer/>}
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
