import Title from '../parts/Title'
import Description from '../parts/Description'
// import { localstorage } from '../utils/localstorage'
const props = {
  title: 'Location Demo',
  description: `import { lcn } from 'jseassy'`,
}

function Location() {
  return (
    <div>
      <Title title={props.title} description={props.description} />
    </div>
  )
}

export default Location
