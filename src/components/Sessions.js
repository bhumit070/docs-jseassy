import Title from '../parts/Title'
import Description from '../parts/Description'
import { sessions } from '../utils/sessions'
const props = {
  title: 'Sessions Demo',
  description: `import { ssn } from 'jseassy'`,
}

const Sessions = () => {
  return (
    <div>
      <Title title={props.title} description={props.description} />
      {sessions.map((data, index) => (
        <Description
          key={index}
          name={data.name}
          description={data.description}
        />
      ))}
    </div>
  )
}

export default Sessions
