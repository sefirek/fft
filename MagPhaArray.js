import ComplexArray from './ComplexArray.js';
import MagPha from './MagPha.js';

export default class MagPhaArray extends Array {
	constructor(complexArray) {
		super();
		if (!(complexArray instanceof ComplexArray))
			throw new Error(
				'Wrong type of a complexArray argument, expected ComplexArray type'
			);
		this.complexArray = complexArray.deepCopy();
		for (let i = 0; i < this.complexArray.length / 2; i += 1) {
			super.push(new MagPha(i, this.complexArray));
		}
	}

	slice(start, end) {
		return [...this].slice(start, end);
	}

	push() {
		return this;
	}

	getPreparedComplexArray() {
		return this.complexArray;
	}

	deleteFrequencies(...frequencies) {
		frequencies.forEach((frequency) => this[frequency]?.zero());
	}

	deleteAllOthersFrequencies(...frequencies) {
		const allFrequencies = {};
		for (let i = 0; i < this.length; i += 1) allFrequencies[i] = i;
		frequencies.forEach((frequency) => delete allFrequencies[frequency]);
		Object.keys(allFrequencies).forEach((frequency) => this[frequency]?.zero());
	}
}
