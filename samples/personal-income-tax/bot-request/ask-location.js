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
                        "value": "1111"
                    },
                    "location": {
                        "name": "location",
                        "value": ""
                    }
                }
            }
        ]
    }
};

console.log(JSON.stringify(data));


