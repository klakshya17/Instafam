import React, { useEffect, useState } from "react"

const Home = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch("/allpost", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result)
        setData(result.posts)
      })
  }, [])
  return (
    <div className='home'>
      {data.map((item) => {
        return (
          <div className='card home-card' key={item._id}>
            <h5>{item.postedBy.name}</h5>
            <div className='card-image'>
              <img src={item.photo} alt='post'></img>
            </div>
            <div className='card-content '>
              <i className='material-icons' style={{ color: "red" }}>
                favorite
              </i>
              <h6>{item.title}</h6>
              <p>{item.body}</p>
              <input type='text' placeholder='add a comment' />
            </div>
          </div>
        )
      })}
      <div className='card home-card'>
        <h5>Travis</h5>
        <div className='card-image'>
          <img
            src='https://images.unsplash.com/photo-1511300636408-a63a89df3482?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            alt='wallpaper'
          ></img>
        </div>
        <div className='card-content '>
          <i className='material-icons' style={{ color: "red" }}>
            favorite
          </i>
          <h6>title</h6>
          <p>this is an instafam post</p>
          <input type='text' placeholder='add a comment' />
        </div>
      </div>
    </div>
  )
}

export default Home
