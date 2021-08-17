import React, {useState, useEffect} from 'react';

const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    const Toggle = () => {
        setIsActive(!isActive);
    }

    const Reset = () => {
        setSeconds(0);
        setIsActive(false);
    }

    useEffect(() => {
        let interval = null;

        if (isActive) {
            interval = setInterval(() => {
                setSeconds(seconds + 1)
            }, 1);
        }

        else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }

        return () => {
            clearInterval(interval);
        }
    }, [isActive, seconds]);

    return (
        <div>
            <h1>Timer: {seconds}</h1>
            <button onClick={Toggle}>{isActive ? 'Pause' : 'Start'}</button>
            {' '}
            <button onClick={Reset}>Reset</button>
        </div>
    );
}

export default Timer;
