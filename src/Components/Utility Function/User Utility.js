async function getBooksIssuedToUser(issued_to)
{
    try {
        let res = await fetch('http://localhost:8000/user/detail', {
            method : "post",
            headers : {
                'Content-type' : 'application/json'
            },
            body : JSON.stringify({issued_to})
        })
        res = await res.json();
        return res;
    } catch (error) {
        
    }
}

async function setBookToUserAcc(book_model , issued_to , issued_by, image, book_id, admin_name, book_name, book_author)
{
    try {
        let resp
        resp = await fetch('http://localhost:8000/user/setbook', { 
            method : 'post',
            headers : {
                'Content-type' : 'application/json'
            },
            body : JSON.stringify({book_model , issued_to , issued_by, image, book_id, admin_name, book_name, book_author})
        }) 

        resp = await resp.json()
        return resp
    } catch (error) {
        
    }
}

export {getBooksIssuedToUser}
export default setBookToUserAcc