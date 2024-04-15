import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";
import { RiMenu2Fill } from "react-icons/ri";

const Home = () => {
  return (
    <div className="flex h-full w-full md:w-auto md:h-[550px] md:rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <div className="hidden md:flex">
        <Sidebar />
        <MessageContainer />
      </div>

      <div className="drawer md:hidden relative">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <MessageContainer />
          <label htmlFor="my-drawer" className="btn bg-blue-700 drawer-button absolute top-[6px] right-1 border-none"><RiMenu2Fill className="w-6 h-6" /></label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            <Sidebar />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Home;