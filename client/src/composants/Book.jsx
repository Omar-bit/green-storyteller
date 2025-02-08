import HTMLFlipBook from 'react-pageflip';
import { CiLocationArrow1 } from "react-icons/ci";
import { useRef } from 'react';
import cover from "./../../public/TT.jpg";
import { GrLinkPrevious } from "react-icons/gr";
import { GrLinkNext } from "react-icons/gr";
import final from "./../../public/final.jpg";



function splitPages(story) {
    const pageNbr = 100;
    const pages = [];
    const words = story.split(" ");
    let page = "";

    for (let i = 0; i < words.length; i += 1) {
        page += words[i] + " ";
        if ((i + 1) % pageNbr === 0) {
            pages.push(page);
            page = "";
        }
    }
    if (page) pages.push(page);

    // Ensure an even number of pages
    if (pages.length % 2 !== 0) {
        pages.push(""); // Add an empty page if needed
    }

    return [
        <div key="cover" className="h-[700px] w-full flex items-center justify-center ">
            <img src={cover} className='h-full w-full object-cover' alt='cover' />
        </div>,
        ...pages.map((text, index) => (
            <div key={index} className="flex items-center justify-center  p-4 bg-green-950 h-full text-sm md:text-base lg:text-lg font-serif leading-relaxed text-gray-800 dark:text-gray-300 text-justify first-letter:text-3xl first-letter:font-bold first-letter:text-primary drop-shadow-md px-4 sm:px-8 lg:px-12">
                {text}
                <div className='absolute bottom-2 right-2 text-xs'>
                    <span className='inline ml-1'>flip page</span>
                    <CiLocationArrow1 className='inline' />
                </div>
            </div>
        )),
        <div key="end" className='h-[700px] w-full flex items-center justify-center'>
           <img src={final} className='h-full w-full object-cover' alt='cover' />
        </div>
    ];
}

function Book({ story }) {
    const book = useRef();
    const pages = splitPages(story);
    

    return (
        <div className="flex flex-col items-center w-full ">
            <HTMLFlipBook
            
                ref={book}
                width={1000} // Width of one page
                height={900} // Height of one page
                minWidth={500} // Minimum width (to allow single page mode)
                maxWidth={1200} // Maximum width (to allow two pages side by side)
                size='stretch' // Allow pages to expand based on available space
                drawShadow={true}
                showCover={true} // Important for cover display
                flippingTime={600} // Smooth animation
                mobileScrollSupport={true} // Support for mobile devices
                
                className='border shadow-lg rounded-lg overflow-hidden'
            >

                {pages}
            </HTMLFlipBook>
            
            

            <div className='flex justify-between items-center w-full max-w-sm mt-4'>
                <button
                    onClick={() => book.current.pageFlip().flipPrev()}
                    className='px-4 py-2 bg-gray-700 text-white rounded-lg shadow hover:bg-gray-800 transition'
                >
                    <GrLinkPrevious />
                </button>
                <button
                    onClick={() => book.current.pageFlip().flipNext()}
                    className='px-4 py-2 bg-green-400 text-white rounded-lg shadow hover:bg-green-600 transition'
                >
                    <GrLinkNext />
                </button>
            </div>
        </div>
    );
}

export default Book;
