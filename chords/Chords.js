// # of semitones to skip
const MAJOR_SEVEN = 10
const MINOR_SEVEN = 9
const DOMINANT_SEVEN = 9
const NINTH = 1
const MAJOR_THIRD = 3
const MINOR_SECOND = 2
const FIFTH = 6
const SIXTH = 8
const THIRTEENTH = 8

// Dominant Chords

function rootlessDominantShellA(piano, root) {
    // 3-7

    chord = piano.find(root, MAJOR_THIRD) + "-" + piano.find(root, DOMINANT_SEVEN)

    return chord;
}

function rootlessDominantShellB(piano, root) {

    // 7-3

    chord = piano.find(root, DOMINANT_SEVEN) + "-" + piano.find(root, MAJOR_THIRD)

    return chord;

}

function rootlessDominantThirteenA(piano, root) {

    // 3-13th-flat 7-9

    chord = piano.find(root, MAJOR_THIRD) + "-" + piano.find(root, THIRTEENTH) + "-" + piano.find(root, DOMINANT_SEVEN) + "-" + piano.find(root, NINTH)

    return chord;

}

function rootlessDominantThirteenB(piano, root) {

    // flat 7-9-3-13

    chord = piano.find(root, DOMINANT_SEVEN) + "-" + piano.find(root, NINTH) + "-" + piano.find(root, MAJOR_THIRD) + "-" + piano.find(root, THIRTEENTH)

    return chord;

}

// Major Chords

function rootlessMajorShellA(piano, root) {
    // 3-7

    chord = piano.find(root, MAJOR_THIRD) + "-" + piano.find(root, MAJOR_SEVEN)

    return chord;
}

function rootlessMajorShellB(piano, root) {

    // 7-3

    chord = piano.find(root, MAJOR_SEVEN) + "-" + piano.find(root, MAJOR_THIRD)

    return chord;

}


function rootlessMajorNineA(piano, root) {

    // 3-5-7-9

    chord = piano.find(root, MAJOR_THIRD) + "-" + piano.find(root, FIFTH) + "-" + piano.find(root, MAJOR_SEVEN) + "-" + piano.find(root, NINTH)

    return chord;

}


function rootlessMajorNineB(piano, root) {

    // 7-9-3-5

    chord = piano.find(root, MAJOR_SEVEN) + "-" + piano.find(root, NINTH) + "-" + piano.find(root, MAJOR_THIRD) + "-" + piano.find(root, FIFTH)

    return chord;

}

function rootlessMajorSixNineA(piano, root) {

    // 3-5-6-9

    chord = piano.find(root, MAJOR_THIRD) + "-" + piano.find(root, FIFTH) + "-" + piano.find(root, SIXTH) + "-" + piano.find(root, NINTH)

    return chord;

}


function rootlessMajorSixNineB(piano, root) {

    // 6-9-3-5

    chord = piano.find(root, SIXTH) + "-" + piano.find(root, NINTH) + "-" + piano.find(root, MAJOR_THIRD) + "-" + piano.find(root, FIFTH)

    return chord;

}

// Minor Jazz Chords

function rootlessMinorShellA(piano, root) {
    // 3-7

    chord = piano.find(root, MINOR_SECOND) + "-" + piano.find(root, MINOR_SEVEN)

    return chord;
}

function rootlessMinorShellB(piano, root) {

    // 7-3

    chord = piano.find(root, MINOR_SEVEN) + "-" + piano.find(root, MINOR_SECOND)

    return chord;

}
function rootlessMinorNineA(piano, root) {

    // 3-5-7-9

    chord = piano.find(root, MINOR_SECOND) + "-" + piano.find(root, FIFTH) + "-" + piano.find(root, MINOR_SEVEN) + "-" + piano.find(root, NINTH)

    return chord;

}


function rootlessMinorNineB(piano, root) {

    // 7-9-3-5

    chord = piano.find(root, MINOR_SEVEN) + "-" + piano.find(root, NINTH) + "-" + piano.find(root, MINOR_SECOND) + "-" + piano.find(root, FIFTH)

    return chord;

}

function rootlessMinorSixNineA(piano, root) {

    // 3-5-6-9

    chord = piano.find(root, MINOR_SECOND) + "-" + piano.find(root, FIFTH) + "-" + piano.find(root, SIXTH) + "-" + piano.find(root, NINTH)

    return chord;

}


function rootlessMinorSixNineB(piano, root) {

    // 6-9-3-5

    chord = piano.find(root, SIXTH) + "-" + piano.find(root, NINTH) + "-" + piano.find(root, MINOR_SECOND) + "-" + piano.find(root, FIFTH)

    return chord;

}

function jazzChordsForKey(piano, keySignature, chords) {

    var jazzChords = [];

    // add the major for key signature - 1
    jazzChords[0] = ["I", keySignature + "maj7", rootlessMajorShellA(piano, keySignature), rootlessMajorShellB(piano, keySignature), rootlessMajorSixNineA(piano, keySignature), rootlessMajorSixNineB(piano, keySignature)];
    // add the dominant in the key signature - this is sometimes presnet
    jazzChords[1] = ["Ia", keySignature + "7", rootlessDominantShellA(piano, keySignature), rootlessDominantShellB(piano, keySignature), rootlessDominantThirteenA(piano, keySignature),rootlessDominantThirteenB(piano, keySignature)];
    // add the minor for 2 
    jazzChords[2] = ["II", chords[0] + "m7", rootlessMinorShellA(piano, chords[0]), rootlessMinorShellB(piano, chords[0]), rootlessMinorSixNineA(piano, chords[0]), rootlessMinorSixNineB(piano, chords[0])];
    // add the minor for 3 
    jazzChords[3] = ["III", chords[1] + "m7", rootlessMinorShellA(piano, chords[1]), rootlessMinorShellB(piano, chords[1]), rootlessMinorSixNineA(piano, chords[1]), rootlessMinorSixNineB(piano, chords[1])];
    // add the major for 4
    jazzChords[4] = ["iV", chords[2] + "m7", rootlessMajorShellA(piano, chords[2]), rootlessMajorShellB(piano, chords[2]), rootlessMajorSixNineA(piano, chords[2]), rootlessMajorSixNineB(piano, chords[2])];
    // add the dominant for 5
    jazzChords[5] = ["V", chords[3] + "7", rootlessDominantShellA(piano, chords[3]), rootlessDominantShellB(piano, chords[3]), rootlessDominantThirteenA(piano, chords[3]),rootlessDominantThirteenB(piano, chords[3])];

    return jazzChords;

}


module.exports = { jazzChordsForKey, rootlessDominantShellA, rootlessDominantShellB, rootlessDominantThirteenA, rootlessDominantThirteenB, rootlessMajorShellA, rootlessMajorShellB, rootlessMajorNineB, rootlessMajorNineA, rootlessMajorSixNineA, rootlessMajorSixNineB, rootlessMinorShellA, rootlessMinorShellB, rootlessMinorNineB, rootlessMinorNineA, rootlessMinorSixNineA, rootlessMinorSixNineB };