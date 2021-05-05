import { API_JOURNAL, API_JOURNAL_BY_USERID } from '../../../../constant/API_BACK';

import axios from 'axios';

// import { useEffect } from 'react';

export function FetchUrlFunction(mois, annee, setLoading, setData, setmois, setannee) {
	setmois(mois)
	setannee(annee)
	const stringToFetch1 = API_JOURNAL_BY_USERID + localStorage.getItem('id');
	const stringToFetch2 = '/journaux/?mois=' + mois + '&annee=' + annee;
	const url = stringToFetch1 + stringToFetch2;

		// useEffect(() => {
			axios({
				method: 'get',
				url: url,
			}).then(response => {
				const json = response.data;
				if (json.length === 0) {
					setLoading(true);
				} else {
					setData(json);
					setLoading(false);
				}
			});
	// }, [setData, setLoading, url]);
}

export function affichageBoutton(jourExistant, setjourExistant) {
console.log(jourExistant);
		axios({
			method: 'get',
			url: API_JOURNAL + '/' + localStorage.getItem('id') + '/utilisateurs',
		}).then(response => {
			const json = response.data;
			if (json.length === 0) {
				setjourExistant(false);
				console.log("ok");
			} else {
				setjourExistant(true);
				console.log("ko");
			}
		});

}
