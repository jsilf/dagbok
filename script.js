console.log("hello world");

//skapa variabler för rubrik, datum, inlägg, knapp
let textTitle = document.getElementById("textTitle");
let textDate = document.getElementById("textDate");
let textEntry = document.getElementById("textEntry");
let saveBtn = document.getElementById("saveBtn");
let entries = document.getElementById("entries");

//funktion för att skapa dagboksinlägget vi fyllt i
function getEntry(textTitle, textDate, textEntry) {
    let entry = document.createElement("article");

    //skapa variabel och ett element för titel
    let saveTitle = document.createElement("h4");
    saveTitle.innerText = textTitle.value;
    entry.append(saveTitle);

    const storedTitle = localStorage.getItem("title");

    if (textTitle) {
        saveTitle.value = storedTitle;
    }

    //skapa variabel och ett element för datumet
    let saveDate = document.createElement("h5");
    saveDate.innerText = textDate.value;
    entry.append(saveDate);

    //skapa variabel och ett element för texten
    let saveEntry = document.createElement("p");
    saveEntry.innerText = textEntry.value;
    entry.append(saveEntry);

    document.body.append(entry);
}

//skapa clickfunktion till knapp för att spara inlägget
saveBtn.addEventListener("click", (evt) => {
    evt.preventDefault();

    getEntry(textTitle, textDate, textEntry);
    setLs();

    document.getElementById("textEntry").value = "";
    document.getElementById("textDate").value = "";
    document.getElementById("textTitle").value = "";
});

const setLs = () => {
    localStorage.setItem("title", textTitle.value);
    localStorage.setItem("date", textDate.value);
    localStorage.setItem("text", textEntry.value);
};
