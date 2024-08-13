import { element } from "prop-types";

const {useState}  = React

export function WatcherDetails({watcher}){
    const [hidden, setHidden] = useState(true)

    function onCloseModal(classname){
        if(!classname) console.log('error: no classname recived to close modal')
        
        let myPromise = new Promise(function(myResolve, myReject) {
            var element = document.getElementsByClassName(classname);
          // The producing code (this may take some time)
            if (element) {
                console.log('Closing Modal')
                element[0].style.display = 'none';
            } else {
                console.log('error: no elment found to close modal')
            }
        })                    
    }
    
    return(
        <dialog className={'watcher-details' + watcher.id}>
            <h2>Watcher Full Name: {watcher.fullname}</h2>
            <h4>Favorite Movies: {watcher.movies} </h4>
            <button onClick={() => onCloseModal('watcher-details' + watcher.id)}>Close</button>
        </dialog>
    )
}