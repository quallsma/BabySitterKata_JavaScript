export const BabySitter =  (startTime, endTime) => {
    return calculateAfternoonPay(startTime, endTime) + calculateEveningPay(startTime, endTime) + calculateLateNightPay(startTime, endTime);
}

let calculateAfternoonPay = (startTime, endTime) => {
    const afternoonPayRate = 7;
    let afternoonHours = 0;
    if(isAfternoon(startTime)){
        if(isAfternoonExceeding(endTime)){
            afternoonHours = 17 - startTime;
        }
        else{
            afternoonHours = endTime - startTime;
        }
    }
    return afternoonHours * afternoonPayRate;
}

let calculateEveningPay = (startTime, endTime) => {
    const eveningPayRate = 11;
    let eveningHours = 0;

    if (startTime < 17 && startTime >= 13 && (endTime > 17 || endTime < 4))
        startTime = 17;

    if(isEvening(startTime, endTime)){
        if(isEveningExceeding(startTime, endTime)){
            eveningHours = 22 - startTime;
        }
        else{
            eveningHours = endTime - startTime;
        }
    }
    return eveningHours * eveningPayRate;
}

let calculateLateNightPay = (startTime, endTime) => {
    const lateNightPayRate = 13;
    let lateNightHours = 0;

    if (startTime < 22 && startTime >= 13 && (endTime > 22 || endTime < 4))
        startTime = 22;

    if(isLateNight(startTime, endTime)){
        if(endTime < startTime)
            lateNightHours = 24 - startTime + endTime;
        else
            lateNightHours = endTime - startTime;
    }

    return lateNightHours * lateNightPayRate;
}

let isAfternoon = (startTime) => {
    return startTime >= 13 && startTime < 18;
}

let isAfternoonExceeding = (endTime) => {
    return endTime > 17 || (endTime >= 0 && endTime < 4);
}

let isEvening = (startTime, endTime) => {
    return startTime >= 17 && startTime < 22;
}

let isEveningExceeding = (startTime, endTime) => {
    return endTime > 22 || (endTime >= 0 && endTime < 4);
}

let isLateNight = (startTime, endTime) => {
    return startTime >= 22 || (startTime >= 0 && startTime < 4);
}