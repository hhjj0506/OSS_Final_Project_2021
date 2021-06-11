function calcWeight() {
    document.getElementById("gen").submit;
    document.getElementById("bodyWeight").submit;
    document.getElementById("benchInput").submit;
    document.getElementById("squatInput").submit;
    document.getElementById("deadInput").submit;
    var weight = parseInt(document.getElementById("bodyWeight").value, 10);
    var gender = parseInt(document.getElementById("gen").value);
    var bench = parseInt(document.getElementById("benchInput").value, 10);
    var squat = parseInt(document.getElementById("squatInput").value, 10);
    var dead = parseInt(document.getElementById("deadInput").value, 10);
    var total = (bench + squat + dead);

    var benchB = 0;
    var benchN = 0;
    var benchI = 0;
    var benchA = 0;
    var benchE = 0;

    var squatB = 0;
    var squatN = 0;
    var squatI = 0;
    var squatA = 0;
    var squatE = 0;

    var deadB = 0;
    var deadN = 0;
    var deadI = 0;
    var deadA = 0;
    var deadE = 0;

    var level = "";

    // set weights
    if (gender == 1) {
        if (weight >= 145) {
            benchB = 72; benchN = 93; benchI = 112; benchA = 154; benchE = 193;
            squatB = 67; squatN = 123; squatI = 151; squatA = 206; squatE = 269;
            deadB = 83; deadN = 154; deadI = 176; deadA = 232; deadE = 280;
        } else if (weight >= 125) {
            benchB = 69; benchN = 89; benchI = 108; benchA = 147; benchE = 185;
            squatB = 64; squatN = 118; squatI = 145; squatA = 197; squatE = 257;
            deadB = 80; deadN = 148; deadI = 169; deadA = 226; deadE = 273;
        } else if (weight >= 110) {
            benchB = 68; benchN = 86; benchI = 105; benchA = 143; benchE = 179;
            squatB = 62; squatN = 116; squatI = 141; squatA = 192; squatE = 250;
            deadB = 78; deadN = 144; deadI = 165; deadA = 222; deadE = 270;
        } else if (weight >= 100) {
            benchB = 64; benchN = 83; benchI = 102; benchA = 139; benchE = 173;
            squatB = 60; squatN = 111; squatI = 137; squatA = 186; squatE = 241;
            deadB = 74; deadN = 138; deadI = 159; deadA = 217; deadE = 266;
        } else if (weight >= 90) {
            benchB = 61; benchN = 78; benchI = 97; benchA = 131; benchE = 164;
            squatB = 57; squatN = 105; squatI = 129; squatA = 176; squatE = 229;
            deadB = 71; deadN = 131; deadI = 151; deadA = 207; deadE = 257;
        } else if (weight >= 82) {
            benchB = 58; benchN = 74; benchI = 91; benchA = 125; benchE = 156;
            squatB = 54; squatN = 100; squatI = 122; squatA = 166; squatE = 217;
            deadB = 67; deadN = 124; deadI = 143; deadA = 199; deadE = 249;
        } else if (weight >= 75) {
            benchB = 54; benchN = 69; benchI = 85; benchA = 116; benchE = 145;
            squatB = 50; squatN = 93; squatI = 113; squatA = 155; squatE = 202;
            deadB = 62; deadN = 115; deadI = 133; deadA = 186; deadE = 235;
        } else if (weight >= 67) {
            benchB = 49; benchN = 64; benchI = 78; benchA = 106; benchE = 132;
            squatB = 46; squatN = 85; squatI = 104; squatA = 142; squatE = 186;
            deadB = 57; deadN = 106; deadI = 122; deadA = 172; deadE = 219;
        } else if (weight >= 60) {
            benchB = 44; benchN = 57; benchI = 69; benchA = 94; benchE = 118;
            squatB = 41; squatN = 76; squatI = 93; squatA = 126; squatE = 167;
            deadB = 51; deadN = 95; deadI = 108; deadA = 155; deadE = 199;
        } else if (weight >= 56) {
            benchB = 41; benchN = 53; benchI = 64; benchA = 88; benchE = 110;
            squatB = 38; squatN = 70; squatI = 86; squatA = 117; squatE = 157;
            deadB = 48; deadN = 88; deadI = 101; deadA = 145; deadE = 188;
        } else if (weight >= 52) {
            benchB = 38; benchN = 49; benchI = 59; benchA = 81; benchE = 101;
            squatB = 35; squatN = 65; squatI = 79; squatA = 109; squatE = 145;
            deadB = 44; deadN = 81; deadI = 93; deadA = 136; deadE = 176;
        } else if (weight < 52) {
            benchB = 38; benchN = 49; benchI = 59; benchA = 81; benchE = 101;
            squatB = 35; squatN = 65; squatI = 79; squatA = 109; squatE = 145;
            deadB = 44; deadN = 81; deadI = 93; deadA = 136; deadE = 176;
        }    
    } else {
        if (weight >= 90) {
            benchB = 42; benchN = 54; benchI = 62; benchA = 80; benchE = 98;
            squatB = 39; squatN = 72; squatI = 83; squatA = 110; squatE = 137;
            deadB = 49; deadN = 89; deadI = 104; deadA = 135; deadE = 165;
        } else if (weight >= 82) {
            benchB = 37; benchN = 47; benchI = 55; benchA = 72; benchE = 87;
            squatB = 34; squatN = 63; squatI = 74; squatA = 98; squatE = 122;
            deadB = 43; deadN = 79; deadI = 93; deadA = 124; deadE = 149;
        } else if (weight >= 75) {
            benchB = 34; benchN = 44; benchI = 51; benchA = 66; benchE = 83;
            squatB = 32; squatN = 59; squatI = 68; squatA = 91; squatE = 116;
            deadB = 40; deadN = 73; deadI = 86; deadA = 117; deadE = 145;
        } else if (weight >= 67) {
            benchB = 32; benchN = 41; benchI = 48; benchA = 61; benchE = 75;
            squatB = 29; squatN = 55; squatI = 64; squatA = 84; squatE = 105;
            deadB = 37; deadN = 68; deadI = 80; deadA = 109; deadE = 134;
        } else if (weight >= 60) {
            benchB = 29; benchN = 37; benchI = 43; benchA = 55; benchE = 68;
            squatB = 27; squatN = 50; squatI = 58; squatA = 76; squatE = 96;
            deadB = 34; deadN = 62; deadI = 72; deadA = 100; deadE = 124;
        } else if (weight >= 56) {
            benchB = 27; benchN = 35; benchI = 41; benchA = 53; benchE = 64;
            squatB = 25; squatN = 47; squatI = 55; squatA = 73; squatE = 90;
            deadB = 32; deadN = 59; deadI = 68; deadA = 96; deadE = 119;
        } else if (weight >= 52) {
            benchB = 26; benchN = 33; benchI = 39; benchA = 49; benchE = 60;
            squatB = 24; squatN = 44; squatI = 52; squatA = 68; squatE = 85;
            deadB = 30; deadN = 55; deadI = 64; deadA = 91; deadE = 115;
        } else if (weight >= 48) {
            benchB = 24; benchN = 31; benchI = 36; benchA = 46; benchE = 56;
            squatB = 22; squatN = 41; squatI = 48; squatA = 64; squatE = 79;
            deadB = 28; deadN = 52; deadI = 60; deadA = 86; deadE = 110;
        } else if (weight >= 44) {
            benchB = 22; benchN = 29; benchI = 33; benchA = 43; benchE = 53;
            squatB = 21; squatN = 38; squatI = 44; squatA = 59; squatE = 74;
            deadB = 26; deadN = 48; deadI = 55; deadA = 79; deadE = 105;
        } else if (weight < 44) {
            benchB = 22; benchN = 29; benchI = 33; benchA = 43; benchE = 53;
            squatB = 21; squatN = 38; squatI = 44; squatA = 59; squatE = 74;
            deadB = 26; deadN = 48; deadI = 55; deadA = 79; deadE = 105;
        }
    }

    // check the level by comparing
    if (total >= (benchE + squatE + deadE)) {
        level = "Elite";
    } else if (total >= (benchA + squatA + deadA)) {
        level = "Advanced";
    } else if (total >= (benchI + squatI + deadI)) {
        level = "Intermediate";
    } else if (total >= (benchN + squatN + deadN)) {
        level = "Novice";
    } else if (total >= (benchB + squatB + deadB)) {
        level = "Beginner";
    } else {
        level = "Beginner";
    }

    // highlight rank for each exercise
    if (bench >= benchE) {
        document.getElementById("benchE").style.backgroundColor = "yellow";
        document.getElementById("benchA").style.backgroundColor = "transparent";
        document.getElementById("benchI").style.backgroundColor = "transparent";
        document.getElementById("benchN").style.backgroundColor = "transparent";
        document.getElementById("benchB").style.backgroundColor = "transparent";
    } else if (bench >= benchA) {
        document.getElementById("benchE").style.backgroundColor = "transparent";
        document.getElementById("benchA").style.backgroundColor = "yellow";
        document.getElementById("benchI").style.backgroundColor = "transparent";
        document.getElementById("benchN").style.backgroundColor = "transparent";
        document.getElementById("benchB").style.backgroundColor = "transparent";
    } else if (bench >= benchI) {
        document.getElementById("benchE").style.backgroundColor = "transparent";
        document.getElementById("benchA").style.backgroundColor = "transparent";
        document.getElementById("benchI").style.backgroundColor = "yellow";
        document.getElementById("benchN").style.backgroundColor = "transparent";
        document.getElementById("benchB").style.backgroundColor = "transparent";
    } else if (bench >= benchN) {
        document.getElementById("benchE").style.backgroundColor = "transparent";
        document.getElementById("benchA").style.backgroundColor = "transparent";
        document.getElementById("benchI").style.backgroundColor = "transparent";
        document.getElementById("benchN").style.backgroundColor = "yellow";
        document.getElementById("benchB").style.backgroundColor = "transparent";
    } else {
        document.getElementById("benchE").style.backgroundColor = "transparent";
        document.getElementById("benchA").style.backgroundColor = "transparent";
        document.getElementById("benchI").style.backgroundColor = "transparent";
        document.getElementById("benchN").style.backgroundColor = "transparent";
        document.getElementById("benchB").style.backgroundColor = "yellow";
    }

    if (squat >= squatE) {
        document.getElementById("squatE").style.backgroundColor = "yellow";
        document.getElementById("squatA").style.backgroundColor = "transparent";
        document.getElementById("squatI").style.backgroundColor = "transparent";
        document.getElementById("squatN").style.backgroundColor = "transparent";
        document.getElementById("squatB").style.backgroundColor = "transparent";
    } else if (squat >= squatA) {
        document.getElementById("squatE").style.backgroundColor = "transparent";
        document.getElementById("squatA").style.backgroundColor = "yellow";
        document.getElementById("squatI").style.backgroundColor = "transparent";
        document.getElementById("squatN").style.backgroundColor = "transparent";
        document.getElementById("squatB").style.backgroundColor = "transparent";
    } else if (squat >= squatI) {
        document.getElementById("squatE").style.backgroundColor = "transparent";
        document.getElementById("squatA").style.backgroundColor = "transparent";
        document.getElementById("squatI").style.backgroundColor = "yellow";
        document.getElementById("squatN").style.backgroundColor = "transparent";
        document.getElementById("squatB").style.backgroundColor = "transparent";
    } else if (squat >= squatN) {
        document.getElementById("squatE").style.backgroundColor = "transparent";
        document.getElementById("squatA").style.backgroundColor = "transparent";
        document.getElementById("squatI").style.backgroundColor = "transparent";
        document.getElementById("squatN").style.backgroundColor = "yellow";
        document.getElementById("squatB").style.backgroundColor = "transparent";
    } else {
        document.getElementById("squatE").style.backgroundColor = "transparent";
        document.getElementById("squatA").style.backgroundColor = "transparent";
        document.getElementById("squatI").style.backgroundColor = "transparent";
        document.getElementById("squatN").style.backgroundColor = "transparent";
        document.getElementById("squatB").style.backgroundColor = "yellow";
    }

    if (dead >= deadE) {
        document.getElementById("deadE").style.backgroundColor = "yellow";
        document.getElementById("deadA").style.backgroundColor = "transparent";
        document.getElementById("deadI").style.backgroundColor = "transparent";
        document.getElementById("deadN").style.backgroundColor = "transparent";
        document.getElementById("deadB").style.backgroundColor = "transparent";
    } else if (dead >= deadA) {
        document.getElementById("deadE").style.backgroundColor = "transparent";
        document.getElementById("deadA").style.backgroundColor = "yellow";
        document.getElementById("deadI").style.backgroundColor = "transparent";
        document.getElementById("deadN").style.backgroundColor = "transparent";
        document.getElementById("deadB").style.backgroundColor = "transparent";
    } else if (dead >= deadI) {
        document.getElementById("deadE").style.backgroundColor = "transparent";
        document.getElementById("deadA").style.backgroundColor = "transparent";
        document.getElementById("deadI").style.backgroundColor = "yellow";
        document.getElementById("deadN").style.backgroundColor = "transparent";
        document.getElementById("deadB").style.backgroundColor = "transparent";
    } else if (dead >= deadN) {
        document.getElementById("deadE").style.backgroundColor = "transparent";
        document.getElementById("deadA").style.backgroundColor = "transparent";
        document.getElementById("deadI").style.backgroundColor = "transparent";
        document.getElementById("deadN").style.backgroundColor = "yellow";
        document.getElementById("deadB").style.backgroundColor = "transparent";
    } else {
        document.getElementById("deadE").style.backgroundColor = "transparent";
        document.getElementById("deadA").style.backgroundColor = "transparent";
        document.getElementById("deadI").style.backgroundColor = "transparent";
        document.getElementById("deadN").style.backgroundColor = "transparent";
        document.getElementById("deadB").style.backgroundColor = "yellow";
    }
    

    // print out
    document.getElementById("dis").innerHTML = total + " KG";
    document.getElementById("level").innerHTML = level;

    document.getElementById("benchB").innerHTML = benchB.toFixed(0);
    document.getElementById("benchN").innerHTML = benchN.toFixed(0);
    document.getElementById("benchI").innerHTML = benchI.toFixed(0);
    document.getElementById("benchA").innerHTML = benchA.toFixed(0);
    document.getElementById("benchE").innerHTML = benchE.toFixed(0);

    document.getElementById("squatB").innerHTML = squatB.toFixed(0);
    document.getElementById("squatN").innerHTML = squatN.toFixed(0);
    document.getElementById("squatI").innerHTML = squatI.toFixed(0);
    document.getElementById("squatA").innerHTML = squatA.toFixed(0);
    document.getElementById("squatE").innerHTML = squatE.toFixed(0);

    document.getElementById("deadB").innerHTML = deadB.toFixed(0);
    document.getElementById("deadN").innerHTML = deadN.toFixed(0);
    document.getElementById("deadI").innerHTML = deadI.toFixed(0);
    document.getElementById("deadA").innerHTML = deadA.toFixed(0);
    document.getElementById("deadE").innerHTML = deadE.toFixed(0);
}