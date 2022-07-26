import CodeEditor from '@monaco-editor/react'

export const EditorOptions = {
  readOnly: true,
  noSyntaxValidation: true,
  noSemanticValidation: true,
  lineNumbers: 'off',
  padding: {
    top: 15,
    bottom: 15
  },
  minimap: { enabled: false }
}

export interface EditorI {
  language?: string
  code?: string
  height?: string | number
}

export function Editor({ language, code, height }: EditorI) {
  return (
    <CodeEditor
      width="100%"
      height={height || '100%'}
      theme="vs-dark"
      loading=""
      options={EditorOptions}
      language={language || 'typescript'}
      value={code || ''}
    />
  )
}

export default Editor
