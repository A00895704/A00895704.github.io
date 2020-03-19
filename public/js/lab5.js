//submits form button
const addBtn = document.getElementById('addArtist');
//display form button
const addFormButton = document.getElementById('displayAddForm');
//add form
const addForm = document.getElementById('addForm');

addFormButton.addEventListener('click', ()=>{
  if(addForm.style.display ==="none"){
    addForm.style.display = "block";
  } else{
    addForm.style.display = "none";
  }
});





// var artistStorage={};

// getArtistsFromText().then(data=>{
//     console.log(data);
//     artistStorage = data;
//     start();
// });

// function start(){
//   var form = document.getElementById("directoryForm");
//   form.addEventListener('submit', event => { event.preventDefault(); search(); });
  
//   if(artistStorage.length >0){    
//     var artistList = document.getElementById("artistList"); 
  
//   for(var i=0; i<artistStorage.length; i++){
//     var artistItem = document.createElement("li");  
//     artistItem.setAttribute("class", "artists");
//     var artistPicture = document.createElement("img");
//     var divDesc = document.createElement("div");
//     let pName = document.createElement("p");  
//     let pAbout = document.createElement("p");  
//     var deleteButton = createDeleteButton(artistStorage[i].artistName);
    
//     pName.setAttribute("class", "name");
//     divDesc.style.flexGrow="2";
//     divDesc.style.marginLeft="10%"; 
//     pAbout.setAttribute("class", "desc");
    
//     pName.textContent = artistStorage[i].artistName;
//     pAbout.textContent = artistStorage[i].artistAbout;
//     artistPicture.setAttribute("src", artistStorage[i].artistURL);
    
//     divDesc.appendChild(pName);
//     divDesc.appendChild(pAbout); 
//     artistItem.appendChild(artistPicture);
//     artistItem.appendChild(divDesc);
//     artistItem.appendChild(deleteButton);
//     artistList.appendChild(artistItem); 
//   }    
//   }  
// }


// function add(){
//    var addForm = document.getElementById("addForm");
//   if(addForm.style.display){
//     addForm.style.display=((addForm.style.display!='none')?'none':'block'); 
//   } else{
//     addForm.style.display='block';
//   }
// }

// function addArtistToCollection(elem){
//   var addForm = document.getElementById("addForm");
//   addForm.style.display="none";
//   var artistList = document.getElementById("artistList");  
//   var artistItem = document.createElement("li");  
//   artistItem.setAttribute("class", "artists");
//   var artistPicture = document.createElement("img");
//   var artistName = document.getElementById("addName");
//   var artistAbout = document.getElementById("addAbout");
//   var artistURL = document.getElementById("addURL");
   
//   var divDesc = document.createElement("div");
//   var pName = document.createElement("p");  
//   var pAbout = document.createElement("p");  
//   var deleteButton = createDeleteButton(artistName.value);
//   var newArtist={'artistName':artistName.value, 'artistAbout':artistAbout.value, 'artistURL':artistURL.value};
//   artistStorage.push(newArtist);
//   saveArtistsToText();
     
//   pName.setAttribute("class", "name");
//   divDesc.style.flexGrow="2";
//   divDesc.style.marginLeft="10%"; 
//   pAbout.setAttribute("class", "desc");
//   pName.textContent = artistName.value;
//   pAbout.textContent = artistAbout.value;
//   artistPicture.setAttribute("src", artistURL.value);
  
//   divDesc.appendChild(pName);
//   divDesc.appendChild(pAbout);
   
//   artistItem.appendChild(artistPicture);
//   artistItem.appendChild(divDesc);
//   artistItem.appendChild(deleteButton);
//   artistList.appendChild(artistItem); 
  
//   artistName.value="";
//   artistAbout.value="";
//   artistURL.value="";
// }

// async function deleteArtist(elem){
//   var artistIndex=elem.getAttribute("data-index");
//   var found = false;
//   try{
//     await deleteArtistsFromText(artistIndex);
//     for(var i=0; i<artistStorage.length && !found; i++){
//       console.log("searching for " + artistIndex);
//       if(artistStorage[i].artistName == artistIndex){
//           artistStorage.splice(i, 1);
//         console.log("spliced");
//       }
//     }
//     elem.parentNode.remove();
//   } catch (err){
//     console.log(err);
//   } 
// }

// async function saveArtistsToText(){
//   try{
//     let res = await fetch('/artistList', {
//       method: 'POST',
//       headers:{
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(artistStorage)
//     });
//     console.log(res);
//   }catch(err){
//     console.log(err);
//   }
// }

// async function deleteArtistsFromText(artistIndex){
//   return new Promise(async(resolve, reject)=>{
//     try{
//       let res = await fetch(`/artistList/${artistIndex}`, {
//         method: 'DELETE',
//         headers:{
//           'Content-Type': 'application/json'
//         },
        
//       });
//       console.log(res);
//       if(!res.ok) throw res;
//       resolve(res);
//     }catch(err){
//       console.log(err);
//       reject(err);
//     }
//   });
// }

// async function getArtistsFromInput(name){
//   return new Promise(async(resolve, reject) =>{
//     try{
//         let res = await fetch(`/artistList/${name}`, {
//           method:'GET',
//           headers:{
//             'Content-Type': 'application/json'
//           }
//         });
//         if(!res.ok) throw res;
//         var data = await res.json();
//         resolve(data);
//     } catch(err){
//       console.log(err);
//       reject(err);
//     }
//   });
// }

// async function getArtistsFromText(){
//   try{
//     var res = await fetch('/artistList', {
//       method: 'GET',
//       headers:{
//         'Content-Type': 'application/json'
//       }
//     });
//      var data = await res.json();
//      return data;
//   }catch(err){
//     console.log(err);
//   }
// }

// function createDeleteButton(name){
//   var deleteButton = document.createElement("button");
//   deleteButton.setAttribute("type", "button");
//   deleteButton.setAttribute("onclick", "deleteArtist(this)");
//   deleteButton.textContent="Delete";
//   deleteButton.style.backgroundColor="red";
//   deleteButton.style.border="none";
//   deleteButton.style.textAlign="center";
//   deleteButton.style.borderRadius="5px";
//   deleteButton.style.color="white";
//   deleteButton.style.display="block";
//   deleteButton.style.padding="10px";
//   deleteButton.setAttribute("data-index", name);
  
//   return deleteButton;
// }

// function search(){
//   var searchInput = document.getElementById("directInput");
//   var artistList = document.getElementById("artistList");
//   var allArtists = artistList.querySelectorAll("p.name");
//   if(searchInput.value !== ""){
//     getArtistsFromInput(searchInput.value).then(data=>{
//       console.log(data);
//         for(var i=0; i< allArtists.length; i++){
//           for(var j=0; j< data.length; j++){
//             if(!allArtists[i].textContent.includes(data[j].artistName)){
//               allArtists[i].parentElement.parentElement.style.display="none";
//             } else{
//               allArtists[i].parentElement.parentElement.style.display="flex";
//             }
//           }    
//      } 
//     });
//   } else{
//     alert("No search parameters found.");
//     for(var i=0; i<allArtists.length; i++){
//       allArtists[i].parentElement.parentElement.style.display="flex";
//     }
//   }
  
// }


