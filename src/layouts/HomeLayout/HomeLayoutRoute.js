import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./HomeLayout";
import HomePage from "./../../pages/HomePage/HomePage";

const HomeLayoutRoute = () => {
  return (
    <Router>
      <Route>
        <Layout>
          <Switch>
            <Route path="/" exact component={HomePage} />
          </Switch>
        </Layout>
      </Route>
    </Router>
  );
};

export default HomeLayoutRoute;
