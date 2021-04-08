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
let catObj = JSON.parse("cats")

//create the header and section
makeHeader(catObj)
makeHeader(catObj)

function makeHeader(obj){
  const H1 = document.createElement("h1");
  //H1.title === obj['title']
  H1.textContent = obj.title;
}

function makeSection(obj){

}