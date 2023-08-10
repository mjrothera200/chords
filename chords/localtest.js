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





function CTEST() {

  console.log("C Major Rootless Shell A: " + chords.rootlessMajorShellA(piano, "C"));
  console.log("C Major Rootless Shell B: " + chords.rootlessMajorShellB(piano, "C"));
  console.log("C Major Nine A Voicing Chord: " + chords.rootlessMajorNineA(piano, "C"));
  console.log("C Major Nine B Voicing Chord: " + chords.rootlessMajorNineB(piano, "C"));
  console.log("C Major Six Nine A Voicing Chord: " + chords.rootlessMajorSixNineA(piano, "C"));
  console.log("C Major Six Nine B Voicing Chord: " + chords.rootlessMajorSixNineB(piano, "C"));

  console.log("C Minor Rootless Shell A: " + chords.rootlessMinorShellA(piano, "C"));
  console.log("C Minor Rootless Shell B: " + chords.rootlessMinorShellB(piano, "C"));
  console.log("C Minor Nine A Voicing Chord: " + chords.rootlessMinorNineA(piano, "C"));
  console.log("C Minor Nine B Voicing Chord: " + chords.rootlessMinorNineB(piano, "C"));
  console.log("C Minor Six Nine A Voicing Chord: " + chords.rootlessMinorSixNineA(piano, "C"));
  console.log("C Minor Six Nine B Voicing Chord: " + chords.rootlessMinorSixNineB(piano, "C"));

}

function KEYTEST() {

  console.log(chords.jazzChordsForKey(piano, "C", majorKeys["C"]))

}

KEYTEST();


