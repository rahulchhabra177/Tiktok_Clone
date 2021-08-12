import './App.css';
import React ,{useEffect,useState} from 'react'
import Axios from "./axios.js";
import Video from "./Video"
function App() {
const [videos,setVideos]=useState([]);
useEffect(()=>{

async function fetchPosts(){
	const response=await Axios.get('/post/');
	setVideos(response.data);
	return response;
}
fetchPosts();

},[]);
console.log("Started");
console.log(videos);
console.log("ended");
  return (
    <div className="app">
  <div className="app_videos">
{
videos.map(({url,desc,id,namee,likes,comments,shares})=>(

<Video url={url} desc={desc} id={id} namee={namee} likes={likes} comments={comments} shares={shares}/>
	))
}
      </div>
    </div>
  );
}

export default App;
