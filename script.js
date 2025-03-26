// Första scriptet för bildrotation-----------------------------------------------------
document.addEventListener("DOMContentLoaded", function() {
    var myIndex = 0;
    rotatePictures();

    function rotatePictures() {
        var pics = document.getElementsByClassName("mySlides");
        
        if (pics.length === 0) {
            console.log("Inga bilder hittades!");
            return;
        }

        for (var i = 0; i < pics.length; i++) {
            pics[i].style.display = "none";
        }
        myIndex++;

        if (myIndex > pics.length) {
            myIndex = 1;
        }
        pics[myIndex - 1].style.display = "block";
        setTimeout(rotatePictures, 15000);
    }
});


// Andra scriptet för kursinformation och modal----------------------------------------------------
const courseInfo = {
    1: {
      title:
        'Produktutveckling i medieteknik med metoden "Design-Build-Test"',
      languages:
        "Utvecklingstekniker: C#, Unity, SQL-databaser, REST API med ASP.NET Core",
      description:
        "Kursen består av att man som grupp ska tillämpa ingenjörmässiga arbetsmetoder genom planering, utveckling och realisering av tekniska system tillsammans med efter en beställning från kund. Arbetsgången omfattar hela utvecklingskedjan från idé till test av prototyp eller färdigt system. Projektgruppen ska i samråd med beställaren förhandla fram en kravspecifikation som är relevant med hänsyn till tid och resurser. Min grupp gjorde ett projekt tillsammans med THNX Innovation AB som är ett konsultbolag i Umeå som agerade beställare. Tillsammans skapade vi ett Memory AR spel C# och Unity med databas i SQL samt REST API med c# och .NET. Resultatet kan visas nedan. ",
    },
    2: {
      title: "Systemnära programmering",
      languages: "Utvecklingsteknik: C",
      description:
        "Kursen innefattar genomgång av ett operativsystems (Unix) gränsytor och viktiga systemprogramvaror, filsystem och processhantering i Unix, introduktion till parallella processer, principer för synkronisering och kommunikation mellan processer samt programutveckling, verktyg och felsökningsmetodik i Unix-miljö. Programmeringsspråket i kursen är C, vilket innebär att man hanterar minnesallokering manuellt, använder pekare för att manipulera minnet direkt samt skriver systemnära kod för hög prestanda. ",
    },
    3: {
      title: "Artificiell intelligens - grunderna",
      languages: "Utvecklingstekniker: Python",
      description:
        "Denna kursmodul ger en introduktion till både klassisk och icke-klassisk AI, med fokus på grundläggande problem, utmaningar och filosofiska aspekter. Den täcker ämnen som AI:s historia, sökalgoritmer, kunskapsrepresentation, agentparadigm, neurala nätverk och genetiska algoritmer. Kursen behandlar också AI:s praktiska tillämpningar, inklusive robotars uppbyggnad, autonoma system och svärmintelligens. Dessutom diskuteras AI-teknologiers påverkan på samhället. Den praktiska delen av kursen inkluderar laborationer där man får tillämpa teorin genom arbete med robotar och simulatorer.",
    },
    4: {
      title: "Prototyputveckling för mobila applikationer",
      languages: "Utvecklingstekniker: Swift och firebase databas",
      description:
        "Kursen bestod av att man som grupp skulle utveckla en produkt, där min grupp valde att utveckla iOS-appen Triventure, där användare kan skapa eller delta i virtuella tipsrundor och tävla i ämnen som geografi, musik och historia. Frågor besvaras genom att besöka utplacerade kartnålar inom en viss räckvidd. Appen är byggd i Xcode med Swift och SwiftUI och använder Firebase Realtime Database samt Google Maps API. Syftet med produkten var att främja en aktiv livsstil och skapa engagerande lärande genom gamification.",
    },
    5: {
      title: "Datastrukturer och algoritmer (C)",
      languages: "Utvecklingsteknik: C",
      description:
        "Kursen behandlar grundläggande abstrakta datatyper, algoritmer och komplexitetsanalys, samt olika problemlösningsansatser. Deltagarna lär sig om datatyper som lista, stack, kö, träd och graf, samt deras implementationer och användningsområden. Algoritmer kopplade till dessa datatyper, som sökning och sortering, analyseras med fokus på deras komplexitet. Kursen introducerar även olika problemlösningsstrategier som divide and conquer och dynamisk programmering. Teorin tillämpas genom programmering och problemlösning, där färdigheter som testning, felsökning och dokumentation övas samt pointeroperationer och minneshantering.",
    },
    6: {
      title: "Applikationsutveckling för internet",
      languages:
        "Utvecklingstekniker: C#, ASP.NET, MVC, REST API med ASP.NET Core",
      description:
        "Kursen fokuserar på metoder för att lagra och bearbeta data samt tekniker för att utveckla och driftsätta databasdrivna webbaserade system. Den täcker även hur man använder webbtjänster som SOAP, JSON och andra webb-API:er i dessa system. Kursen baseras på ASP.NET MVC, Entity Framework, C#, Visual Studio och SQL Server, och avslutas med ett verklighetsnära projekt.",
    },
    7: {
      title: "Innovativa mobila tjänster och system",
      languages:
        "Utvecklingstekniker: React Native (Typescript) och firebase databas",
      description:
        "Kursen består till största del utav utveckla en innovativ mobil tjänst och tillhörande system. Tyngdpunkten ligger på tillämpningar i vardagen som involverar bilder, musik och andra medier. Kursen genomfördes i samarbete med företaget Daresay och syftade till att skapa en produkt som stärker gemenskap och ger äldre i samhället en meningsfull vardag.",
    },
    8: {
      title: "Objektorienterad programmeringsmetodik",
      languages: "Utvecklingstekniker: JAVA",
      description:
        "Kursen introducerar objektorienterad problemlösning och programmering, med fokus på objektorienterad analys och design. Den behandlar begrepp som abstraktion, klass, metod, arv, och undantagshantering, och tränar färdigheter i Java-programmering. Kursen tillämpar teori genom att använda modeller för problem och konkret programmering, inklusive analys, design, implementation och testning. Grupparbete ingår för att ge erfarenhet av kommunikation, versionshantering och dokumentation. Kursen består av två moment: objektorienterade koncept och deras tillämpning samt objektorienterad analys, design och implementation.",
    },
    9: {
      title: "Webbdesign med JavaScript och Document Object Model",
      languages: "Utvecklingstekniker: JavaScript",
      description:
        "Kursen fokuserar på JavaScript och DOM, med förutsättning om grundläggande kunskaper i HTML och CSS. Den ger praktisk kunskap om hur man skapar dynamiska webbsidor genom att manipulera en webbsidas DOM. JavaScript används för att förändra och styra webbens dynamiska beteende genom att interagera med denna modell. Kursen introducerar även moderna webbutvecklingstekniker och hur scriptbibliotek kan underlätta utvecklingen.",
    },
    10: {
      title: "Design för användarupplevelse",
      languages: "Utvecklingstekniker: Figma, Miro",
      description:
        "Kursen introducerar processer och arbetsmetoder inom industridesign och interaktionsdesign, med fokus på designmetodikens grunder. Den behandlar hur grafisk formgivning, typografi, layout, ljuddesign och haptic påverkar användargränssnittets förståelse och uttryck. Under andra halvan av kursen skapade vi, i grupp, en hifi-prototyp av en elbildsladdningsapp för att hjälpa elbilsägare hitta laddstationer och planera rutter. Vi genomförde användarundersökningar för att identifiera viktiga funktioner och designade ett intuitivt användargränssnitt som gör det enkelt att söka efter laddstationer och navigera längs rutter.",
    },
  };
  document.addEventListener("DOMContentLoaded", function() {
    // Hämta modal-elementet och stäng-knappen
    let modal = document.getElementById("courseModal");
    let span = document.getElementsByClassName("close")[0];
  
    // Lägg till klickhändelse på varje li
    document.querySelectorAll(".course_item").forEach((item) => {
      item.addEventListener("click", function () {
        let courseId = this.getAttribute("data-course");
        let course = courseInfo[courseId];
  
        // Sätt informationen i modal-fönstret
        document.getElementById("courseTitle").textContent = course.title;
        document.getElementById("courseLanguages").textContent = course.languages;
        document.getElementById("courseDescription").textContent = course.description;
  
        // Visa modalen
        modal.style.display = "block";
      });
    });
  
    // Lägg till klickhändelse på stäng-knappen
    if (span) {
      span.onclick = function () {
        modal.style.display = "none";
      };
    }
  
    // När användaren klickar utanför modal, stäng den
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  });
  

  let disable = false; 

