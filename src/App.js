import Register from "./register";
import ChatPage from "./chat_page";
import Form from "./register1";
import Modal from "./Modal"
import PictureUpload from "./picture_upload";
import SignUp from "./signup";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <ChatPage />
    // <Router>
      
    //     <Routes>
          
    //       <Route exact path="/" element={<SignUp bool={false}/>}/>
    //       <Route exact path="/login" element={<Form/>}/>
    
    //     </Routes>
      
    // </Router>

  );
}

export default App;
