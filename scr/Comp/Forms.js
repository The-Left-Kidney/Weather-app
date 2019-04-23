import React from 'react'

const Forms = (props) => (

 <div>
        <form onSubmit={props.getWeather}>

          <input type="text" name='city' placeholder="Your City..."/>
          <br/><br/>
          <input type="text" name='country' placeholder="Your Country..."/>
          <br/><br/>
        
          <button> Get Weather </button>
            
        </form>

        


      </div>


)

export default Forms