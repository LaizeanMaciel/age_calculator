

var btnCalculator = document.querySelector("#btn-calculator")

btnCalculator.addEventListener("click", function() {

    var day = document.querySelector("#day-input").value
    var month = document.querySelector("#month-input").value
    var year = document.querySelector("#year-input").value

    //Variaveis com  dia, mes e ano atual
    var currentDate = new Date()
    var currentYear = currentDate.getFullYear()
    var currentMonth = currentDate.getMonth() + 1
    var currentDay = currentDate.getDate()

    var ageYears = currentYear - year
    var ageMonth = currentMonth - month
    var ageDay = currentDay - day

    //Variaveis de erro
    var errorDay = document.querySelector(".error-day")
    var errorMonth = document.querySelector(".error-month")
    var errorYear = document.querySelector(".error-year")

    //Erros

    var inputErrorDay = document.querySelector("#day-input")
    var labelErrorDay = document.querySelector(".label-day")

    var inputErrorMonth = document.querySelector("#month-input")
    var labelErrorMonth = document.querySelector(".label-month")

    var inputErrorYear = document.querySelector("#year-input")
    var labelErrorYear = document.querySelector(".label-year")

    var errorResult = false

   
    if (day == "") {
       
        labelErrorDay.style.color = "red"
        inputErrorDay.style.border = "1px solid red"
        errorDay.classList.add('hide')
        errorResult = true
        
    } else {
        errorDay.classList.remove('hide')
        var inputError = document.querySelector("#day-input")
        inputError.style.border = ""
        labelErrorDay.style.color = "hsl(0, 1%, 44%)"
    }

    if (month == "") {
       
        labelErrorMonth.style.color = "red"
        inputErrorMonth.style.border = "1px solid red"
        errorMonth.classList.add('hide')
        errorResult = true
        
    } else {
        errorMonth.classList.remove('hide')
        var inputError = document.querySelector("#month-input")
        inputError.style.border = ""
        labelErrorMonth.style.color = "hsl(0, 1%, 44%)"
    }

    if (year == "") {
       
        labelErrorYear.style.color = "red"
        inputErrorYear.style.border = "1px solid red"
        errorYear.classList.add('hide')
        errorResult = true
        
    } else {
        errorYear.classList.remove('hide')
        var inputError = document.querySelector("#year-input")
        inputError.style.border = ""
        labelErrorYear.style.color = "hsl(0, 1%, 44%)"
    }

    if (errorResult) {
        document.querySelector("#result-box .result-content:nth-child(1) p span").textContent = "--"
        document.querySelector("#result-box .result-content:nth-child(2) p span").textContent = "--"
        document.querySelector("#result-box .result-content:nth-child(3) p span").textContent = "--"
        return;
    }

    if (ageDay < 0) {
        ageMonth--
        var dayInPreviousMonth = new Date(currentYear, currentMonth - 1, 0).getDate()
        ageDay += dayInPreviousMonth

    }

    
    if (ageMonth < 0) {
        ageMonth--
        ageMonth += 12
    }

    //Exibir resultado
    document.querySelector("#result-box .result-content:nth-child(1) p span").textContent = ageYears
    document.querySelector("#result-box .result-content:nth-child(2) p span").textContent = ageMonth
    document.querySelector("#result-box .result-content:nth-child(3) p span").textContent = ageDay
})