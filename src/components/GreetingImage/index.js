import './index.css'

const GreetingImage = props => {
  const {imageDetails} = props
  const {imageUrl, imageAltText} = imageDetails
  console.log(imageUrl)

  return <img src={imageUrl} alt={imageAltText} className="image" />
}

export default GreetingImage
