import { API_JOUR } from '../../../../constant/API_BACK';
import { API_JOURNAL } from './../../../../constant/API_BACK';
import axios from 'axios';

export function affichageBoutton(setjourExistant) {
	const url= API_JOURNAL + '/' + localStorage.getItem('id') + '/utilisateurs'
	useEffect(() => {
	axios({
		method: 'get',
		url: API_JOUR + '/' + localStorage.getItem('id') + '/utilisateurs',
	})
	.then(response => {
		if (!response.data) {
			setjourExistant(false);
		} else if (response.data){
			setjourExistant(true);
		}
	});
}, [setjourExistant]);
}
