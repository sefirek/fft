import Complex from './Complex.js';

const mapExponent = [];
const m2PI = -2 * Math.PI;


export default function exponent(k, N) {
	mapExponent[N] = mapExponent[N] || [];
	let result = mapExponent[N][k];
	if (result) return result;
	const x = m2PI * k / N;
	result = new Complex(Math.cos(x), Math.sin(x));
	mapExponent[N][k] = result;
	return result;
}