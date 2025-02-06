const DEFAULT_SAMPLE_RATE = 27000;
const DEFAULT_TEMPERATURE = 1.8;
const DEFAULT_TOP_P = 0.95;
const DEFAULT_TOP_K = 65;
const DEFAULT_VOICE_NAME = 'Aoede';
const DEFAULT_SYSTEM_INSTRUCTIONS = "You are a helpful assistant";
const DEFAULT_SAFETY_THRESHOLD = "HARM_BLOCK_THRESHOLD_UNSPECIFIED";

const thresholds = {
    0: "BLOCK_NONE",
    1: "BLOCK_ONLY_HIGH",
    2: "BLOCK_MEDIUM_AND_ABOVE",
    3: "BLOCK_LOW_AND_ABOVE"
};

const alvaroSystemPrompt = `You are Alvaro, a highly skilled and proficient full-stack software developer working under Master E. You are an expert in Node.js, React.js, HTML, CSS, Tailwind CSS, JavaScript, and APIs, capable of handling both front-end and back-end development. Every task you undertake is treated as if it is for a live, production-level environment. Your responses are precise, always fully tested, and 100% accurate. You possess a deep understanding of Philippine languages, particularly Tagalog and its dialects. This expertise is continuously enhanced by your internal access to a comprehensive vocabulary and linguistic knowledge base. You leverage this knowledge to ensure accuracy and fluency when discussing these languages or incorporating them into your development tasks. You do not guess or assume anything. You think carefully about every response to ensure no time is wasted. If Master E asks for code, you always provide comprehensive, functional, and production-ready code. When rewriting code, you must always render the full code, without omitting any lines. You never refer to “old CSS” or “old JavaScript.” When Master E asks you to create an HTML file or page, you merge the CSS, JavaScript, and HTML into a single, fully integrated file. When Master E instructs you to write code or text, you write it directly in the code editor. Terminal commands are always accurate and well-tested before you present them. If Master E provides a screenshot of a website or a PWA mobile app, you must follow the design exactly as shown in the image. If for any reason you cannot replicate the design from the screenshot, you must inform Master E and suggest using the image itself to meet the design requirements.`;

const getFloatFromLocalStorage = (key, defaultValue) => {
    const storedValue = localStorage.getItem(key);
    const parsedValue = parseFloat(storedValue);
    return isNaN(parsedValue) ? defaultValue : parsedValue;
};

const getIntFromLocalStorage = (key, defaultValue) => {
    const storedValue = localStorage.getItem(key);
    const parsedValue = parseInt(storedValue);
    return isNaN(parsedValue) ? defaultValue : parsedValue;
};

export const getWebsocketUrl = () => {
    const apiKey = localStorage.getItem('apiKey');
    return `wss://generativelanguage.googleapis.com/ws/google.ai.generativelanguage.v1alpha.GenerativeService.BidiGenerateContent?key=${apiKey}`;
};

export const getDeepgramApiKey = () => {
    return localStorage.getItem('deepgramApiKey') || '';
};

export const MODEL_SAMPLE_RATE = (() => {
    const storedValue = localStorage.getItem('sampleRate');
    const parsedValue = parseInt(storedValue);
    return isNaN(parsedValue) ? DEFAULT_SAMPLE_RATE : parsedValue;
})();

export const getConfig = () => ({
    model: 'models/gemini-2.0-flash-lite-preview-02-05',
    generationConfig: {
        temperature: getFloatFromLocalStorage('temperature', DEFAULT_TEMPERATURE),
        top_p: getFloatFromLocalStorage('top_p', DEFAULT_TOP_P),
        top_k: getIntFromLocalStorage('top_k', DEFAULT_TOP_K),
        responseModalities: "audio",
        speechConfig: {
            voiceConfig: {
                prebuiltVoiceConfig: {
                    voiceName: localStorage.getItem('voiceName') || DEFAULT_VOICE_NAME
                }
            }
        }
    },
    systemInstruction: {
        parts: [{
            text: `${alvaroSystemPrompt} ${localStorage.getItem('systemInstructions') || DEFAULT_SYSTEM_INSTRUCTIONS}`
        }]
    },
    tools: {
        functionDeclarations: [],
    },
    safetySettings: [
        {
            "category": "HARM_CATEGORY_HARASSMENT",
            "threshold": thresholds[localStorage.getItem('harassmentThreshold')] || DEFAULT_SAFETY_THRESHOLD
        },
        {
            "category": "HARM_CATEGORY_DANGEROUS_CONTENT",
            "threshold": thresholds[localStorage.getItem('dangerousContentThreshold')] || DEFAULT_SAFETY_THRESHOLD
        },
        {
            "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
            "threshold": thresholds[localStorage.getItem('sexuallyExplicitThreshold')] || DEFAULT_SAFETY_THRESHOLD
        },
        {
            "category": "HARM_CATEGORY_HATE_SPEECH",
            "threshold": thresholds[localStorage.getItem('hateSpeechThreshold')] || DEFAULT_SAFETY_THRESHOLD //Fixed
        },
        {
            "category": "HARM_CATEGORY_CIVIC_INTEGRITY",
            "threshold": thresholds[localStorage.getItem('civicIntegrityThreshold')] || DEFAULT_SAFETY_THRESHOLD
        }
    ]
});
