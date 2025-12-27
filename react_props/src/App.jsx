import React from 'react'
import Card from './Components/Card'

const App = () => {
  return (
    <div className="parent">
       
       <Card user='anisha' age={22} img="https://imgs.search.brave.com/BpjNqXEoogAKswpiyubXbMruewze3Y726n69kSon0xA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aGR3YWxscGFwZXJz/LmluL3RodW1icy8y/MDI1L3N1bmxpZ2h0/X3N0cmVhbWluZ190/aHJvdWdoX3RhbGxf/Z3JlZW5fdHJlZXNf/b250b19hX3dpbmRp/bmdfZm9yZXN0X3Bh/dGhfd2l0aF9mZXJu/c19hbmRfbW9zc19o/ZF9uYXR1cmUtdDEu/anBn"/>
       <Card  user='ananya' age={18} img="https://imgs.search.brave.com/Bm4uAeQEXG6Brf2SdlhATW0TJcIjdaxgEkhsTqoTZfc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93MC5w/ZWFrcHguY29tL3dh/bGxwYXBlci83Mzkv/MTM2L0hELXdhbGxw/YXBlci1uYXR1cmUt/dGh1bWJuYWlsLmpw/Zw"/>
       <Card user='sai'age={8} img="https://w0.peakpx.com/wallpaper/424/814/HD-wallpaper-nature-nature.jpg"/>
    </div>
  )
}

export default App
