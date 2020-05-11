import React, { Component } from 'react';

const withLouder = (propValue) => (WrappedComponent) => {
  return class withLouder extends Component {
    // constructor(props) {
    //   super(props);
    // }

    render() {
      return this.props[propValue].length === 0 ? (
        <div>
          <img
            src="https://www.infibague.gov.co/pagina/cargando.gif"
            alt="Cargando"
          />
          <h1 className="t3">Loading...</h1>
        </div>
      ) : (
        <WrappedComponent {...this.props} />
      );
    }
  };
};
export default withLouder;
