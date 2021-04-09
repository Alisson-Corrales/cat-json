"use strict";

let cats = `{
    "title": "Cat Families",
    "intro": "This is a list of cats and their mother that we are breeding. If you are interested in adopting please contact us",
    "cats": [
      {
        "name": "Lindy",
        "breed": "Cymric",
        "color": "white",
        "kittens": [
          {
            "name": "Percy",
            "gender": "m"
          },
          {
            "name": "Thea",
            "gender": "f"
          },
          {
            "name": "Annis",
            "gender": "f"
          }
        ]
      },
      {
        "name": "Mina",
        "breed": "Aphrodite Giant",
        "color": "ginger",
        "kittens": [
          {
            "name": "Doris",
            "gender": "f"
          },
          {
            "name": "Pickle",
            "gender": "f"
          },
          {
            "name": "Max",
            "gender": "m"
          }
        ]
      },
      {
        "name": "Antonia",
        "breed": "Ocicat",
        "color": "leopard spotted",
        "kittens": [
          {
            "name": "Bridget",
            "gender": "f"
          },
          {
            "name": "Randolph",
            "gender": "m"
          }
        ]
      }
    ]
 }`
  
//creates a header and section to work with here
let header = document.getElementById('header') 
let section = document.getElementById('section') 
//this turns the array into a object
let catObj = JSON.parse(cats)



//⭐ create the header and section ⭐
makeHeader(catObj)
makeSection(catObj)


//⭐ makes the header ⭐
function makeHeader(obj){
  const H1 = document.createElement("h1");
  //obj.title === obj["title"]
  H1.textContent = obj.title;
  header.appendChild(H1);

  const H2 = document.createElement("h2")
  H2.textContent = obj.intro
  header.appendChild(H2)
}

//⭐ makes the section ⭐
function makeSection(obj){
  const CATS = obj["cats"];
  
  for(let cat in CATS){
    const ARTICLE = document.createElement("article");
    const H3 = document.createElement("h3");
    const P1 = document.createElement("p");
    const P2 = document.createElement("p");
    const P3 = document.createElement("p");
    const LIST = document.createElement("dl")

    //⭐ outputs the information names, breed, and color ⭐
    H3.textContent = CATS[cat]['name'];
    P1.textContent = `Breed: ${CATS[cat]["breed"]}`;
    P2.textContent = `Color: ${CATS[cat]["color"]}`;
    P3.textContent = `Kittens:`;

    //⭐ this loops through the list and grabs and outputs the listed kittens ⭐
    const KITTEN = CATS[cat]["kittens"];
    //makes the list items and dd
    for(let kits in KITTEN){
      const ITEMS = document.createElement("li");
      const DESC = document.createElement("dd")
      ITEMS.textContent = KITTEN[kits]["name"]
      DESC.textContent = `- ${KITTEN[kits]["gender"]}`
      LIST.appendChild(ITEMS)
      LIST.appendChild(DESC)
    }

    //outputs the text
    ARTICLE.appendChild(H3);
    ARTICLE.appendChild(P1);
    ARTICLE.appendChild(P2);
    ARTICLE.appendChild(P3);
    ARTICLE.appendChild(LIST);

    //puts everything in the section
    section.appendChild(ARTICLE)
  }
}