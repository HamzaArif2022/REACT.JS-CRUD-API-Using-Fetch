import { Blog } from "./bloglist";
import useFetching from "./Custome";

const Home = () => {

  const {
    loading,
    Error: error,
    Data: blogs,// Data:blogs / just rename the Data by given the new name blogs
  } = useFetching("http://localhost:8000/blogs");

  return (
    <>
      {error && <div>{Error}</div>}
      {loading && <div className="loading">loadding.. </div>}

      {blogs && <Blog obj={blogs} />}
    </>
  );
};

export default Home;
