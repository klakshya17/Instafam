import React from "react"

const CreatePost = () => {
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
      <input type='text' placeholder='title' />
      <input type='text' placeholder='body' />

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
          <input type='file' />
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
        >
          Post Image
        </button>
      </div>
    </div>
  )
}

export default CreatePost
