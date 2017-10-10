var data = {
    "version": "2.0",
    "session": {
        "new": true,
        "sessionId": "sessionId",
        "attributes": []
    },
    "context": {
        "System": {
            "application": {
                "applicationId": "sample_personal_tax"
            }
        }
    },
    "request": {
        "type": "IntentRequest",
        "intents": [
            {
                "name": "audio_play_intent",
                "slots": {
                }
            }
        ]
    }
};

console.log(JSON.stringify(data));


