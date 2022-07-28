import {$} from '../../core/Dom'
import {Form} from "./Form";

export class LoginRootComponent{

    constructor(root, options) {
        this.$root = document.querySelector(root)
        this.components = options.components

    }

    getRoot(){
        const $loginRoot = $.create('div', "loginRegister")

        this.components = this.components.map(Component => {
            const $el = $.create('div', Component.className)
            const component  = new Component($el)
            $el.html(component.toHTML())
            $loginRoot.append($el)
            return component
        })

        console.log(this)
        return $loginRoot.$el
    }


    render(){
        this.$root.append(this.getRoot())

        this.components.forEach(component => {
            component.initEventListener()
        })
    }

}