export function mu(i, amplitudeSpect){
  var numerator = 0;
  var denominator = 0;
  for(var k = 0; k < amplitudeSpect.length; k++){
    numerator += Math.pow(k,i)*Math.abs(amplitudeSpect[k]);
    denominator += amplitudeSpect[k];
  }
  return numerator/denominator;
}

export function midiToFrequency(midiNumber, tuningFreq){
  return (Math.pow(2, (midiNumber - 69) / 12) * tuningFreq);
}

export function frequencyToMidi(frequency, tuningFreq) {
    return Math.round(69 + 12 * Math.log(frequency / tuningFreq) / Math.log(2));
}

export function frequencyToBin(freq, sampleRate, fftSize){
    return Math.round(freq * fftSize / sampleRate);
}

export function binToFrequency (bin, sampleRate, fftSize) {
    return (sampleRate / fftSize * bin);
}