# Officebarista frontend description
# About
The graphical user interface of this project was made with ionic, an open source web framework for creating hybrid apps and progressive web apps based on HTML5, CSS, Sass and JavaScript / TypeScript. It is based on AngularJS and Apache Cordova.
Frontend
Die GUI is the intermediate between the user and the backend.  It allows specific users to access or/and modify specific data. Users are classified into two categories: normal user and admin. Depending on user rule, there are different possibilities:

# Every user can:
-	Login                               
-	Logout
-	Order coffee
-	See the bill of all ordered coffee
-	Save favorit
-	Read NFC tags

# Admin can also:
-	Register a new user
-	Add and modify materials
-	Add and modify users (including blocking users)
  
  
 # Normal user’s view                                  

![user](https://github.com/gauggelb/Officebarista/blob/master/frontend/README/user.png)                
                                                                                                            
# Admin’s view                                                                                                       
                                                                                                            
![Admin](https://github.com/gauggelb/Officebarista/blob/master/frontend/README/admin.png)                                  

# App-Views
Every app-view is a page including three types of files:  html, typescript and css. 
 
The Html document contains the elements (fields, labels, …) and values which will be outputted
The Typescript document can implement page’s functions, send variables to the html and call provider’s functions 
The css document is responsible of the style which will be applied to the html

                                      
![pages](https://github.com/gauggelb/Officebarista/blob/master/frontend/README/pages.png)     

# Providers
Providers are services, which use http calls within functions in order to transport data from the pages to the backend and from the backend to the pages. 
                                      
![providers](https://github.com/gauggelb/Officebarista/blob/master/frontend/README/providers.png)         

