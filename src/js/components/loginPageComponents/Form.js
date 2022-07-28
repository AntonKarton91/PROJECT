import {Component} from "../../core/Component";

export class Form extends Component{
    static className = "form-input"

    constructor($root) {
        super($root,{
            name:'Form',
            listeners: ['input', 'click'],
        })
    }

    toHTML() {
        return `
                <div class="selector">
                    <div class="reg btn">Регистрация</div>
                    <div class="log btn">Авторизация</div>
                </div>
                <form action="#" class="field" >
                    <input type="text" class="input" placeholder="Имя" id="user-name">
                    <input type="text" class="input" placeholder="Фамилия" id="user-surname">
                    <input type="text" class="input" placeholder="Пароль" id="user-psw">
                    <input type="submit" class="action" name="Зарегистрироваться">
                </form>`
    }

    onInput(event){
        console.log(event.data)
    }

    onClick(event){
        console.log(event.currentTarget)
    }
}