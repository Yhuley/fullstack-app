import './styles.scss';

export const App = () => {
  console.log(process.env.name);
  const a = 1;
  
  return (
    <>
      <h1>hello</h1>
      <p>{process.env.name}</p>
      <>{process.env.NODE_ENV}</>
    </>
  );
};
