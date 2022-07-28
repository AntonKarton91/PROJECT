import {capitalize} from "./utils";


export class EventListener{
    constructor($root, listeners = []) {
        this.$root = $root
        this.listeners = listeners
        console.log(this, 'sadas')
    }


    initEventListener(){

        this.listeners.forEach(listener =>{
            const method = getMethodName(listener)
            this.$root.addListener(listener, this[method].bind(this))
            })
        }


    removeEventListener(){
        this.listeners.forEach(listener =>{
            const method = getMethodName(listener)
            this.$root.removeListener(listener, this[method].bind(this))
        })
    }
}

function getMethodName(eventName){
    return 'on' + capitalize(eventName)
}