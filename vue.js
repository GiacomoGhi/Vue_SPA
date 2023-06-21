//hide menu

var prevScrollpos = window.scrollY;
window.onscroll = function() {
    var currentScrollPos = window.scrollY;
if (window.innerWidth > 765) {
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("logo").style.transition= "0.3s";
        document.getElementById("this").style.fontSize = "100%";
        document.getElementById("logo").style.marginTop = "0%";
        document.getElementById("nav_bar").style.marginBottom = "0%";
        document.getElementById("logo").style.height = "100px";
        document.getElementById("nav_bar").style.marginTop = "0%" ;
    } else {
        document.getElementById("logo").style.transition= "0.3s";
        document.getElementById("this").style.fontSize = "40%";
        document.getElementById("nav_bar").style.marginTop = "-2%" ;
        document.getElementById("nav_bar").style.marginBottom = "-1%" ;
        document.getElementById("logo").style.height = "40px";
        document.getElementById("logo").style.marginTop = "-25%";
    }
    }
    else 
    {
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("logo").style.transition= "0.3s";
            document.getElementById("logo").style.height = "100px";
            document.getElementById("nav_bar").style.marginTop = "20px" ;
        }  else {
            document.getElementById("logo").style.transition= "0.3s";
            document.getElementById("nav_bar").style.marginTop = "-10px" ;
            document.getElementById("logo").style.height = "40px";
        
          }
    }
    prevScrollpos = currentScrollPos;
};






//PAGINA 1
const Home = {     
    data() {
        return {
            Path_img: [{
                "Immagine": "./img/carosello3/AR-Body-systems.jpg"
            },
            {
                "Immagine": "./img/carosello3/Augmented-Reality.jpg",
            },
            {
                "Immagine": "./img/carosello3/ikea2.jpg",
            },
            {
                "Immagine": "./img/carosello3/industry40.jpg",
            },
            {
                "Immagine": "./img/carosello3/learning.jpg",
            },
            {
                "Immagine": "./img/carosello3/localize.jpg",
            },
            {
                "Immagine": "./img/carosello3/manutenzione.jpg",
            },
            {
                "Immagine": "./img/carosello3/remote support.jpg",
            },
            {
                "Immagine": "./img/carosello3/Scarpe.jpg",
            },]        
        }
    }, 
    template:  `

        <div class="container-lg pt-4 px-4" id="claim">
            <div class="row text-center text-white">
                <h1 class="">Realtà Aumentata</h1> 
                <h2 class="py-4 px-4">
                    Veloce Introduzione all'uso
                    della Realtà Aumentata nelle
                    Applicazioni Web
                </h2>
            </div>
            <div class="row pb-5" id="homepage">
                <div class="col-md-6 py-4 justify-content-center text-white">
                    <p class="">Da qui potrai:</p>
                    <ul>
                        <li>Capire cos'è la Realtà Aumentata</li>
                        <li class="py-4">Come implementarla nella tua applicazione Web</li>
                        <li>Conoscere tutti i fans del corso di laurea di TSI</li>
                        <li class="py-4">Iscriverti come fan sfegatato del corso di laurea più figo di tutti</li>
                    </ul>    
                </div>
                <div id="carouselExampleAutoplaying" class="col-md-6 z-n1 carousel align-self-center slide carousel-fade" data-bs-ride="carousel" >
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src="img/carosello3/Creating-a-Augmented-Reality-Website-with-AR.JS.png" class="mx-auto d-block img-fluid" alt="Immagine esempio AR">
                        </div>
                        <div v-for="foto in Path_img" class="carousel-item">
                        <img v-bind:src="foto['Immagine']" class="mx-auto d-block img-fluid" alt="Immagine esempio AR"/>
                        </div>
                    </div> 
                </div>
            </div>
        </div>

    `
};

