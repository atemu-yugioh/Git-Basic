import React, { useEffect, useRef } from 'react'
import Child from './Child'

export const Parent = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    console.log({ inputRef })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleOnClick = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }
  return (
    <div>
      {/* 
        ref là 1 thuộc tính đặt biệt.
        ở đây ref đang được truyền vào component Child như 1 prop.
        nên sẽ có lỗi.
        ** cách giải quyết là dùng forwardRef, thì component Child ngoài nhận 1 đối số là prop nó còn nhận thêm 1 đối số nữa là ref
    */}
      <Child ref={inputRef} />
      <button onClick={() => handleOnClick()}>Click to focus to component child</button>
    </div>
  )
}
