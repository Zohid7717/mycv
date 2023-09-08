import { FC } from 'react'
import './WorkCard.scss'
import { Link } from 'react-router-dom'

type WorkCardProps = {
  name: string,
  data: string,
  stacks: string,
  info: string,
  image: string,
  images: string[],
  url: string
}

const WorkCard: FC<WorkCardProps> = ({ name, data, stacks, image, images, url }) => {
  console.log(images)
  return <div className='workCard'>
    <Link to={url} className="workCard__content">
      <div className='workCard__img'>
        <img src={image} alt={name} />
        <div className="workCard__text">
          <h2>{name}</h2>
          <p>{data}</p>
          <p>Skecks: {stacks}</p>
        </div>
      </div>
    </Link>
    <div className="workCard__previews">
      {images.map((item, i) => (
        <div key={i} className="workCard__previews-image">
          <img src={item} alt="image" />
        </div>
      ))}
    </div>
  </div>
}

export default WorkCard