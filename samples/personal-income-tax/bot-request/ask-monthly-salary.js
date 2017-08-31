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
                "name": "personal_income_tax.inquiry",
                "slots": {
                    "monthlysalary": {
                        "name": "monthlysalary",
                        "value": ""
                    },
                    "location": {
                        "name": "location",
                        "value": "\u5317\u4eac"
                    }
                }
            }
        ]
    }
};

console.log(JSON.stringify(data));


