import Title from '../parts/Title'
import Description from '../parts/Description'
import { strings } from '../utils/string'
const props = {
  title: 'String Demo',
  description: `import { str } from 'jseassy'`,
}

const String = () => {
  return (
    <div>
      <Title title={props.title} description={props.description} />
      {strings.map((data, index) => (
        <Description
          key={index}
          name={data.name}
          description={data.description}
        />
      ))}
    </div>
  )
}

export default String
