import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

const Update = () => {
    const { id } = useParams()
    const [author, setauthor] = useState();
    const [title, settitle] = useState();
    const [body, setbody] = useState();
    const [isPending, setisPending] = useState(false);
    const history = useHistory();
     // grap the updating blog by id params
    const update_doc = async () => {
        await fetch("http://localhost:8000/blogs/" + id).then((response) => {
            return response.json()
        }).then((respon) => {
            console.log(respon);
            setauthor(respon.Author);// dispaly the data in value input for modify
            setbody(respon.body)
            settitle(respon.title)
        }).catch((err) => console.log(err))

        
    }
    useEffect(() => {
            update_doc()
    }, [id])// chaque passe de l'id
    
    const handlersubmit =async (e) => {
        e.preventDefault();
        // make update
        const Newblog = {
        id:id,
        title: title,
        Author: author,
        body: body,
        };
        setisPending(true);
       await fetch("http://localhost:8000/blogs/"+id,{
          method: "PUT",// like repleace 
          headers: { "content-type": "application/json " },
          body: JSON.stringify(Newblog),
        }).then((respon) => {
            console.log(respon);
          console.log("completed update");
            setisPending(false);
          history.push("/");
        });
    };

     return (
       <div className="forms">
         <h1 style={{ color: "blue" }}>Add New Blog</h1>
         <form onSubmit={handlersubmit}>
           <label htmlFor="">Author</label>
           <input
             className="form-control"
             type="text"
             value={author}
             onChange={(e) => setauthor(e.target.value)}
           />
           <br />

           <label htmlFor="">Tilte</label>
           <input
             className="form-control"
             type="text"
             value={title}
             onChange={(e) => settitle(e.target.value)}
           />
           <br />
           <label htmlFor="">Body</label>
           <input
             className="form-control"
             type="text"
             value={body}
             onChange={(e) => setbody(e.target.value)}
           />
           <br />
           {!isPending && (
             <input
               className="btn btn-primary"
               type="submit"
               value="update"
             />
           )}
           {isPending && (
             <input
               className="btn btn-danger"
               type="submit"
               disabled
               value="Blog loadding..."
             />
           )}
         </form>
       </div>
     );
    
}
export default Update