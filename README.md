# Strajk bowling

## Bakgrund

Strajk bowling är en nyöppnad bowlinghall i centrala Bromölla. Ägaren K. Ägla gillar tekniska lösningar och har tillsammans med brorsonen Keso Ägla byggt denna webbapp.
Herr Ägla är väldigt nöjd med appen men vill försäkra sig om att den är fortsatt stabil när ny funktionalitet läggs till framöver. Ditt uppdrag är att skriva E2E-tester i Cypress som sen kan köras för att testa av all funktionalitet som finns.

## User stories

Som användare vill jag kunna boka datum och tid samt ange antal spelare så att jag kan reservera 1 eller flera baner i bowlinghallen.

Som användare vill jag kunna välja skostorlek för varje spelare så varje spelare får skor som passar.

Som användare vill jag kunna ta bort ett fält för skostorlek om jag råkade klicka i ett för mycket så jag inte boka skor i onödan.

Som användare vill jag kunna skicka iväg min reservation och få tillbaka ett ett bokningsnummer och totalsumma så jag vet hur mycket jag ska betala. (120 kr / person + 100 kr / bana).

Som användare vill jag kunna navigera mellan boknings-och bekräftelsevyn.

## Betygskriterier

**Får godkänt ska du:**
* Gjort acceptanskriterier till varje user story som sedan blir testfall i Cypress. (Hur många acceptanskriterier till varje story är svårt att säga utan det gäller att hitta en bra balans, diskutera gärna med mig här). Du kan skriva acceptanskriterierna i README:n för ditt Githubrepo.
* Gjort tester i Cypress för alla user stories som går grönt när man kör dessa.
* Alla tester finns representerade i acceptanskriterierna.

**Får Väl Godkänt ska du:**
* Har gjort acceptanskriterier samt tester för felhantering (exempelvis går inte att lägga en beställning om inte alla fält är ifyllda).

## Inlämning

Lämna in länk till Githubrepo med koden och samt alla cypresstester och acceptanskriterier senast **fredagen 2/6 kl 23:59**.
