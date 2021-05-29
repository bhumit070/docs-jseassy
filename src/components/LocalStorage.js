import Title from '../parts/Title'
import Description from '../parts/Description'
import { localstorage } from '../utils/localstorage'
const props = {
  title: 'Localstorage Demo',
  description: `import { ls } from 'jseassy'`,
}

const LocalStorage = () => {
  return (
    <div>
      <Title title={props.title} description={props.description} />
      {localstorage.map((data, index) => (
        <Description
          key={index}
          name={data.name}
          description={data.description}
        />
      ))}
    </div>
  )
}

export default LocalStorage
