const income = document.getElementById('income')
const totalExpenses = document.getElementById('total-expenses')
const balance = document.getElementById('balance')

// Click Calculate button
document.getElementById('calculate').addEventListener('click', function () {
    // Get every element
    const food = document.getElementById('food')
    const rent = document.getElementById('rent')
    const clothes = document.getElementById('clothes')
    const alerts = document.getElementsByClassName('alert-one')


    for (const alertOne of alerts) {
        // Alert for providing number
        if (alertOne.value == '') {
            alert('Please provide a number in every input field')
            return
        }
        // Alert for providing positive number
        if (Number(alertOne.value) < 0) {
            alert("Please provide a positive value in every input field")
            return
        }
    }


    const expenses = Number(food.value) + Number(rent.value) + Number(clothes.value)

    // Alert for expenses (while expenses > income)
    if (expenses > Number(income.value)) {
        alert('Expenses can not be more then income')
        return
    }

    // Total Expenses
    totalExpenses.innerText = expenses

    // Balance
    balance.innerText = Number(income.value) - expenses

})

// Click Save Button
document.getElementById('save').addEventListener('click', function () {
    const saving = document.getElementById('saving')
    const savingAmount = document.getElementById('saving-amount')
    const remainingBalance = document.getElementById('remaining-balance')
    const alerts = document.getElementsByClassName('alert-two')


    // Alert for Save while (save > 100)
    if (Number(saving.value) > 100) {
        alert('Save cannot be more than 100%')
        return
    }

    // Alert for providing number
    for (const alertTwo of alerts) {
        if (alertTwo.value == '') {
            alert('Please provide a number in every input field')
            return
        }
        // Alert for providing positive number
        if (Number(alertTwo.value) < 0) {
            alert("Please provide a positive value in every input field")
            return
        }
    }

    const savingAmountTotal = (Number(income.value) * Number(saving.value)) / 100

    // Alert for Saving Amount while (saving > balance)
    if (savingAmountTotal > Number(balance.innerText)) {
        alert('Saving Amount cannot be more than Balance')
        return
    }

    // Saving Amount
    savingAmount.innerText = savingAmountTotal

    // Remaining Balance
    remainingBalance.innerText = Number(income.value) - Number(totalExpenses.innerText) - Number(savingAmount.innerText)
})