//for date and time //
function updateDateTime() {
    var dateElement = document.getElementById('date')
    var timeElement = document.getElementById('time')

    // Get current date and time
    var currentDate = new Date()

    // Format date as dd/mm/yyyy
    var formattedDate =
        ('0' + currentDate.getDate()).slice(-2) +
        '/' +
        ('0' + (currentDate.getMonth() + 1)).slice(-2) +
        '/' +
        currentDate.getFullYear()

    // Format time with IST (Indian Standard Time) offset
    var options = {
        timeZone: 'Asia/Kolkata', // IST time zone
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    }
    var formattedTime =
        currentDate.toLocaleTimeString('en-US', options) + ' (IST)'

    // Update HTML elements with formatted date and time
    dateElement.textContent = formattedDate
    timeElement.textContent = formattedTime
}

// Call updateDateTime function when the page loads
window.onload = function () {
    updateDateTime()
}
// date and time finished here //

// <!-- Load library from the CDN -->
// <!-- Setup and start animation! -->
var typed = new Typed('#element', {
    strings: [
        'Dear Customer, <a href="">Click here</a> for UPI PayNow India Singapore Remittance.',
        'Kindly contact branch for doing NEFT/RTGS of Rs.5 crore and above.',
        'With effect from 01.10.2019 Bank has introduced Repo Linked Interest Rate(RLLR) for Home/Vehicle/Education/Clean loans.Borrowers may contact their Branch to switch over their existing loans under these schemes to RLLR.T and C apply.',
    ],
    typeSpeed: 30,
    backSpeed: 20,
    shuffle: true,
    backDelay: 4000,
    fadeout: true,
    fadeOutClass: 'typed-fade-out',
    fadeOutDelay: 3000,
    loop: true,
    cursorChar: ' ',
})
// typing animation ends here //

// popup box for balance starts here//
// Get the modal
var modal = document.getElementById('myModal')

// Get the button that opens the modal
var btn = document.getElementsByClassName('myBtn')

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0]

// When the user clicks the button, open the modal
btn.onclick = function () {
    modal.style.display = 'block'
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = 'none'
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none'
    }
}
// balance enquiry box///
function openModal() {
    displayBalance()
    document.getElementById('myModal').style.display = 'block'
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none'
}
//balance box//
function saveData() {
    var accountNumber = document.getElementById('accountNumber').value
    var availableBalance = document.getElementById('availableBalance').value
    var currentBalance = document.getElementById('currentBalance').value
    var monthlyAvgBalance = document.getElementById('monthlyAvgBalance').value

    // Store data in localStorage
    localStorage.setItem('accountNumber', accountNumber)
    localStorage.setItem('availableBalance', availableBalance)
    localStorage.setItem('currentBalance', currentBalance)
    localStorage.setItem('monthlyAvgBalance', monthlyAvgBalance)
}

// Function to display balance popup
function displayBalance() {
    // Retrieve data from localStorage
    var accountNumber = localStorage.getItem('accountNumber')
    var availableBalance = localStorage.getItem('availableBalance')
    var currentBalance = localStorage.getItem('currentBalance')
    var monthlyAvgBalance = localStorage.getItem('monthlyAvgBalance')

    // Update modal with retrieved data
    document.getElementById('accountNumberSpan').innerText = accountNumber
    document.getElementById('availableBalanceData').innerText = availableBalance
    document.getElementById('currentBalanceData').innerText = currentBalance
    document.getElementById('monthlyAvgBalanceData').innerText =
        monthlyAvgBalance

    // Display the modal
    var modal = document.getElementById('myModal')
    modal.style.display = 'block'
}

// Close the modal when the close button or outside of the modal is clicked
window.onclick = function (event) {
    var modal = document.getElementById('myModal')
    if (event.target == modal) {
        modal.style.display = 'none'
    }
}

//last few trans start here
// Get the modal
var modal1 = document.getElementById('myModal1')

// Get the button that opens the modal
var btn1 = document.getElementById('myBtn1')

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName('close1')[0]

// When the user clicks the button, open the modal
btn1.onclick = function () {
    modal1.style.display = 'block'
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function () {
    modal1.style.display = 'none'
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal1) {
        modal1.style.display = 'none'
    }
}
// Retrieve data from local storage
var storedData = JSON.parse(localStorage.getItem('transactionData')) || []
var tableBody = document.getElementById('transactionData')

