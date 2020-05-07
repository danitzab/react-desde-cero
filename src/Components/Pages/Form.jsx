import React, { Component } from 'react';
import { element } from 'prop-types';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      mail: '',
      date: new Date(),
    };

    this.changeName = this.changeName.bind(this);
    this.changeMail = this.changeMail.bind(this);
    this.changeDate = this.changeDate.bind(this);
  }

  changeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  changeMail(e) {
    this.setState({
      mail: e.target.value,
    });
  }

  changeDate(e) {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div className="ed-grid">
        <h1>Formulario {this.props.name}</h1>
        <h4>Fecha Actual: {Math.ceil(this.state.date / 1000)} </h4>
        <form id="form-element">
          <div className="ed-grid m-grid-2">
            <div className="form__item">
              <label>Nombre completo</label>
              <input type="text" onChange={this.changeName} />
            </div>
            <div className="form__item">
              <label>Correo electronico</label>
              <input type="Email" onChange={this.changeMail} />
            </div>
          </div>
        </form>
        <div>
          <h2>{`Hola ${this.state.name}`} </h2>
          <span>{`Tu correo es: ${this.state.mail}`}</span>
        </div>
      </div>
    );
  }

  componentDidMount() {
    let element = document.getElementById('form-element');

    this.intervalDate = setInterval(() => {
      this.changeDate();
      console.log(new Date());
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(prevState);
  }

  componentWillMount() {
    clearInterval(this.intervalDate);
  }
}

export default Form;
