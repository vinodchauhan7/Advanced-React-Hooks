import React from "react";
import { Link } from "react-router-dom";

/**
 * Sharing state between components is a common problem. The best solution for this
is to 📜 [lift your state](https://reactjs.org/docs/lifting-state-up.html). but there are some times where prop drilling can cause a real
pain.

To avoid this pain, we can insert some state into a section of our react tree,
and then extract that state anywhere within that react tree without having to
explicitly pass it everywhere. This feature is called `context`. In some ways
it's like global variables, but it doesn't suffer from the same problems (and
maintainability nightmares) of global variables thanks to how the API works to
make the relationships explicit.
 */

const DataContext = React.createContext();

const Layout = props => {
  const data = "Random Data";

  return (
    <DataContext.Provider value={data}>{props.children}</DataContext.Provider>
  );
};

const Home = () => {
  const content = React.useContext(DataContext);

  return <div>{JSON.stringify(content)}</div>;
};
const ContextHook = props => {
  return (
    <div>
      <Layout>
        <Home />
      </Layout>
      <br />
      <br />
      <Link to="/">Home</Link>
    </div>
  );
};

export default ContextHook;
