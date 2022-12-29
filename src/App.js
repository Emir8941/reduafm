import { auth, provider } from "./firebase";
import { useDispatch, useSelector} from 'react-redux'

import { setActiveUser, setUserLongoutState, selectUserName, selectUserEmail} from './feutures/userSlice'

function App() {
  const dispatch = useDispatch()
  const userName = useSelector(selectUserName)
  const userEmail = useSelector(selectUserEmail)

  const singInHandler = () => {
    auth.signInWithPopup(provider)
    .then((res) => {
      dispatch(setActiveUser({
        userName: res.user.displayName,
        userEmail: res.user.email
      })) 
    })
  }

  const singOutHandler = () => {
    auth.singOut()
    .then(() => {
      dispatch(setUserLongoutState())
    }).catch((err) => console.log(err.message))
  }

  return (
    <div className="App">
      {
        userName ? (
          <button onClick={singOutHandler}>Sing Out</button>
        ) : (
          <button onClick={singInHandler}>Sing In</button>
        )} ':' exported.
    </div>
  );
}

export default App;
