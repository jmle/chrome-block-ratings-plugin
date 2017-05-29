var professionalRatingsTable = document.getElementsByClassName("wikitable infobox")[0];

var hasProfessionalRatings = professionalRatingsTable.innerHTML.includes("Professional ratings");
if (hasProfessionalRatings) {
    professionalRatingsTable.parentElement.removeChild(professionalRatingsTable);
}
