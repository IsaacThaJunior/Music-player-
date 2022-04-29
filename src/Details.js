import React from 'react';

function Details({songs}) {
	return (
		<div className="c-player--details">
			<div className="details-img">
				<img src={songs.img_src} alt="" />
			</div>
			<h3 className="details-title">{songs.title}</h3>
			<h4 className="details-artist">{songs.artist}</h4>
		</div>
	);
}

export default Details;
