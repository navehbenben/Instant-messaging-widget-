import React from "react";
import PictureUpload from "./picture_upload";
import RecordBody from "./recordModal";
import VideoUpload from "./videoUpload";
import AddContact from "./addContact";




function Modal(reference) {
  let title = "hi";
  if (reference.value==="record"){
    title = "Click to record audio."
  }
  if (reference.value==="picture"){
    title = "Click to upload your picture."
  }
  if (reference.value==="video"){
    title = "Click to upload your video."
  }
  

  return (

    <div class="modal fade" id="example" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <AddContact/>
      </div>
    </div>

  )
}

export default Modal;