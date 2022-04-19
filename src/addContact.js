import React, { useState } from "react";



function AddContact(reference) {
    const [contact, setContact] = useState();



    return (
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Add new contact.</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">

                <div class="mb-3">
                    <label for="formFile" class="form-label"></label>
                    <input class="form-control" id="formFile" onChange={(event)=>{setContact(event.target.value)}}/>
                </div>


            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" >Close</button>
                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
            </div>
        </div>

    )
}

export default AddContact;