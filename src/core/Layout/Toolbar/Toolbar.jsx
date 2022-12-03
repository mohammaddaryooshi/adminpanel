import InlineSvg from "../../../shared/components/InlineSVG/InlineSvg";

const Toolbar = () => {
    return ( 
        <div className="w-full bg-gray-200 h-[70px] flex items-center justify-between pr-4 pl-4">
            <ul className="h-full flex items-center justify-start">
                <li className="flex flex-col items-center justify-center cursor-pointer mr-5">
                    <InlineSvg color="#000" src='/assets/icons/global/image-svgrepo-com.svg' />
                    <p>IMAGE</p>
                </li>
                <li className="flex flex-col items-center justify-center cursor-pointer mr-5">
                    <InlineSvg color="#000" src="/assets/icons/global/text-svgrepo-com.svg" />
                    <p>TEXT</p>
                </li>
                <li className="flex flex-col items-center justify-center cursor-pointer mr-5">
                    <InlineSvg color="#000" src='/assets/icons/global/shapes-svgrepo-com.svg' />
                    <p>SHAPES</p>
                </li>
                <li className="flex flex-col items-center justify-center cursor-pointer mr-5">
                    <InlineSvg color="#000" src='/assets/icons/global/image-svgrepo-com.svg' />
                    <p>FRAME</p>
                </li>
                <li className="flex flex-col items-center justify-center cursor-pointer mr-5">
                    <InlineSvg color="#000" src='/assets/icons/global/pen-drawing-svgrepo-com.svg' />
                    <p>DRAW</p>
                </li>
                <li className="flex flex-col items-center justify-center cursor-pointer mr-5">
                    <InlineSvg color="#000" src='/assets/icons/global/filter-svgrepo-com.svg' />
                    <p>FILTER</p>
                </li>
                <li className="flex flex-col items-center justify-center cursor-pointer mr-5">
                    <InlineSvg color="#000" src='/assets/icons/global/resize-svgrepo-com.svg' />
                    <p>RESIZE</p>
                </li>
                <li className="flex flex-col items-center justify-center cursor-pointer mr-5">
                    <InlineSvg color="#000" src='/assets/icons/global/background-color-svgrepo-com.svg' />
                    <p>BACKGROUND</p>
                </li>
                <li className="flex flex-col items-center justify-center cursor-pointer mr-5">
                    <InlineSvg color="#000" src='/assets/icons/global/animation-svgrepo-com.svg' />
                    <p>ANIMATE</p>
                </li>
            </ul>
            <div className="flex items-center justify-center">
            <InlineSvg color="#000" className="cursor-pointer mr-4"  src='/assets/icons/global/arrow-undo-svgrepo-com.svg' />
            <InlineSvg color="#000" className="transform rotate-180 cursor-pointer mr-4" src='/assets/icons/global/arrow-undo-svgrepo-com.svg' />
            </div>
        </div>
    );
}
 
export default Toolbar;