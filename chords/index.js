// dependencies
const AWS = require('aws-sdk');
const circularArray = require("./CircularArray.js")
const chords = require("./Chords.js")

const piano = new circularArray.CircularArray([
  "C",
  "D♭",
  "D",
  "E♭",
  "E",
  "F",
  "G♭",
  "G",
  "A♭",
  "A",
  "B♭",
  "B"
]);

const majorKeys = {
  "C": [  // 1 - Major
    "D",  // 2 - Minor
    "E",  // 3 - Minor
    "F",  // 4 - Major
    "G",  // 5 - Dominant
    "A",  // 6 - Minor
    "B"   // 7 - Diminished
  ]
}


exports.handler = async (event, context, callback) => {

    var results = {}

    if (event.path === '/jazzchords') {
        const key = event.queryStringParameters.key
        const major = event.queryStringParameters.major
        results["jazzchords"] = chords.jazzChordsForKey(piano, "C", majorKeys["C"]);
    } else {
        
    } 

    // testing for now
    let responseCode = 200;
    responseBody = results

    // The output from a Lambda proxy integration must be 
    // in the following JSON object. The 'headers' property 
    // is for custom response headers in addition to standard 
    // ones. The 'body' property  must be a JSON string. For 
    // base64-encoded payload, you must also set the 'isBase64Encoded'
    // property to 'true'.
    let response = {
        statusCode: responseCode,
        headers: {
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
        },
        body: JSON.stringify(responseBody)
    };
    console.log("response: " + JSON.stringify(response))
    return response;
 

};
