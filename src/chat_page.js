import React from "react";
import PictureUpload from "./picture_upload";
import Modal from "./Modal";
import samp from'./sample1.jpg'
import sa from'./sample2.jpg'
import video from './broll sunset.mp4'
import music from './Swan Lake Ballet (Music).mp3'



class ChatPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {user_name: "Alon", nick_name: "Alon11", picture: sa, password: "Al1234", contacts: [],messages:[],modal: null};
    }

    message(mess) {
        let color = "primary";
        let side = "start";
        if (mess.sender == this.state.user_name) {
            color = "secondary";
            side = "end";
        }
        
        if (mess.type == "Text" || mess.type=="Audio") {
            let d = mess.content;
            if (mess.type=="Audio"){
               d = <audio controls src={mess.content}> </audio>
            }
            return (
                <p class="message">
                <div class="w-100 position-absolute">
                    <div class={`alert alert-${color} p-2 m-3  position-absolute rounded-end ${side}-0 `}>
                        <div class={"text-"+side+" me-3"}>
                            {d}
                            <span class="timenotes align-bottom text-end">{new Date().getHours()+":"+new Date().getMinutes()}</span>
                        </div>
                    </div>
                </div>
                </p>
            );

        }
        if (mess.type == "Image" || mess.type == "Video"){
            let d =  <img src={mess.content} width="300" height="300" class="img-thumbnail" />;
            if (mess.type=="Video"){
                d = <video width="320" height="240" controls>
                    <source src={mess.content} type="video/mp4" />
                    Your browser does not support the video tag.
                    </video>
            }
            return (
                <p class="picture">
                <div class="w-100 position-absolute">
                    <div class={`alert alert-${color} p-2 m-3  position-absolute rounded-end text-${side} ${side}-0 `}>
                       {d}
                       <span class="timenotes align-bottom text-end">{new Date().getHours()+":"+new Date().getMinutes()}</span>
                    </div>
                    
                </div>
                </p>
            );

        }
        return (
            <div />
        )

    }

    contact_bullet(contact) {
        const nickname = "contact.nickname";
        let date = Date("April 11, 2022 01:15:00");
        let lastMessage = "hi";
        let picture = sa;
        return (
            <>
                <a href="#" class="list-group-item list-group-item-action">
                    <div>
                        <img src={picture} alt="" width="30" height="30" class="d-inline-block align-text-top rounded-circle border border-3" />
                        <span class="m-3">
                            {nickname}
                        </span>
                    </div>
                    <div class="d-flex  justify-content-between">
                        <span>
                            {lastMessage}
                        </span>
                        <span>
                            14:50

                        </span>
                    </div>
                </a>
            </>
        )
    }

    profile_bar() {
        return (
            <nav class=" profile navbar navbar-light d-flex justify-content-start">
                <img src={this.state.picture} alt="hi" width="40" height="40" class="d-inline-block align-text-top rounded-circle border border-3 m-1"></img>
                <div class="text-start p-2">{this.state.nick_name}</div>
                <button class="bg-transparent border-0 position-absolute end-0 me-2" data-bs-toggle="modal" data-bs-target="#example">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-plus-fill" viewBox="0 0 16 16">
                        <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                    </svg>
                </button>
            </nav>
        )
    }


    send_form() {
        return (
            <form class="bottom-0 p-4 d-flex justify-content-between position-absolute w-100">
                <input class="col form-control"></input>

                <span class="btn-group" role="group">
                    <button id="btnGroupDrop1" type="button" class="btn btn-primary dropdown-toggle col-auto" data-bs-toggle="dropdown" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-paperclip" viewBox="0 0 16 16">
                        <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z" />
                    </svg></button>
                    <ul class="dropdown-menu border-0 bg-transparent" aria-labelledby="btnGroupDrop1">
                        <button type="button" class="btn btn-danger"data-bs-toggle="modal" data-bs-target="#example" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-image" viewBox="0 0 16 16">
                            <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                            <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
                        </svg></button>
                        <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#example" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-film" viewBox="0 0 16 16">
                            <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z" />
                        </svg></button>
                        <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#example">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mic-fill" viewBox="0 0 16 16">
                            <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
                            <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                        </svg></button>
                    </ul>
                </span>
                <button type="submit" class="col-auto btn btn-success">send</button>
            </form>
        )
    }
    side_bar() {
        return (
            <div class="col-4 bg-light vh-100 p-1">
                {this.profile_bar()}
                <div class="list-group">
                    {this.contact_bullet()}
                    {this.contact_bullet()}
                    {this.contact_bullet()}
                    {this.contact_bullet()}
                </div>
            </div>
        )
    }


    render() {
        return (
            <div class="container">
                <div class="container-fluid">
                    <div class="row align-items-start">
                        {this.side_bar()}
                        <div class="col bg-light vh-100 position-relative">
                            <div class="scroll row position-relative">
                                {this.message({ type: "Text", sender: "Alon", reciever: "Moran", content: "hi", date_time:new Date('December 17, 2022 03:24:00'), })}
                                {this.message({ type: "Text", sender: "Moran", reciever: "Alon", content: "hi to you", date_time:new Date('December 17, 2022 03:25:01'), })}
                                {this.message({type: "Image", sender: "Alon", reciever: "Moran", content: samp, date_time:new Date('December 17, 2022 03:26:45')})}
                                {this.message({ type: "Text", sender: "Alon", reciever: "Moran", content: "hi", date_time: Date('December 17, 2022 03:24:00'), })}
                                {this.message({ type: "Text", sender: "Moran", reciever: "Alon", content: "hi to you", date_time: Date('December 17, 2022 03:25:01'), })}
                                {this.message({type: "Image", sender: "Alon", reciever: "Moran", content: samp, date_time: Date('December 17, 2022 03:26:45')})}
                                {this.message({type: "Video", sender: "Alon", reciever: "Moran", content: video, date_time: Date('December 17, 2022 03:26:45')})}
                                {this.message({type: "Video", sender: "Moran", reciever: "Alon", content: video, date_time: Date('December 17, 2022 03:26:45')})}
                                {this.message({type: "Audio", sender: "Moran", reciever: "Alon", content: music, date_time: Date('December 17, 2022 03:26:45')})}
                            </div>
                            <div class="row">
                            {this.send_form()}
                            </div>
                        </div>
                        
                    
                        <Modal value={this.state.modal}/>
                        
                    </div>
                </div>
            </div>
        );
    }

}

export default ChatPage;
