import './styles.css';

export const App = () => {
  console.log(process.env.name);
  return (
    <>
      <h1>hello</h1>
      <p>{process.env.name}</p>
      <>{process.env.NODE_ENV}</>
      <>{process.env.PORT}</>
    </>
  );
};
