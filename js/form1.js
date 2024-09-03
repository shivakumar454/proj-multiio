// document.getElementById('book').style.display = 'none';

document.addEventListener('DOMContentLoaded', (event) => {
    // Hide the book form when the page reloads

    window.book = function () {
        document.getElementById('book').style.display = 'block';
    };

    window.closeForm = function () {
        document.getElementById('book').style.display = 'none';
        window.location.href = "../index.html"
        
    };
    window.closeFor = function () {
        document.getElementById('book').style.display = 'none';
        var box = document.getElementsByClassName("final_down")[0];
        box.style.display = "block";
    };

    window.finalBook = function (event) {
        event.preventDefault();
        const fname = document.getElementById('fname').value;
        const lname = document.getElementById('lname').value;
        const pno = document.getElementById('pno').value;
        const age = document.getElementById('age').value;
        const eve = document.getElementById('eve').value;
        const day = document.getElementById('day').value;
        const slot = document.querySelector('input[name="slot"]:checked').value;
        const booking = {
            firstName: fname,
            lastName: lname,
            phoneNumber: pno,
            age: age,
            event: eve,
            day: day,
            timeSlot: slot
        };
        let bookings = localStorage.getItem('bookings');
        if (bookings) {
            bookings = JSON.parse(bookings);
        } else {
            bookings = [];
        }
        bookings.push(booking);
        localStorage.setItem('bookings', JSON.stringify(bookings));
        alert('Booking successful!');
        closeFor();
    };
});

function booking_close() {
    document.getElementsByClassName("final_down")[0].style.display = "none";
    window.location.href = "../index.html"
}
var x = JSON.parse(localStorage.getItem('bookings'))[0];
console.log(x);
document.getElementById("fl_name").innerHTML = x['firstName'] + " " + x['lastName'];
document.getElementById("Phone_no").innerHTML = x['phoneNumber'];
document.getElementById("age_20").innerHTML = x['age'];
document.getElementById("Event_20").innerHTML = x['event'];
document.getElementById("day_20").innerHTML = x['day'];
document.getElementById("slot_timing").innerHTML = x["timeSlot"];
// localStorage.clear()
// localStorage.removeItem()

// booking_close()
document.getElementById('download').addEventListener('click', () => {
    const element = document.querySelector('.final_down');
    html2pdf().from(element).save('Booking.pdf');
    booking_close()
});