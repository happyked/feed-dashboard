import React from 'react'
import ReactDOM from 'react-dom/client'
import Container from './components/container'
import './index.css'

import TimeAgo from 'javascript-time-ago'

import en from 'javascript-time-ago/locale/en.json'


TimeAgo.addDefaultLocale(en)


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Container />
  </React.StrictMode>
)