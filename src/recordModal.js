
function RecordBody(params) {
    return(
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Click to record your audio.</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>
              <button class="btn btn-danger m-2" type="button" id="record">Record</button>
              <button class="btn btn-danger" type="button" id="stopRecord" >Stop</button>
            </p>
            <p>
              <audio id="recordedAudio" controls ></audio>
            </p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
    )
    
}

export default RecordBody;