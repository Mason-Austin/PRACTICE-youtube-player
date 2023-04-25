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

          <p>Wow</p>

        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>`
  renderToDom(addVideoContainer, domString)
}

addVideoModel();
