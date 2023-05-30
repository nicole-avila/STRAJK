# Strajk bowling

## Bakgrund

Strajk bowling är en nyöppnad bowlinghall i centrala Bromölla. Ägaren K. Ägla gillar tekniska lösningar och har tillsammans med brorsonen Keso Ägla byggt denna webbapp.
Herr Ägla är väldigt nöjd med appen men vill försäkra sig om att den är fortsatt stabil när ny funktionalitet läggs till framöver. Uppdraget är att skriva E2E-tester i Cypress som sen kan köras för att testa av all funktionalitet som finns.

## User stories + Acceptanskriterier

##### Som användare vill jag kunna boka datum och tid samt ange antal spelare så att jag kan reservera 1 eller flera banor i bowlinghallen.
 - Det bör finnas inmatningsfält på bokningssidan.
 - Det bör finnas datum och tid i boknings sidan. 
 - Det bör finnas ett fält där man kan välja antal spelare och banor.
 - Man bör kunna göra en fullständig bokning.

 - Felhantering: Om ett fält missas att fyllas i så ska en ruta dyka upp för att informera användaren att ett fält har missats att fyllas i.
 - Felhantering: Om användare missar att fylla i samtliga fält bör en Error Text visas för att informera användaren att fylla alla fält. 
 - Felhantering: Bör visas ett feltextmeddelande om användaren missar att fylla i TIDsinmatningen.
 - Felhantering: Bör visas ett feltextmeddelande om användaren missar att fylla i DATUMinmatningen. 
 - Felhantering: Bör visas ett feltextmeddelande om användaren missar att fylla i ANTAL SPELARE.
  - Felhantering: Bör visas ett feltextmeddelande om användaren missar att fylla i ANTAL BANOR.


##### Som användare vill jag kunna välja skostorlek för varje spelare så varje spelare får skor som passar.
 - Det ska gå att lägga till skor, med en klickbar knapp.
 - Det ska finnas ett fält för att kunna fylla i sko storlek.
 - Det ska vara möjligt att lägg till x antal skor med sko storlek.


##### Som användare vill jag kunna ta bort ett fält för skostorlek om jag råkade klicka i ett för mycket så jag inte boka skor i onödan.
 - Vid varje fält ska det finnas en klickbar knapp för att ta bort fältet.
 - Det ska vara möjligt att ta bort x antal fält med skor man har lagt til.

 - Felhantering: Det ska informeras till kunden när användaren missar att lägga till ett par skor.
 - Felhantering: Det ska informeras till kunden när användaren lägger till en för mycket av ett par skor.
 - Felhantering: Om kunden missar lägga till antal skor utefter antal spelare så ska det komma fram ett felmedelande medelande. 



##### Som användare vill jag kunna skicka iväg min reservation och få tillbaka ett ett bokningsnummer och totalsumma så jag vet hur mycket jag ska betala. (120 kr / person + 100 kr / bana).
 - Ska navigeras till en bekräftelsesida efter en bokning.
 - I bekräftelsesidan ska det finnas när, hur många och antal banor samt ett boknings nummer.
 - Priset bör stämma överens med antal spelare och banor.
 - I bekräftelsesidan ska samtliga input fält ska ha värdet "disabled".
 - Bokningsfältet ska innehålla siffror och bokstäver..



##### Som användare vill jag kunna navigera mellan boknings-och bekräftelsevyn.
 - Man ska kunna navigeras runt i webbsidan.
 - URL:en ska stämma överens med vilken sidan användaren befinner sig i.
 - Bokningen bör tas bort efter att man klickat på bekräftelseknappen och navigeras till slut-sidan.
