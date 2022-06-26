import React, { useState, useEffect } from "react"
import M from "materialize-css"
import { useHistory } from "react-router-dom"
const CreatePost = () => {
  const history = useHistory()
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [image, setImage] = useState("")
  const [url, setUrl] = useState("")

  useEffect(() => {
    if (url) {
      fetch("/createpost", {
        method: "post",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwt"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          body,
          pic: url,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          if (data.error) {
            M.toast({ html: data.error, classes: "#c62828 red darken-2" })
          } else {
            M.toast({
              html: "created post successfully",
              classes: "#43a047 green darken-2",
            })
            history.push("/")
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [url])

  const postDetails = () => {
    const data = new FormData()
    data.append("file", image)
    data.append("upload_preset", "instafam")
    data.append("cloud_name", "Klakshya170")
    fetch("https://api.cloudinary.com/v1_1/klakshya170/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setUrl(data.url)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div
      className='card input-field'
      style={{
        margin: "10px auto",
        maxWidth: "400px",
        padding: "20px",
        textAlign: "center",
        paddingTop: "10px",
      }}
    >
      <h4>Create Post</h4>
      <input
        type='text'
        onChange={(e) => setTitle(e.target.value)}
        placeholder='title'
      />
      <input
        type='text'
        onChange={(e) => setBody(e.target.value)}
        placeholder='body'
      />

      <div
        className='file-field input-field'
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div
          className='btn-small waves-effect waves-light #64b5f6 blue darken-1'
          style={{
            padding: "0px 4px",
          }}
        >
          <span>Upload Image</span>
          <input type='file' onChange={(e) => setImage(e.target.files[0])} />
        </div>
        <div className='file-path wrapper'>
          <input className='file-path validate' type='text' />
        </div>
      </div>
      <div>
        <button
          className='btn-large waves-effect waves-light #64b5f6 blue darken-1'
          style={{
            marginTop: "15px",
            fontSize: "14px",
          }}
          onClick={() => postDetails()}
        >
          Post Image
        </button>
      </div>
    </div>
  )
}

export default CreatePost
