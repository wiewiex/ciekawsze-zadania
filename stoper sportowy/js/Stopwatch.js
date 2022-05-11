import React, {useEffect, useState} from "react";

const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [laps, setLaps] = useState([]);
    const [isRunning, setIsRunning] = useState(false);
    const [increment, setIncrement] = useState();

    const handleClickStart = () => {
        setIncrement(setInterval(() => {
            setIsRunning(true);
            setTime(prevState => prevState + 1)
        },1000));
    }
    const handleClickStop = () => {
        clearInterval(increment);
    }
    const handleClickLap = () => {
        setLaps([...laps,time]);
    }
    const handleClickRestart = () => {
        clearInterval(increment);
        setTime(0);
        setLaps([]);
    }

    return(
        <>
            <h1>Time: {time}s</h1>
            <button onClick={handleClickStart}>Start</button>
            <button onClick={handleClickStop}>Stop</button>
            <button onClick={handleClickLap}>Lap</button>
            <button onClick={handleClickRestart}>Restart</button>
            <ul>{laps.map((el, i) => <li key={i}>{el}s</li> )}</ul>
        </>
    )
}



export default Stopwatch;