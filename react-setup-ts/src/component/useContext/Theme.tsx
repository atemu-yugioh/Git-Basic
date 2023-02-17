import { createContext, useState } from 'react'

export interface ThemeType {
  theme: {
    color: 'light' | 'dark'
  }
  onChangeTheme: (color: 'light' | 'dark') => void
}

interface PropsTheme {
  children: React.ReactNode
}
export const ThemeContext = createContext<ThemeType>({
  theme: {
    color: 'light'
  },
  onChangeTheme: () => {}
})

const Theme = ({ children }: PropsTheme) => {
  const [theme, setTheme] = useState<ThemeType['theme']>({ color: 'light' })
  const onChangeTheme = (color: 'light' | 'dark') => {
    setTheme((prev) => ({ ...prev, color: color }))
  }
  return <ThemeContext.Provider value={{ theme, onChangeTheme }}>{children}</ThemeContext.Provider>
}

export default Theme
