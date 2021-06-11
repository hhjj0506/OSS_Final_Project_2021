function calcOneRep() {
    document.getElementById("repWeight").submit;
    document.getElementById("repNum").submit;
    var weight = parseInt(document.getElementById("repWeight").value, 10);
    var rep = parseInt(document.getElementById("repNum").value, 10);
    var max = 0;

    switch (rep) {
        case 1: max = weight; break;
        case 2: max = weight * 1.028; break;
        case 3: max = weight * 1.058; break;
        case 4: max = weight * 1.091; break;
        case 5: max = weight * 1.125; break;
        case 6: max = weight * 1.160; break;
        case 7: max = weight * 1.2; break;
        case 8: max = weight * 1.241; break;
        case 9: max = weight * 1.287; break;
        case 10: max = weight * 1.332; break;
        case 11: max = weight * 1.366; break;
        case 12: max = weight * 1.399; break;
        case 13: max = weight * 1.433; break;
        case 14: max = weight * 1.466; break;
        case 15: max = weight * 1.5; break;
        case 16: max = weight * 1.532; break;
        case 17: max = weight * 1.567; break;
        case 18: max = weight * 1.6; break;
        case 19: max = weight * 1.632; break;
        case 20: max = weight * 1.666; break;
    }

    var one = max;
    var three = max * 0.94;
    var five = max * 0.89;
    var ten = max * 0.75;
    var twenty = max * 0.6;

    document.getElementById("oneRW").innerHTML = one.toFixed(0) + " KG";
    document.getElementById("twoRW").innerHTML = three.toFixed(0) + " KG";
    document.getElementById("threeRW").innerHTML = five.toFixed(0) + " KG";
    document.getElementById("fourRW").innerHTML = ten.toFixed(0) + " KG";
    document.getElementById("fiveRW").innerHTML = twenty.toFixed(0) + " KG";
    document.getElementById("onerep").innerHTML = max.toFixed(0) + " KG";
    
}

function compare() {
    document.getElementById("compW1").submit;
    document.getElementById("compW2").submit;
    document.getElementById("compR1").submit;
    document.getElementById("compR2").submit;
    document.getElementById("compS1").submit;
    document.getElementById("compS2").submit;

    var w1 = parseInt(document.getElementById("compW1").value);
    var w2 = parseInt(document.getElementById("compW2").value);
    var r1 = parseInt(document.getElementById("compR1").value);
    var r2 = parseInt(document.getElementById("compR2").value);
    var s1 = parseInt(document.getElementById("compS1").value);
    var s2 = parseInt(document.getElementById("compS2").value);

    var total1 = (w1 * r1 * s1);
    var total2 = (w2 * r2 * s2);
    var more = "";

    document.getElementById("work1").innerHTML = total1;
    document.getElementById("work2").innerHTML = total2;
    if (total1 > total2) {
        more = "First";
        document.getElementById("comp").innerHTML = more + " workout has more volume.";
    } else if (total1 < total2) {
        more = "Second";
        document.getElementById("comp").innerHTML = more + " workout has more volume.";
    } else {
        document.getElementById("comp").innerHTML = "Both workout have same volume.";
    }
}

function squat() {
    document.getElementById("warmup").submit;

    var weight = parseInt(document.getElementById("warmup").value);

    var one = 20;
    var two = weight * 0.4;
    var three = weight * 0.6;
    var four = weight * 0.8;
    var five = weight;

    document.getElementById("WU1").innerHTML = one.toFixed(0) + "KG";
    document.getElementById("WU2").innerHTML = two.toFixed(0) + "KG";
    document.getElementById("WU3").innerHTML = three.toFixed(0) + "KG";
    document.getElementById("WU4").innerHTML = four.toFixed(0) + "KG";
    document.getElementById("WU5").innerHTML = five.toFixed(0) + "KG";
}

function bench() {
    document.getElementById("warmup").submit;

    var weight = parseInt(document.getElementById("warmup").value);

    var one = 20;
    var two = weight * 0.5;
    var three = weight * 0.7;
    var four = weight * 0.9;
    var five = weight;

    document.getElementById("WU1").innerHTML = one.toFixed(0) + "KG";
    document.getElementById("WU2").innerHTML = two.toFixed(0) + "KG";
    document.getElementById("WU3").innerHTML = three.toFixed(0) + "KG";
    document.getElementById("WU4").innerHTML = four.toFixed(0) + "KG";
    document.getElementById("WU5").innerHTML = five.toFixed(0) + "KG";
}

function dead() {
    document.getElementById("warmup").submit;

    var weight = parseInt(document.getElementById("warmup").value);

    var one = weight * 0.4;
    var three = weight * 0.6;
    var four = weight * 0.85;
    var five = weight;

    document.getElementById("WU1").innerHTML = one.toFixed(0) + "KG";
    document.getElementById("WU2").innerHTML = "SKIP";
    document.getElementById("WU3").innerHTML = three.toFixed(0) + "KG";
    document.getElementById("WU4").innerHTML = four.toFixed(0) + "KG";
    document.getElementById("WU5").innerHTML = five.toFixed(0) + "KG";
}

function overhead() {
    document.getElementById("warmup").submit;

    var weight = parseInt(document.getElementById("warmup").value);

    var one = 20;
    var two = weight * 0.55;
    var three = weight * 0.7;
    var four = weight * 0.85;
    var five = weight;

    document.getElementById("WU1").innerHTML = one.toFixed(0) + "KG";
    document.getElementById("WU2").innerHTML = two.toFixed(0) + "KG";
    document.getElementById("WU3").innerHTML = three.toFixed(0) + "KG";
    document.getElementById("WU4").innerHTML = four.toFixed(0) + "KG";
    document.getElementById("WU5").innerHTML = five.toFixed(0) + "KG";
}

function bRow() {
    document.getElementById("warmup").submit;

    var weight = parseInt(document.getElementById("warmup").value);

    var one = weight * 0.4;
    var three = weight * 0.7;
    var four = weight * 0.9;
    var five = weight;

    document.getElementById("WU1").innerHTML = one.toFixed(0) + "KG";
    document.getElementById("WU2").innerHTML = "SKIP";
    document.getElementById("WU3").innerHTML = three.toFixed(0) + "KG";
    document.getElementById("WU4").innerHTML = four.toFixed(0) + "KG";
    document.getElementById("WU5").innerHTML = five.toFixed(0) + "KG";
}