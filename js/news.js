const dates = [new Date("07/19/2023"), new Date("07/07/2023"), new Date("07/01/2023"), new Date("05/15/2023")];
var calcDates = [];

document.body.onload = function () {

    document.getElementById("year").innerHTML = new Date().getFullYear();

    for (let i = 0; i < dates.length; i++) {

        var Difference_In_Time = new Date() - dates[i].getTime();
        calcDates.push(Difference_In_Time / (1000 * 3600 * 24));

    }

    DisplayDate(calcDates[0], "days1");
    DisplayDate(calcDates[1], "days2");
    DisplayDate(calcDates[2], "days3");
    DisplayDate(calcDates[3], "days4");
}

function DisplayDate(date, elementId) {

    if (date < 1) {
        document.getElementById(elementId).innerHTML = "Nové!";
        return;
    }
    else if (date > 1 && date < 2) {
        document.getElementById(elementId).innerHTML = "Před " + Math.round(date) + " dnem";
        return;
    }
    else {
        document.getElementById(elementId).innerHTML = "Před " + Math.round(date) + " dny";
        return;
    }

}