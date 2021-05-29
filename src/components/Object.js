import Title from '../parts/Title'
import Description from '../parts/Description'
import { object } from '../utils/object'
const props = {
  title: 'Objects Demo',
  description: `import { obj } from 'jseassy'`,
}

const Objects = () => {
  return (
    <div>
      <Title title={props.title} description={props.description} />
      {object.map((data, index) => (
        <Description
          key={index}
          name={data.name}
          description={data.description}
        />
      ))}
    </div>
  )
}

export default Objects
