// src/Chatbot.js
import React, { useEffect } from 'react';

const Chatbot = () => {
    useEffect(() => {
        // Create a div for the chatbot
        const div = document.createElement('div');
        div.id = 'aichatbot';
        document.body.appendChild(div);

        // Create the script element
        const script = document.createElement('script');
        script.src = 'https://aichatbot.sendbird.com/index.js';
        script.defer = true;
        script.type = 'module';

        // Set the chatbot configuration
        window.chatbotConfig = [
            'A1A80939-7FC8-4BB4-A029-B5C36155A533',
            'onboarding_bot',
            { apiHost: 'https://api-cf-ap-5.sendbird.com' },
        ];

        // Insert the script before the first script tag
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(script, firstScriptTag);

        // Cleanup on component unmount
        return () => {
            document.body.removeChild(div);
            if (script.parentNode) {
                script.parentNode.removeChild(script);
            }
        };
    }, []);

    return null; // This component does not render anything to the DOM
};

export default Chatbot;
