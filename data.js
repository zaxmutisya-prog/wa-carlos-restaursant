// Pathfinder: Web Creator. Your own idea: your data.
// This data is made up for this course.
// Day 6: write over the 8 example records below with 8 to 12 made-up records about your idea.
// Every record has the same three fields:
//   name      what the thing is called, in quotes
//   category  the group it belongs to, in quotes; your Day 6 filter uses it
//   amount    one number, with no quotes; you choose what it means (a price in KSh, minutes, pages)
// Keep the three field names exactly as they are, so the code on the course pages works for you.
// Never put anyone's real name or details in this file.

const menu = [
    {
        name: "Chicken",
        category: "Main course",
        price: 500
    },
    {
        name: "Beef",
        category: "Main course",
        price: 600
    },
    {
        name: "Chips",
        category: "Snacks",
        price: 200
    },
    {
        name: "Soda",
        category: "Drinks",
        price: 100
    },
    {
        name: "Fresh Juice",
        category: "Drinks",
        price: 150
    }
];

// Facts that are true of your file (rewrite these on Day 6 so your mentor can check your conclusions):
// 8 records. 3 are "Group A", 3 are "Group B", 2 are "Group C". 1 record has amount 0.
// Empty case: no record has an amount over 100, so a filter for record.amount > 100 gives an empty list.

// Practice data for the labs on Days 6 to 8. Do not change it.
// Pathfinder: Web Creator practice data. MADE UP FOR THIS COURSE.
// These clubs, venues, days and prices are invented for practice.
// What this data cannot tell you: anything about real clubs, real prices or real places.

const clubs = [
  { name: "Chess Club",          day: "Monday",    ageGroup: "13-15", costKsh: 0,    spacesLeft: 6,  venue: "Library" },
  { name: "Robotics Lab",        day: "Monday",    ageGroup: "13-15", costKsh: 1500, spacesLeft: 2,  venue: "Science Room" },
  { name: "Junior Football",     day: "Tuesday",   ageGroup: "10-12", costKsh: 500,  spacesLeft: 10, venue: "Main Field" },
  { name: "Drama Group",         day: "Tuesday",   ageGroup: "13-15", costKsh: 0,    spacesLeft: 0,  venue: "Hall" },
  { name: "Coding Club",         day: "Wednesday", ageGroup: "13-15", costKsh: 1000, spacesLeft: 4,  venue: "Computer Room" },
  { name: "Art Studio",          day: "Wednesday", ageGroup: "10-12", costKsh: 800,  spacesLeft: 7,  venue: "Art Room" },
  { name: "Debate Society",      day: "Thursday",  ageGroup: "16-18", costKsh: 0,    spacesLeft: 12, venue: "Room 4" },
  { name: "Swimming",            day: "Thursday",  ageGroup: "10-12", costKsh: 1200, spacesLeft: 3,  venue: "Pool" },
  { name: "Music Band",          day: "Friday",    ageGroup: "13-15", costKsh: 600,  spacesLeft: 5,  venue: "Music Room" },
  { name: "Photography Walk",    day: "Friday",    ageGroup: "13-15", costKsh: 300,  spacesLeft: 8,  venue: "Meet at Gate" },
  { name: "Senior Basketball",   day: "Saturday",  ageGroup: "16-18", costKsh: 400,  spacesLeft: 1,  venue: "Court" },
  { name: "Maths Challenge",     day: "Saturday",  ageGroup: "10-12", costKsh: 0,    spacesLeft: 9,  venue: "Room 2" }
];

// Facts that are true of this file (use them to check your conclusions):
// 12 clubs. 4 are free (costKsh is 0). 6 are for ages 13-15. 1 club has no spaces left (Drama Group).
// No club for ages 16-18 runs on Friday, so a filter for that gives an empty list.
