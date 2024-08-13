import { utilService } from "../services/util.service.js"

const {useRef} = React

export function About() {
    const titleRef = useRef()
    return (
        <section className="about">
            <h1 ref={titleRef}>About react and us...</h1>
            <p>{utilService.makeLorem()}</p>
            <button onClick={()=>{
                console.log('clicked the animate css button')
                utilService.animateCSS(titleRef.current)
            }}>Animate</button>
        </section>
    )
}