import { createContext, useState } from "react";

export const AuthContext =createContext();


function AppContextProvider({children}) {

    // const [authState, setauthState] = useState({
    //     isAuth: true,
    //     token: null
    //   });
    const [isAuth,setIsAuth]=useState(false)
    const [token,setToken]=useState(null)
    
      function loginUser(tokenData) {
        setIsAuth(true)
        setToken(tokenData)
      }
      function logoutUser() {
        setIsAuth(false)
        setToken(null)
      }
    
      return (
        <AuthContext.Provider value={{ isAuth,token, loginUser, logoutUser }}>
          {children}
        </AuthContext.Provider>
      );




}

export default AppContextProvider;
