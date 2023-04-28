import { Link } from "react-router-dom"

const Post = () => {
  return (
    <div className="post">
        <div className="image">
          <img src="https://i.imgur.com/LbBXK7C.jpg" alt="steak" />
        </div>
        <div className="text">
          <h2>Steak and fries</h2>
          <p className="info">
            <Link className="author">Chris M</Link>
            <time>2023-04-28 13:12</time>
          </p>
          <p className="summary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut non
            accusamus officiis voluptates itaque illo minus veniam, pariatur
            aliquid reiciendis eaque laboriosam inventore rerum quia quasi quas
            ad explicabo at.
          </p>
        </div>
      </div>
  )
}

export default Post