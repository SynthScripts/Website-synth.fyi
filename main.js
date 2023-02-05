// STARTUP
window.onload = function() {

    setAge()

    setEvent()

}


// AGE CHANGER
function setAge() {

    birthDate = new Date("14 January 2010");
    otherDate = new Date();

    element = document.getElementById("dynamicAge");

    if (!element) return;

    var years = (otherDate.getFullYear() - birthDate.getFullYear());

    if (otherDate.getMonth() < birthDate.getMonth() || 
        otherDate.getMonth() == birthDate.getMonth() && otherDate.getDate() < birthDate.getDate()) {
        years--;
    }

    element.innerHTML = years;

}


// EVENT TEXT
function setEvent() {

    const specialDays = {
        "1 0": "New Years! 🎉",
        "14 0": "My Birthday! 🎂",
        "14 1": "Valentines! 💘",
        "1 3": "April Fools! 🎉",
        "31 9": "Halloween! 🎃",
        "11 10": "Remembrance Day! 🎖️",
        "24 11": "Christmas Eve! 🎅",
        "25 11": "Christmas! 🎅",
        "26 11": "Boxing Day! 🎅",
        "31 11": "New Years Eve! 🎉",
    };

    let date = new Date();

    let currentDateKey = date.getDate() + " " + date.getMonth();


    if (currentDateKey in specialDays) {

        console.log("Today its " + specialDays[currentDateKey])

        specialDayID = document.getElementById("dynamicEvent");

        specialDayID.innerHTML = "Today its " + specialDays[currentDateKey];

    }

}