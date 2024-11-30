// # of semitones to skip
//const MAJOR_SEVEN = 10
//const MINOR_SEVEN = 9
//const DOMINANT_SEVEN = 9
//const NINTH = 1
//const MAJOR_THIRD = 3
//const MINOR_SECOND = 2
//const FIFTH = 6
//const SIXTH = 8
//const THIRTEENTH = 8

const SEMI_UNISON = 0
const SEMI_MINOR_SECOND = 1
const SEMI_MINOR_NINTH = 2
const SEMI_MAJOR_SECOND = 2
const SEMI_SECOND = 2
const SEMI_NINTH = 2
const SEMI_MAJOR_NINTH = 2
const SEMI_MINOR_THIRD = 3
const SEMI_MAJOR_THIRD = 4
const SEMI_FOURTH = 5
const SEMI_MAJOR_ELEVENTH = 5
const SEMI_MINOR_ELEVENTH = 5
const SEMI_FIFTH = 7
const SEMI_MINOR_SIXTH = 8
const SEMI_MAJOR_SIXTH = 9
const SEMI_MINOR_THIRTEENTH = 8
const SEMI_MAJOR_THIRTEENTH = 9
const SEMI_MINOR_SEVENTH = 10
const SEMI_MAJOR_SEVENTH = 11
const SEMI_OCTAVE = 11

// dominantTriad

function dominantTriad(piano, root) {

    chord = root + "-" + piano.find(root, SEMI_MAJOR_THIRD) + "-" + piano.find(root, SEMI_FIFTH) + "-" + piano.find(root, SEMI_MINOR_SEVENTH)

    return chord;

}

// majorTriad

function majorTriad(piano, root) {

    chord = root + "-" + piano.find(root, SEMI_MAJOR_THIRD) + "-" + piano.find(root, SEMI_FIFTH)

    return chord;

}

// majorTriad

function majorSus2(piano, root) {

    chord = root + "-" + piano.find(root, SEMI_MAJOR_SECOND) + "-" + piano.find(root, SEMI_FIFTH)

    return chord;

}

// minorTriad

function minorTriad(piano, root) {

    chord = root + "-" + piano.find(root, SEMI_MINOR_THIRD) + "-" + piano.find(root, SEMI_FIFTH)

    return chord;

}

// minorTriad

function minorSeventh(piano, root) {

    chord = root + "-" + piano.find(root, SEMI_MINOR_THIRD) + "-" + piano.find(root, SEMI_FIFTH) + "-" + piano.find(root, SEMI_MINOR_SEVENTH)

    return chord;

}

// Open 5th

function openFifth(piano, root) {

    chord = root + "-" + piano.find(root, SEMI_FIFTH)

    return chord;

}

// dominantTriad

function dominantLHVoicing(piano, root) {

    chord = root + "-" + piano.find(root, SEMI_MAJOR_THIRD) + "-" + piano.find(root, SEMI_MINOR_SEVENTH)

    return chord;

}

// majorTriad

function majorLHVoicing(piano, root) {

    chord = root + "-" + piano.find(root, SEMI_MAJOR_THIRD) + "-" + piano.find(root, SEMI_MAJOR_SEVENTH)

    return chord;

}

// minorTriad

function minorLHVoicing(piano, root) {

    chord = root + "-" + piano.find(root, SEMI_MINOR_THIRD) + "-" + piano.find(root, SEMI_MINOR_SEVENTH)

    return chord;

}

// Dominant Chords

function rootlessDominantShellA(piano, root) {
    // 3-7

    chord = piano.find(root, SEMI_MAJOR_THIRD) + "-" + piano.find(root, SEMI_MINOR_SEVENTH)

    return chord;
}

function rootlessDominantShellB(piano, root) {

    // 7-3

    chord = piano.find(root, SEMI_MINOR_SEVENTH) + "-" + piano.find(root, SEMI_MAJOR_THIRD)

    return chord;

}

// Flat 13 and Sharp 9.  Take the Flat 6 and create a major triad on it.
function rootlessDominantUpperStructure1(piano, root) {



    chord = "(" + piano.find(root, SEMI_MAJOR_SIXTH - 1) + ") " + majorTriad(piano, piano.find(root, SEMI_MAJOR_SIXTH - 1));

    return chord;

}

// Flat 9 and Sharp 11.  Take the Flat 5 and create a major triad on it.
function rootlessDominantUpperStructure2(piano, root) {



    chord = "(" + piano.find(root, SEMI_FIFTH - 1) + ") " + majorTriad(piano, piano.find(root, SEMI_FIFTH - 1));

    return chord;

}

// Built on the 6th
function rootlessDominantUpperStructure3(piano, root) {



    chord = "(" + piano.find(root, SEMI_MAJOR_SIXTH) + ") " + majorTriad(piano, piano.find(root, SEMI_MAJOR_SIXTH));

    return chord;

}

// Built on the 2nd
function rootlessDominantUpperStructure4(piano, root) {



    chord = "(" + piano.find(root, SEMI_MAJOR_SECOND) + ") " + majorTriad(piano, piano.find(root, SEMI_MAJOR_SECOND));

    return chord;

}

