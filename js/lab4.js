function start(){
  var form = document.getElementById("directoryForm");
  form.addEventListener('submit', search);
  
  var artistStorage;
  if(localStorage.getItem('artists')){
    artistStorage = JSON.parse(localStorage.getItem('artists'));
    var artistList = document.getElementById("artistList"); 
  
  for(var i=0; i<artistStorage.length; i++){
    var artistItem = document.createElement("li");  
    artistItem.setAttribute("class", "artists");
    var artistPicture = document.createElement("img");
    var divDesc = document.createElement("div");
    let pName = document.createElement("p");  
    let pAbout = document.createElement("p");  
    var deleteButton = createDeleteButton(artistStorage[i].artistName);
    
    pName.setAttribute("class", "name");
    divDesc.style.flexGrow="2";
    divDesc.style.marginLeft="10%"; 
    pAbout.setAttribute("class", "desc");
    
    pName.textContent = artistStorage[i].artistName;
    pAbout.textContent = artistStorage[i].artistAbout;
    artistPicture.setAttribute("src", artistStorage[i].artistURL);
    
    divDesc.appendChild(pName);
    divDesc.appendChild(pAbout); 
    artistItem.appendChild(artistPicture);
    artistItem.appendChild(divDesc);
    artistItem.appendChild(deleteButton);
    artistList.appendChild(artistItem); 
  }    
  }  
}


function add(elem){
   var addForm = document.getElementById("addForm");
  if(addForm.style.display == "none"){
    addForm.style.display = "block";
  } else{
    addForm.style.display="none";
  }
}

function addArtistToCollection(elem){
  var addForm = document.getElementById("addForm");
  addForm.style.display="none";
  var artistList = document.getElementById("artistList");  
  var artistItem = document.createElement("li");  
  artistItem.setAttribute("class", "artists");
  var artistPicture = document.createElement("img");
  var artistName = document.getElementById("addName");
  var artistAbout = document.getElementById("addAbout");
  var artistURL = document.getElementById("addURL");
   
  var divDesc = document.createElement("div");
  var pName = document.createElement("p");  
  var pAbout = document.createElement("p");  
  var deleteButton = createDeleteButton(artistName.value);
 
  addArtistToLocalStorage(artistName.value, artistAbout.value, artistURL.value);
     
  pName.setAttribute("class", "name");
  divDesc.style.flexGrow="2";
  divDesc.style.marginLeft="10%"; 
  pAbout.setAttribute("class", "desc");
  pName.textContent = artistName.value;
  pAbout.textContent = artistAbout.value;
  artistPicture.setAttribute("src", artistURL.value);
  
  divDesc.appendChild(pName);
  divDesc.appendChild(pAbout);
   
  artistItem.appendChild(artistPicture);
  artistItem.appendChild(divDesc);
  artistItem.appendChild(deleteButton);
  artistList.appendChild(artistItem); 
  
  artistName.value="";
  artistAbout.value="";
  artistURL.value="";
}

function deleteArtist(elem){
  var artistIndex=elem.getAttribute("data-index");  
  elem.parentNode.remove();
  var artistStorage = JSON.parse(localStorage.getItem("artists"));
  var found = false;
  for(var i=0; i<artistStorage.length && !found; i++){
    console.log("searching for " + artistIndex);
    if(artistStorage[i].artistName == artistIndex){
        artistStorage.splice(i, 1);
      console.log("spliced");
    }
  }
  localStorage.setItem("artists", JSON.stringify(artistStorage)); 
}

function addArtistToLocalStorage(name, about, url){
   var artistStorage;
  if(localStorage.getItem('artists')){
    artistStorage = JSON.parse(localStorage.getItem('artists'));
  } else{
    artistStorage = [];
  }
  var newArtist={'artistName':name, 'artistAbout':about, 'artistURL':url};
  artistStorage.push(newArtist);
  localStorage.setItem('artists', JSON.stringify(artistStorage));
}

function createDeleteButton(name){
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
  deleteButton.setAttribute("data-index", name);
  
  return deleteButton;
}

function search(elem){
  elem.preventDefault();
  var searchInput = document.getElementById("directInput");
  var artistList = document.getElementById("artistList");
  var allArtists = artistList.querySelectorAll("p.name");
  console.log(searchInput.value);
  console.log(allArtists[0].textContent);
  for(var i=0; i< allArtists.length; i++){
    if(!allArtists[i].textContent.includes(searchInput.value)){
      allArtists[i].parentElement.parentElement.style.display="none";
    } else{
      allArtists[i].parentElement.parentElement.style.display="flex";
    }
  } 
}
