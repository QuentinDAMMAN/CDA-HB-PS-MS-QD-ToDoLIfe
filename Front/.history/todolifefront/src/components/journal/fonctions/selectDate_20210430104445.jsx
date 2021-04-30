import React from 'react';

export function selects(fetchUrl, annee, setshowList, mois, allmonth, allyear) {
	return (
		<>
			<div className="entete">
				{selectMois(fetchUrl, annee, setshowList, mois, allmonth)}
				{selectAnnee(fetchUrl, mois, setshowList, annee, allyear)}
			</div>
		</>
	);
}


export function selectMois(fetchUrl, annee, setshowList, mois, allmonth) {
	return (
		<select
		className="form-select"
		onChange={e => {
			fetchUrl(e.target.value, annee);
				setshowList(true);
			}}
			>
			<option defaultValue={mois}>{new Date().getMonth}</option>
			{allmonth.map((mois, i) => (
				<option key={i} value={i + 1}>
					{mois}
				</option>
			))}
		</select>
	);
}

export function selectAnnee(fetchUrl, mois, setshowList, annee, allyear) {
	var date=new Date()
	const anneeActuelle = date.getMonth;
	return (
		<select
			className="form-select"
			onChange={e => {
				fetchUrl(mois, e.target.value);
				setshowList(true);
			}}
		>
			<option defaultValue={mois}>{anneeActuelle}</option>
			{allyear.map((annee, i) => (
				<option key={i} value={annee}>
					{annee}
				</option>
			))}
		</select>
	);
}
export function anneeMois() {
	const allmonth = [
		'Janvier',
		'Février',
		'Mars',
		'Avril',
		'Mai',
		'Juin',
		'Juillet',
		'Aout',
		'Septembre',
		'Octobre',
		'Novembre',
		'Decembre',
	];
	const allyear = ['2020', '2021'];
	return { allmonth, allyear };
}
