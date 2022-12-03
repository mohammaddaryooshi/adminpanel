import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Toolbar from "./Toolbar/Toolbar";
import Topbar from "./Topbar/Topbar";

const Layout = ({children}) => {
    return ( 
        <div className="flex flex-col items-center justify-start">
        <Header /> 
        <div className="flex items-start justify-start sticky top-16 w-full">
        <Sidebar />
        <div className="flex flex-col items-start justify-center w-full">
            <Topbar />
            <Toolbar />
            <div className="p-4  w-full h-auto">
                {children}
            </div>
        </div>
        </div>
        </div>
     );
}
 
export default Layout;