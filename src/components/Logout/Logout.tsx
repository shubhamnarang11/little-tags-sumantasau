import { useHistory } from 'react-router-dom';
import { CONFIG } from '../../config/Config';
import React, { useContext } from "react";
import FirebaseContext from "../Firebase/Context";



export default function Logout()
{
    const {
        ROUTES: { DEFAULT },
      } = CONFIG

      const firebase = useContext(FirebaseContext);

      firebase
      .doSignOut();

    const history = useHistory();

  
    history.push(DEFAULT);
  

    return (
        <div>logout</div>
    );
}