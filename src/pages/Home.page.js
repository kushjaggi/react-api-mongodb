import React from "react";
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { UserContext } from '../contexts/user.contexts';
 
export default function Home() {
 /*const { logOutUser } = useContext(UserContext);
 
 // This function is called when the user clicks the "Logout" button.
 const logOut = async () => {
   try {
     // Calling the logOutUser function from the user context.
     const loggedOut = await logOutUser();
     // Now we will refresh the page, and the user will be logged out and
     // redirected to the login page because of the <PrivateRoute /> component.
     if (loggedOut) {
       window.location.reload(true);
     }
   } catch (error) {
     alert(error)
   }
 }
*/

 
  return (
    <div className="home">
      <Link className="home-link" to="/nasaphoto" >Welcome !!</Link>
    </div>
  );
}