import React, { useEffect, useState } from 'react'

const MessageModal = ({ setModal }) => {

    const [days, setDays] = useState(10)
    const [hours, setHours] = useState(10)
    const [minutes, setMinutes] = useState(10)
    const [seconds, setSeconds] = useState(10)
    const [isLoading, setIsLoading] = useState(true)

    const [stopCounting, setStopCounting] = useState(false);

    useEffect(() => {
        const timerId = setInterval(count, 1000)
        return () => clearInterval(timerId);
    }, [stopCounting])


    const count = () => {
        const endDate = new Date("December 25, 2022 00:00:00").getTime()
        const today = new Date().getTime()

        const timeDiff = endDate - today

        const seconds = 1000
        const minutes = seconds * 60
        const hours = minutes * 60
        const days = hours * 24

        let timeDays = Math.floor(timeDiff / days)
        let timeHours = Math.floor((timeDiff % days) / hours)
        let timeMinutes = Math.floor((timeDiff % hours) / minutes)
        let timeSeconds = Math.floor((timeDiff % minutes) / seconds)

        timeHours = timeHours < 10 ? "0" + timeHours : timeHours
        timeMinutes = timeMinutes < 10 ? "0" + timeMinutes : timeMinutes
        timeSeconds = timeSeconds < 10 ? "0" + timeSeconds : timeSeconds

        setDays(timeDays)
        setHours(timeHours)
        setMinutes(timeMinutes)
        setSeconds(timeSeconds)
        setIsLoading(false)

    }


    useEffect(() => {
        if (stopCounting) {
            if (typeof setModal === 'function') {
                setModal(false)
            }
        }
    }, [stopCounting])



    return (
        <>
            <div className="snowflakes" aria-hidden="true">
                <div className="snowflake">
                    ❅
                </div>
                <div className="snowflake">
                    ❆
                </div>
                <div className="snowflake">
                    ❅
                </div>
                <div className="snowflake">
                    ❆
                </div>
                <div className="snowflake">
                    ❅
                </div>
                <div className="snowflake">
                    ❆
                </div>
                <div className="snowflake">
                    ❅
                </div>
                <div className="snowflake">
                    ❆
                </div>
                <div className="snowflake">
                    ❅
                </div>
                <div className="snowflake">
                    ❆
                </div>
                <div className="snowflake">
                    ❅
                </div>
                <div className="snowflake">
                    ❆
                </div>
            </div>

            <div className="merryBox">
                <div className="merryCard container center-element">
                    <button className="btn closeBtn" onClick={() => { setStopCounting(true) }}>
                        <span className="text-light fs-1" aria-hidden="true">&times;</span>
                    </button>
                    <h1 className="mb-3 display-1">Frohe Weihnachten</h1>
                    <p className="lead mb-0 text-center">Der Vorstand wünscht allen Mitgliedern, Familienangehörigen und Freunden ein frohes Weihnachtsfest<br></br>
                        und einen guten Rutsch in das Ruderjahr 2023</p>
                    {isLoading ? (
                        <div className="loading">
                            <div className="spinner"></div>
                        </div>
                    ) : (
                        <div className="countdown">
                            <div>
                                <p>{days}</p>
                                <h3>Tage</h3>
                            </div>
                            <div>
                                <p>{hours}</p>
                                <h3>Stunden</h3>
                            </div>
                            <div>
                                <p >{minutes}</p>
                                <h3>Minuten</h3>
                            </div>
                            <div>
                                <p>{seconds}</p>
                                <h3>Sekunden</h3>
                            </div>
                        </div>
                    )}
                    <p className="lead mb-0 text-light mt-3 fw-bold text-center">Drusen in Sachsen e. V.</p>
                    <p className="lead mb-0 text-light fw-light text-center">09.12.2022</p>
                </div>
            </div>
        </>
    )
}

export default MessageModal