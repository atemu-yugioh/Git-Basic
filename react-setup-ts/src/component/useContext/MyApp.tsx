import { useContext } from 'react'
import { Form } from './Form'
import { ThemeContext } from './Theme'

export const MyApp = () => {
  const { theme, onChangeTheme } = useContext(ThemeContext)

  return (
    <div>
      <Form />
      <button
        onClick={() => {
          onChangeTheme(theme.color === 'light' ? 'dark' : 'light')
        }}
      >
        Change Them
      </button>
    </div>
  )
}
