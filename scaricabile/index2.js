const jobs = [
    { title: "Marketing Intern", location: "US, NY, New York" },
    {
      title: "Customer Service - Cloud Video Production",
      location: "NZ, Auckland",
    },
    {
      title: "Commissioning Machinery Assistant (CMA)",
      location: "US, IA, Wever",
    },
    {
      title: "Account Executive - Washington DC",
      location: "US, DC, Washington",
    },
    { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
    { title: "Accounting Clerk", location: "US, MD," },
    { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
    {
      title: "Lead Guest Service Specialist",
      location: "US, CA, San Francisco",
    },
    { title: "HP BSM SME", location: "US, FL, Pensacola" },
    {
      title: "Customer Service Associate - Part Time",
      location: "US, AZ, Phoenix",
    },
    {
      title: "ASP.net Developer Job opportunity at United States,New Jersey",
      location: "US, NJ, Jersey City",
    },
    {
      title: "Talent Sourcer (6 months fixed-term contract)",
      location: "GB, LND, London",
    },
    {
      title: "Applications Developer, Digital",
      location: "US, CT, Stamford",
    },
    { title: "Installers", location: "US, FL, Orlando" },
    { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
    {
      title: "VP of Sales - Vault Dragon",
      location: "SG, 01, Singapore",
    },
    { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
    {
      title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
      location: "GB, SOS, Southend-on-Sea",
    },
    { title: "Visual Designer", location: "US, NY, New York" },
    {
      title: "Process Controls Engineer - DCS PLC MS Office - PA",
      location: "US, PA, USA Northeast",
    },
    { title: "Marketing Assistant", location: "US, TX, Austin" },
    { title: "Front End Developer", location: "NZ, N, Auckland" },
    { title: "Engagement Manager", location: "AE," },
    {
      title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
      location: "US, CA, Carlsbad",
    },
    { title: "Customer Service", location: "GB, LND, London" },
    { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
    { title: "Marketing Exec", location: "SG," },
    {
      title: "HAAD/DHA Licensed Doctors Opening in UAE",
      location: "AE, AZ, Abudhabi",
    },
    {
      title: "Talent Management Process Manager",
      location: "US, MO, St. Louis",
    },
    { title: "Customer Service Associate", location: "CA, ON, Toronto" },
    {
      title: "Customer Service Technical Specialist",
      location: "US, MA, Waltham",
    },
    { title: "Software Applications Specialist", location: "US, KS," },
    { title: "Craftsman Associate", location: "US, WA, Everett" },
    { title: "Completion Engineer", location: "US, CA, San Ramon" },
    { title: "I Want To Work At Karmarama", location: "GB, LND," },
    {
      title: "English Teacher Abroad",
      location: "US, NY, Saint Bonaventure",
    },
  ]

/// gli input di html

let lavoro = document.getElementById('ricLav') 
let posgeo = document.getElementById('luogo')



// funzione
function lavori(lavoro,posGeo){
  //  creo un ogetto nella funzione dove verranno inseriri i risultati della ricerca dell'utente 
  let risultati = {
    result : [],
    count : 0, 
}
 // i tag che vanno modificati su html

 let lista = document.getElementById('lista')

 // la viariabile dove verrà inserito il testo da riportare nell'html 
 let finalRes =''

  // utilizzo il for per ciclare tutti gli indici di jobs per poi estrarre title e location e inserirle in una variabile chiamata work
 
  for(i = 0 ; i < jobs.length ; i++){
   let work = jobs[i]
   
    /*ciclo if con tutte le variabili con le lettere minuscole che controlla se le parole inserite 
    dall'utente sono parole incluse nella variabile work*/
    
    if(work.title.toLowerCase().includes(lavoro.value.toLowerCase()) && 
      work.location.toLowerCase().includes(posGeo.value.toLowerCase())){
        
        /* prendo la variabile creata per i risultati e inserisco i lavori che sono 
        usciti inclusi dall'input tramite il ciclo if e le inserisco con il comando push in result*/

        risultati.result.push(work)

        // per ogni risultato che è incluso a ogni giro aggiungerà all'oggetto count un +1
        risultati.count++

        /* ad ogni giro del ciclo viene aggiunto dentro la variabile finalRes 
        ciò che deve essere stampato nell'html con anche i propri tag
        scrivendo work.title andiamo a predere il risultato uscente dal ciclo però con le rispettive lettere
        maiuscole e minuscole  */
        finalRes += '<li>'+ work.title + ' ' + work.location + '</li>' 
    } 

  }

  /*infine fuori da ciclo viene richiamata la varibile lista(la parte del DOM che dobbiamo modificare) 
  e viene inserito il comando innerHTML per dirgli che il testo che andremo a mettere andrà nell'html
  e con l'uguale gli andiamo a dire che deve il testo da inseire è quello nella variabile finalRes */
  lista.innerHTML = finalRes


}

