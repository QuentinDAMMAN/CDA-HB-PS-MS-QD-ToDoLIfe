import { React, useState } from 'react';

import { BouttonRevenir } from '../../bouttons/BouttonRevenir';
import { BouttonValider } from '../../bouttons/BouttonValider';
import mood1 from '../../../../../assets/img/mood4.png';
import mood2 from '../../../../../assets/img/mood3.png';
import mood3 from '../../../../../assets/img/mood2.png';
import mood4 from '../../../../../assets/img/mood1.png';

export function AjouterJour(props) {
	const [titre, settitre] = useState('');
	const [moodInt, setmoodInt] = useState('');
	const [resume, setresume] = useState('');
	const [placeholderTitre, setplaceholderTitre] = useState("mon titre ici");
	return (
		<>
			<div className="creationJour">
				<ChoixTitre 
				settitre={settitre}
				placeholderTitre={placeholderTitre}
				 />
				<ChoixMood setmoodInt={setmoodInt} />
				<ChoixResume setresume={setresume} />
			</div>
			<div className="deuxBoutons">
				<BouttonRevenir
					setshowList={props.setshowList}
					setshowJourDetail={props.setshowJourDetail}
					setajoutJour={props.setajoutJour}
					setupdateJour={props.setupdateJour}
				/>
				<BouttonValider
					setajoutJour={props.setajoutJour}
					setshowList={props.setshowList}
					titre={titre}
					moodInt={moodInt}
					resume={resume}
					setplaceholderTitre={setplaceholderTitre}
				/>
			</div>
		</>
	);
}

function ChoixTitre(props) {
	return (
		<div className="choixTitre">
			<input
				type="text"
				className="inputTitre"
				id={props.id}
				placeholder= {props.placeholderTitre}
				placeholderTextColor='red'
				onChange={e => props.settitre(e.target.value)}
			></input>
		</div>
	);
}

function ChoixMood(props) {
	const mood = [mood4, mood3, mood2, mood1];
	
	return (
		<div className="choixMood">
			{mood.map((mood, i) => (
				<img
					src={mood}
					alt="Logo"
					value=""
					key={i}
					className="mood"
					onClick={() => {
						props.setmoodInt(i + 1);
					}}
				/>
			))}
		</div>
	);
}

function ChoixResume(props) {
	return (
		<div className="choixResume">
			<textarea
				name=""
				cols="30"
				rows="10"
				placeholder="Alors cette journée ?"
				onChange={e => props.setresume(e.target.value)}
			></textarea>
		</div>
	);
}
