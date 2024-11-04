class View {
    constructor() {
        this.mainDiv = this.getElement('#app');
        this.mainInput = this.createElement("input");
        this.myButton = this.createElement("button");
        this.myButton.textContent = "Trykk meg";
        this.mainDiv.append(this.mainInput, this.myButton);

        this.myButton.addEventListener('click', this.buttonOnclick.bind(this));
        this.mainInput.addEventListener('focusout', this.inputFocusOut.bind(this));
    }

    createElement(tag, className) {
        const element = document.createElement(tag);
        if (className) element.classlist.add(className);

        return element;
    }

    getElement(selector) {
        return document.querySelector(selector);
    }

    buttonOnclick(event){
        const i = 1;
    }

    inputFocusOut(event){
        const i = 1;
    }

}