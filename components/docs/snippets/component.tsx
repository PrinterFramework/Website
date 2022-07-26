export const ComponentFile = `// component.example.tsx
import { ExampleStyle } from 'components/example/example.style'

export interface ExampleI {}

export function Example({}: ExampleI) {
  return (
    <ExampleStyle>
      <h2>Component Example</h2>
    </ExampleStyle>
  )
}

export default Example`

export const StyleFile = `// component.style.tsx
import styled from 'styled-components'

export const ExampleStyle = styled.div\`\``

export const TestFile = `// component.test.tsx
import { ExampleComponent } from 'components/example/example.component'
import { Example } from 'components/example/example.connect'`

export const IndexFile = `// index.ts
export * from 'components/example/example.component'
export * from 'components/example/example.style'`
