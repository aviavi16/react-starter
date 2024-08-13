const { useState, useEffect } = React
import { WatcherDetails } from "../cmps/WatcherDetails.jsx"
import {UserMsg} from "../cmps/UserMsg.jsx"
import { watcherService } from "../services/watcher-service.js"


export function Watcher(){
    const  {useState, useEffect, useRef}  = React
    const [userMsg, setUserMsg] = useState('')
    const [watchers, setWatchers] = useState([])
    const [selectedWatcher, setSelectedWatcher] = useState(null)
    let iconSrc = ""
    let updateWatcher = false
    let currWatcherId 
    useEffect(() => {
        watcherService.query()
            .then(setWatchers)
    }, [])

    function onRemoveWatcher(watcherId) {
        var result = confirm("Are you sure that you want to delete this account?");
        if (result) {
            watcherService.remove(watcherId)
            .then(() => {
                setWatchers(watchers.filter(w => w.id !== watcherId))
                flashMsg('Watcher removed')
            })
        }       
    }

    function onSelectWatcher(watcherId) {
        var element = document.getElementsByClassName('watcher-details' + watcherId);
        element[0].style.display = 'block';
    }

    function onOpenModal(watcher) {
        var nameEl = document.getElementById('name-input')
        var moviesEl = document.getElementById('movies-input')
        var iconEl = document.getElementById('icon')
        const iconImg = document.getElementById("iconImage")


        if(watcher){
            updateWatcher = true
            currWatcherId = watcher.id

            nameEl.value = watcher.fullname
            moviesEl.value = watcher.movies
            iconEl.value = watcher.icon
            iconImg.src = iconSource(icon.value)
        } else{
            nameEl.value = ""
            moviesEl.value = ""
            iconEl.value = watcherService.getIconList()[0]
            iconImg.src = iconSource(icon.value)
        }

        var modal = document.getElementById("add-user")
        modal.style.display = "flex";
    }

    function onCloseModal(){
        var modal = document.getElementById("add-user")
        modal.style.display = "none";    
        watcherService.query().then((listOfWatchers) =>
            setWatchers(listOfWatchers)
        )
    }

    function onSaveWatcher(){
        const fullname = document.getElementById('name-input').value
        const movies = document.getElementById('movies-input').value
        const icon = document.getElementById('icon').value
    
        if (!updateWatcher) {
            console.log('watcherService adding Watcher')
            var prmSavedWatcher = watcherService.addWatcher(fullname, movies, icon)
        } else {
            console.log('watcherService updating Watcher')
            var prmSavedWatcher = watcherService.updateWatcher(currWatcherId, fullname, movies, icon)
            currWatcherId = ""
        }
        updateWatcher = false
        prmSavedWatcher.then(savedWatcher =>{
            flashMsg(`Watcher Saved (id: ${savedWatcher.Id})`)     
            onCloseModal() 
        })
       
    }

    function flashMsg(userMsg) {
        setUserMsg(userMsg)
        setTimeout(() => {
            setUserMsg('')
        }, 3000)
    }

    function iconSource(smileyName){ 
        if(!smileyName){
            smileyName = watcherService.getIconList()[0]
        }
        return '../assets/img/watcher-imgs/' + smileyName +'.jpg'
    }

    function onChangeIcon(){
        var newIcon =  document.getElementById("icon").value
        document.getElementById("iconImage").src = iconSource(newIcon)
    }

    return(
        <section className="watcher-container">
            <div>
                <span className="title"> watcher App </span>
            </div>
                <button className="add-btn" onClick={ () =>onOpenModal()}> Add Watcher</button>
                <dialog  id="add-user" className="modal-add-user">
                    <h2>Add Watcher</h2>
                    <label>Enter Full Name:</label>
                    <input id="name-input" type="text" placeholder="Harry Potter"/>   
                    <label>Enter A List Of Favorite Movies:    </label>
                    <input id="movies-input" type="text" placeholder="[Merry popins, Jomanji]"/> 
                    <label>Please choose your account's picture:    </label>
                    <select id="icon" onChange={() => onChangeIcon()}>
                        {watcherService.getIconList().map(
                            icon =>
                                <option key={icon} value={icon}>{icon}</option>
                        )}
                        
                    </select>
                    <img id= "iconImage" src={iconSource()}/>        
                    <div className="actions">
                        <button className="cancel" onClick={() => onCloseModal()}>Cancel</button>
                        <button className="save" onClick={() => onSaveWatcher()} type="submit">Save</button>
                    </div>
                </dialog>

            <UserMsg msg={userMsg} />
            <div className="watcher-list">
                {watchers.map(watcher => <ul key={watcher.id} className="watcher-preview">
                    <button onClick={() => onRemoveWatcher(watcher.id)} id="removeBtn">x</button>
                    <img src={iconSource(watcher.icon)}/> 
                    <span> {watcher.fullname}</span>
                    <WatcherDetails watcher={watcher} />
                    <div className="actions">
                        <button onClick={() => onSelectWatcher(watcher.id)}>Select</button>
                        <button onClick={() => onOpenModal(watcher)}>Update</button>
                    </div>
                </ul>)}
            </div>
        </section>
        
    )
}