// Built on the flat 3rd
function rootlessDominantUpperStructure5(piano, root) {



    chord = "(" + piano.find(root, SEMI_MAJOR_THIRD - 1) + ") " + majorTriad(piano, piano.find(root, SEMI_MAJOR_THIRD - 1));

    return chord;

}

function rootlessDominantThirteenA(piano, root) {

    // 3-13th-flat 7-9

    chord = piano.find(root, SEMI_MAJOR_THIRD) + "-" + piano.find(root, SEMI_MAJOR_THIRTEENTH) + "-" + piano.find(root, SEMI_MINOR_SEVENTH) + "-" + piano.find(root, SEMI_MAJOR_NINTH)

    return chord;

}

function rootlessDominantThirteenB(piano, root) {

    // flat 7-9-3-13

    chord = piano.find(root, SEMI_MINOR_SEVENTH) + "-" + piano.find(root, SEMI_MAJOR_NINTH) + "-" + piano.find(root, SEMI_MAJOR_THIRD) + "-" + piano.find(root, SEMI_MAJOR_THIRTEENTH)

    return chord;

}

// Major Chords

function rootlessMajorShellA(piano, root) {
    // 3-7

    chord = piano.find(root, SEMI_MAJOR_THIRD) + "-" + piano.find(root, SEMI_MAJOR_SEVENTH)

    return chord;
}

function rootlessMajorShellB(piano, root) {

    // 7-3

    chord = piano.find(root, SEMI_MAJOR_SEVENTH) + "-" + piano.find(root, SEMI_MAJOR_THIRD)

    return chord;

}


function rootlessMajorNineA(piano, root) {

    // 3-5-7-9

    chord = piano.find(root, SEMI_MAJOR_THIRD) + "-" + piano.find(root, SEMI_FIFTH) + "-" + piano.find(root, SEMI_MAJOR_SEVENTH) + "-" + piano.find(root, SEMI_MAJOR_NINTH)

    return chord;

}


function rootlessMajorNineB(piano, root) {

    // 7-9-3-5

    chord = piano.find(root, SEMI_MAJOR_SEVENTH) + "-" + piano.find(root, SEMI_MAJOR_NINTH) + "-" + piano.find(root, SEMI_MAJOR_THIRD) + "-" + piano.find(root, SEMI_FIFTH)

    return chord;

}

function rootlessMajorSixNineA(piano, root) {

    // 3-5-6-9

    chord = piano.find(root, SEMI_MAJOR_THIRD) + "-" + piano.find(root, SEMI_FIFTH) + "-" + piano.find(root, SEMI_MAJOR_SIXTH) + "-" + piano.find(root, SEMI_MAJOR_NINTH)

    return chord;

}


function rootlessMajorSixNineB(piano, root) {

    // 6-9-3-5

    chord = piano.find(root, SEMI_MAJOR_SIXTH) + "-" + piano.find(root, SEMI_MAJOR_NINTH) + "-" + piano.find(root, SEMI_MAJOR_THIRD) + "-" + piano.find(root, SEMI_FIFTH)

    return chord;

}

// Minor Jazz Chords

function rootlessMinorShellA(piano, root) {
    // 3-7

    chord = piano.find(root, SEMI_MINOR_THIRD) + "-" + piano.find(root, SEMI_MINOR_SEVENTH)

    return chord;
}

function rootlessMinorShellB(piano, root) {

    // 7-3

    chord = piano.find(root, SEMI_MINOR_SEVENTH) + "-" + piano.find(root, SEMI_MINOR_THIRD)

    return chord;

}
function rootlessMinorNineA(piano, root) {

    // 3-5-7-9

    chord = piano.find(root, SEMI_MINOR_THIRD) + "-" + piano.find(root, SEMI_FIFTH) + "-" + piano.find(root, SEMI_MINOR_SEVENTH) + "-" + piano.find(root, SEMI_NINTH)

    return chord;

}


function rootlessMinorNineB(piano, root) {

    // 7-9-3-5

    chord = piano.find(root, SEMI_MINOR_SEVENTH) + "-" + piano.find(root, SEMI_NINTH) + "-" + piano.find(root, SEMI_MINOR_THIRD) + "-" + piano.find(root, SEMI_FIFTH)

    return chord;

}

function rootlessMinorSixNineA(piano, root) {

    // 3-5-6-9

    chord = piano.find(root, SEMI_MINOR_THIRD) + "-" + piano.find(root, SEMI_FIFTH) + "-" + piano.find(root, SEMI_MINOR_SIXTH) + "-" + piano.find(root, SEMI_NINTH)

    return chord;

}


function rootlessMinorSixNineB(piano, root) {

    // 6-9-3-5

    chord = piano.find(root, SEMI_MINOR_SIXTH) + "-" + piano.find(root, SEMI_NINTH) + "-" + piano.find(root, SEMI_MINOR_THIRD) + "-" + piano.find(root, SEMI_FIFTH)

    return chord;

}

