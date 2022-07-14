import React, { useState ,useEffect} from "react";
let logoutTimer;
const AuthContext = React.createContext({
  token: "",
  localid:"",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

const calculatingRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date(expirationTime).getTime();

  const remainingTime = adjExpirationTime - currentTime;

  return remainingTime;
};
const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem("token");
  const storedExpirationDate = localStorage.getItem("expirationTime");
  const storedLocalId=localStorage.getItem("localid")

  const remainingTime = calculatingRemainingTime(storedExpirationDate);
  if (remainingTime <= 60000) {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    localStorage.removeItem("localid");

    return null;
  }

  return { token: storedToken, duration: remainingTime,localid:storedLocalId};
};
export const AuthContextProvider = (props) => {
  const tokenData = retrieveStoredToken();
  let initialToken,initiaLocalId;
  if (tokenData) {
    initialToken = tokenData.token;
    initiaLocalId=tokenData.localid

  }

  const [token, setToken] = useState(initialToken);
  const [localid,setLocalid]=useState(initiaLocalId)
  const userIsLoggedIn = !!token;

  const logoutHandler = () => {
    setToken(null);
    setLocalid(null);
    localStorage.removeItem("token");
    localStorage.removeItem('expirationTime')
    localStorage.removeItem('localid');

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  };
  const loginHandler = (token,localid ,expirationTime) => {
    setToken(token);
    setLocalid(localid)
    localStorage.setItem("localid",localid)
    localStorage.setItem("token", token);
    localStorage.setItem("expirationTime", expirationTime );
    const remainingTime = calculatingRemainingTime(expirationTime);

    logoutTimer = setTimeout(logoutHandler, remainingTime);
  };
  const tokenValue = {
    token: token,
    localid:localid,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  useEffect(() => {
    if (tokenData) {
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }
  }, [tokenData]);
  return (
    <AuthContext.Provider value={tokenValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;