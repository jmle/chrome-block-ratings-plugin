var hasProfessionalRatings = document.getElementsByClassName("wikitable infobox")[0].innerHTML.includes("Professional ratings");

if (hasProfessionalRatings) {
    var professionalRatingsTable = document.getElementsByClassName("wikitable infobox")[0];
    professionalRatingsTable.parentElement.removeChild(professionalRatingsTable);
}