// Loop through stored data and add rows to the table
storedData.forEach(function (data) {
    var newRow = tableBody.insertRow()
    var dateCell = newRow.insertCell(0)
    var narrationCell = newRow.insertCell(1)
    var drCrCell = newRow.insertCell(2)
    var amountCell = newRow.insertCell(3)

    dateCell.innerText = data.date
    narrationCell.innerText = data.narration
    drCrCell.innerText = data.drCr
    amountCell.innerText = data.amount
})
// last transaction box
function openModal1() {
    document.getElementById('myModal1').style.display = 'block'
}
function closeModal1() {
    document.getElementById('myModal1').style.display = 'none'
}
// last all few transaction ends //
// dropdown arrow0 starts here //
// Function to toggle dropdown visibility
function toggleDropdown() {
    var dropdownMenu = document.getElementById('dropdownMenu')
    dropdownMenu.classList.toggle('show')
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropdown-btn')) {
        var dropdowns = document.getElementsByClassName('dropdown-content')
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i]
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show')
            }
        }
    }
} // Close the dropdown if the user clicks outside of it ends here //
// dropdown arrow0 starts here //

// dropdown arrow1 starts here //
function toggleDropdown1() {
    var dropdownMenu1 = document.getElementById('dropdownMenu1')
    dropdownMenu1.classList.toggle('show1')
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropdown-btn1')) {
        var dropdowns1 = document.getElementsByClassName('dropdown-content1')
        for (var i = 0; i < dropdowns1.length; i++) {
            var openDropdown1 = dropdowns1[i]
            if (openDropdown1.classList.contains('show')) {
                openDropdown1.classList.remove('show')
            }
        }
    }
}
// dropdown arrow1 ends here //
// dropdown arrow2 starts here //
function toggleDropdown2() {
    var dropdownMenu2 = document.getElementById('dropdownMenu2')
    dropdownMenu2.classList.toggle('show2')
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropdown-btn2')) {
        var dropdowns2 = document.getElementsByClassName('dropdown-content2')
        for (var i = 0; i < dropdowns2.length; i++) {
            var openDropdown2 = dropdowns2[i]
            if (openDropdown2.classList.contains('show')) {
                openDropdown2.classList.remove('show')
            }
        }
    }
}
// dropdown arrow2 ends here //
// dropdown arrow3 starts here //
function toggleDropdown3() {
    var dropdownMenu3 = document.getElementById('dropdownMenu3')
    dropdownMenu3.classList.toggle('show3')
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropdown-btn3')) {
        var dropdowns3 = document.getElementsByClassName('dropdown-content3')
        for (var i = 0; i < dropdowns3.length; i++) {
            var openDropdown3 = dropdowns3[i]
            if (openDropdown3.classList.contains('show')) {
                openDropdown3.classList.remove('show')
            }
        }
    }
}
// dropdown arrow3 ends here //
// dropdown arrow4 starts here //
function toggleDropdown4() {
    var dropdownMenu4 = document.getElementById('dropdownMenu4')
    dropdownMenu4.classList.toggle('show4')
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropdown-btn4')) {
        var dropdowns4 = document.getElementsByClassName('dropdown-content4')
        for (var i = 0; i < dropdowns4.length; i++) {
            var openDropdown4 = dropdowns4[i]
            if (openDropdown4.classList.contains('show')) {
                openDropdown4.classList.remove('show')
            }
        }
    }
}
// dropdown arrow4 ends here //
// dropdown arrow5 starts here //
function toggleDropdown5() {
    var dropdownMenu5 = document.getElementById('dropdownMenu5')
    dropdownMenu5.classList.toggle('show5')
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropdown-btn1')) {
        var dropdowns5 = document.getElementsByClassName('dropdown-content1')
        for (var i = 0; i < dropdowns5.length; i++) {
            var openDropdown5 = dropdowns5[i]
            if (openDropdown5.classList.contains('show')) {
                openDropdown5.classList.remove('show')
            }
        }
    }
}
// dropdown arrow5 ends here //
// dropdown arrow6 starts here //
function toggleDropdown6() {
    var dropdownMenu6 = document.getElementById('dropdownMenu6')
    dropdownMenu6.classList.toggle('show6')
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropdown-btn6')) {
        var dropdowns6 = document.getElementsByClassName('dropdown-content1')
        for (var i = 0; i < dropdowns6.length; i++) {
            var openDropdown6 = dropdowns6[i]
            if (openDropdown6.classList.contains('show')) {
                openDropdown6.classList.remove('show')
            }
        }
    }
}
// dropdown arrow6 ends here //
// dropdown arrow7 starts here //
function toggleDropdown8() {
    var dropdownMenu8 = document.getElementById('dropdownMenu8')
    dropdownMenu8.classList.toggle('show8')
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropdown-btn8')) {
        var dropdowns8 = document.getElementsByClassName('dropdown-content8')
        for (var i = 0; i < dropdowns8.length; i++) {
            var openDropdown8 = dropdowns8[i]
            if (openDropdown8.classList.contains('show')) {
                openDropdown8.classList.remove('show')
            }
        }
    }
}
// dropdown arrow7 ends here //
//// dropdown all menu ends here ////

