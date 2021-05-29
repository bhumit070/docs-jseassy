import { Jumbotron } from 'reactstrap'
const Title = ({ title, description }) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3"> {title} </h1>
        <p className="lead">{description}</p>
        <hr className="my-2" />
      </Jumbotron>
    </div>
  )
}

export default Title
