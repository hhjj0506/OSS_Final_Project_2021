function calcWeight() {
    document.getElementById("gen").submit;
    document.getElementById("bodyWeight").submit;
    document.getElementById("benchInput").submit;
    document.getElementById("squatInput").submit;
    document.getElementById("deadInput").submit;
    var weight = parseInt(document.getElementById("bodyWeight").value, 10);
    var gender = document.getElementById("gen").value;
    var bench = parseInt(document.getElementById("benchInput").value, 10);
    var squat = parseInt(document.getElementById("squatInput").value, 10);
    var dead = parseInt(document.getElementById("deadInput").value, 10);
    var total = (bench + squat + dead);
    document.getElementById("dis").innerHTML = total + " KG";
    
}