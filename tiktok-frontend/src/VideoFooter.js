import React from 'react'
import "./VideoFooter.css"
import MusicNoteIcon from '@material-ui/icons/MusicNote'
import RadioRoundedIcon from '@material-ui/icons/RadioRounded';import Ticker from "react-ticker";
function VideoFooter({desc,namee,id}) {


	return (
		<div className="videoFooter">
		<div className="videoFooter_text">
<h3>{id}</h3>
<p>{desc}</p>
<div className="videoFooter_ticker">
<MusicNoteIcon className="videoFooter_icons"/>

<Ticker mode="smooth">
{
({index})=>(
<>
	<p>{namee}</p>
</>
)

}


</Ticker>
<div className="videoFooter_disc">
<RadioRoundedIcon className="videoFooter_icons"/>
</div>
</div>
		</div>
			
		</div>
	)
}

export default VideoFooter