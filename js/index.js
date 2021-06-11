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
    var countB = 0;
    var countN = 0;
    var countI = 0;
    var countA = 0;
    var countE = 0;

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