
const businessHours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

var startTime = moment('9AM', "H a");
console.log(startTime)



$(document).ready(function () {
    let time = moment().format("dddd, MMMM Do YYYY");
    $("#currentDay").text(time);

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

    // $(`#${businessHours[0]}`).addClass("past")
    updateColor();



    const dateIsAfter = startTime.isAfter(moment('2014-03-24T01:14:00.000Z'));
    // console.log(dateIsAfter)
    var sixThirty = moment('1PM', "H a");

    console.log(moment().isAfter(sixThirty));
});


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