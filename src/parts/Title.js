import { Jumbotron, Button } from 'reactstrap'
import { useHistory } from 'react-router-dom'

const Title = ({ title, description }) => {
  let history = useHistory()

  return (
    <div>
      <Jumbotron>
        <div className="text-center">
          <h1 className="display-3"> {title} </h1>
          <p className="lead">{description}</p>
        </div>
        <p className="lead">
          <div className="text-center">
            <Button color="primary" onClick={() => history.push('/')}>
              Goto Home
            </Button>
          </div>
        </p>
        <hr className="my-2" />
      </Jumbotron>
    </div>
  )
}

export default Title
