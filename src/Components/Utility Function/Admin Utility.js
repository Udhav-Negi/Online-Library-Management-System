async function checkUserCred (name, email)
{
    try {
        let res = await fetch('http://localhost:8000/user/check', { // This request is to check the credentials of the user 
            method : "post",
            headers : {
                'Content-type' : 'application/json',
            },
            body : JSON.stringify({name : name, email : email})
        })
        
        res = await res.json();
        return res;
    }
    catch(error)
    {
        // res.json({success : false})
    }
}

async function updateBookCount(book_model, book_id, dec)
{
    try {
        let resp
        if(book_model === "Computer Science")
        {
            resp = await fetch('http://localhost:8000/books/cs', {  
                method : "put",
                headers : {
                    'Content-type' : 'application/json'
                },
                body : JSON.stringify({id : book_id, dec : dec})
            })
                
            resp = await resp.json()
        }
        else if(book_model === "Biotech")
        {
            resp = await fetch('http://localhost:8000/books/bt', {  
                method : "put",
                headers : {
                    'Content-type' : 'application/json'
                },
                body : JSON.stringify({id : book_id, dec : dec})
            })
                
            resp = await resp.json()
        }

        else if(book_model === "Civil Engineering")
        {
            resp = await fetch('http://localhost:8000/books/ce', {  
                method : "put",
                headers : {
                    'Content-type' : 'application/json'
                },
                body : JSON.stringify({id : book_id, dec : dec})
            })
                
            resp = await resp.json()
        }

        else if(book_model === "Electronics and Communication Engineering")
        {
            resp = await fetch('http://localhost:8000/books/ece', {  
                method : "put",
                headers : {
                    'Content-type' : 'application/json'
                },
                body : JSON.stringify({id : book_id, dec : dec})
            })
                
            resp = await resp.json()
        }

        else if(book_model === "Finance")
        {
            resp = await fetch('http://localhost:8000/books/fin', {  
                method : "put",
                headers : {
                    'Content-type' : 'application/json'
                },
                body : JSON.stringify({id : book_id, dec : dec})
            })
                
            resp = await resp.json()
        }

        else if(book_model === "Marketing")
        {
            resp = await fetch('http://localhost:8000/books/mark', {  
                method : "put",
                headers : {
                    'Content-type' : 'application/json'
                },
                body : JSON.stringify({id : book_id, dec : dec})
            })
                
            resp = await resp.json()
        }

        else if(book_model === "Mechanical")
        {
            resp = await fetch('http://localhost:8000/books/me', {  
                method : "put",
                headers : {
                    'Content-type' : 'application/json'
                },
                body : JSON.stringify({id : book_id, dec : dec})
            })
                
            resp = await resp.json()
        }
        return resp;
    } 
    catch (error) {
        
    }
}

async function setBookToAdminAcc(book_model , issued_to , issued_by, image, book_id, student_name, book_name, book_author)
{
    try {
        let resp
        resp = await fetch('http://localhost:8000/admin/setbook', { 
            method : 'post',
            headers : {
                'Content-type' : 'application/json'
            },
            body : JSON.stringify({book_model , issued_to , issued_by, image, book_id, student_name, book_name, book_author})
        }) 

        resp = await resp.json()
        return resp
    } catch (error) {
        
    }
}

export {checkUserCred, updateBookCount, setBookToAdminAcc}