// Trejde scriptet för popup-hantering-----------------------------------------------------
document.addEventListener("DOMContentLoaded", function() {
  // Hitta alla popup-knappar och popup-fönster
  let openPopupBtns = document.querySelectorAll("[id^='open-popup-btn']");
  let closePopupBtns = document.querySelectorAll("[id^='close-popup-btn']");
  let popups = document.querySelectorAll("[id^='popup']");

  // Funktion för att öppna popup
  function openPopup(popupId) {
    let popup = document.getElementById(popupId);
    popup.classList.add("open-popup");
  }

  // Funktion för att stänga popup
  function closePopup(popupId) {
    let popup = document.getElementById(popupId);
    let video = popup.querySelector("video");
    if (video) {
      video.pause(); 
    }
    popup.classList.remove("open-popup");
  }

  // Lägg till eventlyssnare för öppna popups
  openPopupBtns.forEach(function(btn) {
    btn.addEventListener("click", function() {
      if (disable) {
        return; 
      }

      let popupId = btn.id.replace("open-popup-btn", "popup");
      openPopup(popupId);
      disable = true; 
    });
  });

  closePopupBtns.forEach(function(btn) {
    btn.addEventListener("click", function() {
      let popupId = btn.id.replace("close-popup-btn", "popup");
      closePopup(popupId);
      disable = false;
    });
  });
});
