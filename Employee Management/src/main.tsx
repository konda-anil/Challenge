import { EmployeeFeature } from './features/employee/employee.feature'
import React from 'react'
import ReactDOM from 'react-dom/client'

ReactDOM
.createRoot(document.getElementById('root') as HTMLElement)
.render(
  <React.StrictMode>
    <EmployeeFeature />
  </React.StrictMode>,
)
