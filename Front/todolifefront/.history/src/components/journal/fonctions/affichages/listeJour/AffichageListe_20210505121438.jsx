import { BouttonAjouter } from '../../bouttons/BouttonAjouter';
import { EmptyOrList } from './EmptyOrList';
import React from 'react';
import axios from 'axios';
import { useState } from 'react';

// import { API_JOURNAL } from '../../../../../constant/API_BACK';




// import { useState, useEffect } from 'react';


export function AffichageListe(props) {
	const [jourExistant, setjourExistant] = useState(false);
console.log(jourExistant);
	// const TestJourExistant = setjourExistant => {
	// 	const id = localStorage.getItem('id');
	// 	const url = API_JOURNAL + '/' + id + '/utilisateurs';
	// 	useEffect(() => {
	// 		axios({
	// 			method: 'get',
	// 			url: url,
	// 		}).then(response => {
	// 			const json = response.data;
	// 			if (json.length === 0) {
	// 				setjourExistant(false);
	// 				console.log("ok");
	// 			} else {
	// 				setjourExistant(true);
	// 				console.log("ko");
	// 			}
	// 		});
	// 	}, [setjourExistant, url]);
	// };
	// async function FetchUrlJourExistant(setjourExistant) {
	// 	TestJourExistant(setjourExistant);
	// }

	// console.log(jourExistant);
	// TestJourExistant(setjourExistant)
	// if (!jourExistant) {
		return (
			<>
				<EmptyOrList
					loading={props.loading}
					data={props.data}
					setjourData={props.setjourData}
					setshowList={props.setshowList}
					setshowJourDetail={props.setshowJourDetail}
				/>
				<BouttonAjouter
					// TestJourExistant={TestJourExistant}
					setajoutJour={props.setajoutJour}
					setshowList={props.setshowList}
					// setjourExistant={setjourExistant}
				/>
			</>
		);
	// } else {
	// 	return (
	// 		<>
	// 			<EmptyOrList
	// 				loading={props.loading}
	// 				data={props.data}
	// 				setjourData={props.setjourData}
	// 				setshowList={props.setshowList}
	// 				setshowJourDetail={props.setshowJourDetail}
	// 			/>
	// 		</>
	// 	);
	// }
}
