import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
/*import './styles/app.css'    */       // <-- импорт стилей
import configureStore from './store/configureStore'

const store = configureStore()

render(
  <Provider store={store}>
    <div className='app'> {/* обернули все в .app */}
      <App />
    </div>
  </Provider>,
  document.getElementById('root')
)