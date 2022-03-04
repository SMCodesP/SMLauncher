import ReactDOM from 'react-dom'
import { setLocale } from 'yup'
import App from './App'
import RoutesComponent from './routes'

setLocale({
  mixed: {
    required: 'O campo é obrigatório.',
  },
})

ReactDOM.render(
  <App>
    <RoutesComponent />
  </App>,
  document.getElementById('root')
)
