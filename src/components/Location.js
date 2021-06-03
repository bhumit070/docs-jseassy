import Title from '../parts/Title'
import Description from '../parts/Description'
import { location } from '../utils/location'
const props = {
  title: 'Location Demo',
  description: `import { lcn } from 'jseassy'`,
}

function Location() {
  return (
    <div>
      <Title title={props.title} description={props.description} />
      {location.map((data, index) => (
        <Description
          key={index}
          name={data.name}
          description={data.description}
        />
      ))}
    </div>
  )
}

export default Location
