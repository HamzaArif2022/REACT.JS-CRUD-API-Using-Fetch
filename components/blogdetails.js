import { Link, useHistory, useParams } from "react-router-dom";
import useFetching from "./Custome";

const Blogdetails = () => {
  const { id } = useParams();// catch the id of choosen blog for delete
  const history=useHistory()
  /* reusing file fetching to return the content of blog selected by id */
  const {
    loading,
    Error,
    Data: blog,
  } = useFetching("http://localhost:8000/blogs/" + id);// fetch the specific blog not all 
  // for delete the blog
  const handlerDelete = () => {
    fetch('http://localhost:8000/blogs/'+blog.id, {
      method:'DELETE'
    }).then(() => {
      console.log('comepleted delete')
      history.push('/')// when comepleted delete go back to home page

    })
  
  
  }
 
  return (
    <div className="blog-details">
      {loading && <div>loading...</div>}
      {Error && <div>{Error}</div>}
      {blog && (
        <article>
          <h1>This is Description of :</h1>
          <h3>Title : {blog.title}</h3>
          <h5>Author : {blog.Author}</h5>
          <p>The Body : {blog.body}</p>
          <button onClick={handlerDelete} className='btn btn-danger'>DELETE</button>
          <Link to={`/update/${blog.id}`}>
            <button className="btn btn-success">update</button>
          </Link>
        </article>
      )}
    </div>
  );
};

export default Blogdetails;