//PAGINA 2
const Impara = {     
    template:  `
    
    <div class="container-md text-white px-md-5 px-3" >
    <h1 class="text-center mt-3">Realtà aumentata:</h1>
    <div class="row text-center large">
        <div class="col-sm-6 offset-sm-3">
            <img class="img-fluid mb-3" src="./img/realta-aumentata-copertina.png" alt="">
        </div>
        <p>Ti piacerebbe vedere la realtà con occhi diversi, usando soltanto il tuo smartphone? Con la realtà aumentata tutto ciò è possibile.</p><p>In questo articolo, scopriamo cos'è la realtà aumentata, come funziona e alcuni esempi di come può essere applicata.</p><p>Iniziamo!</p>
    </div>
    <div class="sections row">
        <div>
        <h2>Cos'è la Realtà Aumentata?</h2>
        <p>La Realtà Aumentata (AR) è una tecnologia che permette, utilizzando tipicamente telecamere, display, sensori e software, di  <b class="text-white">fondere contenuti digitali con ambienti fisici</b> in tempo reale, offrendo agli utenti un'esperienza coinvolgente e interattiva.</p> 
        <p>La AR ha numerose applicazioni nel campo dell'intrattenimento, dell'istruzione, della salute, del commercio al dettaglio e di altri settori, e si appresta a trasformare il modo in cui viviamo, lavoriamo e ci divertiamo.</p>
        </div>
        <div>
        <h2>AR vs VR, Qual'è la Differenza?</h2>
        <div class="col-sm-6 offset-sm-3">
        <img class="img-fluid rounded-3" src="./img/realta-aumentata-realta-virtuale-differenza.png" alt=""/>
        </div>
        <p>La realtà aumentata (AR) sovrappone contenuti digitali al mondo reale, consentendo agli utenti di vedere sia gli elementi reali che quelli virtuali contemporaneamente. </p><p>Gli utenti possono interagire con gli oggetti virtuali mantenendo la consapevolezza del contesto fisico circostante.</p><p>La realtà virtuale (VR), invece, crea un ambiente completamente immersivo e simulato, che sostituisce completamente la realtà fisica.</p><p>Gli utenti indossano <b class="text-white"> visori </b> che bloccano la vista del mondo reale e li trasportano in un'esperienza virtuale.</p><p>In sintesi, la VR crea un'esperienza completamente immersiva in un ambiente virtuale, mentre l'AR sovrappone elementi virtuali al mondo reale, consentendo una fusione tra realtà fisica e digitale.</p>
        </div>
        <div>
        <h2>“The Ultimate Display”, l'Origine della AR</h2>
        <p>Il termine “realtà aumentata” fu coniato per la prima volta nel 1992 da <b class="text-white">Tom Caudell e David Mizell</b>, due dipendenti della Boeing che usarono la tecnologia per guidare gli operai durante l'assemblaggio degli aeroplani. </p><p>Il concetto della AR risale a molto prima però. Nel 1968 <b class="text-white">Ivan Sutherland</b> presentò il suo innovativo lavoro intitolato "The Ultimate Display", dove descrisse la sua invenzione pionieristica: il primo head-mounted display (HMD) noto come "Sword of Damocles".</p>
        <div class="col-sm-6 offset-sm-3">
            <img class="img-fluid rounded-3" src="./img/Ivan.png" alt=""/>
            </div>
        <p>L'HMD di Sutherland era un dispositivo indossabile che consentiva all'utente di visualizzare grafica computerizzata in 3D sovrapposta al mondo reale.</p><p> Era costituito da un casco leggero con un display montato davanti agli occhi dell'utente e un sistema di tracciamento per monitorare i movimenti della testa. </p><p>Questo permetteva all'utente di vedere oggetti virtuali che sembravano interagire con l'ambiente circostante.</p><p>L'invenzione di Sutherland ha segnato un importante punto di svolta nello sviluppo della Realtà Virtuale e ha aperto la strada a numerosi sviluppi successivi nell'ambito degli HMD.</p><p>Sebbene l'HMD di Sutherland fosse originariamente concepito per scopi militari, la sua tecnologia ha avuto un impatto significativo anche in altre aree, come l'intrattenimento, l'educazione, la simulazione e la progettazione.</p>
        </div>
        <div>
        <h2>Come Funziona in Pratica?</h2>
        <p>Per funzionare la Realtà Aumentata necessita di specifiche app e di dispositivi digitali come "occhiali intelligenti", smartphone, tablet, navigatori etc.</p><p>Ecco qualche breve accenno al loro funzionamento tecnico:
        </p>
        <ul>   
            <li><p>Cominciamo dalle apparecchiature più sofisticate, ovvero gli "smart glasses" professionali, come per esempio <b class="text-white">Microsoft HoloLens</b> che utilizzano il sistema operativo Windows Mixed Reality.</p><p>Si presentano come occhiali trasparenti che lasciano aperto il campo visivo dell'utente e totale libertà di movimento, permettendo di posizionare virtualmente finestre di app e immagini 3D su ciò che in quel momento viene focalizzato con lo sguardo.</p></li>
            <li><p><b class="text-white">I navigatori satellitari potenziati</b> con la Realtà Aumentata si servono della fotocamera dello smartphone per fornire indicazioni aggiuntive (come distributori, luoghi di interesse, velocità e autovelox etc.) mostrate direttamente sul parabrezza dell'auto.</p><p>Alcune vetture, che sfruttano questa tecnologia, consentono al guidatore la visione totalmente sgombra della parte anteriore, mettendo in trasparenza il cofano dell'auto e rendendo visibile anche la parte di strada normalmente coperta dal vano motore e dal cofano.</p></li>
            <li><p><b class="text-white">Le app di Augmented Reality</b> (AR) monitorano l'ambiente circostante e sovrappongono sul display informazioni aggiuntive, come le recensioni del ristorante davanti al quale ci si trova, oppure rilevanze storiche / artistiche di quel luogo.</p><p>Un esempio molto conosciuto di app con AR è il gioco Pokémon Go: lanciato nel 2016, è stato il primo prodotto mainstream con l'impiego di tale tecnologia.</p><p> Gli utenti si sfidano nel cercare e catturare mostri, con 'battaglie' virtuali nel mondo reale.</p><p>Come avviene in altre strategie di marketing locali, utilizzando la geolocalizzazione e le fotocamere dei telefoni cellulari, i 'cacciatori di Pokémon' si muovono per strade e ambienti pubblici alla ricerca di personaggi collezionabili per incrementare il loro punteggio.</p></li>
        </ul>
        </div>
        <div>
        <h2>AR ed Aziende: Quali Sviluppi per il Marketing?</h2>
        <p>L'esperienza immersiva e il coinvolgimento sensoriale ed emotivo sono potenzialità interessanti che ovviamente non sono sfuggite ai marketers, in particolare sotto il profilo della promozione del marchio.</p><p> Lo sviluppo di strategie di marketing con l'utilizzo della Realtà Aumentata e/o della Realtà Virtuale sono una possibilità riservata, per motivi di investimenti economici, solo a grandi aziende e multinazionali. </p><p>Almeno per adesso… Secondo una recente ricerca di Deloitte,<b class="text-white"> poco meno del 90% delle aziende</b> con un fatturato annuo compreso tra 100 milioni e 1 miliardo di dollari utilizza già la tecnologia della realtà aumentata, o quella della realtà virtuale.</p><p>
        Il perché lo abbiamo appena accennato: la prospettiva di mostrare alle persone com'è l'utilizzo di un prodotto, in modo innovativo, attraverso un'esperienza interattiva e coinvolgente, è davvero troppo 'appetitosa' per lasciarsela sfuggire.
        </p>
    </div>
    </div>
    <div class="text-center mt-5">
        <h1>Come implementare la AR nella tua applicazione Web</h1>
        <p class="large">L'introduzione è stata fatta, ora passiamo alla parte più tecnica!</p>
    </div>
    <div class="sections row">
        <div>
        <h2>Hello World of AR</h2>
        <h3>Non ti preoccupare, sono meno di 10 linee di HTML</h3>
        <p>AR.js è un'efficiente libreria JavaScript di Realtà Aumentata per il Web. Funziona al 100% nel tuo browser, il che significa che non è necessario installare nessuna app! Non è necessario possedere un dispositivo specifico e funziona su tutte le piattaforme mobili: Android, iOS e Windows Mobile.</p><p>
        Combinando A-Frame e AR.js è davvero estremamente facile creare contenuti AR sul web: </p><p>A-Frame è un semplice contenitore per integrare oggetti 3D custom in HTML.</p><p>
        A seconda del dispositivo AR.js, può funzionare molto velocemente, fino a 60 fps anche sui telefoni di 3/4 anni fa! Inoltre, il codice è open source ed è disponibile su GitHub.</p><p>
        Suona bene, vero? Vediamo linea per linea come fare!
        </p>
        <ol>
            <li>
                <div>
                    Prima includieremo a-frame. A-frame contiene three.js. Dopo di che includiamo AR.js per a-frame. AR.js farà visualizzare il nostro oggetto 3d in AR
                </div>
                <div class="code">
<pre>
&lt;script src="https://aframe.io/releases/0.5.0/aframe.min.js"&gt;&lt;/script&gt;
&lt;script src="https://rawgit.com/jeromeetienne/ar.js/master/aframe/build/aframe-ar.js"&gt;&lt;/script&gt;
&lt;script&gt;THREEx.ArToolkitContext.baseURL = 'https://rawgit.com/jeromeetienne/ar.js/master/three.js'&lt;/script&gt;
</pre>
                </div>
            </li>
            <li><div>In questo step, facciamo le solite cose, definiamo il contenuto di body come in tutti i documenti html.</div>
            <div class="code">
<pre>
&lt;body style='margin: 0px; overflow: hidden;'&gt;

&lt;/body&gt;
</pre>
            </div>
                    
            </li>
            <li><div>
                A questo punto, creiamo la nostra scena di a-frame dentro il body. Dobbiamo anche aggiungere la componente “ArToolkit”.
                    ArToolkit è una libreria open-source usata per localizzare il marker.
            </div>
            <div class="code">
<pre>
&lt;a-scene embedded artoolkit='sourceType: webcam;'&gt;
<!-- put your 3d content here-->
&lt;/a-scene&gt;
</pre>
                    
            </div>
            </li>
            <li><div>Dopo aver creato la scena 3d, possiamo aggiungere un oggetto ad essa. In questa linea aggiungiamo un semplice cubo. Dichiariamo l'oggetto con una posizione leggermente elevata, così verrà visualizzato sopra il nostro marker. In oltre, modifichiamo il materiale per farlo leggermente trasparente.</div>
                <div class="code">
<pre>
&lt;a-box position='0 0.5 0' material='opacity: 0.5;'&gt;&lt;/a-box&gt;
</pre>                                    
                </div>
            </li>
            <li><div>In quest'ultimo step, aggiungiamo il collegamento con la videocamera del dispositivo. Aggiungiamo il marker standard 'hiro' (Hiro marker). Infine, lo facciamo muovere  come se fosse nel tuo telefono. Facile vero?</div>
                <div class="code">
<pre>
&lt;a-marker-camera preset='hiro'&gt;&lt;/a-marker-camera&gt;
</pre>                                    
                </div>
            </li>
        </ol>

        <p>Congratulazioni! Sei arrivato alla fine. Ora hai un'applicazione AR funzionante in sole 10 righe di HTML. </p>
        <div class="code">
<pre>
&lt;script src="https://aframe.io/releases/0.5.0/aframe.min.js"&gt;&lt;/script&gt;
&lt;script src="https://rawgit.com/jeromeetienne/ar.js/master/aframe/build/aframe-ar.js"&gt;&lt;/script&gt;
&lt;script&gt;THREEx.ArToolkitContext.baseURL = 'https://rawgit.com/jeromeetienne/ar.js/master/three.js'&lt;/script&gt;
&lt;body style='margin: 0px; overflow: hidden;'&gt;
&lt;a-scene embedded artoolkit='sourceType: webcam;'&gt;
&lt;a-box position='0 0.5 0' material='opacity: 0.5;'&gt;&lt;/a-box&gt;
&lt;a-marker-camera preset='hiro'&gt;&lt;/a-marker-camera&gt;
&lt;/a-scene&gt;
&lt;/body&gt;
</pre>
                
        </div>
        </div>
        <div>
        <h2>Conclusioni</h2>
        <p>In questo post abbiamo visto come aggiungere la Realtà Aumentata con AR.js e come aggiungerla nel tuo progetto A-Frame. Ora sappiamo dare vita ad una basica applicazione web sulla realtà aumentata.</p>
        </div>
    </div>
</div>

    `
};

