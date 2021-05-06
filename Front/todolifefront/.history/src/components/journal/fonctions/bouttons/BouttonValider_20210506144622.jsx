import { PostRequest } from './PostRequest';
import React from 'react';
import moment from 'moment';

export function BouttonValider(props) {
	const dateJour = moment(new Date()).format('YYYY-MM-DD');
	const titre = props.titre;
	const humeur = props.moodInt;
	const texte = props.resume;
	// var options = { month: 'long' };
	// const moisActuel = new Intl.DateTimeFormat('fr', options).format(new Date());
	// const actualYear = new Date().getFullYear();
	
	const jour = {
		dateJour,
		titre,
		humeur,
		texte,
	};

	return (
		<button
			className="btn-form"
			onClick={() => {
				props.FetchUrl(moisActuel, actualYear);
				props.setajoutJour(false);
				props.setshowList(true);
				props.setajoutJour(false);
				// PostRequest(jour, props.setshowList, props.setajoutJour, props.FetchUrl, props.setLoading, props.setmois, props.setannee);
				PostRequest(jour, props.setshowList, props.setajoutJour);
			}}
		>
			valider
		</button>
	);
}
