/* 
Auth terminology
-------------------
"Register" or "Sign up" [First time create a user account]
"log in" or "sign in" [Already you have a user account created]
*/

/* 
    get form value:
    1. set form onSubimtHandler
    2. ser event paramiter
    3. value = event.target.email.value;
*/

/* 
AUTH SET UP
1. create  firebase projects
2. enable web
3. enable sign in method
4. install firebase
5. get firebase config in your firebase.config.js
6. export app from firebase.config.js file
*/

/* 
1. create UserContext (Auth Context): UserContext --> component name
UserContext provides AuthContext;

2. Create AuthContext
3. set AuthContext.Provider
4. Make sure your set the children
5. export authContext to be used inside useContext hook
6. get form data
7. get auth in UseContext
*/
