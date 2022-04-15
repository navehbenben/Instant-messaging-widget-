import React, { useState } from "react";



function PictureUpload(reference) {
    const [selectedFile, setSelectedFile] = useState(null);
    const [bool,setBool] = useState(false);
    let pic = "null";
    if (bool) {
        pic = <image src={selectedFile} height="40" width="40" />
    }

    return (
       
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Click to upload your picture</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
                    <p>
                       <input type="file" class="form-control"  value={selectedFile} onChange={(e) => setSelectedFile(e.target.files[0])}/>
                    </p>
                    
                    
                    

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onClick={setBool(true)}>Save changes</button>
      </div>
    </div>
  </div>

    )
}

export default PictureUpload;