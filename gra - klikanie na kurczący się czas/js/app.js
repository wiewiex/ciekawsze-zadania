import React, {Component, useEffect, useState} from "react";
import ReactDOM from "react-dom";


const SpeedClickGame = (props) => {
    const [counter, setCounter] = useState(0);
    const [roundTime, setRoundTime] = useState(props.time)
    const [time, setTime] = useState(roundTime);
    const [intv, setIntv] = useState(null);

    function start() {
        setIntv(setInterval(() => {
            setTime(prevState => prevState - 1)
        }, 50))
    }

    useEffect(start, [roundTime]);

    const buttonClick = () => {
        setCounter(prevState => prevState + 1);
    }
    const button2Click = () => {
        setRoundTime(prevState => prevState - 50);
        setCounter(0);
        setTime(roundTime);
    }


    if (time <= 0) {
        clearInterval(intv);
    }

    let button;
    let button2;

    if (time >= 0) {
        button = <button onClick={buttonClick}>Klikaj!</button>;
        button2 = <button disabled={true}>Nowa runda</button>;
    }
    if (time < 1) {
        button = <button onClick={buttonClick} disabled={true}>Koniec czasu!</button>;
        button2 = <button onClick={button2Click}>Nowa runda</button>;
    }
    if (roundTime <= 50) {
        button2 = <button disabled={true} onClick={button2Click}>Nowa runda</button>;
    }

    return(
        <>
        {button}
        {button2}
        <div>
            <h1>{time}</h1>
            <h2>Wynik: {counter}</h2>
        </div>
        </>
    )
}

ReactDOM.render(
  <SpeedClickGame time={200}/>,
  document.getElementById("app")
);
