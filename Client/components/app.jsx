import React from 'react';
import Location from './Location.jsx';
import Host from './HostInfo.jsx';
// import 'bootstrap/dist/css/bootstrap.min.css';

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
      <div>
        <Location location={location} />
        <Host host={HostInfo} />
        {/* <div>{ToKnow}</div> */}
      </div>
    );
  }
}

export default App;
