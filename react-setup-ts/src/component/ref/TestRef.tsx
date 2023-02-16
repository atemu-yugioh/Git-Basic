import { useRef } from 'react'

const TestRef = () => {
  const refInput = useRef<HTMLInputElement>(null)
  const refText = useRef<HTMLHeadingElement>(null)

  const handleClick = () => {
    refInput.current?.focus()
    if (refText.current) {
      refText.current.style.color = 'red'
    }
  }
  return (
    <div>
      <h4 ref={refText}>Ref Text</h4>
      <input type='text' ref={refInput} />
      <button onClick={() => handleClick()}>click to focus input</button>
    </div>
  )
}

export default TestRef
