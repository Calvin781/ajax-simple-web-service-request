let target = document.getElementById('quote');

getQuotes();
document.getElementById('change').addEventListener('click', () => {
    location.reload()
})

async function getQuotes() {

    {
        let quotesPromise = await fetch('https://thatsthespir.it/api');
        let quotes = await quotesPromise.json();

        let template = document.getElementById('quoteTemplate').content;
        let quoteText = document.importNode(template, true);
        try {
            quoteText.querySelector(".text").innerHTML = quotes.quote;
            if (quotes.photo !== "") {
                quoteText.querySelector(".img").src = quotes.photo;
            } else {
                quoteText.querySelector(".img").src = "https://lh3.googleusercontent.com/proxy/iqtiD4HhefhPnwtrIHyuuswv9_5csAkq9mrJnBockltWsVLCEGeQyO1XTsMMri1yO_bOA4VWlpPJw6jkyjYM67y_osaoh3UF5DJ_aZsunw"
            }
            quoteText.querySelector(".author").textContent = ` - ${quotes.author}`;
            target.appendChild(quoteText);
        } catch (error) {
            console.log(error);
        }
    
    }

}
