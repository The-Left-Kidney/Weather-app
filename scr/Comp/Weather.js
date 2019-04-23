import React from 'react'

export default class Weather extends React.Component {
  render() {
    return (
      <div className="weather__info">
        {this.props.city && this.props.country && <p className="weather__key"> Location: {this.props.city},{this.props.country}</p> }
        
        {this.props.temperature && <p className="weather__key">Temperature: {this.props.temperature} F</p> }
       
        {this.props.humidity && <p className="weather__key"> Humidty: {this.props.humidity}</p>}
       
        {this.props.description && <p className="weather__key" >Weather: {this.props.description}</p>  }
       
        {this.props.error && <p className="weather__key">{this.props.error}</p> }
        
        
        
        
       
        
        
      </div>
    )
  }
}
