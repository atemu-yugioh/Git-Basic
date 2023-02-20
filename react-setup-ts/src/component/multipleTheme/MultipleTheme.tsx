import { useEffect, useState } from 'react'
import './styles.css'
import './multipleTheme.scss'

const MultipleTheme = () => {
  const [colorTheme, setColorTheme] = useState('theme-white')

  // effect
  useEffect(() => {
    // check for selected theme /// LocalStorage value
    const currentThemeColor = localStorage.getItem('theme-color')
    // if found set selected theme value in state
    if (currentThemeColor) {
      setColorTheme(currentThemeColor)
    }
  }, [])

  const handleChangeTheme = (theme: string) => {
    setColorTheme(theme)
    localStorage.setItem('theme-color', theme)
  }
  return (
    <div className={`Theme ${colorTheme}`}>
      <div className='theme-options'>
        <div
          id='theme-white'
          onClick={() => handleChangeTheme('theme-white')}
          className={`${colorTheme} === 'theme-white` ? 'active' : ' '}
        ></div>
        <div
          id='theme-blue'
          onClick={() => handleChangeTheme('theme-blue')}
          className={`${colorTheme} === 'theme-blue` ? 'active' : ' '}
        ></div>
        <div
          id='theme-orange'
          onClick={() => handleChangeTheme('theme-orange')}
          className={`${colorTheme} === 'theme-orange` ? 'active' : ' '}
        ></div>
        <div
          id='theme-purple'
          onClick={() => handleChangeTheme('theme-purple')}
          className={`${colorTheme} === 'theme-purple` ? 'active' : ' '}
        ></div>
        <div
          id='theme-green'
          onClick={() => handleChangeTheme('theme-green')}
          className={`${colorTheme} === 'theme-green` ? 'active' : ' '}
        ></div>
        <div
          id='theme-black'
          onClick={() => handleChangeTheme('theme-black')}
          className={`${colorTheme} === 'theme-black` ? 'active' : ' '}
        ></div>
      </div>
      <div className='content-box'>
        <h3>Multiple Themes Swither / React</h3>
        <h5>(ReactJS, SCSS/CSS, Local Storage)</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        </p>
      </div>
    </div>
  )
}

export default MultipleTheme
