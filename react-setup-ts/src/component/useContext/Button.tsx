import React, { useContext } from 'react'
import { ThemeContext } from './Theme'
import styles from './theme.module.scss'

interface ButtonProps {
  children: React.ReactNode
}

export const Button = ({ children }: ButtonProps) => {
  const { theme } = useContext(ThemeContext)
  return <button className={styles[`button-${theme.color}`]}>{children}</button>
}
