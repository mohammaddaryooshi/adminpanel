const Header = () => {
    return ( 
        <div className="h-16 w-full bg-slate-100 flex items-center justify-start pr-4 pl-4">
            <ul className="w-full h-full flex items-center justify-start">
                <li className="mr-10 bg-blue-900 text-white cursor-pointer p-3 rounded-md">Options</li>
                <li className="mr-7 text-blue-600 hover:text-white hover:bg-blue-900 hover:rounded-md p-3 cursor-pointer">Screens</li>
                <li className="mr-7 text-blue-600 hover:text-white hover:bg-blue-900 hover:rounded-md p-3 cursor-pointer">Files/Assets</li>
                <li className="mr-7 text-blue-600 hover:text-white hover:bg-blue-900 hover:rounded-md p-3 cursor-pointer">Playlists</li>
                <li className="mr-7 text-blue-600 hover:text-white hover:bg-blue-900 hover:rounded-md p-3 cursor-pointer">Schedules</li>
                <li className="mr-7 text-blue-600 hover:text-white hover:bg-blue-900 hover:rounded-md p-3 cursor-pointer">Analytic</li>
                <li className="mr-7 text-blue-600 hover:text-white hover:bg-blue-900 hover:rounded-md p-3 cursor-pointer">mina samodi</li>
            </ul>
        </div>
     );
}
 
export default Header;