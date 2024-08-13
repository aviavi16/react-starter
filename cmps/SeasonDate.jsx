import { utilService } from "../services/util.service.js"
const { useState, useEffect } = React

export function SeasonDate(){
    const [isDark, setIsDark] = useState(false)

    const date = new Date()
    const day = dayName()
    const month = monthName()
    const season = imageSource(month)


    function toggleDarkMode(){
        setIsDark(isDark => !isDark)
    }

    useEffect(()=>{
        console.log('mounted')
    }, [])

    useEffect(()=>{
        console.log('is dark updated')
    }, [isDark])

    function sectionStyle(){
        var classList = ["season-date-container"]
        if(isDark)
            classList.push("dark")
        return classList.join(" ")
    }

    function monthName(){
        return utilService.getMonthName(date)
    }

    function dayName(){
        return utilService.getDayName(date, 'en-US')
    }

    function imageSource(monthName='January'){
        const seasons = {
            'January' : 'WINTER',
            'February': 'WINTER',
            'March': 'SPRING',
            'April': 'SPRING',
            'May': 'SPRING',
            'June': 'SUMMER',
            'July': 'SUMMER',
            'August': 'SUMMER',
            'September': 'FALL',
            'October': 'FALL',
            'November': 'FALL',
            'December': 'WINTER'
            };
        const season = seasons[monthName];
        return "../assets/img/season-imgs/" + season +".png"
    }

    return (
        <section className={sectionStyle()} onClick={toggleDarkMode} id="season-date-container">
            <div>
                <span>{month}</span>
                <img src={season}></img>
                <span>{day}</span>
            </div>       
        </section>
    )
}