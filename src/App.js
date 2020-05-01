import React, { Component } from "react";
import Navbar from "./component/Navbar";
import Counters from "./component/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  initialId = (id, counters) => {
    counters.push({
      id: id,
      value: 0,
    });
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    if (counters[index].value === 0) {
      return false;
    } else {
      counters[index].value--;
    }
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleAdd = (c) => {
    let counters = [...this.state.counters];
    var counterLength = counters.length;
    const initId = 1;
    if (counterLength === 0) {
      this.initialId(initId, counters);
    } else {
      let last = counters[counters.length - 1];
      counters.push({
        id: last.id + 1,
        value: 0,
      });
    }
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onAdd={this.handleAdd}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
