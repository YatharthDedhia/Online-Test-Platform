import useSpeechToText from 'react-hook-speech-to-text';

function Speech() {
    const {
        error,
        interimResult,
        isRecording,
        results,
        startSpeechToText,
        stopSpeechToText,
    } = useSpeechToText({
        continuous: true,
        useLegacyResults: false
    });

    if (error) return <p>Web Speech API is not available in this browser 🤷‍</p>;

    startSpeechToText()
    {
        results.map((result) => (
            //   <li key={result.timestamp}>{result.transcript}</li>
            console.log(result.transcript)
        ))
    }
    { interimResult && <li>{interimResult}</li> }
    stopSpeechToText()
}

export default Speech;