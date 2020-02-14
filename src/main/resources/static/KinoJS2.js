let arrayet = [];
const utFor = "Må skrive noe inn i Fornavn";
const utEtter = "Må skrive noe inn i Etternavn";
const utTel = "Må skrive noe inn i Telefon";
const utEpost = "Må skrive noe inn i Epost";
const utAnt = "Må skrive noe inn i Antall";

function Usikker() {
    console.log("inne på usikker");
    if (document.getElementById("Antall").value === ""){
         document.getElementById("ant").innerHTML=utAnt;
    }
    if(document.getElementById("Fornavn").value === ""){
        document.getElementById("for").innerHTML=utFor;
    }
    if(document.getElementById("Etternavn").value ===""){
        document.getElementById("etter").innerHTML=utEtter;
    }
    if(document.getElementById("Telefon").value === ""){
        document.getElementById("tel").innerHTML=utTel;
    }
    if (document.getElementById("Epost").value === ""){
        document.getElementById("epo").innerHTML=utEpost;
    }
    else{
        VelgFilm();
        document.getElementById("Antall").value = null;
        document.getElementById("Fornavn").value = null;
        document.getElementById("Etternavn").value = null;
        document.getElementById("Telefon").value = null;
        document.getElementById("Epost").value = null;
    }
}

function VelgFilm() {
    const filmer = document.getElementById("filmer").value;
    const Fornavn = document.getElementById("Fornavn").value;
    const Etternavn = document.getElementById("Etternavn").value;
    const Telefon = document.getElementById("Telefon").value;
    const Epost = document.getElementById("Epost").value;
    const AntallS = document.getElementById("Antall").value;

    let person = {
        Filmer: filmer,
        Fornavn: Fornavn,
        Etternavn: Etternavn,
        Telefon: Telefon,
        Epost: Epost,
        Antall: AntallS
    }

    arrayet.push(person);

    let skalut = "<table><tr>"+
        "<th>Filmer</th><th>Fornavn</th><th>Etternavn</th><th>Telefon</th><th>Epost</th><th>Antall</th>"+"</tr>";

    for(let i=0; i<arrayet.length; i++){
        skalut += "<tr><td>"+arrayet[i].Filmer+"</td><td>"+arrayet[i].Fornavn+"</td><td>"+arrayet[i].Etternavn+
            "</td><td>"+arrayet[i].Telefon+"</td><td>"+arrayet[i].Epost+"</td><td>"+arrayet[i].Antall+"</td>";
    }
    document.getElementById("ut").innerHTML=(skalut);
}

function Slette() {
    let element = document.getElementById("ut");
    element.parentNode.removeChild(element);
    
}



