function calculateFuel() {

    var raceLength = document.getElementById('race-length').value,
        lapTimeMinutes = document.getElementById('lap-minutes').value,
        lapTimeSeconds = document.getElementById('lap-seconds').value,
        fuelPerLap = document.getElementById('fuel-per-lap').value,
        secondsPerLap, secondsPerRace, lapsPerRace, totalFuel;
    
    
    secondsPerLap = lapTimeMinutes * 60 + parseInt(lapTimeSeconds);
    secondsPerRace = raceLength * 60;

    lapsPerRace = secondsPerRace/secondsPerLap;

    totalFuel = lapsPerRace * fuelPerLap;

    document.getElementById("total-fuel-result").innerHTML = totalFuel.toFixed(2) + " litres";
}