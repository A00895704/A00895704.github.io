
// $.ajax({
//   url: 'https://randomuser.me/api/',
//   dataType: 'json',
//   success: function(data) {
//     console.log(data);
//     var p = document.getElementById("pic1");
//     p.setAttribute("src", data.results[0].picture.medium);
    
//   }
// });


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
   deleteButton.style.float="right";
   deleteButton.style.display="block";
    pName.textContent = artistName.value;
   pName.setAttribute("class", "name");
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