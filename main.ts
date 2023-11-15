import{Serie} from './serie.js'

export const series = [
    new Serie (1,"Breaking Bad","AMC", 5,"Set and filmed in Albuquerque, New Mexico, the series tells the story of Walter White, a struggling and depressed high school chemistry teacher who is diagnosed with lung cancer" ,
    "https://www.amc.com/shows/breaking-bad","./imagenes/xOzse.jpeg") ,
    
    new Serie (2,"Orange Is the New Black", "Netflix", 6, "The series begins revolving around Piper Chapman, a woman in her thirties living in New York City who is sentenced to 15 months in Litchfield Penitentiary", 
    "https://www.netflix.com/co/title/70242311","./imagenes/EvKe48G.jpg"),
    
    new Serie (3, "Game of Thrones","HBO", 7, "American fantasy drama", "https://www.hbo.com/game-of-thrones",
      "./imagenes/TDCEV1S.jpg"),

    new Serie (4, "The Big Bang Theory", "CBS", 12, "Leonard and Sheldon are brilliant physicists—geniuses in the laboratory but socially challenged everywhere else. Enter beautiful, street-smart neighbor Penny, who aims to teach them a thing or two about life. Despite their on-again, off-again relationship in the past, Leonard and Penny have finally gotten married. Even Sheldon has found a female companion, entering into a relationship agreement with neurobiologist Amy Farrah Fowler, and he recently took their relationship to the next level by marrying her after a long courtship. In their free time, Leonard and Sheldon enjoy fantasy role-playing games with their ever-expanding universe of friends, including fellow scientists Koothrappali, Wolowitz, and Wolowitz’s adorable microbiologist wife, Bernadette, who is adjusting to life with their two children.",
        "https://www.cbs.com/shows/big_bang_theory/about/", "./imagenes/uAEpVWk.jpg"),
    
    new Serie (5, "Sherlock", "BBC",  4, "Sherlock depicts consulting detective Sherlock Holmes (Benedict Cumberbatch) solving various mysteries in modern-day London. Holmes is assisted by his flatmate and friend, Dr John Watson (Martin Freeman), who has returned from military service in Afghanistan with the Royal Army Medical Corps",
        "https://www.bbc.co.uk/programmes/b018ttws", "./imagenes/02B7qhj.jpg"),

    new Serie (6, "A Very English Scandal", "BBC", 2, "A Very English Scandal is a fact-based three-part British television comedy-drama miniseries based on John Preston's book of the same name.",
        "https://www.bbc.co.uk/programmes/p065smy4", "./imagenes/D4y3DrQ.jpg"),
  ];
   

let seriesTable: HTMLElement = document.getElementById("series")!;
let serieCard: HTMLElement = document.getElementById("detail")!;
let serieActual:number = 0;


mostrarSeries(series);
mostrarDetalle(series[serieActual]);


function mostrarSeries(series: Serie[]):void{
    let seriesTbody: HTMLElement = document.createElement("tbody");
    let totalSeasons = 0;
    let totalSeries = 0;
    let average = 0;

    let index: number = 0;
    for(let serie of series){
        let trElement: HTMLElement = document.createElement("tr");
        
            let tdElementId: HTMLElement = document.createElement("td");
            tdElementId.className = "table-active";
            tdElementId.innerHTML = `${serie.id}`;

            let tdElementName: HTMLElement = document.createElement("td");
            tdElementName.className = "table-active";
                let aElement: HTMLAnchorElement = document.createElement("a");
                aElement.href="javascript:void(0);"
                aElement.innerHTML = `${serie.name}`;
                
                aElement.onclick = () => {
                    serieActual = serie.id-1;
                    mostrarDetalle(series[serieActual]);
                }

                tdElementName.appendChild(aElement);

            let tdElementChannel: HTMLElement = document.createElement("td");
            tdElementChannel.className = "table-active";
            tdElementChannel.innerHTML = `${serie.channel}`;

            let tdElementSeasons: HTMLElement = document.createElement("td");
            tdElementSeasons.className = "table-active";
            tdElementSeasons.innerHTML = `${serie.seasons}`;

            trElement.appendChild(tdElementId);
            trElement.appendChild(tdElementName);
            trElement.appendChild(tdElementChannel);
            trElement.appendChild(tdElementSeasons);

        seriesTbody.appendChild(trElement);    
        totalSeasons+=serie.seasons;
        totalSeries++;
        index++;
    }
    average = totalSeasons/totalSeries;

    let trAverage:HTMLElement = document.createElement("tr");
    trAverage.innerHTML = `Seasons average: ${average}`
    seriesTbody.appendChild(trAverage);
    seriesTable.appendChild(seriesTbody);
}


function mostrarDetalle(serie:Serie):void{
    let serieCardImage: HTMLImageElement = document.createElement("img");
    serieCardImage.src=`${serie.image}`;
    serieCardImage.className = "card-img-top";
    let serieCardBody: HTMLElement = document.createElement("div");
    serieCardBody.className='card-body';
    serieCardBody.innerHTML =  `<h5 class="card-title">${serie.name}</h5>
                                <p class="card-text">${serie.description}</p>
                                <a href=${serie.webpage}>${serie.webpage}</a>`
    

    if(serieCard.firstElementChild != null){
        serieCard.removeChild(serieCard.firstElementChild);
        serieCard.removeChild(serieCard.firstElementChild);
    }
    serieCard.appendChild(serieCardImage);
    serieCard.appendChild(serieCardBody);
}