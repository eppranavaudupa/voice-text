const DeepSpeech = require('deepspeech');
const fs = require('fs');

// Load the DeepSpeech model
const modelPath = '/path/to/deepspeech-0.9.3-models.pbmm';
const scorerPath = '/path/to/deepspeech-0.9.3-models.scorer';
const model = new DeepSpeech.Model(modelPath);
model.enableExternalScorer(scorerPath);

async function transcribeAudio(audioFilePath) {
    const audioBuffer = fs.readFileSync(audioFilePath);
    const result = model.stt(audioBuffer);
    return result;
}

async function main() {
    const audioFilePath = './audio.wav';
    const transcription = await transcribeAudio(audioFilePath);
    console.log('Transcription:', transcription);
}

main().catch(console.error);
