import Component from 'components/tour/component'
import Slices from 'components/tour/slices'
import Start from 'components/tour/start'
import Title from 'components/tour/title'

export interface TourI {}

export default function Tour({}: TourI) {
  return (
    <div className="container page">
      <Title />
      <Start />
      <Slices />
      <Component />
    </div>
  )
}
