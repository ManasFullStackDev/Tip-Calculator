function calculate() {

    let billAmntVal = parseInt(document.getElementById("billAmnt").value)
    console.log(billAmntVal)

    let percTipVal = parseInt(document.getElementById("percTip").value)
    console.log(percTipVal)

    let tipAmntVal = document.getElementById("tipAmnt")

    let totalAmntVal = document.getElementById("totalAmnt")

    if (isNaN(billAmntVal) || isNaN(percTipVal)) {
        let warnElem = document.getElementById("warn")
        warnElem.textContent = "Enter Correct value"
        let btnEl = document.getElementById("btn")
        btnEl.style.background = "red"
    }

    else {

        let totaltip = billAmntVal * (percTipVal / 100)
        console.log(totaltip)

        tipAmntVal.value = totaltip

        let total = billAmntVal + totaltip
        console.log(total)

        totalAmntVal.value = total;


    }
}