export function AnimalList({animalInfos=[ {type: 'test', count: 1000}]})
{
    return(       
        <table>
            <tbody><tr><th>Rare Animals</th></tr></tbody>
            {
                 animalInfos.map(animal =>{ return(
                    <tbody key={"tbody" + animal.type}><tr key={"tableTitle" + animal.type}>
                    <td key={animal.type}>{animal.type}</td>
                    <td key={animal.count}>{animal.count}</td>
                    <td key={"linkTo" + animal.type}>
                        <a style={{display: "table-cell"}} 
                            target="_blank" 
                            href={'https://www.google.com/search?q=' + animal.type}>
                        Search
                        </a>
                    </td> 
                </tr></tbody>
                 )
                   
                })
            }
        </table>
    )
}