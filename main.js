const data = [
    {
      videoId: 'cNjIUSDnb9k',
      title: 'Callbacks',
      category: 'javascript',
      favorite: true,
    },
    {
      videoId: 'f02mOEt11OQ',
      title: 'Chill Beats',
      category: 'music',
      favorite: false,
    },
    {
      videoId: 'PlxWf493en4',
      title: 'How to Make a Super Simple Website',
      category: 'html',
      favorite: false,
    },
    {
      videoId: '1PnVor36_40',
      title: 'Learn CSS in 20 Minutes',
      category: 'css',
      favorite: true,
    },
    {
      videoId: '1Rs2ND1ryYc',
      title: 'Zero to Hero',
      category: 'css',
      favorite: false,
    },
    {
      videoId: 'jjydMpW47wk',
      title: 'Inspo on JS',
      category: 'javascript',
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

          <div class="form-floating mb-3">
            <input type="text" class="form-control" id="youtubeId" placeholder="YouTube Video ID" required>
            <label for="floatingInput">YouTube Video ID</label>
          </div>

          <div class="form-floating mb-3">
            <input type="text" class="form-control" id="title" placeholder="Title" required>
            <label for="floatingInput">Title</label>
          </div>

          <select class="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">Critical Role</option>
            <option value="2">Coding</option>
            <option value="3">Cars</option>
          </select>

          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
            <label class="form-check-label" for="inlineCheckbox1">Favorite</label>
          </div>

        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>`
  renderToDom("addVideoContainer", domString)
}

 const vidPlayer= () =>{
  let domstring=`<iframe width="420" height="315"
    src="https://www.youtube.com/embed/tgbNymZ7vqY">
  </iframe>`
  renderToDom("videoPlayer", domstring)
 }

const filterBtns = () => {
  const domString = `
  <button type="button" class="btn btn-primary">Criticle Role</button>
  <button type="button" class="btn btn-primary">Codeing</button>
  <button type="button" class="btn btn-primary">Cars</button>
  <button type="button" class="btn btn-primary">Favorites</button>
  <button type="button" class="btn btn-primary">Clear Filters</button>`
  renderToDom("filterContainer", domString)
}

const videoCards= () =>{
  let domString=``
  data.forEach(video => {

    domString+=`
    <div class="card">
      <div class="card-body">
        <img src="https://i.ytimg.com/vi/HFTvaOjWk2c/maxresdefault.jpg" width="200px">
        <div>
          <h5>${video.title}</h5>
          <h6>Category:${video.category}</h6>
          <button>Watch Video</button>
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

let startApp = () =>{
  addVideoModel();
  filterBtns();
  videoCards();
  vidPlayer();
}

startApp()
