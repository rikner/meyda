import {midiToFrequency, frequencyToBin} from './extractorUtilities';

const chromaLength = 12;
const octaves = 3;
const midiStartNumber = 48;
const midiEndNumber = midiStartNumber + (12 * octaves);
const sampleRate = 44100;
const fftSize = 2048;

// calculate bins for extraction
let bins = [];
for (let midiNumber = midiStartNumber; midiNumber < midiEndNumber; midiNumber++) {
   bins.push(frequencyToBin(midiToFrequency(midiNumber, 440), sampleRate, fftSize));
};

export default function() {
	if(typeof arguments[0].ampSpectrum !== "object"){
		throw new TypeError();
	}
	var spectrum = arguments[0].ampSpectrum;
	var chromaVector = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        for (var i = bins.length - 1; i >= 0; i--) {
            var curChromaPos = (midiStartNumber + i) % chromaLength;
            chromaVector[curChromaPos] += spectrum[bins[i]];
        }
        
        return chromaVector;
}