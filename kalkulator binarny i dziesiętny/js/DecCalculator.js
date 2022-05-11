import Calculator from "./Calculator";

class DecCalculator extends Calculator {

    changeNumber(root) {
        const input = root.firstElementChild;
        input.setAttribute("contenteditable", "true");
        input.innerText = "";
        input.focus();
    }


    add(numberX, numberY) {
        let result = [0, 0, 0, 0, 0, 0, 0, 0, 0];

        for (let i = numberX.length - 1; i >= 0; i--) {

                let sum = numberX[i] + numberY[i] + result[i];
                if (sum <= 9) {
                    result[i] = sum;
                } else if (sum > 9) {
                    result[i] = sum - 10;
                    result[i - 1] = 1;
                } else {
                    result[i] = sum;
                }
            }
        return result;
    }

    checkNumber() {
        super.checkNumber();
        return this.resultNumberArray.every((element) => {
            return element >= 0 && element < 10 && typeof element === "number"
        })
    }

    showTooltip = () => {
        this.$calculatorDOMElement.querySelector(".popover-body").innerText = "Podaj cyfrę od 1 do 9";
        this.$calculatorDOMElement.querySelector(".popover").classList.add("show");
    }
    hideTooltip = () => {
        this.$calculatorDOMElement.querySelector(".popover").classList.remove("show");
    }

    initEvents() {
        super.initEvents();
        this.$calculatorDOMElement.querySelector(".operator-bar span").addEventListener("click", event => {
            if (!this.checkNumber()) {
                this.showTooltip();
            }
            else {
                this.updateResult();
                this.hideTooltip();
            }
        })
    }
}

export default DecCalculator;
