// Add Dialogflow chatbot integration
const chatbotContainer = document.getElementById('chatbot-container');

// Dialogflow Web Demo Integration
const dfMessenger = document.createElement('df-messenger');
dfMessenger.setAttribute('intent', 'WELCOME');
dfMessenger.setAttribute('chat-title', 'TrackMyBusBot');
dfMessenger.setAttribute('agent-id', 'trackmybusbot-esch'); // Replace with your Dialogflow agent ID
dfMessenger.setAttribute('language-code', 'en');

chatbotContainer.appendChild(dfMessenger);