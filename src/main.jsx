import React from 'react'
import ReactDOM from 'react-dom/client'
import Card from './assets/Card.jsx'
import './assets/css/index.css'
import Profile from './assets/Profile.jsx'


export default function App() {
  return (
    <>
      <section className="follower-card gap-3">
        <Card username="midudev" name="Miguel Angel Duran"/>
      </section> 
      <section>
        <Profile />
      </section>
    </>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
