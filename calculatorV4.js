// Version 4

const buttons = document.querySelectorAll("button");

const calculator = {

    output: document.querySelector("[data-operator='output']"),
    currentValue: "",
    hasPoint: false,
    last: "",
 
    addNumber (number){
        this.currentValue === "0" ? this.currentValue = number : this.currentValue += number;
        this.display(this.currentValue);
    },

    addOperator(operator){
        this.last = this.lastChar();
        if(this.last != "+" && this.last != "-" && this.last != "*" && this.last != "/"){
            this.currentValue += operator;
            this.hasPoint = false;
            this.display(this.currentValue);  
        }  
    },

    addPoint(point){
        this.hasPoint === false ? (this.currentValue += point) && (this.hasPoint = true) : console.log('Already contains decimal');
        this.display(this.currentValue); 
    },

    clear(){
        this.currentValue = "0";
        this.hasPoint = false;
        this.display(this.currentValue);
    },

    del(){
        this.last = this.lastChar();
        this.last === "." ? this.hasPoint = false : console.log('Not a decimal');
        this.currentValue = this.currentValue.slice(0, -1);
        this.currentValue === "" ? this.currentValue = "0" : console.log('Not empty');
        this.display(this.currentValue);
    },

    equals(){
        this.last = this.lastChar();
        if(this.currentValue != "" && this.last != "+" && this.last != "-" && this.last != "*" && this.last != "/" && this.last != "." ){
            this.currentValue = new Function('return ' + this.currentValue)();
            this.currentValue = this.currentValue.toString();
            this.display(this.currentValue);
        }
    },

    display(currentOutput){
        this.output.innerHTML = currentOutput;
    },

    lastChar(){
        return this.currentValue.charAt(this.currentValue.length-1);
    }

}

buttons.forEach( i =>{
    i.addEventListener("click", () => {

        let operator = i.dataset.operator;
        let value = i.value;

        switch (operator) {
            case "number":
                calculator.addNumber(value);
                break;

            case "operator":
                calculator.addOperator(value);        
                break;

            case "point":
                calculator.addPoint(value);
                break;
                
            case "clear":
                calculator.clear();
                break;

            case "del":
                calculator.del();
                break;
            
            case "equals":
                calculator.equals();
                break;
            
            default: 
                console.log('No operator found');
                break;

          }
        
    }) ;
});