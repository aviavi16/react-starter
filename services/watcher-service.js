import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'

const WATCHER_KEY = 'watcherDB'

//TODO insert to factory, create generic function to get all elemens 
//and add to array on startup
const imgList = ["angryBirdsSmiley", "blueSmiley", "deadpool",
    "greenSmiley", "maskedDog", "maskedWoman",
    "oldGrandpaSmiley", "redSmily", "smilingGreenSmilyGirl",
    "turkizSmily", "yellowSmily"]

_createWatchers()

export const watcherService = {
    query,
    getEmptyWatcher,
    remove,
    save,
    getIconList,
    addWatcher,
    updateWatcher
}

function query(filterBy = {}) {
    return storageService.query(WATCHER_KEY)
        .then(watchers => {
            if (filterBy.txt) {
                const regExp = new RegExp(filterBy.txt, 'i')
                watchers = watchers.filter(watcher => regExp.test(watcher.fullname))
            }

            return watchers
        })
}

function _createWatchers() {
    let watchers = utilService.loadFromStorage(WATCHER_KEY)
    if (!watchers || !watchers.length) {
        watchers = [
            {id: 'w101', fullname: "Puki Ba", movies:['Rambo', 'Rocky'], icon: imgList[2]}, 
            {id: 'w102', fullname: "Auki Pa", movies:['Rambo2', 'Rocky7'], icon: imgList[3]}, 
            {id: 'w103', fullname: "Suki Na", movies:['Rambo6', 'Rocky2'], icon: imgList[4]}
        ]      
        
        utilService.saveToStorage(WATCHER_KEY, watchers)
    }
}

function remove(watcherId){
    if(!watcherId) console.log('error: no watcher id for remove watcher', error)
    return storageService.remove(WATCHER_KEY, watcherId)
}

function save(watcher) {
    if (watcher.id) {
        return storageService.put(WATCHER_KEY, watcher)
    } else {
        return storageService.post(WATCHER_KEY, watcher)
    }
}

function _createWatcher(fullname, movies, icon) {
    const watcher = getEmptyWatcher(utilService.makeId(), fullname, movies, icon)
    console.log('watcher:', watcher)
    return watcher
}

function addWatcher(fullname, movies, icon) {
    
    var watcher = _createWatcher(fullname, movies, icon)
    return storageService.post(WATCHER_KEY, watcher)   
}

function updateWatcher(id, fullname, movies, icon) {
    var watcherToUpdate = {
        id, 
        fullname, 
        movies, 
        icon
    }
    return storageService.put(WATCHER_KEY, watcherToUpdate)  
}

function getEmptyWatcher(id = 'test', fullname = 'Moki mok', movies = ['jan dao', 'crappy puppy'], icon = "greenSmiley") {
    return { id, fullname, movies , icon}
}

function getIconList(){
    return imgList
}

