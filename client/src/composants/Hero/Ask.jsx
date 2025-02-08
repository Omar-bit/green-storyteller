import { useState } from "react";
import axios from "axios";
import Book from "./../Book";
import Signs from "../Signs";
import TextToSpeech from "../TextToSpeech";
import Navbar from "../Navbar";


const Ask = () => {
    const [activeTab, setActiveTab] = useState("story");
    const [prompt, setPrompt] = useState(null);
    const [loading, setLoading] = useState(false);
    const [story, setStory] = useState("")

    async function generateStory(){
        setLoading(true);
        try{
            const {data} = await axios.post(`${import.meta.env.VITE_BACKEND_URI}/generate-story`,{
                prompt
            })
            let sessions = localStorage.getItem("sessions");
            sessions = sessions ? JSON.parse(sessions) : [];
            const session ={
                id:sessions.length+1,
                prompt,
                story:data.data,
                date: Date.now()
            }
            sessions.push(session);
            localStorage.setItem("sessions", JSON.stringify(sessions));
            setStory(data.data);
            
        }catch(err){
            console.log(err);
        }finally{
            setLoading(false);
        }
    }
  return (
    <>
    {/* partie 1*/}
    <Navbar />
    <main className="w h-full flex flex-col items-center justify-center p-4 space-y-1">
        <h1 className="text-4xl mb-8 font-bold">Describe your own story</h1>
        <div className="rounded-lg bg-gray-100  flex justify-between items-center w-auto relative  shadow-2xl overflow-hidden mb-8">
            <input value={prompt} onChange={(e)=>setPrompt(e.target.value)} type="text" className="text-sm h-12 p-2  inline-block min-w-[370px]" placeholder="what kind of story you want me to generate" />
            <button className="p-1 bg-green-400 h-full absolute right-0 cursor-pointer hover:opacity-80" onClick={generateStory} disabled={!prompt}>Generate</button>
        </div>
        <div className="rounded-lg bg-gray-100 px-4 py-1 flex justify-between items-center w-[300px] shadow-lg mb-8">
            <button className= {` p-3 rounded-lg  cursor-pointer text-black ${activeTab==="story" && "underline text-green-400 underline-offset-4"}`} onClick={()=>setActiveTab("story")}>Story</button>
            <button className={`   p-3 rounded-lg text-black cursor-pointer  ${activeTab==="isl" &&  "underline text-green-400 underline-offset-4"}`} onClick={()=>setActiveTab("isl")}>Story ISL</button>
        </div>
    
            {loading ? <div>Loading...</div>:  
            <>
            {story && <TextToSpeech speech={story} />}
            {activeTab === "story"&& story && <div><Book story={story}/></div>}
            {activeTab === "isl" && story &&  <div><Signs story={story}/></div>}
            </>
        }
        

        
    </main>
    




        
    </>
  )
}

export default Ask