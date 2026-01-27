import React, { useEffect, useState } from 'react'

const DataFetcher = () => {
    const [data, setData] = useState([]) //intial value is empty arrya because api returns a list of posts
    const [loading, setLoading] = useState(true)

     useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <ul>
          {data.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default DataFetcher
