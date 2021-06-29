
const businessHours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];


$(document).ready(function () {

    // display current time to header
    let time = moment().format("dddd, MMMM Do YYYY");
    $("#currentDay").text(time);

    // create row/cols for each time
    for (let i = 0; i < businessHours.length; i++) {
        let row = $("<div class='row'></div>");
        let hour = $("<div class='hour col-1'></div>").text(businessHours[i]);
        let save = $("<div class='saveBtn col-1'><i class='fas fa-save'></i></div>");
        let text = $(`<textarea class='description col-10' id='${businessHours[i]}'></textarea>`);
        $(".container").append(row);
        row.append(hour);
        row.append(text);
        row.append(save);

    }

    // update color based on time
    updateColor();
    setInterval(updateColor, 60000 * 60)

    // Add class for color depending on time
    function updateColor() {
        for (let i = 0; i < businessHours.length; i++) {
            // console.log(moment(businessHours[i], "H A"))
            let currentHour = moment(businessHours[i], "H A")
            if (moment().isSame(currentHour, 'hour')) {
                $(`#${businessHours[i]}`).addClass("present")
            } else if (moment().isAfter(currentHour, 'hour')) {
                $(`#${businessHours[i]}`).addClass("past")
            } else if (moment().isBefore(currentHour, 'hour')) {
                $(`#${businessHours[i]}`).addClass("future")
            }
        }
    }

    $(".saveBtn").click(function () {
        let savedValue = $(this).parent().children('.description').val().trim();
        let savedTime = $(this).parent().children(".hour").text();

        if (savedValue !== "") {
            $(this).parent().children('.description').val("");
            localStorage.setItem(savedTime, savedValue)

        }

    })
})