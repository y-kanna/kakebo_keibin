// import axios from "axios";s
import Header from "./Header"

// const baseURL = "http://localhost:8000";

export default function App() {
  // const [post, setPost] = React.useState(null);

  // React.useEffect(() => {
  //   axios.get(`${baseURL}/`).then((response) => {
  //     setPost(response.data);
  //   });
  // }, []);

  // function createPost() {
  //   axios
  //     .post(baseURL, {
  //       title: "Hello World!",
  //       body: "This is a pld post."
  //     })
  //     .then((response) => {
  //       setPost(response.data);
  //     });
  // }

  // if (!post) return "No post!"

  return (
    <div>
      <Header />
      {/* <h1>{post.title}</h1>
      <p>{post.body}</p> */}
      {/* <button>Create Post</button> */}
    </div>
  );
}

