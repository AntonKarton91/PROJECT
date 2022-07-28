import {EventListener} from "./EvenlListener";

export class Component extends EventListener{

    constructor($root, options = {}) {
        super($root, options.listeners);
        console.log(options.listeners)
    }

    toHTML(){
        return ''
    }
}