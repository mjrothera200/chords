// dependencies
const AWS = require('aws-sdk');
const circularArray = require("./CircularArray.js")
const chords = require("./Chords.js")

const majorProgressions = [
  {value: "ordered", label: "Ordered"},
  {value: "ii-V-I", label: "ii-V-I"},
  {value: "I-vi-ii-V", label: "I-vi-ii-V"},
  {value: "I-IV-III-vi-ii-V", label: "I-IV-III-vi-ii-V"}
]

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
  ],
  "D♭": [  // 1 - Major
    "E♭",  // 2 - Minor
    "F",  // 3 - Minor
    "G♭",  // 4 - Major
    "A♭",  // 5 - Dominant
    "B♭",  // 6 - Minor
    "C"   // 7 - Diminished
  ],
  "D": [  // 1 - Major
    "E",  // 2 - Minor
    "G♭",  // 3 - Minor
    "G",  // 4 - Major
    "A",  // 5 - Dominant
    "B",  // 6 - Minor
    "D♭"   // 7 - Diminished
  ],
  "E♭": [  // 1 - Major
    "F",  // 2 - Minor
    "G",  // 3 - Minor
    "A♭",  // 4 - Major
    "B♭",  // 5 - Dominant
    "C",  // 6 - Minor
    "D♭"   // 7 - Diminished
  ],
  "E": [  // 1 - Major
    "G♭",  // 2 - Minor
    "A♭",  // 3 - Minor
    "A",  // 4 - Major
    "B",  // 5 - Dominant
    "D♭",  // 6 - Minor
    "E♭"   // 7 - Diminished
  ],
  "F": [  // 1 - Major
    "G",  // 2 - Minor
    "A",  // 3 - Minor
    "B♭",  // 4 - Major
    "C",  // 5 - Dominant
    "D",  // 6 - Minor
    "E♭"   // 7 - Diminished
  ],
  "G♭": [  // 1 - Major
    "A♭",  // 2 - Minor
    "B♭",  // 3 - Minor
    "B",  // 4 - Major (C flat)
    "D♭",  // 5 - Dominant
    "E♭",  // 6 - Minor
    "F"   // 7 - Diminished
  ],
  "G": [  // 1 - Major
    "A",  // 2 - Minor
    "B",  // 3 - Minor
    "C",  // 4 - Major (C flat)
    "D",  // 5 - Dominant
    "E",  // 6 - Minor
    "G♭"   // 7 - Diminished
  ],
  "A♭": [  // 1 - Major
    "B♭",  // 2 - Minor
    "C",  // 3 - Minor
    "D♭",  // 4 - Major 
    "E♭",  // 5 - Dominant
    "F",  // 6 - Minor
    "G"   // 7 - Diminished
  ],
  "A": [  // 1 - Major
    "B",  // 2 - Minor
    "D♭",  // 3 - Minor
    "D",  // 4 - Major 
    "E",  // 5 - Dominant
    "G♭",  // 6 - Minor
    "A♭"   // 7 - Diminished
  ],
  "B♭": [  // 1 - Major
    "C",  // 2 - Minor
    "D",  // 3 - Minor
    "E♭",  // 4 - Major 
    "F",  // 5 - Dominant
    "G",  // 6 - Minor
    "A"   // 7 - Diminished
  ],
  "B": [  // 1 - Major
    "D♭",  // 2 - Minor
    "E♭",  // 3 - Minor
    "E",  // 4 - Major 
    "G♭",  // 5 - Dominant
    "A♭",  // 6 - Minor
    "B♭"   // 7 - Diminished
  ]
}


exports.handler = async (event, context, callback) => {

  var results = {}

  if (event.path === '/jazzchords') {
    const key = event.queryStringParameters.key
    const major = event.queryStringParameters.major
    const complexity = event.queryStringParameters.complexity
    const progression = event.queryStringParameters.progression
    intermediate_results = chords.jazzMajorChordsForKey(piano, key, majorKeys[key], complexity);
    results["chords"] = chords.sortProgression(intermediate_results, progression)
  } else if (event.path === '/piano') {

    results["chords"] = piano.toOptionsArray()
    results["majorProgressions"] = majorProgressions

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
