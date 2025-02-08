import { useState } from 'react'
import { useParams } from "react-router";
import Navbar from './Navbar';
import TextToSpeech from './TextToSpeech';
import Book from './Book';
import Signs from './Signs';

function HistorySession() {
    const { id } = useParams();
    const [activeTab, setActiveTab] = useState("story");
    const sessions = JSON.parse(localStorage.getItem("sessions")||null);
    
    const session = sessions.find((session) => session.id == (id));
    if(!session) return <h1>Session not found</h1>
    const {story,prompt,date} = session;
    const formattedDate = new Date(date).toLocaleString();
    
    
  return (
    <div>
        <Navbar />
        <div className='flex flex-col items-center justify-center space-y-2 p-4'>

        <h1>{prompt}</h1>
        <h2>{formattedDate}</h2>
        </div>
    <main className="w h-full flex flex-col items-center justify-center p-4 space-y-1">
       
        <div className="rounded-lg bg-gray-100 px-4 py-1 flex justify-between items-center w-[300px] shadow-lg mb-8">
            <button className= {` p-3 rounded-lg  cursor-pointer text-black ${activeTab==="story" && "underline text-green-400 underline-offset-4"}`} onClick={()=>setActiveTab("story")}>Story</button>
            <button className={`   p-3 rounded-lg text-black cursor-pointer  ${activeTab==="isl" &&  "underline text-green-400 underline-offset-4"}`} onClick={()=>setActiveTab("isl")}>Story ISL</button>
        </div>
    
           
            <div>
            {story && <TextToSpeech speech={story} />}
            {activeTab === "story"&& story && <div><Book story={story}/></div>}
            {activeTab === "isl" && story &&  <div><Signs story={story}/></div>}
            </div>
        
        

        
    </main>
    

    </div>
  )
}

export default HistorySession
