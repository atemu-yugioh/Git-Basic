import { forwardRef } from 'react'

const Child = (props: any, ref: any) => {
  return (
    <div>
      <input type='text' ref={ref} />
    </div>
  )
}

export default forwardRef(Child)
