import React from 'react';

export function BouttonAjouter(props) {
	return (
		<div className="boutton">
			<button
				className="btn-Ajouter"
				onClick={() => {
					props.setajoutJour(true);
					props.setshowList(false);
				}}
			>
				Mon humeur du jour
			</button>
		</div>
	);
}
