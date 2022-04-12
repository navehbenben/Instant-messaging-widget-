import React from "react";

function header(nickname, image) {
    return (
        <div>
            <image src={image} />
            {nickname}
        </div>

    );

}

function open_chat_list(contacts) {
    for (let index = 0; index < contacts.length; index++) {
        var element = contacts[index];
        if (element.conversations != null) {
            (element.conversations).sort((a, b) => a.date_time - b.date_time);
            this.contact_bullet(element.contact, element.conversations[element.conversations.length - 1]);
        }
        return (<>
        </>);
    }


}

function contact_bullet(contact, last_message) {
    return (
        <div />
    );


}


class ChatPage extends React.Component {
    constructor(props) {
        super(props);
        this.setState(props);
    }

    message(mess){
        return (
            <div class="alert alert-primary p-2 bottom-0" role="alert">
                {mess}
        </div>
        );
    }

    contact_bullet(contact){
        const nickname = "contact.nickname";
        let date = Date("April 11, 2022 01:15:00");
        let lastMessage="hi";
        let picture = "";
        return(
            <>
            <a href="#" class="list-group-item list-group-item-action">
            <img src={picture} alt="" width="30" height="30" class="d-inline-block align-text-top rounded-circle border border-3"/>
                {nickname}
                <p>
                    {lastMessage}
                    </p>
                <span>
                    
                </span>
                </a>
            </>
        )
    }

    profile_bar(){
        return(
            <nav class="navbar navbar-light bg-primary d-flex justify-content-start">
                <img src={this.props.image} alt="" width="40" height="40" class="d-inline-block align-text-top rounded-circle border border-3 m-1" />
                <div class="text-start p-2">Alice Alice</div>
            </nav>
        )
    }

    send_form(){
        return(
            <form class="position-absolute bottom-0 p-3 d-flex justify-content-between">
            <input class="col"></input>

            <span class="btn-group" role="group">
                <button id="btnGroupDrop1" type="button" class="btn btn-primary dropdown-toggle col-auto" data-bs-toggle="dropdown" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-paperclip" viewBox="0 0 16 16">
                    <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z" />
                </svg></button>
                <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                    <li><a class="dropdown-item" href="#">Dropdown link</a></li>
                    <li><a class="dropdown-item" href="#">Dropdown link</a></li>
                </ul>
            </span>
            <button type="submit" class="col-auto btn btn-success">send</button>
        </form>
        )
    }
    side_bar(){
        return(
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
                        <div class="col bg-light vh-100">
                            <div class="d-flex flex-column bd-highlight mb-3 align-items-xxl-stretch">
                               {this.message("hi")}
                            </div>
                            {this.send_form()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default ChatPage;
