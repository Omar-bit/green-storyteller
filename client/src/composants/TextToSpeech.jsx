import { useSpeech } from "react-text-to-speech";
import { FaPlayCircle } from "react-icons/fa";
import { BsStopCircle } from "react-icons/bs";




function TextToSpeech({speech}) {
    const {
        Text, // Component that returns the modified text property
        speechStatus, // String that stores current speech status
        isInQueue, // Boolean that stores whether a speech utterance is either being spoken or present in queue
        start, // Function to start the speech or put it in queue
        pause, // Function to pause the speech
        stop, // Function to stop the speech or remove it from queue
      } = useSpeech({ text: speech ,lang:"en-US"});
  return (
    <div style={{ display: "flex", flexDirection: "column", rowGap: "1rem" }}>
      {/* <Text /> */}
      <div style={{ display: "flex", columnGap: "0.5rem" }}>
        {speechStatus !== "started" ? <button onClick={start} style={{ margin: "10px" }}> <FaPlayCircle className="text-green-700 hover:text-green-400 text-3xl"/>
        </button> : <button onClick={pause} >Pause</button>}
        <button onClick={stop}> <BsStopCircle className="text-red-700 hover:text-red-400 text-3xl" style={{ margin: "10px" }} /></button>
      </div>
    </div>
  )
}

export default TextToSpeech
