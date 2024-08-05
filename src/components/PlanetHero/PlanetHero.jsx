import classes from './PlanetHero.module.css';

import { useState } from "react";
import { PlanetSVGs } from "../../assets/AssetImports";

export default function PlanetHero({ planetName = 'Earth', isInternalBool = false}) {
	console.log('planetName: ' + planetName);

	function getPlanetKey() {
		if (isInternalBool) {
			return 'Planet' + planetName + 'Internal';
		}
		return 'Planet' + planetName;
	}

	return (
		<div className={classes.planet_hero}>
			<img src={PlanetSVGs[getPlanetKey()]}></img>
		</div>
	);
}