// for account number of transaction box //
document.addEventListener('DOMContentLoaded', function () {
    var accountNumber = localStorage.getItem('accountNumber')
    if (accountNumber) {
        document.getElementById('popupAccountNumber').textContent =
            accountNumber
    }
})
// account number of transaction box ends here//

// for 2 warning boxes///
let warning = document.getElementById('warning-box1')
warning.addEventListener('click', () => {
    warning.style.display = 'none'
})
let warning1 = document.getElementById('warning-box2')
warning1.addEventListener('click', () => {
    warning1.style.display = 'none'
})
// for 2 warning boxes ends here //
// logout box //
document.getElementById('logout-btn').addEventListener('click', function () {
    // Perform logout action here
    // For example, redirect to logout page or clear session storage
    // Example: window.location.href = "logout.php";

    // Clear session storage upon logout
    sessionStorage.clear()

    // Redirect to the login success page
    window.location.href =
        'http://127.0.0.1:5500/My%20Web%20Sites/www.iobnet.co.in/ibanking/loginsuccess.html'

    // Replace the current page in the browser history with the login success page
    window.history.replaceState({}, '', '')
})

// Listen for the popstate event (triggered when the user navigates through history)
// window.addEventListener('popstate', function(event) {
//   // Check if the user is trying to navigate back after logout
//   if (!sessionStorage.getItem('loggedIn')) {
//     // If not logged in, redirect to an empty page or homepage
//     window.location.href = "http://127.0.0.1:5500/My%20Web%20Sites/www.iobnet.co.in/ibanking/empty.html";
//   }
// });

//prevent user from right click for inspect
document.addEventListener('contextmenu', function (e) {
    e.preventDefault() // Prevent the context menu from appearing
    alert("Right-click is disabled. You cannot use 'Inspect' here.") // Display the alert message
})

// Disable certain keyboard shortcuts for opening developer tools
document.addEventListener('keydown', function (e) {
    // F12 key
    if (e.key === 'F12') {
        e.preventDefault()
        alert('Opening Developer Tools is disabled.')
    }

    // Ctrl+Shift+I (for Chrome/Edge Inspect)
    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault()
        alert('Opening Developer Tools is disabled.')
    }

    // Ctrl+Shift+J (for Chrome/Edge Console)
    if (e.ctrlKey && e.shiftKey && e.key === 'J') {
        e.preventDefault()
        alert('Opening Developer Tools is disabled.')
    }

    // Ctrl+U (for viewing page source)
    if (e.ctrlKey && e.key === 'U') {
        e.preventDefault()
        alert('Viewing page source is disabled.')
    }

    // Ctrl+Shift+C (for inspecting element using DevTools)
    if (e.ctrlKey && e.shiftKey && e.key === 'C') {
        e.preventDefault()
        alert('Inspect Element is disabled.')
    }
})

// Set a timer for 2 minutes (120,000 milliseconds)
setTimeout(function () {
    // Redirect to the session timeout page
    window.location.href = './assets/Timeout.html'
}, 120000) // 120000 milliseconds = 2 minutes
