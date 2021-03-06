# The Burger Joint

## App hosted on Heroku 

  https://mp-noted.herokuapp.com/

### Overview
A Node, Express, Handlebars, and MySQL burger app that lets users input the names of burgers they'd like to eat... and then devour them!
Please check out the launched app on Heroku [here](http://eat-da-burgerz.herokuapp.com/)!


### Functionality
Using an home-grown ORM, the app has 4 basic CRUD functions...
  1. READ all entries from the MySQL database and display them to the DOM using Handlebars.
  2. UPDATE a selected burger by clicking "Devour It", which...
    * hits an `/burger/eat/:id` route in Express to change its "devoured" status in the MySQL database
    * re-routes the webpage back to the index, where the burger is now in the devoured column (via Handlebars)
  3. CREATE a new burger using the "Place Order" form, which...
    * hits a `/burger/create` route in Express to insert a new burger into the MySQL database
    * re-routes the webpage back to the index, where the burger is now ready to be eaten column (via Handlebars)
  4. Delete once the burger is devoured, it can be deleted by clicking the trash button.


### Just for Fun
The app also has a funny "Whine" feature, where random sound effects are played to grieve a devoured burger. This feature uses jQuery click listeners.

Lastly, the app's front-end design uses Bootstrap. This means that your burgers look just as tasty on mobile as they do on desktop. Please see the screenshots below...


### Screenshots
- Desktop View
  * ![Full Size](assets/images/Capture1.PNG)


- Mobile View
  * ![Mobile Size](assets/images/Capture2.PNG)
  
  
  ## Technologies used
- Node.js
- MYSQL NPM Package (https://www.npmjs.com/package/mysql)
- Express NPM Package (https://www.npmjs.com/package/express)


## Built With
* VS Code - Text Editor
* MySQLWorkbench
* Terminal/Gitbash
* Heroku - Hosting

## Authors
* **Manav Patel**
