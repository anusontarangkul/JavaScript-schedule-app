# Schedule App

This app allows you to ask plans to your schedule. The tasks can be saved to local storage and the tasks get loaded for local storage on opening.

A mockup for this app was given below to recreate.

![mockup](./mockup.gif)

## Table of Contents

|                                         |                                                               |                                                   |
| :-------------------------------------: | :-----------------------------------------------------------: | :-----------------------------------------------: |
|      [Introduction](#schedule-app)      |            [Table of Contents](#table-of-contents)            | [Development Highlights](#development-highlights) |
|         [Deployment](#deployed)         | [Description of Page Building](#Description-of-Page-Building) |       [Code Hightlights](#code-highlights)        |
| [Technologies Used](#Technologies-Used) |                      [Credits](#Credits)                      |                [License](#License)                |

## Development Highlight

- Use third party libraries (jQuery, bootstrap, momentJS)
- Save and load planner to local storage
- Used momentJS to compare current time to the time in scheduler.
- Used "this" keyword in jQuery to find value to save.

## Deployment

[Deployment](https://anusontarangkul.github.io/schedule-app/)

This app is deployed using GitHub pages.

## Description of Page Building

- .gitignore
- app.js
- index.html
- LICENSE
- README.md
- styles.css
- gif.gif

A simple file structure was used for this app with all the files being under one directory.

## Code Highlights

Add an on click event listener to the class "saveBtn" in jQuery. The "this" keyword was used to reference for the current div. We move up one parent div and down to the other child div for the classes "description" and "time" to get their values to save to local storage.

```JavaScript
$(".saveBtn").click(function () {
    // get value by going up to parent and down a children
    let savedValue = $(this).parent().children('.description').val().trim();
    let savedTime = $(this).parent().children(".hour").text();

    // save value to local storage
    $(this).parent().children('.description').val("");
    localStorage.setItem(savedTime, savedValue)

    })
```

Compare the time of each hour to the current moment() time. A class is added to each div depending if the time is the same hour, before, or after.

```JavaScript
function updateColor() {
    for (let i = 0; i < businessHours.length; i++) {
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
```

## Technologies Used

### Languages

- [HTML](https://www.w3schools.com/html/)
- [JavaScript](https://www.javascript.com/)
- [CSS](https://www.w3schools.com/css/)

### Design Libraries

- [Bootstrap](https://getbootstrap.com/)
- [Font-Awesome](https://fontawesome.com/)
- [Google-Fonts](https://fonts.google.com/)

### JavaScript Libraries

- [Moment.js](https://momentjs.com/)
- [jQuery](https://jquery.com/)

## Credits

|                           |                                                                                                                                                                                                       |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **David Anusontarangkul** | [![Linkedin](https://i.stack.imgur.com/gVE0j.png) LinkedIn](https://www.linkedin.com/in/anusontarangkul/) [![GitHub](https://i.stack.imgur.com/tskMh.png) GitHub](https://github.com/anusontarangkul) |

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
