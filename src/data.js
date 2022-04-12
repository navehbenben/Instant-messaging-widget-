
let conversations = [
    {type: "Text", sender: "Alon", reciever: "Moran", content: "hi", date_time: Date('December 17, 2022 03:24:00')},
    {type: "Text", sender: "Moran", reciever: "Alon", content: "hi to you", date_time: Date('December 17, 2022 03:25:01')},
    {type: "Text", sender: "Alon", reciever: "Moran", content: "do you want marvel binge?", date_time: Date('December 17, 2022 03:25:30')},
    {type: "Text", sender: "Moran", reciever: "Alon", content: "sure", date_time: Date('December 17, 2022 03:26:03')},
    {type: "Text", sender: "Alon", reciever: "Moran", content: "Great", date_time: Date('December 17, 2022 03:26:45')},
    {type: "Text", sender: "Alon", reciever: "Moran", content: "see you later", date_time: Date('December 17, 2022 03:27:10')},

    {type: "Text", sender: "Kelly", reciever: "Moran", content: "i need to tell you something", date_time: Date('December 17, 2022 03:24:00')},
    {type: "Text", sender: "Moran", reciever: "Kelly", content: "speak", date_time: Date('December 17, 2022 03:25:01')},
    {type: "Record", sender: "Kelly", reciever: "Moran", content: "", date_time: Date('December 17, 2022 03:25:30')},
    {type: "Record", sender: "Moran", reciever: "Kelly", content: "", date_time: Date('December 17, 2022 03:26:03')},
    {type: "Image", sender: "Kelly", reciever: "Moran", content: "", date_time: Date('December 17, 2022 03:26:45')},
    {type: "Text", sender: "Kelly", reciever: "Moran", content: "woa!", date_time: Date('December 17, 2022 03:27:10')},
]
let users = [
    {user_name: "Alon", nick_name: "Alon11", picture: "", password: "Al1234", contacts: [],messages:[]},
    {user_name: "Moran", nick_name: "MRI111", picture: "", password: "MoraN4321", contacts: []},
    {user_name: "Kelly", nick_name: "kl1", picture: "", password: "987654", contacts: []},
    
]
export default function get_contact_by_nick(params) {
    for (let index = 0; index < contacts.length; index++) {
        const element = contacts[index];
        if (params === element.nick_name) {
            return element;
        }
    }
    return null;
}

export default function get_contacts_conversations(sender, reciever) {
    let conv = [];
    for (let index = 0; index < conversations.length; index++) {
        const element = conversations[index];
        if ((element.sender === sender && element.reciever === reciever)||(element.reciever === sender && element.sender === reciever)){
            conv.push(element);
        }
    }
    conv.sort((a,b) => a.date_time - b.date_time);
    return conv;
    
}



export default function add_contact(params){
    contacts.push(params);
}

export default function add_message(params){
    conversations.push(params);
}

