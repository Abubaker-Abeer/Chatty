import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="h-screen bg-purple-950 text-white">
      <div className="flex items-center justify-center pt-20 px-4">
        <div className="bg-purple-700 rounded-xl shadow-xl w-full max-w-6xl h-[calc(100vh-8rem)]">
          <div className="flex h-full rounded-lg overflow-hidden">
            <Sidebar />

            <div className="flex-1 flex items-center justify-center">
              <p className="text-purple-200 text-lg">
                Select a contact to start chatting 💬
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
