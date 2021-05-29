import Title from '../parts/Title'
import Description from '../parts/Description'
import { arrays } from '../utils/arrays'
const props = {
  title: 'Arrays Demo',
  description: `import { arr } from 'jseassy'`,
}
const Array = () => {
  return (
    <div>
      <Title title={props.title} description={props.description} />
      {arrays.map((data, index) => (
        <Description
          key={index}
          name={data.name}
          description={data.description}
        />
      ))}
    </div>
  )
}

export default Array
