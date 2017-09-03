var data = {
  "version": "v2.0",
  "session": {
    "new": false,
    "sessionId": "4c627098-5663-4c28-96e4-ece15c2b43c0",
    "attributes": []
  },
  "context": {
    "System": {
      "user": {
        "userId": "userId"
      },
      "application": {
        "applicationId": "botId"
      }
    }
  },
  "request": {
    "query": {
      "type": "TEXT",
      "original": "所得税查询",
      "rewritten": "所得税查询"
    },
    "dialogState": "STARTED",
    "determined": false,
    "intents": [
      {
        "name": "intentName",
        "score": 100,
        "confirmationStatus": "NONE",
        "slots":{
          "city": {
            "name": "city",
            "value": "北京",
            "score": 0,
            "confirmationStatus": "NONE"
          }
        } 
      }
    ],
    "type": "IntentRequest",
    "requestId": "1e335011-80cf-49cc-93c8-dc689826bb46",
    "timestamp": "1504359342"
  }
};

module.exports = data;

