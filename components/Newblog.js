import { useState } from "react";
import { useHistory } from "react-router-dom";
import "../index.css";
const Newblog = () => {
  const [author, setauthor] = useState();
  const [title, settitle] = useState();
  const [body, setbody] = useState();
  const [isPending, setisPending] = useState(false);
  const history = useHistory();
  const handlersubmit = (e) => {
      e.preventDefault();
      console.log(Math.floor(Math.random(1, 100)*10+1));
    const Newblog = {
      id: Math.floor(Math.random(1,100)),
      title: title,
      Author: author,
      body: body,
    };
    setisPending(true);
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "content-type": "application/json " },
      body: JSON.stringify(Newblog)
    }).then(() => {
      console.log("completed");
        setisPending(false);
        history.push('/')
    });
  };

  return (
    <div className="forms">
      <h1 style={{ color: "blue" }}>Add New Blog</h1>
      <form action="" onSubmit={handlersubmit}>
        <label htmlFor="">Author</label>
        <input
          className="form-control"
          type="text"
          onChange={(e) => setauthor(e.target.value)}
        />
        <br />

        <label htmlFor="">Tilte</label>
        <input
          className="form-control"
          type="text"
          onChange={(e) => settitle(e.target.value)}
        />
        <br />
        <label htmlFor="">Body</label>
        <input
          className="form-control"
          type="text"
          onChange={(e) => setbody(e.target.value)}
        />
        <br />
        {!isPending && (
          <input type="submit" className="btn btn-success" value="Add blog" />
        )}
        {isPending && (
          <input
            type="submit"
            className="btn btn-danger"
            disabled
            value="Blog loadding..."
          />
        )}
      </form>
    </div>
  );
};

export default Newblog;
