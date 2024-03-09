const fs = require('fs');
const DeepSpeech = require('deepspeech');

const modelPath = 'path_to_your_deepspeech_model.pbmm';
const scorerPath = 'path_to_your_deepspeech_scorer.scorer';

// Load the model and scorer
const model = new DeepSpeech.Model(modelPath);
model.enableExternalScorer(scorerPath);

// Set up the speech-to-text function
function speechToText(audioFile) {
    const buffer = fs.readFileSync(audioFile);
    const result = model.stt(buffer);
    return result;
}

// Example usage
const audioFile = 'path_to_your_audio_file.wav';
const transcription = speechToText(audioFile);
console.log('Transcription:', transcription);
