Steg 1: I App.js: Fjern header taggen og alt inni den (linje 7 til og med 20). 

Steg 2: Flytt kanye.png, stage.png og dj.png inn i public folderen din. 

Steg 3: Legg til en img tag med src='kanye.png' i returverdien til App() i app.js. Bildet vil nå vises i appen din

Steg 4: Under img taggen, legg til en button tag som kjører "() => alert("click!")" på onClick og har "Click me!" som tekstinnhold. Nå har du en klikkbar knapp i appen din, men vi vil gjerne at dette skal se litt bedre ut. 

Steg 5: Nå vil vi gjøre koden klar for å motta litt styling. Lag en div tag rundt img taggen med className='kanye'. Lag deretter enda en div tag rundt den forrige div taggen OG Button taggen med classname='Content'.
returverdien til App skal nå se slik ut:

        <div className="App">
          <div className='Content' >
            <div className={"kanye"}>
              <img src={'kanye.png'} />
            </div>
            <button onClick={() => alert('Click!')}>Click me!</button>
          </div>
        </div>
    

Steg 6: Fjern alt innhold i App.css filen. Legg til følgende css i filen: 

    .App {
      align-items: center;
      display: flex;
      flex-direction: column;
      width: 100%;
    }

    .Content {
      width: 100%;
      max-width: 500px;
      min-height: 800px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      align-items: center;
      justify-content: flex-end;
    }

    .Button {
      width: fit-content;
    }

    img {
      max-width: 100%;
    }

    .header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background-color: white;
        z-index: 10;
    }

    .kanye {
      position: relative;
      transform: translateY(-100px);
    }

    .kanye::before {
      content: "";
      width: 100vw;
      height: 800px;
      transform: translateX(calc(-50vw + 250px));
      background-image: url("/public/stage.jpg");
      background-repeat: no-repeat;
      background-position: bottom;
      background-size: cover;
      position: absolute;
      bottom: -100px;
      left: 0;
    }

    .kanye::after {
      content: "";
      width: 580px;
      height: 500px;
      background-image: url("/public/dj.png");
      background-repeat: no-repeat;
      background-position: bottom;
      background-size: contain;
      position: absolute;
      bottom: -50px;
      left: 0;
    }

    .kanye img {
      transform: translateY(-50px);
    }

    .Bounce {
      animation: bounce 500ms ease-out 0ms infinite;
    }

    @keyframes bounce {
      0% {transform: translateY(-50px);}
      50% {transform: translateY(-100px);}
      100% {transform: translateY(-50px);}
    }
    


Koden din burde nå være lik som i Oppgave2-Løsning

Gå videre til [Oppgave3.md](https://github.com/bouvet-bergen/echo-workshop-react/blob/main/Oppgave3.md)
