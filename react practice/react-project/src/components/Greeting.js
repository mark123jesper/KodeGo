import React from 'react'

const Greeting = () => {
    var today = new Date();
    var hourTime = () => {
        var timeHour;
        if (today.getHours() <= 9) {
            timeHour = '0' + today.getHours()
        }

        else {
            timeHour = today.getHours()
        }
        return timeHour;
    };
    
    
    var hourMin = () => {
        var timeMin;
        if (today.getMinutes() <= 9) {
            timeMin = '0' + today.getMinutes()
        }

        else {
            timeMin = today.getMinutes()
        }
        return timeMin;
    };

    var sound = new Audio("https://raw.githubusercontent.com/Xiija/TestFiles/master/Yuki%20%26%20Tako%2001.mp3");
    sound.autoplay = true;


    if (hourTime() >= 0 && hourTime() <= 11) {
        return (
        <main style={{ backgroundColor: "lightGrey" }}>
            <h1>
                Good Morning! The Time is: {hourTime()}:{hourMin()}
            </h1>
            <audio>
                <source src={sound} type="audio/mp3"/>
            </audio>
        </main>
        );
    }
    
    else if (hourTime() >= 12 && hourTime() <= 18) {
        return (
        <main style={{ backgroundColor: "lightBlue" }}>
            <h1>
            Good Afternoon! The Time is: {hourTime()}:{hourMin()}
            </h1>
            <audio>
                <source src={sound} type="audio/mp3"/>
            </audio>
        </main>
        );
    }
    
    else if (hourTime() >= 19 && hourTime() <= 24) {
        return (
        <main style={{ backgroundColor: "lightYellow" }}>
            <h1>
            Good Evening! The Time is: {hourTime()}:{hourMin()}
            </h1>
            <audio>
                <source src={sound} type="audio/mp3"/>
            </audio>
        </main>
        );
    }
}

export default Greeting;
