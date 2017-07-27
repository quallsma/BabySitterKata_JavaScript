export function BabySitter(startTime, endTime){
    let times = getTimes(startTime, endTime);
    return calculateAfternoonPay(times["afternoonStart"], times["afternoonEnd"]) + calculateEveningPay(times["eveningStart"], times["eveningEnd"]) + calculateLateNightPay(times["lateNightStart"], times["lateNightEnd"]);
}

const afternoonPayRate = 7;
const eveningPayRate = 11;
const lateNightPayRate = 13;

function getTimes(startTime, endTime){
    let times = { "lateNightEnd": endTime };

    if(isAfternoon(startTime))
        times["afternoonStart"] = startTime;

    if(isAfternoonExceeding(endTime, startTime))
        times["afternoonEnd"] = times["eveningStart"] = 17;
    else{
        times["afternoonEnd"] = endTime;
        if(isEvening(startTime))
            times["eveningStart"] = startTime;
    }

    if(isEveningExceeding(endTime, startTime))
        times["eveningEnd"] = times["lateNightStart"] = 22;
    else{
        times["eveningEnd"] = endTime;
        if(isLateNight(startTime))
            times["lateNightStart"] = startTime;
    }
    return times;
}

function calculateAfternoonPay(startTime, endTime){
    return getAfternoonHours(startTime, endTime) * afternoonPayRate;
}

function calculateEveningPay(startTime, endTime){
    return getEveningHours(startTime, endTime) * eveningPayRate;
}

function calculateLateNightPay(startTime, endTime){
    return getLateNightHours(startTime, endTime) * lateNightPayRate;
}

function calculate(startTime, endTime, LateNight){
    return LateNight ? 24 - startTime + endTime : endTime - startTime;
}

function getAfternoonHours(startTime, endTime) {
    return startTime ? calculate(startTime, endTime) : 0;
}

function getEveningHours(startTime, endTime){
    return startTime ? calculate(startTime, endTime) : 0;
}

function getLateNightHours(startTime, endTime){
    return startTime > -1 ? calculate(startTime, endTime, endTime < startTime) : 0;
}

function isAfternoon(startTime){
    return startTime >= 13 && startTime < 17;
}

function isAfternoonExceeding(endTime, startTime){
    return isAfternoon(startTime) && (endTime > 17 || endTime < 4);
}

function isEvening(startTime){
    return startTime >= 17 && startTime < 22;
}

function isEveningExceeding(endTime, startTime){
    return (isAfternoon(startTime) || isEvening(startTime)) && (endTime > 22 || endTime < 4);
}

function isLateNight(startTime){
    return startTime >= 22 || startTime < 4;
}