import React from 'react'

const ThemeContext = React.createContext()

export const ThemeProvider = ThemeContext.Provider
export const ThemeConsumer = ThemeContext.Consumer

export const PaginationContext = React.createContext()

export const PaginationProvider = PaginationContext.Provider
export const PaginationConsumer = PaginationContext.Consumer

export default ThemeContext