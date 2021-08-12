import React ,{ useState}from 'react'
import "./VideoSidebar.css"
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';
function VideoSidebar({likes,comments,shares}) {
	const [liked,setLiked]=useState(false);
const useIcons=()=>{
	if (liked) {
					return (<FavoriteIcon fontSize="large" style={{ color: "red" }} onClick={(e)=>{setLiked(false);}}/>
)
				}
				else{
					return (<FavoriteBorderIcon fontSize="large"  onClick={(e)=>{setLiked(true);}}/>
)
				}

}


	return (
		<div className="videoSidebar">
			<div className="videoSidebar_button">


{useIcons()}
				{
<div className="videoSidebar_values">{likes}</div>
}

			</div>
<div className="videoSidebar_button">
<MessageIcon fontSize="large"/>
<div className="videoSidebar_values">{comments}</div>

			</div>
<div className="videoSidebar_button">
<ShareIcon fontSize="large"/>
<div className="videoSidebar_values">{shares}</div>


			</div>


		</div>
	)
}

export default VideoSidebar