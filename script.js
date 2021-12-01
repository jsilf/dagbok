console.log("hello world");

//skapa variabler för rubrik, datum, inlägg, knapp
let textTitle = document.getElementById("textTitle");
let textDate = document.getElementById("textDate");
let textEntry = document.getElementById("textEntry");
let saveBtn = document.getElementById("saveBtn");
let diaryContent = document.getElementById("diaryContent");

//funktion för att skapa dagboksinlägget vi fyllt i
function getEntry(textTitle, textDate, textEntry) {
    let entry = document.createElement("article");

    //skapa variabel och ett element för titel
    let saveTitle = document.createElement("h4");
    saveTitle.innerText = "Titel: " + textTitle.value;
    entry.append(saveTitle);

    localStorage.setItem("title", saveTitle);
    let lsTitle = localStorage.getItem("title");
    console.log(lsTitle);

    //skapa variabel och ett element för datumet
    let saveDate = document.createElement("p");
    saveDate.innerText = "Datum: " + textDate.value;
    entry.append(saveDate);

    localStorage.setItem("date", saveDate);
    let lsDate = localStorage.getItem("date");
    console.log(lsDate);

    //skapa variabel och ett element för texten
    let saveEntry = document.createElement("p");
    saveEntry.innerText = textEntry.value;
    entry.append(saveEntry);

    localStorage.setItem("text", saveEntry);
    let lsEntry = localStorage.getItem("text");
    console.log(lsEntry);

    document.body.append(entry);
}

//skapa clickfunktion till knapp för att spara inlägget
saveBtn.addEventListener("click", (evt) => {
    evt.preventDefault();

    getEntry(textTitle, textDate, textEntry);

    // if (value) {
    //     localStorage.setItem("namn", value);
    //     location.reload();
    // }

    document.getElementById("textEntry").value = "";
    document.getElementById("textTitle").value = "";
});

// for (let i = 0; i < localStorage.length; i++) {

//     const namn = localStorage.key(i);
//     const value = localStorage.getItem(namn);

//     //visa värdet jag skriver i input
//     myName.innerHTML += `${value}`;

//     //visa radera-knapp
//     document.body.append(removeBtn);

//     //ta bort värdet
//     removeBtn.addEventListener("click", () => {
//         removeBtn.remove();
//         localStorage.removeItem(namn);
//         myName.innerHTML = "";
//     });