import React, { useState } from "react";



function PictureUpload(reference) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [bool, setBool] = useState(false);
  var pic = "null";
  if (bool) {
    pic = <image src={selectedFile} height="40" width="40" />
  }


  return (
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Please upload your image.</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">

        <div class="mb-3">
          <label for="formFile" class="form-label">types: jpeg, jpg, png, gif</label>
          <input class="form-control" type="file" id="formFile"/>
        </div>
        

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onClick={reference=selectedFile}>Save changes</button>
      </div>
    </div>

  )
}

export default PictureUpload;