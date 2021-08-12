import React ,{useRef,useState} from 'react'
import "./Video.css";
import VideoFooter from "./VideoFooter"
import VideoSidebar from "./VideoSidebar"

function Video({url,desc,id,namee,likes,comments,shares}) {
	const VideoRef=useRef(null);
	const {playing,setPlaying}=useState(false);

	const handleVideoPress=()=>{
if (playing){
	VideoRef.current.pause();
	setPlaying(false);
}
else{
		VideoRef.current.play();
setPlaying(true);
}
	}

	return (
		<div className="video">
		<div className="video_player">

		<iframe width="420" height="100%" ref={VideoRef} loop onClick={handleVideoPress} title="to"
src={url}>
</iframe>
</div>
<VideoFooter desc={desc} namee={namee} id={id}/>
<VideoSidebar likes={likes} comments={comments} shares={shares}/>
		</div>
	)
};

export default Video