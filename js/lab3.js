function add(elem){
    var addForm = document.getElementById("addForm");
   if(addForm.style.display != "none"){
     addForm.style.display = "none";
   } else{
     addForm.style.display="block";
   }
   // document.getElementById("add").style.display="none";
   //alert("Yes you clicked it");
 
 }
 
 function addArtistToCollection(elem){
   var addForm = document.getElementById("addForm");
   addForm.style.display="none";
   var artistList = document.getElementById("artistList");  
   var artistItem = document.createElement("li");
   
   var artistPicture = document.createElement("img");
   var artistURL = document.getElementById("addURL");
    
   var divDesc = document.createElement("div");
   var pName = document.createElement("p");
   var pAbout = document.createElement("p");
   var artistName = document.getElementById("addName");
   var artistAbout = document.getElementById("addAbout");
   pName.textContent = artistName.Value;
   pAbout.textContent = artistAbout.Value;
   
   divDesc.appendChild(pName);
   divDesc.appendChild(pAbout);
   
   artistPicture.setAttribute("src", artistURL.Value);
   artistList.appendChild(artistItem);
   artistList.appendChild(divDesc);
 }