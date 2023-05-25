# Strajk bowling

## Bakgrund

Strajk bowling är en nyöppnad bowlinghall i centrala Bromölla. Ägaren K. Ägla gillar tekniska lösningar och har tillsammans med brorsonen Keso Ägla byggt denna webbapp.
Herr Ägla är väldigt nöjd med appen men vill försäkra sig om att den är fortsatt stabil när ny funktionalitet läggs till framöver. Uppdraget är att skriva E2E-tester i Cypress som sen kan köras för att testa av all funktionalitet som finns.

## User stories + Acceptanskriterier

##### Som användare vill jag kunna boka datum och tid samt ange antal spelare så att jag kan reservera 1 eller flera banor i bowlinghallen.
 - Det ska finnas datum och tid i boknings sidan. 
 - Det ska finnas ett fält där man kan välja antal spelare och banor.
 - Man ska kunna göra en fullständig bokning.
 - Felhantering: Om ett fält missas att fyllas i så ska en ruta dyka upp för att informera användaren att ett fält har missats att fyllas i.
 - Felhantering: Användare uppmanas att fylla i ett fält om samtliga fält INTE är i fyllda.

##### Som användare vill jag kunna välja skostorlek för varje spelare så varje spelare får skor som passar.
 - Det ska gå att lägga till skor, med en klickbar knapp.
 - Det ska finnas ett fält för att kunna fylla i sko storlek.
 - Det ska vara möjligt att lägg till x antal skor med sko storlek.
 - Felhantering:  Det ska uppmanas av användaren när antal skor inte stämmer överens med antal spelare.

##### Som användare vill jag kunna ta bort ett fält för skostorlek om jag råkade klicka i ett för mycket så jag inte boka skor i onödan.
 - Det ska vara möjligt att ta bort x antal fält med skor man har lagt til.
 - Vid varje fält ska det finnas en klickbar knapp för att ta bort fältet.
 - Felhantering: Användaren ska uppmanas när antal spelare och antal skor inte stämmer överens med varandra.

##### Som användare vill jag kunna skicka iväg min reservation och få tillbaka ett ett bokningsnummer och totalsumma så jag vet hur mycket jag ska betala. (120 kr / person + 100 kr / bana).
 - Ska navigeras till en bekräftelsesida efter en bokning.
 - I bekräftelsesidan ska det finnas när, hur många och antal banor samt ett boknings nummer.
 - Priset stämmer överens med antal spelare och banor.
 - Datum, tid, antal spelare och banor ska följas med till bekräftelse sidan.
 - I bekräftelsesidan ska samtliga input fält ska vara disabled.
 - Boknings fältet bör innehålla minst 10 karaktärer.

##### Som användare vill jag kunna navigera mellan boknings-och bekräftelsevyn.
 - Man ska kunna navigeras runt i webbsidan.
 - URL:en ska stämma överens med vilken sidan användaren befinner sig i.
 - Bokningen bör tas bort efter att man klickat på bekräftelseknappen och navigeras till slut-sidan ( to .../confirmation? ).
