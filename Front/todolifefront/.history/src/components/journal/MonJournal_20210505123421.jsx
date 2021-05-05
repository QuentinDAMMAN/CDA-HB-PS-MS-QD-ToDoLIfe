import '../../assets/css/journal/MonjournalStyle.css';

import { FetchUrlFunction, affichageBoutton } from './fonctions/fetchUrl/FetchUrlFunction';
import React, { useState } from 'react';

import { Affichage } from './fonctions/affichages/Affichage';
import { Selects } from './fonctions/selects/SelectDate';

const MonJournal = () => {
	const [mois, setmois] = useState(new Date().getMonth());
	const [annee, setannee] = useState(new Date().getFullYear());
	const [loading, setLoading] = useState(true);
	const [showList, setshowList] = useState(true);
	const [jourData, setjourData] = useState('');
	const [data, setData] = useState([]);
	const [jourExistant, setjourExistant] = useState(false);
	
	(function(){ })()
	
	return (
		<>
			<h2 className="titreJournal">Mon journal</h2>
			<div className="monJournal">
				<Selects
					FetchUrl={FetchUrl}
					annee={annee}
					setshowList={setshowList}
					mois={mois}
					setmois={setmois}
					setannee={setannee}
				/>
				<Affichage
					showList={showList}
					loading={loading}
					data={data}
					setjourData={setjourData}
					setshowList={setshowList}
					jourData={jourData}
				/>
			</div>
		</>
	);

	
	async function FetchUrl(mois, annee) {
		FetchUrlFunction(mois, annee, setLoading, setData, setmois, setannee);
		affichageBoutton(jourExistant, setjourExistant)
	}
};

export default MonJournal;
