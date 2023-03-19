import { store } from 'data';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './containers';
import './styles.scss';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
}
