import { Card, CardTitle, CardText, CardBody } from 'reactstrap'
import { providedObjects } from '../utils/provided.objects'
import { Link } from 'react-router-dom'
import GitHubIcon from '@material-ui/icons/GitHub'
import NpmLogo from '../images/npm_logo.png'
import { useHistory } from 'react-router-dom'
import { Button } from 'reactstrap'
const NoteFound = () => {
  let history = useHistory()
  return (
    <div>
      <Card className="p-2 m-2">
        <CardBody>
          <CardTitle tag="h3">It seems you are lost 👀👀</CardTitle>
          <div className="text-center">
            <Button color="primary" onClick={() => history.push('/')}>
              Goto Home
            </Button>
          </div>
          <CardText>
            <div className="mt-3">
              {providedObjects.map((object, index) => {
                return (
                  <div
                    key={index}
                    style={{ display: `${index > 0 ? '' : 'none'}` }}
                  >
                    <p>
                      If You are Looking for{' '}
                      <Link to={object.to} style={{ textDecoration: 'none' }}>
                        👉{object.for}👈
                      </Link>{' '}
                      Go Here
                      <Link to={object.to} style={{ textDecoration: 'none' }}>
                        👉{object.provide}👈
                      </Link>{' '}
                    </p>
                  </div>
                )
              })}
            </div>
          </CardText>
          <div className="links-container text-center">
            <a href="https://github.com/bhumit070/jseassy" target="blank">
              <GitHubIcon fontSize="large" />
            </a>
            <a href="https://www.npmjs.com/package/jseassy" target="blank">
              <img
                src={NpmLogo}
                alt="npm logo"
                height="50px"
                width="100px"
                className="mt-3"
              />
            </a>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

export default NoteFound
