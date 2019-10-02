import GUI from '../../dist/lil-gui.module.js';

import CubicBezier from './CubicBezier.js';
import CubicBezierController from './CubicBezierController.js';

const params = {
	curve1: new CubicBezier( 0.11624221844934918, 0.27560837577815506, 0.4204867006225241, 0.9927560837577816 ),
	// curve1: new CubicBezier( 1, 0.022071307300509338, 0, 1 ),
	// curve1: new CubicBezier( 0.36693792915254453, 0.8744622350461548, 0.6330620708474555, 0.12553776495384517 ),
	// curve1: new CubicBezier( 0, 0, 1 / 3, 1 / 3 ),
	// curve1: new CubicBezier( 0, 0, 1, 1 ),
	duration: 1
};

const gui = new GUI();

new CubicBezierController( gui, params, 'curve1' );
gui.add( params, 'duration', 0, 5 );

const div = document.createElement( 'div' );
Object.assign( div.style, {
	position: 'absolute',
	bottom: 0,
	left: 0,
	right: 0,
	background: 'gold'
} );
document.body.appendChild( div );

function animate() {
	requestAnimationFrame( animate );
	const time = ( +new Date() ) / ( params.duration * 1000 ) % 1;
	const val = params.curve1.interpolate( time );
	div.style.height = val * 100 + '%';

}

animate();

// const samples = 15;
// let nans = 0;
// let itr = 0;

// for ( let a = 0; a < samples; a++ ) {
// 	for ( let b = 0; b < samples; b++ ) {
// 		for ( let c = 0; c < samples; c++ ) {
// 			for ( let d = 0; d < samples; d++ ) {
// 				params.curve1.x1 = a / samples;
// 				params.curve1.y1 = b / samples;
// 				params.curve1.x2 = c / samples;
// 				params.curve1.y2 = d / samples;
// 				for ( let t = 0; t < samples; t++ ) {
// 					const val = params.curve1.interpolate( t / samples );
// 					if ( isNaN( val ) ) {
// 						nans++;
// 						// console.log( t / samples, a / samples, b / samples, c / samples, d / samples );
// 					}
// 					itr++;
// 				}
// 			}
// 		}
// 	}
// }

// console.log( itr, nans );