
var name ="scott";
var myName="jahnava";

myStg = "I "+ myName + " love " + name + ".";


function showNames(){
  console.log(myStg);
  var div = document.createElement("div");
  div.style.width = "50%";
  div.style.height = "50%";
  div.style.margin= "25px";
  div.style.background='url("https://cdn.pixabay.com/photo/2015/08/23/18/51/love-903163_960_720.jpg")';
  div.style.background= 'yellow';
  div.style.textAlign='center';
  div.innerHTML ='meow woof.';

  document.body.appendChild(div);

}





function make_a_div(){
  var div = document.createElement("div");
  div.style.width = "100px";
  div.style.height = "100px";
  div.style.background = "red";
  div.style.color = "white";
  div.style.textAlign = "center";
  div.style.verticalAlign = "middle";
  div.innerHTML = "Hello";

  // add the div to the body of the Document (body tag in index.html file)
  document.body.appendChild(div);

  // you can add any Element to any existing piece of the HTML file.
      // whatever Javascript adds is not ever saved into the html
      //      it happens dynamically so that things can move around and change
      //      based on clicks and actions in the site
      // this next line would be looking to add
      //    the div object to the tag with ID = "main"

  // document.getElementById("main").appendChild(div);
}


// this just adds two "br" line breaks whenever the function is called
function addBlankLine(){
  var div = document.createElement("div");
  div.innerHTML = "<br><br>";
  document.body.appendChild(div);
}


function init(){
    make_a_div();
    addBlankLine();
    make_a_div();

  // this doesn't do anything yet (except logging),
  // but the HTML file automatically calls it
  // whenever the "body" of the document is loaded

console.log("The body of the page has loaded.");

}
