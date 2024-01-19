## <mark>System Requirements to run the Project </mark>
1. Install VS Code.
2. Install Mongodb compass
3. Install nodejs 

## <mark>Commands to run the project</mark>
1. npm install
2. npm run both 

## <mark>Details of the project</mark>
 1. <mark>FrontEnd</mark>
* The User Interface of the project is created in  Reactjs. It consist of classification of all the books according to their field and supports features like addition of book into any department by the admin , books return to the library and logout.

* The admin of the library can see all the books issued by the user.

2. <mark>Backend </mark>
* Backend handling of this project is performed in nodejs and it supports features like issuing of books by the user, returning books to the library, and managing all the databases.

3. <mark>Database</mark>
* The database of this application is created by mongodb. It has 3 database namely Books_management, Issued_Book, Library_Managemen.

* Books_Management database stores all the books which are fetched from the third party api, and all the books are stored in 7 different collections according to their related fields. The name of the collections is Computer Science,Electronics and Communication, Civil Engineering, Mechanical Engineering Biotechnology, Finance and Marketing.

* Issued_Book database store  all the information reagrding the books issued by the user and the admin who has issued that book.

* Library_Management databse stores all the credentials of the user and admin. Credentials of the user and admin are stored in the book_issued_by_admins and book_issued_to_users collection respectively.

* The library_management databse is created in such a way so that no two users can have same username and email and no two admins can have same username and email.