function drop2MajorSixA(piano, root) {

    // 1st inversion
    // 3-5-6-1, but drop the second from the top, which means 6-3-5-1

    chord = piano.find(root, SEMI_MAJOR_SIXTH) + "-" + piano.find(root, SEMI_MAJOR_THIRD) + "-" + piano.find(root, SEMI_FIFTH) + "-" + root

    return chord;

}


function drop2MajorSixB(piano, root) {

    // 2nd inversion
    // 5-6-1-3, but drop the second from the top, which means 1-5-6-3

    chord = root + "-" + piano.find(root, SEMI_FIFTH) + "-" + piano.find(root, SEMI_MAJOR_SIXTH) + "-" + piano.find(root, SEMI_MAJOR_THIRD)

    return chord;

}

function drop2MinorSixA(piano, root) {

    // 1st inversion
    // 3-5-6-1, but drop the second from the top, which means 6-3-5-1

    chord = piano.find(root, SEMI_MINOR_SIXTH) + "-" + piano.find(root, SEMI_MINOR_THIRD) + "-" + piano.find(root, SEMI_FIFTH) + "-" + root

    return chord;

}


function drop2MinorSixB(piano, root) {

    // 2nd inversion
    // 5-6-1-3, but drop the second from the top, which means 1-5-6-3

    chord = root + "-" + piano.find(root, SEMI_FIFTH) + "-" + piano.find(root, SEMI_MINOR_SIXTH) + "-" + piano.find(root, SEMI_MINOR_THIRD)

    return chord;

}

function minorNineFlatNine(piano, root) {

    // 9 and Flat Nine

    chord = piano.find(root, SEMI_MINOR_NINTH) + "(" + piano.find(root, SEMI_MINOR_NINTH - 1) + ")"

    return chord;

}

function majorNineFlatNine(piano, root) {

    // 9 and Flat Nine

    chord = piano.find(root, SEMI_MAJOR_NINTH) + "(" + piano.find(root, SEMI_MAJOR_NINTH - 1) + ")"

    return chord;

}

function minorThirteenFlatThirteen(piano, root) {

    // 9 and Flat Nine

    chord = piano.find(root, SEMI_MINOR_THIRTEENTH) + "(" + piano.find(root, SEMI_MINOR_THIRTEENTH - 1) + ")"

    return chord;

}

function majorThirteenFlatThirteen(piano, root) {

    // 9 and Flat Nine

    chord = piano.find(root, SEMI_MAJOR_THIRTEENTH) + "(" + piano.find(root, SEMI_MAJOR_THIRTEENTH - 1) + ")"

    return chord;

}

function majorColors(piano, root) {

    // 7, 9, or 13

    colors = piano.find(root, SEMI_MAJOR_SEVENTH) + " (7), " + "[ " + piano.find(root, SEMI_MAJOR_NINTH) + " Shell ]: " + piano.find(root, SEMI_MAJOR_NINTH) + " (9), " + piano.find(root, SEMI_MAJOR_THIRTEENTH) + " (13)"

    return colors

}

function minorColors(piano, root) {

    // ♭7, 9, or 13

    colors = "[ " + piano.find(root, SEMI_MINOR_SEVENTH) + " Major Triad ]: " + piano.find(root, SEMI_MINOR_SEVENTH) + " (♭7), " + piano.find(root, SEMI_MINOR_NINTH) + " (9), " + piano.find(root, SEMI_MINOR_ELEVENTH) + " (11)"

    return colors


}

function dominantColors(piano, root) {

    // 9, ♭9, #9, #11, 13, ♭13

    colors = "[ " + piano.find(root, SEMI_MAJOR_NINTH) + " Shell ]: " + piano.find(root, SEMI_MAJOR_NINTH) + " (9), " + piano.find(root, SEMI_MAJOR_THIRTEENTH) + " (13), " + "[ " + piano.find(root, SEMI_MAJOR_NINTH - 1) + " Shell ]: " + piano.find(root, SEMI_MAJOR_NINTH - 1) + " (♭9), " + piano.find(root, SEMI_MAJOR_THIRTEENTH - 1) + " (♭13)" + " [Extra: ]" + piano.find(root, SEMI_MAJOR_NINTH + 1) + " (#9), " + piano.find(root, SEMI_MAJOR_ELEVENTH + 1) + " (♭5, #11), "

    return colors


}


function sortProgression(results, progression) {

    finalarray = []

    if (progression === "ii-V-I") {

        finalarray[0] = results.chords[2];
        finalarray[1] = results.chords[5];
        finalarray[2] = results.chords[0];
        finalarray[3] = results.chords[1];
        finalarray[4] = results.chords[3];
        finalarray[5] = results.chords[4];
        finalarray[6] = results.chords[6];
        finalarray[7] = results.chords[7];



    } else if (progression === "I-vi-ii-V") {

        finalarray[0] = results.chords[0];
        finalarray[1] = results.chords[6];
        finalarray[2] = results.chords[2];
        finalarray[3] = results.chords[5];
        finalarray[4] = results.chords[1];
        finalarray[5] = results.chords[3];
        finalarray[6] = results.chords[4];
        finalarray[7] = results.chords[7];
    } else if (progression === "I-IV-III-vi-ii-V") {

        finalarray[0] = results.chords[0];
        finalarray[1] = results.chords[4];
        finalarray[2] = results.chords[3];
        finalarray[3] = results.chords[6];
        finalarray[4] = results.chords[2];
        finalarray[5] = results.chords[5];
        finalarray[6] = results.chords[1];
        finalarray[7] = results.chords[7];


    } else {

        finalarray = results.chords
    }

    results.chords = finalarray;

    return results

}


