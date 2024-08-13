import { SeasonClock } from "../cmps/SeasonClock.jsx"
import {SeasonDate} from "../cmps/SeasonDate.jsx"

export function Season(){
    return(
        <div>
            <SeasonDate />
            <SeasonClock />
        </div>

    )
}