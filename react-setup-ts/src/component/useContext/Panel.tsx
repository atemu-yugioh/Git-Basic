import React, { useContext } from 'react'
import { ThemeContext } from './Theme'
import styles from './theme.module.scss'

interface PanelProps {
  title: string
  children: React.ReactNode
}

export const Panel = ({ title, children }: PanelProps) => {
  const { theme } = useContext(ThemeContext)
  return (
    <section className={styles[`panel-${theme.color === 'light' ? 'dark' : 'light'}`]}>
      <h1>{title}</h1>
      {children}
    </section>
  )
}
