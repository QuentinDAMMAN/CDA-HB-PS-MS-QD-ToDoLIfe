import React, { useEffect, useState } from 'react';

import { AffichageListe } from './listeJour/AffichageListe';
import { AjouterJour } from './ajouterJour/AjouterJour';
import { DetailJour } from './detailsJour/DetailJour';

export function Affichage(props) {
	const [ajoutJour, setajoutJour] = useState(false);

	useEffect(() => {
  }, [props, ajoutJour]);
	return (
		<>
			{props.showList && (
				<AffichageListe
					loading={props.loading}
					data={props.data}
					setjourData={props.setjourData}
					setshowList={props.setshowList}
					setshowJourDetail={props.setshowJourDetail}
					setajoutJour={setajoutJour}
				/>
			)}

			{props.showJourDetail && (
				<DetailJour
					jourData={props.jourData}
					setshowList={props.setshowList}
					setshowJourDetail={props.setshowJourDetail}
					setajoutJour={setajoutJour}
				/>
			)}

			{ajoutJour && (
				<AjouterJour
					setshowList={props.setshowList}
					setshowJourDetail={props.setshowJourDetail}
					setajoutJour={setajoutJour}
				/>
			)}
		</>
	);
}
