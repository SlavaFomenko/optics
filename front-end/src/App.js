
import styles from './App.module.css'
import UserContext from "./Context/UserContext";
import {useState} from "react";
import Header from "./Components/Header/Header";
import {Route, Routes} from 'react-router-dom';
import Login from "./Components/Authorization/Login/Login";
import Registration from "./Components/Authorization/Registration/Registration";
// import

function App() {
  // const [path,setPath] = useState(null)
  //
  // useEffect(() => {
  //   fetch('/get_image')
  //       .then(r=> r.blob())
  //       .then(data => {
  //         setPath(URL.createObjectURL(data))
  //       })
  // }, []);
    const [user,setUser]=useState(false)
    // const [registerIsOpen,setRegisterIsOpen] = useState(false)

    const successAuthorization = (user) =>{
        setUser(user)
        // setRegisterIsOpen(false)
    }


  return (
    <div className={styles.app}>
        <UserContext.Provider value={{user:user,successAuthorization}}>
            <Routes>
                <Route path='/' element={<Header/>} />
                <Route path='/login' element={<Login />}/>
                <Route path='/registration' element={<Registration/>}/>
            </Routes>
        </UserContext.Provider>
    </div>
  );
}

export default App;