//PAGINA 3
const Iscriviti = {     
    data() {
        return {
            //variabili campo iscrizione
            nome: "",
            cognome: "",
            email: "",
            password: "",
            professione: "",
            iscritti: null,

            //variabili campo modifica
            Campo: "Campo da modificare",
            email2: "",
            password2: "", 
            nuovoValore: "",
            position: 0,

            //variabili campo elimina
            email3: "",
            password3: ""
        }
    },

    template:  `
    
    <div class="container-md">
    <div class="row">
    <div class="col-lg-5 p-5">
    <div class="mb-5">
        <div class="row justify-content-lg-start justify-content-center">
        <div class="btn btn-primary mb-2 col-md-6">Form di Iscrizione</div>
        </div>
        <div class="row justify-content-start">
            <div class="" id="form">
                <div class="collapse multi-collapse show z-n1" id="multiCollapseExample1">
                    <div class="card card-body">
                        <div class="form-floating mb-3">
                            <input v-model="nome" type="Name" class="form-control" id="first_name" placeholder="nome" name="iscriviti">
                            <label for="first_name">Nome</label>
                            </div>
                        <div class="form-floating mb-3">
                            <input v-model="cognome" type="cognome" class="form-control" id="last_name" placeholder="cognome" name="iscriviti">
                            <label for="last_name">Cognome</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input v-model="email" type="email" class="form-control" id="email" placeholder="name@example.com" name="iscriviti">
                            <label for="email">Indirizzo Email</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input v-model="password" type="password" class="form-control" id="password" placeholder="Password" name="iscriviti">
                            <label for="password">Password</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input v-model="professione" type="job_title" class="form-control" id="job_title"
                            placeholder="professione" name="iscriviti">
                            <label for="job_title">Professione</label>
                        </div>
                        <button @click="addElement" class="btn btn-outline-success" type="button">Iscrivimi</button>
                        <div id="error" class="text-danger text-center pt-2">Un utente con questa email esiste già!</div>
                        <div id="errorField" class="text-danger text-center pt-2">Per favore, assicurati di completare i campi richiesti</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="mb-5">
        <div class="row justify-content-lg-start justify-content-center">
        <button class="btn btn-primary mb-2 col-md-6" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Modifica Iscrizione</button>
        </div>
        <div class="row justify-content-start">
            <div class="">
                <div class="collapse multi-collapse" id="multiCollapseExample2">
                    <div class="card card-body">
                        <div class="form-floating mb-3">
                            <input v-model="email2" type="email" class="form-control" name="modifica" id="floatingInput4" placeholder="name@example.com">
                            <label for="floatingInput4">Indirizzo Email</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input v-model="password2" type="password" class="form-control" name="modifica" id="floatingPassword2" placeholder="Password">
                            <label for="floatingPassword2">Password</label>
                        </div>
                        <div class="mb-3">
                            <select v-model="Campo" class="form-select" aria-label="Default select example" name="modifica">
                                <option selected>Campo da modificare</option>
                                <option value="0">Nome</option>
                                <option value="1">Cognome</option>
                                <option value="2">Indirizzo Email</option>
                                <option value="3">Password</option>
                                <option value="4">Professione</option>
                            </select>
                        </div>
                        <div class="form-floating mb-5">
                            <input v-model="nuovoValore" type="Name" class="form-control" id="floatingInput5" name="modifica" placeholder="nome">
                            <label for="floatingInput5">Nuovo valore</label>
                        </div>
                        <button @click="updateElement" class="btn btn-outline-success" type="button">Modifica</button>
                        <div id="update_error" class="text-danger text-center pt-2">Indirizzo email o password errati!</div>
                        <div id="update_error_1" class="text-danger text-center pt-2">Per favore, seleziona un campo da modificare</div>
                        <div id="update_error_2" class="text-danger text-center pt-2">Per favore, inserisci un nuovo valore</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="mb-0">
        <div class="row justify-content-lg-start justify-content-center">
            <button class="btn btn-danger mb-2 col-md-6" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample3" aria-expanded="false" aria-controls="multiCollapseExample3">Cancella Iscrizione</button>
        </div>
        <div class="row justify-content-start">
            <div class="">
                <div class="collapse multi-collapse" id="multiCollapseExample3">
                    <div class="card card-body">
                        <div class="form-floating mb-3">
                            <input v-model="email3" type="email" class="form-control" id="floatingInput6" placeholder="name@example.com" name="cancella">
                            <label for="floatingInput6">Indirizzo Email</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input v-model="password3" type="password" class="form-control" id="floatingPassword3" placeholder="Password" name="cancella">
                            <label for="floatingPassword3">Password</label>
                        </div>
                        <button @click="deleteElement" class="btn btn-outline-danger" type="button">Elimina</button>
                        <div id="delete_error" class="text-danger text-center pt-2">Indirizzo email o password errati!</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    <div class="text-white col-lg-6 offset-lg-1 mt-2 mb-5" id="static-table">        
        <h1 class="text-center mt-md-5">Iscritti Più Recenti</h1>
        <table><caption>Elenco iscritti</caption>
            <thead><tr>
                    <th id="n1" class="pe-3">Nome</th>
                    <th id="c1" class="pe-3">Cognome</th>
                    <th id="p1">Professione</th></tr>
            </thead>
            <tbody><tr v-for="iscritto in iscritti">
                    <td headers="n1">{{iscritto.first_name}}</td>
                    <td headers="c1">{{iscritto.last_name}}</td>
                    <td headers="p1">{{iscritto.job_title}}</td></tr>
            </tbody>
        </table>
    </div>
    </div>   
</div>

   `,
    methods:{
        getData: function(){
            axios.get("./MOCK_DATA(2).json")
            .then(response => {
                this.iscritti = response.data;
            })
        },

        addElement: function(){
            let newElement  = { //create a new json element with input data
                "first_name":this.nome,
                "last_name":this.cognome,
                "job_title":this.professione,
                "email":this.email,
                "password":this.password
            };
            
            const inputFields = document.getElementsByName('iscriviti');
            
            inputFields.forEach((input) => { //clear all highlights just for good measure
                input.classList.remove('highlight');
            });

            
            if(this.checkEmail(newElement['email'])){  //check if email is already registered
                document.getElementById('error').style.display = "block";    
                inputFields[2].classList.add("highlight");
                return;
            } else {
                document.getElementById('error').style.display = "none";
                inputFields[2].classList.remove("highlight");
            }

            let missingField = false;

            

            for (let key in newElement) { //check if any input was left empty
                if (newElement.hasOwnProperty(key) && newElement[key] === "") {
                    missingField = true;
                    let inputElement = document.getElementById(`${key}`);
                    if (inputElement) {
                        inputElement.classList.add("highlight");
                    }
                }
            };

            if(missingField){ //display error message
                document.getElementById('errorField').style.display = "block";
                return;
            } else document.getElementById('errorField').style.display = "none";
            

            this.iscritti.push(newElement); //add element to json obj
            this.nome = "";
            this.cognome = "";
            this.professione = "";
            this.email = "";
            this.password = "";
        },

        updateElement: function(){
            const inputFields = document.getElementsByName('modifica'); 

            inputFields.forEach((input) => { // remove old highlight 
                input.classList.remove('highlight');
            });

            if(!this.checkEmailNPassword(this.email2, this.password2)){ //check if user exists
                document.getElementById('update_error').style.display = "block";  
                inputFields[0].classList.add("highlight");  
                inputFields[1].classList.add("highlight");
                return;
            } else {
                document.getElementById('update_error').style.display = "none";                  
                inputFields[0].classList.remove("highlight");                
                inputFields[1].classList.remove("highlight");
            }

            if(this.Campo === "Campo da modificare"){ //check if field is selected
                document.getElementById('update_error_1').style.display = "block";  
                inputFields[2].classList.add("highlight");
                return;
            } else {
                document.getElementById('update_error_1').style.display = "none";   
                inputFields[2].classList.remove("highlight");
            }

            if(this.nuovoValore === ""){ //check if input is empty 
                inputFields[3].classList.add("highlight");
                document.getElementById('update_error_2').style.display = "block";  
                return;
            } else {
                document.getElementById('update_error_2').style.display = "none";   
                inputFields[3].classList.remove("highlight");
            }

            switch(this.Campo){ // apply change for selected field
                case "0":
                    this.iscritti[this.position].first_name = this.nuovoValore;
                    break;
                case "1":
                    this.iscritti[this.position].last_name = this.nuovoValore;
                    break;
                case "2":
                    this.iscritti[this.position].email = this.nuovoValore;
                    break;
                case "3":
                    this.iscritti[this.position].password = this.nuovoValore;
                    break;
                case "4":
                    this.iscritti[this.position].job_title = this.nuovoValore;
                    break;
            }

            this.Campo = "Campo da modificare";
            this.nuovoValore = "";

        },

        deleteElement: function(){
            const inputFields = document.getElementsByName('cancella');

            inputFields.forEach((input) => { // remove old highlight 
                input.classList.remove('highlight');
            });

            if(!this.checkEmailNPassword(this.email3, this.password3)){ //check if user exists
                document.getElementById('delete_error').style.display = "block";  
                inputFields[0].classList.add("highlight");  
                inputFields[1].classList.add("highlight");
                return;
            } else {
                document.getElementById('delete_error').style.display = "none";                  
                inputFields[0].classList.remove("highlight");                
                inputFields[1].classList.remove("highlight");
            }

            this.iscritti.splice(this.position, 1); // delete element
            this.email3 = "";
            this.password3 = "";
        },

        checkEmail: function(emailAddr){
            for(let i = 0; i < this.iscritti.length; i++){
                let emailIscritto = this.iscritti[i].email;
                if(emailIscritto === emailAddr){
                    return true;
                }
            }
            return false;
        },

        checkEmailNPassword: function(emailAddr, userPassword){
            console.log(userPassword);
            for(let i = 0; i < this.iscritti.length; i++){
                let emailIscritto = this.iscritti[i].email;
                let passwordIscritto = this.iscritti[i].password;
                if(emailIscritto === emailAddr && passwordIscritto === userPassword){
                    this.position = i;
                    return true;
                }
            }
            return false;
        },


    },
    mounted(){
        this.getData();
        
        // hide all error messages
        document.getElementById('error').style.display = "none";
        document.getElementById('errorField').style.display = "none";
        document.getElementById('update_error').style.display = "none";
        document.getElementById('update_error_1').style.display = "none";
        document.getElementById('update_error_2').style.display = "none";
        document.getElementById('delete_error').style.display = "none";
    }
};



