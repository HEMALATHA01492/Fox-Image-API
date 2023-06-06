let contDiv=document.createElement('div');
contDiv.setAttribute('class','containerMain');

let headDiv=document.createElement('div');
headDiv.setAttribute('class','container-head');

let h1DIV=document.createElement('h1');
h1DIV.setAttribute('class','heading');
h1DIV.innerText='Random pictures of foxes';
headDiv.appendChild(h1DIV);
contDiv.appendChild(headDiv);

let contentDIV=document.createElement('div');
contentDIV.setAttribute('class','container-content');
let content=document.createElement('ol');
content.setAttribute('class','list');
contentDIV.appendChild(content);
contDiv.appendChild(contentDIV);

document.body.appendChild(contDiv);

//Fetching Data from api

let randomFox = () => {
    for(let i=1; i<106 ; i++){
        let url=`https://randomfox.ca//images//${i}.jpg`
        
        let fox =`<li class='card'>
                  <img src='${url}' alt='image' class='image'>
                  </li>`
        content.innerHTML += fox;
        console.log(fox);
    }
}

randomFox();