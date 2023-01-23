import { Link } from "react-router-dom"

export const Blog= (props) => {
    const blogs=props.obj //catch  the content object blogs {....} throught the home page
   
    return (
      <div>
        {blogs.map((ele) => (
          <div className="logs" key={ele.id}>
            {/*     use the link surounded on h1,p when we click on the blogs we send  the id of blog throught the url  */}
            <Link to={`/blog/${ele.id}`}>{/*  when we click send the id of the element */}
              <h1 className="head-autor"> {ele.Author}</h1>
              <p>{ele.title}</p>
            </Link>
            
          </div>
        ))}
      </div>
    );}
        

 
