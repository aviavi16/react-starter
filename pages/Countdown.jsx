const  {useState, useEffect, useRef}  = React

export function Countdown({
        startFrom=10, 
        onDone= () => new Audio('../assets/audio/moadib.mp3').play()
    }){
    const [counter, setCounter] = useState(startFrom)
    const intervalId = useRef(null)

    useEffect(() => {
        intervalId.current = setInterval(() => setCounter(prev => 
            prev - 1), 1000)
    }, [])

    useEffect(() => {
        if (counter === 0){
            stopCountdown()
            onDone()
        }
            
    }, [counter])

    function stopCountdown(){
        clearInterval(intervalId.current)
    }

    function sectionStyle(){
        var classList = ["counterSpan"]
        if(counter < 7)
            classList.push("red")
        return classList.join(" ")
    }

    return(
        <section className="countdown-container">
            
            <span className={sectionStyle()}> {counter} </span>

        
        </section>
        
    )
}