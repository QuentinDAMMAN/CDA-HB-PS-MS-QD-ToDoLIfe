import { API_JOUR } from '../../../../constant/API_BACK';
import axios from 'axios';

export function affichageBoutton(jourExistant, setjourExistant) {
// export function affichageBoutton(jourExistant, setjourExistant) {

	// console.log(jourExistant);
	
	axios({
		method: 'get',
		url: API_JOUR + '/' + localStorage.getItem('id') + '/utilisateurs',
	})
	.then(response => {
		const jourDejaExistant = response.data;
		if (jourDejaExistant) {
			// setjourExistant(false);
			console.log("ok");
		} else if (!jourDejaExistant){
			// setjourExistant(true);
			console.log("ko");
		}
		// console.log(jourDejaExistant);
	});

}
