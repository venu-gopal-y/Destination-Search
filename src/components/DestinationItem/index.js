// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationsList} = props
  const {name, imgUrl} = destinationsList

  return (
    <li className="card-container">
      <div className="destination-item-container">
        <img src={imgUrl} className="image" alt={name} />
        <p className="place-name">{name}</p>
      </div>
    </li>
  )
}

export default DestinationItem
