import React, { Suspense } from 'react'

import ReactDOM from 'react-dom/client'

import 'services/i18n'
import 'bootstrap/dist/css/bootstrap.min.css'
// eslint-disable-next-line import-helpers/order-imports
import App from './App'

import GlobalStyles from './styles/GlobalStyles'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <Suspense>
      <App />
    </Suspense>
  </React.StrictMode>,
)
