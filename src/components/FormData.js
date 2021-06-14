import Title from '../parts/Title'
import Description from '../parts/Description'
import { formdata } from '../utils/formdata'
const props = {
  title: 'FormData Demo',
  description: `import { fd } from 'jseassy'`,
}

const FormData = () => {
  return (
    <div>
      <Title title={props.title} description={props.description} />
      {formdata.map((data, index) => (
        <Description
          key={index}
          name={data.name}
          description={data.description}
        />
      ))}
    </div>
  )
}

export default FormData
