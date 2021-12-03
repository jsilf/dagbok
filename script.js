//skapa variabler för rubrik, datum, inlägg, knapp
let textTitle = document.getElementById("textTitle");
let textDate = document.getElementById("textDate");
let textEntry = document.getElementById("textEntry");
let saveBtn = document.getElementById("saveBtn");
let entries = document.getElementById("entries");

//anropa funktionen att rendera mina inlägg
renderEntry();

//function för att lägga till värdet av mina inlägg, på sidan och i
function addEntry() {

    //objekt för värden
    let newPost = {
        title: textTitle.value,
        date: textDate.value,
        text: textEntry.value
    };
    //hämta mitt objekt från localstorage med key "posts"
    let collectedPosts = localStorage.getItem("posts");

    //om min variabel collectedPosts är sann, översätt den till en sträng
    if (collectedPosts) {
        collectedPosts = JSON.parse(collectedPosts);
    } else { //annars en array
        collectedPosts = [];
    }
    //pusha mina nya inlägg till mitt objekt
    collectedPosts.push(newPost);

    //spara mina inlägg med key "posts" som vi satte där uppe, gör mitt samlade objekt till en sträng med JSON så localstorage fattar vad jag vill spara
    localStorage.setItem("posts", JSON.stringify(collectedPosts));

    //rendera om allting genom att anropa funktionen igen
    renderEntry();
}

function renderEntry() {
    //töm innehållet innan allt renderas för att det inte ska bli dubbelt
    entries.innerHTML = "";

    //hämta mina inlägg från localstorage
    let posts = localStorage.getItem("posts");
    //ändra mina inlägg
    if (posts) {
        posts = JSON.parse(posts);
    }
    //sortera efter datum med sort funktion
    posts.sort(function (a, b) {
        return new Date(b.date) - new Date(a.date);
    });

    posts.forEach((post) => {
        //skapa article att lägga mitt inlägg i
        let entry = document.createElement("article");
        entry.style.margin = "50px";

        //skapa variabel och ett element för titel
        let saveTitle = document.createElement("h4");
        saveTitle.innerText = post.title;

        //skapa variabel och ett element för datum
        let saveDate = document.createElement("h5");
        saveDate.innerText = post.date;

        //skapa variabel och ett element för text
        let saveEntry = document.createElement("p");
        saveEntry.innerText = post.text;

        //bifoga dessa till article entry
        entry.append(saveTitle, saveDate, saveEntry);

        //bifoga min article till div i HTML
        entries.append(entry);
    });
}

//vid klick, rendera inlägg och spara i localstorage
saveBtn.addEventListener("click", (evt) => {
    evt.preventDefault();
    //anropa funktionerna vid klick
    renderEntry();
    addEntry(textTitle, textDate, textEntry);

    //töm inputfälten när du klickat på knappen
    document.getElementById("textTitle").value = "";
    document.getElementById("textDate").value = "";
    document.getElementById("textEntry").value = "";
});