function majorUppers(piano, root, version) {

    uppers = ""

    if (version == 1) {
        // HACK #1:  Play a Major on the 5th to turn it into a 9 Chord

        uppers = "[" + root + "9 (major on 5th): " + piano.find(root, SEMI_FIFTH) + "] " + majorTriad(piano, piano.find(root, SEMI_FIFTH))

    } else if (version == 2) {

        // HACK #2:  Play a Sus2 Chord on the 6th to turn it into a 13th chord

        uppers = "[" + root + "13 (sus2 on 6th): " + piano.find(root, SEMI_MAJOR_SIXTH) + "] " + majorSus2(piano, piano.find(root, SEMI_MAJOR_SIXTH))

    } else if (version == 3) {

        // HACK #3:  Play a minor 7 chord on the 7 to turn it into a 13(#11)
        uppers = "[" + root + "13 (#11) (minor 7 on the 7th): " + piano.find(root, SEMI_MAJOR_SEVENTH) + "m ] " + minorSeventh(piano, piano.find(root, SEMI_MAJOR_SEVENTH))


    } if (version == 4) {

        // Summarize
        uppers = "[" + root + "9 (major on 5th): " + piano.find(root, SEMI_FIFTH) + "]"
    }

    return uppers

}

function minorUppers(piano, root, version) {

    uppers = ""

    if (version == 1) {
        // HACK #1:  Play a Minor on the 5th to turn it into a 9 Chord

        uppers = "[" + root + "9 (minor on 5th): " + piano.find(root, SEMI_FIFTH) + "m ] " + minorTriad(piano, piano.find(root, SEMI_FIFTH))

    } else if (version == 2) {

        // HACK #2: Play an open 5th on the second to turn it into a Minor 6/9 chord
        uppers = "[" + root + "m 6/9 (Open 5th on 2nd): " + piano.find(root, SEMI_SECOND) + "] " + openFifth(piano, piano.find(root, SEMI_SECOND))

    } else if (version == 3) {

        // HACK #3: Play a major chord on the ♭7
        uppers = "[" + root + "m11 (Major Chord on ♭7): " + piano.find(root, SEMI_MINOR_SEVENTH) + "] " + majorTriad(piano, piano.find(root, SEMI_MINOR_SEVENTH))



    } if (version == 4) {

        uppers = "[" + root + "9 (minor on 5th): " + piano.find(root, SEMI_FIFTH) + "m ] "
    }

    return uppers


}

function dominantUppers(piano, root, version) {

    uppers = ""
    if (version == 1) {


         // HACK #1:  Play a Major Chord on the ♭5 to turn it into a ♭13/#9
         uppers = "[" + root + "#11/♭9 (major on ♭5): " + piano.find(root, SEMI_FIFTH - 1) + "] " + majorTriad(piano, piano.find(root, SEMI_FIFTH - 1))

    } else if (version == 2) {

        // HACK #2:  Play a Major Chord on the 2 to turn it into a 13(#11)

        uppers = "[" + root + "13(#11) (major on 2nd): " + piano.find(root, SEMI_MAJOR_SECOND) + "] " + majorTriad(piano, piano.find(root, SEMI_MAJOR_SECOND))


    } else if (version == 3) {

        // HACK #3:  Play a Major Chord on the ♭6 to turn it into a ♭13/#9
        uppers = "[" + root + "♭13/#9 (major on ♭6): " + piano.find(root, SEMI_MAJOR_SIXTH - 1) + "] " + majorTriad(piano, piano.find(root, SEMI_MAJOR_SIXTH - 1))


    } if (version == 4) {

        uppers = "[" + root + "♭13/#9 (major on ♭6): " + piano.find(root, SEMI_MAJOR_SIXTH - 1) + "] " + "[" + root + "13(#11) (major on 2nd): " + piano.find(root, SEMI_MAJOR_SECOND) + "] " + "[" + root + "#11/♭9 (major on ♭5): " + piano.find(root, SEMI_FIFTH - 1) + "] "

    }

    return uppers



}

function secondaryDominant(piano, root) {

    // Find the 5th and create a 7th chord

    colors = piano.find(root, SEMI_FIFTH) + "7" + "(" + dominantTriad(piano, piano.find(root, SEMI_FIFTH)) + ")"

    return colors

}

function tritoneSub(piano, root) {

    // Find the fifth, and then find the 5th of that - 1 which is the tri-tone sub

    fifth = piano.find(root, SEMI_FIFTH)
    colors = piano.find(fifth, SEMI_FIFTH-1) + "7" + "(" + dominantTriad(piano, piano.find(fifth, SEMI_FIFTH-1)) + ")"

    return colors

}



