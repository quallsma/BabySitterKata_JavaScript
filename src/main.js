export function BabySitter(startTime, endTime){
    return calculateAfternoonPay(startTime, endTime) + calculateEveningPay(startTime, endTime) + calculateLateNightPay(startTime, endTime);
}

const afternoonPayRate = 7;
const eveningPayRate = 11;
const lateNightPayRate = 13;

function calculateAfternoonPay(startTime, endTime){
    return getAfternoonHours(startTime, endTime) * afternoonPayRate;
}

function calculateEveningPay(startTime, endTime){
    return getEveningHours(startTime, endTime) * eveningPayRate;
}

function calculateLateNightPay(startTime, endTime){
    return getLateNightHours(startTime, endTime) * lateNightPayRate;
}

function getAfternoonHours(startTime, endTime) {

    if(!isAfternoon(startTime))
        return 0;

    if(isAfternoonExceeding(endTime, startTime))
        endTime = 17;

    return calculate(startTime, endTime);
}

function getEveningHours(startTime, endTime){
    if(isAfternoonExceeding(endTime, startTime))
        startTime = 17;

    if(!isEvening(startTime))
        return 0;

    if(isEveningExceeding(endTime, startTime))
        endTime = 22;

    return calculate(startTime, endTime);
}

function getLateNightHours(startTime, endTime){
    if(isEveningExceeding(endTime, startTime))
        startTime = 22;

    if(!isLateNight(startTime))
        return 0;

    return calculate(startTime, endTime, endTime < startTime);
}

function calculate(startTime, endTime, LateNight){
    if(LateNight)
        return 24 - startTime + endTime;

    return endTime - startTime;
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