
function add(elem){
    var addForm = document.getElementById("addForm");
   if(addForm.style.display != "none"){
     addForm.style.display = "none";
   } else{
     addForm.style.display="block";
   }
 }
 
 function addArtistToCollection(elem){
   var addForm = document.getElementById("addForm");
   addForm.style.display="none";
   var artistList = document.getElementById("artistList");  
   var artistItem = document.createElement("li");  
   artistItem.setAttribute("class", "artists");
   var artistPicture = document.createElement("img");
   var artistURL = document.getElementById("addURL");
    
   var divDesc = document.createElement("div");
   var pName = document.createElement("p");
   var pAbout = document.createElement("p");
   var artistName = document.getElementById("addName");
   var artistAbout = document.getElementById("addAbout");
   var deleteButton = document.createElement("button");
   
   deleteButton.setAttribute("type", "button");
   deleteButton.setAttribute("onclick", "deleteArtist(this)");
   deleteButton.textContent="Delete";
   deleteButton.style.backgroundColor="red";
   deleteButton.style.border="none";
   deleteButton.style.textAlign="center";
   deleteButton.style.borderRadius="5px";
   deleteButton.style.color="white";
  
   deleteButton.style.display="block";
   deleteButton.style.padding="10px";
    pName.textContent = artistName.value;
   pName.setAttribute("class", "name");
   divDesc.style.flexGrow="2";
   divDesc.style.marginLeft="10%";
    pAbout.textContent = artistAbout.value;
    pAbout.setAttribute("class", "desc");
    
    divDesc.appendChild(pName);
    divDesc.appendChild(pAbout);
    
    artistPicture.setAttribute("src", artistURL.value);
    artistItem.appendChild(artistPicture);
    artistItem.appendChild(divDesc);
    artistItem.appendChild(deleteButton);
    artistList.appendChild(artistItem); 
 }
 
 function deleteArtist(elem){
   elem.parentNode.remove();
 }