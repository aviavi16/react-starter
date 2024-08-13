
import { AppHeader } from "./cmps/AppHeader.jsx"
import { Home } from "./pages/Home.jsx"
import { About } from "./pages/About.jsx"
import { Animals } from "./pages/Animals.jsx"
import { Season } from "./pages/Season.jsx"
import { Countdown } from "./pages/Countdown.jsx"
import { Watcher } from "./pages/Watcher.jsx"
import { MouseMonitor } from "./cmps/MouseMonitor.jsx"


const {useState } = React

export function RootCmp() {
    const [page, setPage] = useState('home')  

    return (
            <section className="app main-layout">
                <AppHeader page={page} onSetPage={setPage} />
                <main>
                    <main>                       
                        {page === 'home' && <Home />}
                        {page === 'about' && <About />}
                        {page === 'animals' && <Animals/>}
                        {page === 'season' && <Season />} 
                        {page === 'countdown' && <Countdown />}  
                        {page === 'watcher' && <Watcher />}
                        {page === 'mouse' && <MouseMonitor />}           
                    </main>
                </main>
            </section>
    )
}