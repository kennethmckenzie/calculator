// Version Two

const output = document.querySelector("[data-operator='output']");
const buttons = document.querySelectorAll("button");

let currentValue = "";
let hasPoint = false;
let lastChar = "";

display = currentOutput =>  output.innerHTML = currentOutput;
calculate = finalOutput =>  new Function('return ' + finalOutput)();

buttons.forEach( i =>{
    i.addEventListener("click", () => {

        let operator = this.dataset.operator;

        switch (operator) {
            case "number":

                currentValue === "0" ? currentValue = this.value : currentValue += this.value;
                display(currentValue);
                break;

            case "operator":
                lastChar = currentValue.charAt(currentValue.length-1);
                if(lastChar != "+" && lastChar != "-" && lastChar != "*" && lastChar != "/"){
                    currentValue += this.value;
                    hasPoint = false;
                    display(currentValue );  
                }             
                break;

            case "point":

                hasPoint === false ? (currentValue += this.value) && (hasPoint = true) : console.log('Already contains decimal');
                display(currentValue); 
                break;
                
            case "clear":

                currentValue = "0";
                hasPoint = false;
                display(currentValue);
                break;

            case "del":

                lastChar = currentValue.charAt(currentValue.length-1);
                lastChar === "." ? hasPoint = false : console.log('Not a decimal');
                currentValue = currentValue.slice(0, -1);
                currentValue === "" ? currentValue = "0" : console.log('Not empty');
                display(currentValue);
                break;
            
            case "equals":
                lastChar = currentValue.charAt(currentValue.length-1);
                if(currentValue != ""  && lastChar != "+" && lastChar != "-" && lastChar != "*" && lastChar != "/" && lastChar != "." ){
                    currentValue = calculate(currentValue);
                    currentValue = currentValue.toString();
                    display(currentValue);
                }
                break;
            
            default: 
                console.log('No operator found');
                break;

          }
        
    }) ;
});