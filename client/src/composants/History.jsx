import Navbar from './Navbar';
import { Link } from 'react-router-dom';

function History() {
    const sessions = localStorage.getItem("sessions")? JSON.parse(localStorage.getItem("sessions")) : [];
    
  return (
    <div>
        <Navbar/>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
        {sessions.map((session, index)=>(
            <Link to={`/history/${session.id}`} key={index} className="bg-gray-100 p-4 mb-4 rounded-lg shadow-lg cursor-pointer hover:shadow-2xl hover:border-green-700 hover:border">
                <h1 className="text-2xl font-bold mb-4">{session.prompt}</h1>
                <p className="text-gray-500">{session.story.substring(0,20)}...</p>
                <p className="text-gray-500 text-sm">{new Date(session.date).toLocaleString()}</p>
            </Link>
        ))}
      
    </div>
    </div>
  )
}

export default History
