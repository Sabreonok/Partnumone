import { useState } from 'react'
import './style/App.scss'
import Form from './Components/Form/Form.jsx'
import posts from './posts.json'
import Post from './Components/Post/Post.jsx'

function App() {
  const [arr, setArr] = useState([])

  const addPost = (userName, surname, phone, email, mail) => {
    setArr([...arr, { userName, surname, phone, email, mail }])
  };
  

  return (
    <>
     <Form addPost={addPost}></Form>
     {arr.map((item, index) => (
      <Post item={item} key={index}/>
     ))}
    </>
  )
}

export default App
