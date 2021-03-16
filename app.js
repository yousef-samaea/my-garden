let allFlowers=[];

let submitBtn= document.getElementById("submit");
let table=document.getElementById("flowerTable");
let form = document.getElementById("flowerForm");
let clear = document.getElementById("clear");

if(JSON.parse(localStorage.getItem('allFlowers'))){
    allFlowers= JSON.parse(localStorage.getItem('allFlowers')) || [];
    if(allFlowers != []){
        tableHead();
        tableContent();
    }
}

function Flower(name, image, season){
    this.name=name;
    this.image=image;
    this.season=season;
    allFlowers.push(this);
    localStorage.setItem("allFlowers", JSON.stringify(allFlowers));
}

function tableHead(){
    let tr=document.createElement('tr');
    table.appendChild(tr);
    let th1= document.createElement('th');
    th1.textContent="# image";
    tr.appendChild(th1);

    let th2= document.createElement('th');
    th2.textContent="name";
    tr.appendChild(th2);

    let th3= document.createElement('th');
    th3.textContent="season";
    tr.appendChild(th3);
}

function tableContent(){
    for(let i = 0; i<allFlowers.length; i++){
        let tr1=document.createElement('tr');
        table.appendChild(tr1);

        let td1 = document.createElement('td');
        let imgSrc = `./img/${allFlowers[i].image}.jpeg`;
        td1.innerHTML=`<img src=${imgSrc} />`;
        tr1.appendChild(td1);

        let td2 = document.createElement('td');
        td2.textContent= allFlowers[i].name;
        tr1.appendChild(td2);
        
        let td3 = document.createElement('td');
        td3.textContent= allFlowers[i].season;
        tr1.appendChild(td3);
    }
}

form.addEventListener('submit', handleSubmit);

function handleSubmit(event){
    event.preventDefault();
    let name=event.target.name.value;
    let image = event.target.image.value;
    let season = event.target.season.value;

    new Flower(name, image, season);
    table.textContent='';
    tableHead();
    tableContent();
}

clear.addEventListener('click', hanleClear);

function hanleClear(){
    allFlowers=[];
    localStorage.clear();
    console.log(JSON.parse(localStorage.getItem('allFlowers')))
    // localStorage.removeItem("allFlowers");
    table.innerHTML="";
}
