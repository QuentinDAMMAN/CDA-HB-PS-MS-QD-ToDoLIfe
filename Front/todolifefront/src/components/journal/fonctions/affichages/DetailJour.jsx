import { BouttonRevenir } from '../Bouttons';
import {Mood} from '../Mood';
import React from 'react';

export default function DetailJour(props) {
	return (
		<>
			<div className="jourdetails">
				<div className="enteteJour">
					<div className="jourData">
						<Mood moodLevel={props.jourData.humeur} />
					</div>
					<div className="titreJour">{props.jourData.titre}</div>
				</div>
				<div className="textJour">
					<p className="jourDataTexte">{props.jourData.texte}</p>
				</div>
			</div>
			<BouttonRevenir
				setshowList={props.setshowList}
				setshowJourDetail={props.setshowJourDetail}
			/>
		</>
	);
}
