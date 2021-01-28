import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Location from './Location.jsx';
import Host from './HostInfo.jsx';
import Know from './ToKnow.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {},
      HostInfo: {},
      ToKnow: {},
    };
  }

  componentDidMount() {
    const { getData } = this.props;
    getData()
      .then((data) => {
        const [location, HostInfo, ToKnow] = data.map((obj) => obj.data);
        this.setState({
          location,
          HostInfo,
          ToKnow,
        });
      })
      .catch((err) => {
        throw new Error(err);
      });
  }

  render() {
    // eslint-disable-next-line no-unused-vars
    const { location, HostInfo, ToKnow } = this.state;
    return (
      <HashRouter>
        <Switch>
          <Route path='/listing/:house'>
            <div>
              <Location />
              <Host />
              <Know />
            </div>
          </Route>
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
