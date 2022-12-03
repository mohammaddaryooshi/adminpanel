import InlineSvg from "../../../shared/components/InlineSVG/InlineSvg";

const Sidebar = () => {
    return ( 
        <div className="flex items-start justify-start h-screen">
            <div className="h-screen w-24 bg-slate-700 flex flex-col items-center justify-start">
                <ul className="flex flex-col items-center justify-start mt-4">
                    <li className="flex flex-col items-center justify-start mb-4 cursor-pointer">
                        <InlineSvg color="#fff" src="/assets/icons/sidebar/template-svgrepo-com.svg" />
                        <p className="text-white">Your Temp</p>
                    </li>
                    <li className="flex flex-col items-center justify-start mb-4 cursor-poiter">
                        <InlineSvg color="#fff" src="/assets/icons/sidebar/widgets-svgrepo-com.svg" />
                        <p className="text-white">Widget</p>
                    </li>
                    <li className="flex flex-col items-center justify-start mb-4 cursor-pointer">
                        <InlineSvg color="#fff" src="/assets/icons/sidebar/photo-svgrepo-com.svg" />
                        <p className="text-white">Photoes</p>
                    </li>
                    <li className="flex flex-col items-center justify-start mb-4 cursor-pointer">
                        <InlineSvg color="#fff" src="/assets/icons/sidebar/selection-of-elements-svgrepo-com.svg" />
                        <p className="text-white">Elements</p>
                    </li>
                    <li className="flex flex-col items-center justify-start mb-4 cursor-pointer">
                        <InlineSvg color="#fff" src="/assets/icons/sidebar/qr-code-svgrepo-com.svg" />
                        <p className="text-white">QR Code</p>
                    </li>
                    <li className="flex flex-col items-center justify-start mb-4 cursor-pointer">
                        <InlineSvg color="#fff" src="/assets/icons/sidebar/file-svgrepo-com.svg" />
                        <p className="text-white">Data Source</p>
                    </li>
                    <li className="flex flex-col items-center justify-start mb-4 cursor-pointer">
                        <InlineSvg color="#fff" src="/assets/icons/sidebar/help-svgrepo-com.svg" />
                        <p className="text-white">Help</p>
                    </li>
                </ul>
            </div>
            <div className="h-screen w-72 bg-gray-300 flex flex-col items-center justify-start ">
                <input className="p-2 bg-slate-100 rounded-md w-11/12 mt-4 outline-none" />
            </div>
        </div>
     );
}
 
export default Sidebar;