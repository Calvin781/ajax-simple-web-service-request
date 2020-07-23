let target = document.getElementById('quote');
getQuotes();

async function getQuotes() {
    {
        let quotesPromise = await fetch('https://thatsthespir.it/api');
        let quotes = await quotesPromise.json();
        let template = document.getElementById('quoteTemplate').content;
        let quoteText = document.importNode(template, true);

        try {
            quoteText.querySelector(".text").innerHTML = quotes.quote;
            if (!quotes.photo.ok && quotes.photo !== "") {
                quoteText.querySelector(".img").src = quotes.photo;
            }
            else {
                quoteText.querySelector(".img").src = "img/inconnu.jpg"
            }
            quoteText.querySelector(".author").textContent = ` - ${quotes.author}`;
            target.appendChild(quoteText);
            document.querySelector(".img").onerror = function () {
                target.querySelector(".img").src = "img/inconnu.jpg"
            };
        } catch (error) {
            console.log(error);
        }
    }
}

