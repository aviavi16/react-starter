const { useEffect, useState, useRef } = React

export function SeasonClock() {
    const [time, setTime] = useState(0)
    const intervalId = useRef(null)


    useEffect(() => {
        intervalId.current = setInterval(() => {     
            setTime(ConvertDateToTime())
        }, 1000
        )
        return clearInterval(() => intervalId.current)
    }, [])

    function ConvertDateToTime(){
        let date = new Date()
        let hour = (date.getHours() < 10 ? '0' : '') + date.getHours()
        let minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes()
        let seconds = (date.getSeconds() < 10 ? '0' : '') + date.getSeconds()
        return hour + ":" + minutes + ":" + seconds
    }

    return (
        <section className="season-clock-container">
            <span>{time}</span>
        </section>
    )
}