//PAGINA 4
const Bacheca = {     
    data(){
        return{
            iscritti: null, 
            news: null,
            post: null
        }
    },
    template:  `
    <div class="container-md text-white">
        <div class="row" id="postArticoli">
            <div class="col-md-6">
                <h1 class="my-3">Le Ultime Notize Dal Mondo Tech</h1>
                <div v-for="notizia in news">
                    <h2>{{notizia.titolo}}</h2>
                    <img class="float-end m-3 img-fluid" v-bind:src="notizia.immagine" alt="" />
                    <p>{{notizia.contenuto}}</p>
                </div>
            </div>
            <div class="col-md-5 offset-md-1">
                <h1 class="mb-3 mt-5">I Nostri Ultimi Post</h1>
                <div v-for="articolo in post">
                    <h2>{{articolo.titolo}}</h2>
                    <p>{{articolo.contenuto}}<a href="#/impara">Leggi Tutto</a></p>
                </div>
            </div>
        </div>
    </div>
    <div class="container-md">
    <div v-if="iscritti" class="container-fluid text-white">
        <div class="row">
        <div class="col-12">
        <h1 class="text-center">Tutti i nostri supporter</h1>
        </div>
        <div class="col-md-6 offset-md-3 align-self-center">
        <table><caption>Elenco iscritti</caption>
            <thead><tr>
                <th id="n2">Nome</th>
                <th id="c2">Cognome</th>
                <th id="p2">Professione</th></tr>
            </thead>
            <tbody><tr v-for="iscritto in iscritti">
                <td headers="n2">{{iscritto.first_name}}</td>
                <td headers="c2">{{iscritto.last_name}}</td>
                <td headers="p2">{{iscritto.job_title}}</td></tr>
            </tbody>
        </table>
        </div>  
        </div>
    </div>
    </div>   `,
    methods:{
        getData: function(){
            axios.get("./MOCK_DATA.json")
            .then(response => {
                this.iscritti = response.data;
            });     
            axios.get("./datiPost.json")
            .then(response => {
                this.post = response.data;
            }); 
            axios.get("./datiNews.json")
            .then(response => {
                this.news = response.data;
            });             
        }
    },
    mounted(){
        this.getData();
    }
};

const routes = [
  { path: '/', component: Home },
  { path: '/iscriviti', component: Iscriviti },
  { path: '/bacheca', component: Bacheca },
  { path: '/impara', component: Impara }
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
});

const app = Vue.createApp({});

app.use(router);
app.mount('#app');
  



