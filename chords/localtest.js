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

  results = chords.jazzMajorChordsForKey(piano, "C", majorKeys["C"], "colors", "II-V-i")
  console.log(chords.sortProgression(results, "I-vi-ii-V"))

}

function SEMITEST(root) {

  var i = 0;
  do {
    console.log("C" + "-" + piano.find("C", i) + ": "+i)
    i++
  } while (i < 13)
  

}

function UPPERSTRUCTURE() {
  console.log("C Major Triad: "+chords.majorTriad(piano, "C"));
  console.log("C Minor Triad: "+chords.minorTriad(piano, "C"));
  console.log("G Upper Structure 1: "+chords.rootlessDominantUpperStructure1(piano, "G"));
  console.log("G Upper Structure 2: "+chords.rootlessDominantUpperStructure2(piano, "G"));
  console.log("G Upper Structure 3: "+chords.rootlessDominantUpperStructure3(piano, "G"));
  console.log("G Upper Structure 4: "+chords.rootlessDominantUpperStructure4(piano, "G"));
  console.log("G Upper Structure 5: "+chords.rootlessDominantUpperStructure5(piano, "G"));

  console.log("C Upper Structure 1: "+chords.rootlessDominantUpperStructure1(piano, "C"));
  console.log("C Upper Structure 2: "+chords.rootlessDominantUpperStructure2(piano, "C"));

}

function Drop2() {
  console.log("F6 Drop 2 A: "+chords.drop2MajorSixA(piano, "F"));
  console.log("F6 Drop 2 B: "+chords.drop2MajorSixB(piano, "F"));
  console.log("F6 Drop 2 A: "+chords.drop2MinorSixA(piano, "F"));
  console.log("F6 Drop 2 B: "+chords.drop2MinorSixB(piano, "F"));

}

KEYTEST()