function jazzMajorChordsForKey(piano, keySignature, chords, complexity) {

    var jazzChords = {};

    if (complexity === "passing") {

        // Shell Chords
        jazzChords.metadata = ["#", "Chord", "Secondary Dominant", "Tritone Substitution"]
        jazzChords.chords = []

       // add the major for key signature - 1
       jazzChords.chords[0] = ["I", keySignature + "maj7", secondaryDominant(piano, keySignature), tritoneSub(piano, keySignature)];
       // add the dominant in the key signature - this is sometimes presnet
       jazzChords.chords[1] = ["Ia", keySignature + "7", secondaryDominant(piano, keySignature), tritoneSub(piano, keySignature)];
       // add the minor for 2 
       jazzChords.chords[2] = ["ii", chords[0] + "m7", secondaryDominant(piano, chords[0]), tritoneSub(piano, chords[0])];
       // add the minor for 3 
       jazzChords.chords[3] = ["iii", chords[1] + "m7", secondaryDominant(piano, chords[1]), tritoneSub(piano, chords[1])];
       // add the major for 4
       jazzChords.chords[4] = ["IV", chords[2] + "maj7", secondaryDominant(piano, chords[2]), tritoneSub(piano, chords[2])];
       // add the dominant for 5
       jazzChords.chords[5] = ["V", chords[3] + "7", secondaryDominant(piano, chords[3]), tritoneSub(piano, chords[3])];
       // add the minor for 6
       jazzChords.chords[6] = ["vi", chords[4] + "m", secondaryDominant(piano, chords[4]), tritoneSub(piano, chords[4])];
       // add the diminished for 7
       jazzChords.chords[7] = ["vii", chords[5] + "⍛", secondaryDominant(piano, chords[5]), tritoneSub(piano, chords[5])];


    } else if (complexity === "uppers1") {

        // Shell Chords
        jazzChords.metadata = ["#", "Chord", "LH", "RH"]
        jazzChords.chords = []

        // add the major for key signature - 1
        jazzChords.chords[0] = ["I", keySignature + "maj7", majorLHVoicing(piano, keySignature), majorUppers(piano, keySignature, 1)];
        // add the dominant in the key signature - this is sometimes presnet
        jazzChords.chords[1] = ["Ia", keySignature + "7", dominantLHVoicing(piano, keySignature), dominantUppers(piano, keySignature, 1)];
        // add the minor for 2 
        jazzChords.chords[2] = ["ii", chords[0] + "m7", minorLHVoicing(piano, chords[0]), minorUppers(piano, chords[0], 1)];
        // add the minor for 3 
        jazzChords.chords[3] = ["iii", chords[1] + "m7", minorLHVoicing(piano, chords[1]), minorUppers(piano, chords[1], 1)];
        // add the major for 4
        jazzChords.chords[4] = ["IV", chords[2] + "maj7", majorLHVoicing(piano, chords[2]), majorUppers(piano, chords[2], 1)];
        // add the dominant for 5
        jazzChords.chords[5] = ["V", chords[3] + "7", dominantLHVoicing(piano, chords[3]), dominantUppers(piano, chords[3], 1)];
        // add the minor for 6
        jazzChords.chords[6] = ["vi", chords[4] + "m7", minorLHVoicing(piano, chords[4]), minorUppers(piano, chords[4], 1)];
        // add the diminished for 7
        jazzChords.chords[7] = ["vii", chords[5] + "⍛", minorLHVoicing(piano, chords[5]), minorUppers(piano, chords[5], 1)];

    } else if (complexity === "uppers2") {

        // Shell Chords
        jazzChords.metadata = ["#", "Chord", "LH", "RH"]
        jazzChords.chords = []

        // add the major for key signature - 1
        jazzChords.chords[0] = ["I", keySignature + "maj7", majorLHVoicing(piano, keySignature), majorUppers(piano, keySignature, 2)];
        // add the dominant in the key signature - this is sometimes presnet
        jazzChords.chords[1] = ["Ia", keySignature + "7", dominantLHVoicing(piano, keySignature), dominantUppers(piano, keySignature, 2)];
        // add the minor for 2 
        jazzChords.chords[2] = ["ii", chords[0] + "m7", minorLHVoicing(piano, chords[0]), minorUppers(piano, chords[0], 2)];
        // add the minor for 3 
        jazzChords.chords[3] = ["iii", chords[1] + "m7", minorLHVoicing(piano, chords[1]), minorUppers(piano, chords[1], 2)];
        // add the major for 4
        jazzChords.chords[4] = ["IV", chords[2] + "maj7", majorLHVoicing(piano, chords[2]), majorUppers(piano, chords[2], 2)];
        // add the dominant for 5
        jazzChords.chords[5] = ["V", chords[3] + "7", dominantLHVoicing(piano, chords[3]), dominantUppers(piano, chords[3], 2)];
        // add the minor for 6
        jazzChords.chords[6] = ["vi", chords[4] + "m7", minorLHVoicing(piano, chords[4]), minorUppers(piano, chords[4], 2)];
        // add the diminished for 7
        jazzChords.chords[7] = ["vii", chords[5] + "⍛", minorLHVoicing(piano, chords[5]), minorUppers(piano, chords[5], 2)];

    } else if (complexity === "uppers3") {

        // Shell Chords
        jazzChords.metadata = ["#", "Chord", "LH", "RH"]
        jazzChords.chords = []

        // add the major for key signature - 1
        jazzChords.chords[0] = ["I", keySignature + "maj7", majorLHVoicing(piano, keySignature), majorUppers(piano, keySignature, 3)];
        // add the dominant in the key signature - this is sometimes presnet
        jazzChords.chords[1] = ["Ia", keySignature + "7", dominantLHVoicing(piano, keySignature), dominantUppers(piano, keySignature, 3)];
        // add the minor for 2 
        jazzChords.chords[2] = ["ii", chords[0] + "m7", minorLHVoicing(piano, chords[0]), minorUppers(piano, chords[0], 3)];
        // add the minor for 3 
        jazzChords.chords[3] = ["iii", chords[1] + "m7", minorLHVoicing(piano, chords[1]), minorUppers(piano, chords[1], 3)];
        // add the major for 4
        jazzChords.chords[4] = ["IV", chords[2] + "maj7", majorLHVoicing(piano, chords[2]), majorUppers(piano, chords[2], 3)];
        // add the dominant for 5
        jazzChords.chords[5] = ["V", chords[3] + "7", dominantLHVoicing(piano, chords[3]), dominantUppers(piano, chords[3], 3)];
        // add the minor for 6
        jazzChords.chords[6] = ["vi", chords[4] + "m7", minorLHVoicing(piano, chords[4]), minorUppers(piano, chords[4], 3)];
        // add the diminished for 7
        jazzChords.chords[7] = ["vii", chords[5] + "⍛", minorLHVoicing(piano, chords[5]), minorUppers(piano, chords[5], 3)];

    } else if (complexity === "uppers4") {

        // Shell Chords
        jazzChords.metadata = ["#", "Chord", "LH", "RH"]
        jazzChords.chords = []

        // add the major for key signature - 1
        jazzChords.chords[0] = ["I", keySignature + "maj7", majorLHVoicing(piano, keySignature), majorUppers(piano, keySignature, 4)];
        // add the dominant in the key signature - this is sometimes presnet
        jazzChords.chords[1] = ["Ia", keySignature + "7", dominantLHVoicing(piano, keySignature), dominantUppers(piano, keySignature, 4)];
        // add the minor for 2 
        jazzChords.chords[2] = ["ii", chords[0] + "m7", minorLHVoicing(piano, chords[0]), minorUppers(piano, chords[0], 4)];
        // add the minor for 3 
        jazzChords.chords[3] = ["iii", chords[1] + "m7", minorLHVoicing(piano, chords[1]), minorUppers(piano, chords[1], 4)];
        // add the major for 4
        jazzChords.chords[4] = ["IV", chords[2] + "maj7", majorLHVoicing(piano, chords[2]), majorUppers(piano, chords[2], 4)];
        // add the dominant for 5
        jazzChords.chords[5] = ["V", chords[3] + "7", dominantLHVoicing(piano, chords[3]), dominantUppers(piano, chords[3], 4)];
        // add the minor for 6
        jazzChords.chords[6] = ["vi", chords[4] + "m7", minorLHVoicing(piano, chords[4]), minorUppers(piano, chords[4], 4)];
        // add the diminished for 7
        jazzChords.chords[7] = ["vii", chords[5] + "⍛", minorLHVoicing(piano, chords[5]), minorUppers(piano, chords[5], 4)];



    } else if (complexity === "colors") {

        // Shell Chords
        jazzChords.metadata = ["#", "Chord", "Triad", "Colors"]
        jazzChords.chords = []

        // add the major for key signature - 1
        jazzChords.chords[0] = ["I", keySignature + "maj7", majorTriad(piano, keySignature), majorColors(piano, keySignature)];
        // add the dominant in the key signature - this is sometimes presnet
        jazzChords.chords[1] = ["Ia", keySignature + "7", dominantTriad(piano, keySignature), dominantColors(piano, keySignature)];
        // add the minor for 2 
        jazzChords.chords[2] = ["ii", chords[0] + "m7", minorTriad(piano, chords[0]), minorColors(piano, chords[0])];
        // add the minor for 3 
        jazzChords.chords[3] = ["iii", chords[1] + "m7", minorTriad(piano, chords[1]), minorColors(piano, chords[1])];
        // add the major for 4
        jazzChords.chords[4] = ["IV", chords[2] + "maj7", majorTriad(piano, chords[2]), majorColors(piano, chords[2])];
        // add the dominant for 5
        jazzChords.chords[5] = ["V", chords[3] + "7", dominantTriad(piano, chords[3]), dominantColors(piano, chords[3])];
        // add the minor for 6
        jazzChords.chords[6] = ["vi", chords[4] + "m", minorTriad(piano, chords[4]), minorColors(piano, chords[4])];
        // add the diminished for 7
        jazzChords.chords[7] = ["vii", chords[5] + "⍛", minorTriad(piano, chords[5]), minorColors(piano, chords[5])];

    } else if (complexity === "simple") {

        // Shell Chords
        jazzChords.metadata = ["#", "Chord", "Shell A", "Shell B", "5", "9", "13"]
        jazzChords.chords = []

        // add the major for key signature - 1
        jazzChords.chords[0] = ["I", keySignature + "maj7", rootlessMajorShellA(piano, keySignature), rootlessMajorShellB(piano, keySignature), piano.find(keySignature, SEMI_FIFTH), majorNineFlatNine(piano, keySignature), majorThirteenFlatThirteen(piano, keySignature)];
        // add the dominant in the key signature - this is sometimes presnet
        jazzChords.chords[1] = ["Ia", keySignature + "7", rootlessDominantShellA(piano, keySignature), rootlessDominantShellB(piano, keySignature), piano.find(keySignature, SEMI_FIFTH), majorNineFlatNine(piano, keySignature), majorThirteenFlatThirteen(piano, keySignature)];
        // add the minor for 2 
        jazzChords.chords[2] = ["ii", chords[0] + "m7", rootlessMinorShellA(piano, chords[0]), rootlessMinorShellB(piano, chords[0]), piano.find(chords[0], SEMI_FIFTH), minorNineFlatNine(piano, chords[0]), minorThirteenFlatThirteen(piano, chords[0])];
        // add the minor for 3 
        jazzChords.chords[3] = ["iii", chords[1] + "m7", rootlessMinorShellA(piano, chords[1]), rootlessMinorShellB(piano, chords[1]), piano.find(chords[1], SEMI_FIFTH), minorNineFlatNine(piano, chords[1]), minorThirteenFlatThirteen(piano, chords[1])];
        // add the major for 4
        jazzChords.chords[4] = ["IV", chords[2] + "maj7", rootlessMajorShellA(piano, chords[2]), rootlessMajorShellB(piano, chords[2]), piano.find(chords[2], SEMI_FIFTH), majorNineFlatNine(piano, chords[2]), majorThirteenFlatThirteen(piano, chords[2])];
        // add the dominant for 5
        jazzChords.chords[5] = ["V", chords[3] + "7", rootlessDominantShellA(piano, chords[3]), rootlessDominantShellB(piano, chords[3]), piano.find(chords[3], SEMI_FIFTH), majorNineFlatNine(piano, chords[3]), majorThirteenFlatThirteen(piano, chords[3])];
        // add the minor for 6
        jazzChords.chords[6] = ["vi", chords[4] + "m", rootlessMinorShellA(piano, chords[4]), rootlessMinorShellB(piano, chords[4]), piano.find(chords[4], SEMI_FIFTH), minorNineFlatNine(piano, chords[4]), minorThirteenFlatThirteen(piano, chords[4])];
        // add the diminished for 7
        jazzChords.chords[7] = ["vii", chords[5] + "⍛", rootlessMinorShellA(piano, chords[5]), rootlessMinorShellB(piano, chords[5]), piano.find(chords[5], SEMI_FIFTH), minorNineFlatNine(piano, chords[5]), minorThirteenFlatThirteen(piano, chords[5])];


    } else if (complexity === "rootless") {

        // 9 and 13 Chords
        jazzChords.metadata = ["#", "Chord", "A Voicing", "B Voicing"]
        jazzChords.chords = []

        // add the major for key signature - 1
        jazzChords.chords[0] = ["I", keySignature + "maj7", rootlessMajorNineA(piano, keySignature), rootlessMajorNineB(piano, keySignature)];
        // add the dominant in the key signature - this is sometimes presnet
        jazzChords.chords[1] = ["Ia", keySignature + "7", rootlessDominantThirteenA(piano, keySignature), rootlessDominantThirteenB(piano, keySignature)];
        // add the minor for 2 
        jazzChords.chords[2] = ["ii", chords[0] + "m7", rootlessMinorNineA(piano, chords[0]), rootlessMinorNineB(piano, chords[0])];
        // add the minor for 3 
        jazzChords.chords[3] = ["iii", chords[1] + "m7", rootlessMinorNineA(piano, chords[1]), rootlessMinorNineB(piano, chords[1])];
        // add the major for 4
        jazzChords.chords[4] = ["IV", chords[2] + "maj7", rootlessMajorNineA(piano, chords[2]), rootlessMajorNineB(piano, chords[2])];
        // add the dominant for 5
        jazzChords.chords[5] = ["V", chords[3] + "7", rootlessDominantThirteenA(piano, chords[3]), rootlessDominantThirteenB(piano, chords[3])];
        // add the minor for 6
        jazzChords.chords[6] = ["vi", chords[4] + "m", rootlessMinorNineA(piano, chords[4]), rootlessMinorNineB(piano, chords[4])];
        // add the diminished for 7
        jazzChords.chords[7] = ["vii", chords[5] + "⍛", rootlessMinorNineA(piano, chords[5]), rootlessMinorNineB(piano, chords[5])];

    } else if (complexity === "drop2") {


        // Drop 2 are typically 6 chords but you use an inversion, and then drop the second from the top
        // into the bottom octave

        // 9 and 13 Chords
        jazzChords.metadata = ["#", "Chord", "Drop 2 A", "Drop 2 B"]
        jazzChords.chords = []

        // add the major for key signature - 1
        jazzChords.chords[0] = ["I", keySignature + "maj7", rootlessMajorSixNineA(piano, keySignature), rootlessMajorSixNineB(piano, keySignature)];
        // add the dominant in the key signature - this is sometimes presnet
        jazzChords.chords[1] = ["Ia", keySignature + "7", rootlessDominantThirteenA(piano, keySignature), rootlessDominantThirteenB(piano, keySignature)];
        // add the minor for 2 
        jazzChords.chords[2] = ["ii", chords[0] + "m7", rootlessMinorSixNineA(piano, chords[0]), rootlessMinorSixNineB(piano, chords[0])];
        // add the minor for 3 
        jazzChords.chords[3] = ["iii", chords[1] + "m7", rootlessMinorSixNineA(piano, chords[1]), rootlessMinorSixNineB(piano, chords[1])];
        // add the major for 4
        jazzChords.chords[4] = ["IV", chords[2] + "maj7", rootlessMajorSixNineA(piano, chords[2]), rootlessMajorSixNineB(piano, chords[2])];
        // add the dominant for 5
        jazzChords.chords[5] = ["V", chords[3] + "7", rootlessDominantThirteenA(piano, chords[3]), rootlessDominantThirteenB(piano, chords[3])];
        // add the minor for 6
        jazzChords.chords[6] = ["vi", chords[4] + "m", rootlessMinorSixNineA(piano, chords[4]), rootlessMinorSixNineB(piano, chords[4])];
        // add the diminished for 7
        jazzChords.chords[7] = ["vii", chords[5] + "⍛", rootlessMinorSixNineA(piano, chords[5]), rootlessMinorSixNineB(piano, chords[5])];


    } else {

        // 6/9 or 6/13 Chords
        // 9 and 13 Chords
        jazzChords.metadata = ["#", "Chord", "6/9/13 A", "6/9/13 B"]
        jazzChords.chords = []

        // add the major for key signature - 1
        jazzChords.chords[0] = ["I", keySignature + "maj7", rootlessMajorSixNineA(piano, keySignature), rootlessMajorSixNineB(piano, keySignature)];
        // add the dominant in the key signature - this is sometimes presnet
        jazzChords.chords[1] = ["Ia", keySignature + "7", rootlessDominantThirteenA(piano, keySignature), rootlessDominantThirteenB(piano, keySignature)];
        // add the minor for 2 
        jazzChords.chords[2] = ["ii", chords[0] + "m7", rootlessMinorSixNineA(piano, chords[0]), rootlessMinorSixNineB(piano, chords[0])];
        // add the minor for 3 
        jazzChords.chords[3] = ["iii", chords[1] + "m7", rootlessMinorSixNineA(piano, chords[1]), rootlessMinorSixNineB(piano, chords[1])];
        // add the major for 4
        jazzChords.chords[4] = ["IV", chords[2] + "maj7", rootlessMajorSixNineA(piano, chords[2]), rootlessMajorSixNineB(piano, chords[2])];
        // add the dominant for 5
        jazzChords.chords[5] = ["V", chords[3] + "7", rootlessDominantThirteenA(piano, chords[3]), rootlessDominantThirteenB(piano, chords[3])];
        // add the minor for 6
        jazzChords.chords[6] = ["vi", chords[4] + "m", rootlessMinorSixNineA(piano, chords[4]), rootlessMinorSixNineB(piano, chords[4])];
        // add the diminished for 7
        jazzChords.chords[7] = ["vii", chords[5] + "⍛", rootlessMinorSixNineA(piano, chords[5]), rootlessMinorSixNineB(piano, chords[5])];


    }


    return jazzChords;

}


module.exports = { rootlessDominantUpperStructure1, rootlessDominantUpperStructure2, rootlessDominantUpperStructure3, rootlessDominantUpperStructure4, rootlessDominantUpperStructure5, majorTriad, minorTriad, sortProgression, jazzMajorChordsForKey, rootlessDominantShellA, rootlessDominantShellB, rootlessDominantThirteenA, rootlessDominantThirteenB, rootlessMajorShellA, rootlessMajorShellB, rootlessMajorNineB, rootlessMajorNineA, rootlessMajorSixNineA, rootlessMajorSixNineB, rootlessMinorShellA, rootlessMinorShellB, rootlessMinorNineB, rootlessMinorNineA, rootlessMinorSixNineA, rootlessMinorSixNineB, drop2MajorSixA, drop2MajorSixB, drop2MinorSixA, drop2MinorSixB, minorNineFlatNine, majorNineFlatNine, minorThirteenFlatThirteen, majorThirteenFlatThirteen, majorColors, minorColors, dominantColors, dominantTriad, dominantLHVoicing, majorLHVoicing, minorLHVoicing, dominantUppers, majorUppers, minorUppers, majorSus2, openFifth, minorSeventh, secondaryDominant, tritoneSub };