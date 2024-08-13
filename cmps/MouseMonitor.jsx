const { useEffect, useState, useRef } = React

export function MouseMonitor() {
    const [isOn, setIsOn] = useState(true)
    const [pos, setPos] = useState({ x: 0, y: 0 })

    function updatePos(e) {
        setPos({ x: e.offsetX, y: e.offsetY });
    }
    
    useEffect(() => {
        function updatePos(e) {
            setPos({ x: e.offsetX, y: e.offsetY });
        }

        if(isOn)
            window.addEventListener('mousemove', updatePos);

        return () => {
            window.removeEventListener('mousemove', updatePos);
        };
    }, [togggleState]);


    function togggleState() {
        const button = document.getElementsByClassName("btn")[0]
        if(isOn){
            console.log('pausing the Component...:')
            button.innerText = 'Resume';
            button.value = "Resume"
            button.style ="background-color: lightpink;"
        } else{
            console.log('resuming the Component...:')
            button.innerText = 'Pause';
            button.value = "Pause"
            button.style ="background-color: red;"
        }
        setIsOn(isOn => !isOn)
    }

    return (
        <section className="mouse-monitor-container">
            <div className="actions">
                <h2> Mouse Position </h2>
                <span>x:{pos.x} ,y: {pos.y}</span>
                <button type="button" onClick={() => togggleState()}
                    className="btn" value="Pause"> Pause </button>
            </div>
        </section>
    )
}