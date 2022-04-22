import { BrowserRouter } from 'react-router-dom'
import { Router } from './router'
import {FormProvider} from './contexts/FormContext'

const App = () => {
  return (
    <>
      <BrowserRouter>

        <FormProvider>
          <Router />
        </FormProvider>

      </BrowserRouter>
    </>
  )
}
export default App