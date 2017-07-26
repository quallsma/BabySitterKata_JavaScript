export function BabySitter(startTime, endTime){
    return calculateAfternoonPay(startTime, endTime) + calculateEveningPay(startTime, endTime) + calculateLateNightPay(startTime, endTime);
}
const afternoonPayRate = 7;
const eveningPayRate = 11;
const lateNightPayRate = 13;

function calculateAfternoonPay(startTime, endTime){
    let afternoonHours = 0;
    if(isAfternoon(startTime)){
        if(isAfternoonExceeding(endTime, startTime)){
            afternoonHours = 17 - startTime;
        }
        else{
            afternoonHours = endTime - startTime;
        }
    }
    return afternoonHours * afternoonPayRate;
}

function calculateEveningPay(startTime, endTime){
    const eveningPayRate = 11;
    let eveningHours = 0;

    if (isAfternoonExceeding(endTime, startTime))
        startTime = 17;

    if(isEvening(startTime)){
        if(isEveningExceeding(endTime, startTime)){
            eveningHours = 22 - startTime;
        }
        else{
            eveningHours = endTime - startTime;
        }
    }
    return eveningHours * eveningPayRate;
}

function calculateLateNightPay(startTime, endTime){
    const lateNightPayRate = 13;
    let lateNightHours = 0;

    if (isEveningExceeding(endTime, startTime))
        startTime = 22;

    if(isLateNight(startTime)){
        if(endTime < startTime)
            lateNightHours = 24 - startTime + endTime;
        else
            lateNightHours = endTime - startTime;
    }

    return lateNightHours * lateNightPayRate;
}

function isAfternoon(startTime){
    return startTime >= 13 && startTime < 17;
}

function isAfternoonExceeding(endTime, startTime){
    return startTime < 17 && startTime >= 13 && (endTime > 17 || endTime < 4);
}

function isEvening(startTime){
    return startTime >= 17 && startTime < 22;
}

function isEveningExceeding(endTime, startTime){
    return endTime > 22 || endTime < 4 && startTime < 22 && startTime >= 13;
}

function isLateNight(startTime){
    return startTime >= 22 || startTime < 4;
}