import Title from '../parts/Title'
import Description from '../parts/Description'
import { cookies } from '../utils/cookies'
const props = {
  title: 'Cookies Demo',
  description: `import { ck } from 'jseassy'`,
}
const Cookies = () => {
  return (
    <div>
      <Title title={props.title} description={props.description} />
      {cookies.map((data, index) => (
        <Description
          key={index}
          name={data.name}
          description={data.description}
        />
      ))}
    </div>
  )
}

export default Cookies
