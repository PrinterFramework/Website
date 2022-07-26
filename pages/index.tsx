import Docu from 'components/index/docu'
import Sim1 from 'components/index/sim1'
import Sim2 from 'components/index/sim2'
import Title from 'components/index/title'

export interface IndexI {}

export default function Index({}: IndexI) {
  return (
    <>
      <Title />
      <Sim1 />
      <Sim2 />
      <Docu />
    </>
  )
}
