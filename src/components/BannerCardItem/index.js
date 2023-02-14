import './index.css'

const BannerCards = props => {
  const {bannerDetails} = props
  const {headerText, description, className} = bannerDetails
  return (
    <li className={`card ${className}`}>
      <div className="cards-container">
        <h1 className="heading">{headerText} </h1>
        <p className="paragraph">{description}</p>
        <div>
          <button className="button">Show More</button>
        </div>
      </div>
    </li>
  )
}
export default BannerCards
