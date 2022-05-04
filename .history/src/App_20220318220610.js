import Directory from "./components/Directory/Directory";


const App = ({categories}) => {
  return (
    <div>
      <Directory categories={categories} />
    </div>
  );
};

export default App;
