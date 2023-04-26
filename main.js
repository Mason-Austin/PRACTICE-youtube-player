const data = [
    {
      videoId: '1Rs2ND1ryYc',
      title: 'Zero to Hero',
      category: 'coding',
      favorite: false,
    },
    {
      videoId: 'jjydMpW47wk',
      title: 'Inspo on JS',
      category: 'coding',
      favorite: true,
    },
];

const renderToDom = (divID, htmlToRender) =>{
  const selectedDiv= document.getElementById(divID)
  selectedDiv.innerHTML=htmlToRender
}

const addVideoModel = () =>{
  console.log("first function works");
  const domString=`
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Add video
  </button>
  
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form id="addForm">
            <div class="form-floating mb-3">
              <input type="text" class="form-control" id="youtubeId" placeholder="YouTube Video ID" required>
              <label for="floatingInput">YouTube Video ID</label>
            </div>

            <div class="form-floating mb-3">
              <input type="text" class="form-control" id="title" placeholder="Title" required>
              <label for="floatingInput">Title</label>
            </div>

            <select id="categorySelector" class="form-select" aria-label="Default select example">
              <option selected>Open this select menu</option>
              <option value="Critical Role">Critical Role</option>
              <option value="Coding">Coding</option>
              <option value="Cars">Cars</option>
            </select>

            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="">
              <label class="form-check-label" for="inlineCheckbox1">Favorite</label>
            </div>
            <footer></footer>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-primary">Submit</button>
            </footer>
          </form>
        </div>
      </div>
    </div>
  </div>`
  renderToDom("addVideoContainer", domString)
}

 const vidPlayer= (videoID) =>{
  const video=videoID
  let domstring=`<iframe width="420" height="315"
    src="https://www.youtube.com/embed/${video}">
  </iframe>`
  renderToDom("videoPlayer", domstring)
 }

const filterBtns = () => {
  const domString = `
  <button type="button" class="btn btn-primary" id="roleBtn">Criticle Role</button>
  <button type="button" class="btn btn-primary" id="codingBtn">Coding</button>
  <button type="button" class="btn btn-primary" id="carsbtn">Cars</button>
  <button type="button" class="btn btn-primary" id="favBtn">Favorites</button>
  <button type="button" class="btn btn-primary" id="clearBtn">Clear Filters</button>`
  renderToDom("filterContainer", domString)
}

const videoCards= (array) =>{
  let domString=``
  array.forEach(video => {

    domString+=`
    <div class="card ${video.favorite}">
      <div class="card-body">
        <img src="https://i.ytimg.com/vi/HFTvaOjWk2c/maxresdefault.jpg" width="200px">
        <div>
          <h5>${video.title}</h5>
          <h6>Category:${video.category}</h6>
          <button id="watchBtn">Watch Video</button>
        </div>
        <button>Delete</button>
      </div>
    </div>`

    // videoId: 'jjydMpW47wk',
    //   title: 'Inspo on JS',
    //   category: 'javascript',
    //   favorite: true,
    
  });
  renderToDom("cardContainer",domString)

}

const filter = (array, typeString) => {
  const typeArray=[]
  for (const video of array){
    if (video.category===typeString)
    typeArray.push(video)

  }
  return typeArray
}

let startApp = () =>{
  addVideoModel();
  filterBtns();
  videoCards(data);
  vidPlayer(data[0].videoId);
}
startApp()

const critRoleBtn = document.getElementById("roleBtn")
const codeBtn = document.getElementById("codingBtn")
const carBtn = document.getElementById("carsbtn")
const favBtn = document.getElementById("favBtn")
const clearBtn = document.getElementById("clearBtn")
const mainForm = document.getElementById("addForm")

critRoleBtn.addEventListener("click", () =>{
  const critRoleVideos=filter(data,"Critical Role")
  videoCards(critRoleVideos)
} )

codeBtn.addEventListener("click", () => {
  const codingVideos=filter(data,"coding")
  videoCards(codingVideos)
})

carBtn.addEventListener("click", () => {
  const carVideos=filter(data,"car")
  videoCards(carVideos)
})

clearBtn.addEventListener("click", () => {
  videoCards(data)
})

favBtn.addEventListener("click", () => {
  const favArry=[]
  for (const video of data) {
    if (video.favorite===true) {
      favArry.push(video)
    }
  }
  videoCards(favArry)
})

mainForm.addEventListener("submit", () => {
  console.log("functinwork")
  data.push({
    videoId : document.getElementById("youtubeId").value,
    title: document.getElementById("title").value,
    category: document.getElementById("categorySelector").value,
    favorite:d
  })
  videoCards(data)
})
