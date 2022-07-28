class Dom {
    constructor(selector) {
        if (typeof selector === 'string') {
            this.$el = document.querySelector(selector)
        } else {
            this.$el = selector
        }
    }

    html(html) {
        if (html) {
            this.$el.innerHTML = html
            return this
        } else {
            return this.$el.outerHTML
        }
    }

    append(node) {
        if (node instanceof Dom) {
            node = node.$el

        }
        if (Element.prototype.append) {
            this.$el.append(node)
        } else {
            this.$el.appendChild(node)
        }

        return this
    }

    addListener(eventType, callback) {
        this.$el.addEventListener(eventType, callback)
    }

    removeListener(eventType, callback) {
        this.$el.removeEventListener(eventType, callback)
    }
}

export function $(selector){
    return new Dom(selector)
}

$.create = (tagName, classes = '') =>{
    const $el = document.createElement(tagName)
    if(classes){
        $el.classList.add(classes)
    }
    return $($el)
}