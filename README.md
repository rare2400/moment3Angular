# Moment 3 - Angular

Detta är en simpel webbapplikation med en konverteringsfunktion och är utvecklad med [Angular CLI](https://github.com/angular/angular-cli) version 19.2.10. Användaren skriver in ett tal och väljer mellan vilka enheter den vill konvertera – temperatur (Celsius ↔ Fahrenheit) och längd (Meter ↔ Fot). Fokus i uppgiften ligger på Angulars funktionalitet med komponentstruktur, routing och databindning.


## Användning av projektet
1. Klona repo
```bash
git clone https://github.com/rare2400/moment3Angular.git
cd moment3Angular
```

3. Installera paket
```bash
npm install
```

4. Starta utvecklingsserver
```bash
ng serve
```
4. Öppna `http://localhost:4200/` i webbläsaren

5. Bygg färdigt projekt
```bash
ng build
```
## Funktionalitet
- Konvertera mellan:
  - Celsius ↔ Fahrenheit
  - Meter ↔ Fot
- Responsiv design
- Angular router sköter navigering
- Databindning mellan formulär och TypeScript
- Bild visas via databindning på startsidan

## Verktyg
- **Angular**: Skapar en modulär webbapplikation
- **TypeScript**: Logiken bakom konverteringarna
- **HTML/CSS**: För att bygga och styla responsiv webbplats
- **Git**: Versionshantering av koden

## Struktur
| Mapp/fil                 | Beskrivning                                          |
| -----------------------  | -----------------------------------------------------|
| `src/app/about`          | Sida som beskriver arbetsprocessen                   |
| `src/app/converter`      | Komponent med konverteringslogik och formulär        |
| `src/app/home`           | Startsida med bild och länkar till övriga sidor      |
| `src/app/partials/footer`| Footer-komponent med sidfot                          |
| `src/app/partials/header`| Header-komponent med navigeringsmeny                 |
| `src/app/app.routes.ts`  | Routing för undersidorna                             |
| `src/styles.css`         | Gemensam styling för hela webbplatsen/applikationen  |

## Reflektioner
Denna uppgift har varit ett bra sätt att lära sig om Angular, särskilt vad gäller strukturering av komponenter, routing och databindning. Jag har också fått en bättre känsla för hur en applikation kan delas upp i återanvändbara delar samt hur viktigt det är med bra grundstruktur och styling från start.

## Skapad av
Uppgift i kursen programmering i TypeScript     
Webbutveklingsprogrammet, Mittuniversitetet     
Ramona Reinholdz     
[rare2400@student.miun.se](rare2400@student.miun.se)
