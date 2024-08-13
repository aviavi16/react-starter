export function AppHeader({page = 'home', onSetPage}) {
    

    function onPageChange(ev, page) {
        ev.preventDefault()
        onSetPage(page)
    }    

    return (
        <header className="app-header full main-layout">
            <section className="header-container">
                <h1>React Starter Proj</h1>
                <nav>
                    <a href="" className={(page === 'home') ? 'active' : ''}
                        onClick={(ev) => {
                            console.log('clicked the home button')
                            onPageChange(ev, 'home')
                        }
                    }>
                        Home
                    </a> | {" "}  
                    <a href="" className={(page === 'about') ? 'active' : ''}
                        onClick={(ev) => {
                            console.log('clicked the about button')
                            onPageChange(ev, 'about')

                            }
                        }>
                        About
                    </a> |  {" "} 
                    <a href="" className={(page === 'animals')? 'active' : ''}
                        onClick={(ev)=>{
                            console.log('clicked the animals button')
                            onPageChange(ev, 'animals')
                        }

                    }>
                        Animals
                    </a> |  {" "} 
                    <a href="" className={(page==='season')? 'active': ''} 
                        onClick={(ev) => {
                            console.log('clicked the season clock button')
                            onPageChange(ev, 'season')
                        }
                        }>
                            Season Clock
                    </a> |  {" "} 
                    <a href="" className={(page==='countdown')? 'active': ''} 
                        onClick={(ev) => {
                            console.log('clicked the Countdown button')
                            onPageChange(ev, 'countdown')
                        }
                        }>
                            Countdown
                    </a>  |  {" "} 
                    <a href="" className={(page==='watcher')? 'active': ''} 
                        onClick={(ev) => {
                            console.log('clicked the Watcher button')
                            onPageChange(ev, 'watcher')
                        }
                        }>
                            Watcher
                    </a> |  {" "} 
                    <a href="" className={(page==='mouse')? 'active': ''} 
                        onClick={(ev) => {
                            console.log('clicked the Mouse Monitor button')
                            onPageChange(ev, 'mouse')
                        }
                        }>
                            Mouse Monitor
                    </a>
                </nav>

            </section>
        </header>
    )
}
