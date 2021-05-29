import { Card, CardBody, CardText, CardTitle } from 'reactstrap'

const Description = ({ name, description }) => {
  return (
    <div className="m-2 p-2">
      <Card>
        <CardBody>
          <CardTitle tag="h5"> {name} </CardTitle>
          <CardText>
            {description.map((desc, index) => (
              <p key={index}> {desc} </p>
            ))}
          </CardText>
        </CardBody>
      </Card>
    </div>
  )
}

export default Description
