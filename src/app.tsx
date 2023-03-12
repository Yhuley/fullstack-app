import './styles.css';

export const App = () => (
  <>
    <h1>hello</h1>
    <>{process.env.name}</>
    <>{process.env.NODE_ENV}</>
  </>
);
