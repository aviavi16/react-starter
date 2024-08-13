import { AnimalList } from "../cmps/AnimalList.jsx"

export function Animals( ){
        const animalInfos = 
    [ {type: 'Malayan Tiger', count: 787}, 
        {type: 'Mountain Gorilla', count: 212}, 
        {type: 'Fin Whale', count: 28}, 
    ] 

    return(
        <section className="animals">
            <h2>animal list</h2>   

            <AnimalList animalInfos={animalInfos}/>     
        </section>
    )
}

