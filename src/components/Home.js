import { Card, CardTitle, CardText, CardSubtitle, CardBody } from 'reactstrap'
import { providedObjects } from '../utils/provided.objects'
import GitHubIcon from '@material-ui/icons/GitHub'
import { Link } from 'react-router-dom'
import '../css/home.css'
import NpmLogo from '../images/npm_logo.png'
const Home = () => {
  return (
    <div>
      <Card className="p-2 m-2">
        <CardBody>
          <CardTitle tag="h5">
            Welcome to Docs of <b> jseassy </b>
          </CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            Here you will find all the information related to the
            <b> jseassy </b> npm package
          </CardSubtitle>
          <CardText>
            This package can help you by providing prebuilt functions which you
            can use to make your coding easier <br />
            Currently this package is in progress <br />
            Below are the utilities which we provide Currently <br />
            Click on it to get detailed information
            <div className="mt-3">
              {providedObjects.map((object, index) => {
                return (
                  <div
                    key={index}
                    style={{ display: `${index > 0 ? '' : 'none'}` }}
                  >
                    <p>
                      For{' '}
                      <Link to={object.to} style={{ textDecoration: 'none' }}>
                        {' '}
                        {object.for}{' '}
                      </Link>{' '}
                      We Provide{' '}
                      <Link to={object.to} style={{ textDecoration: 'none' }}>
                        {' '}
                        {object.provide}{' '}
                      </Link>
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

export default Home
