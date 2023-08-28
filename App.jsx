import { useState } from 'react'
import './App.css'
import './index.css'
import {puppyList} from './data'

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)
  const featuredPup = puppies.find((pup)=> pup.id === featPupId)
  console.log(featuredPup);
  console.log(puppies);
  return (
    <div className="container">
      <h4>Welcome To...</h4>
      <h1>PUPPY LIST</h1>
      {
        puppies.map((puppy) => {
          return <p className='dogList' onClick={()=>{ setFeatPupId(puppy.id)}}
          key={puppy.id}>{puppy.name}</p>
        })
      }
      { featPupId && featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
      <img src="https://images.emojiterra.com/twitter/v14.0/512px/1f436.png" alt="dog emoji" />
    </div>
  )
}

export default App
