"use client"
import { ThemeProvider } from 'next-themes'
import React, { ReactNode } from 'react'

import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import {ReactQueryDevtools} from "@tanstack/react-query-devtools"
const RootProviders = ({children}: {children:ReactNode}) => {
  const [queryCLient]= React.useState(()=>new QueryClient({}))
  return (
    <QueryClientProvider client={queryCLient}>

    <ThemeProvider
        attribute='class'
        defaultTheme='dark'
        enableSystem
        disableTransitionOnChange
        >
        {children}
    </ThemeProvider>
    <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
  )
}

export default RootProviders
