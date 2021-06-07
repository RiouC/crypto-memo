import List from './components/List';

function App() {
  return (
    <div className="App">
      <header className="App-header text-center bg-dark text-white p-5">
        <h1>
          Crypto Currencies with{' '}
          <a className="text-reset" href="https://nomics.com/docs/">
            nomics API
          </a>
        </h1>
      </header>
      <List />
    </div>
  );
}

export default App;
