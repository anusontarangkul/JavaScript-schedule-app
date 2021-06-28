
const businessHours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

$(document).ready(function () {
    let time = moment().format("dddd, MMMM Do YYYY");
    $("#currentDay").text(time);

    for (let i = 0; i < businessHours.length; i++) {
        let row = $("<div class='row'></div");
        let hour = $("<div class='hour col-1'></div").text(businessHours[i]);
        let save = $("<div class='saveBtn col-1'><i class='fas fa-save'></i></div");
        let text = $("<div class='description col-10'></div").text("desc");
        $(".container").append(row);
        row.append(hour);
        row.append(text);
        row.append(save);

    }
});