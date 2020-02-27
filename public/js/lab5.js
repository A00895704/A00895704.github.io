var artistStorage={};

artistStorage = getArtistsFromText().then(data=>{
  artistStorage = data;
  start();
})

function start(){
  var form = document.getElementById("directoryForm");
  form.addEventListener('submit', event => { event.preventDefault(); search(); });
  
  if(artistStorage.length >0){    
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


function add(){
   var addForm = document.getElementById("addForm");
  if(addForm.style.display){
    addForm.style.display=((addForm.style.display!='none')?'none':'block'); 
  } else{
    addForm.style.display='block';
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
  var newArtist={'artistName':artistName.value, 'artistAbout':artistAbout.value, 'artistURL':artistURL.value};
  artistStorage.push(newArtist);
  saveArtistsToText();
     
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
  var found = false;
  for(var i=0; i<artistStorage.length && !found; i++){
    console.log("searching for " + artistIndex);
    if(artistStorage[i].artistName == artistIndex){
        artistStorage.splice(i, 1);
      console.log("spliced");
    }
  }
  saveArtistsToText();
}

async function saveArtistsToText(){
  try{
    let res = await fetch('/artistList', {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(artistStorage)
    });
    console.log(res);
  }catch(err){
    console.log(err);
  }
}

async function getArtistsFromText(){
  try{
    var res = await fetch('/artistList', {
      method: 'GET',
      headers:{
        'Content-Type': 'application/json'
      }
    });
     var data = await res.json();
     return data;
  }catch(err){
    console.log(err);
  }
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

function search(){
  var searchInput = document.getElementById("directInput");
  var artistList = document.getElementById("artistList");
  var allArtists = artistList.querySelectorAll("p.name");
  for(var i=0; i< allArtists.length; i++){
    if(!allArtists[i].textContent.toUpperCase().includes(searchInput.value.toUpperCase())){
      allArtists[i].parentElement.parentElement.style.display="none";
    } else{
      allArtists[i].parentElement.parentElement.style.display="flex";
    }
  } 
}
