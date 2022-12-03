import InlineSvg from "../../../shared/components/InlineSVG/InlineSvg";

const Topbar = () => {
    return ( 
        <div className="h-14 w-full bg-blue-700 flex items-center justify-end ">
            <ul className="w-full h-full flex items-center justify-end pr-2">
                <li className="ml-2">
                    <InlineSvg color="#fff" className="cursor-pointer" src='/assets/icons/global/download-svgrepo-com.svg' /> 
                </li>
                <li className="ml-2">
                    <InlineSvg color="#fff" className="cursor-pointer" src='/assets/icons/global/new-file-svgrepo-com.svg' /> 
                </li>
                <li className="ml-2">
                    <InlineSvg color="#fff" className="cursor-pointer" src='/assets/icons/global/save-svgrepo-com.svg' /> 
                </li>
                <li className="ml-2">
                    <InlineSvg color="#fff" className="cursor-pointer" src='/assets/icons/global/folder-svgrepo-com.svg' /> 
                </li>
                <li className="ml-2">
                    <button className="p-2 rounded-md bg-blue-400 hover:bg-blue-500 opacity-95 text-white">Preview</button>
                </li>
                <li className="ml-2">
                <button className="p-2 rounded-md bg-blue-400 hover:bg-blue-500 opacity-95 text-white">Push To Screens</button>
                </li>
                <li className="ml-2">
                <button className="p-2 rounded-md bg-blue-400 hover:bg-blue-500 opacity-95 text-white">Close</button>
                </li>
               
            </ul>
        </div>
     );
}
 
export default Topbar;