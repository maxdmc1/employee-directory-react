import React from "react";
import "./App.css";
import Table from "./components/table";
import Header from "./components/Header";
import data from "./data/employees.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      direction: {
        first: "asc"
      }
    };
    this.sortBy = this.sortBy.bind(this);
  }

  sortBy(key) {
    this.setState({
      data: data.sort((a, b) =>
        this.state.direction[key] === "asc"
          ? parseFloat(a[key]) - parseFloat(b[key])
          : parseFloat(b[key]) - parseFloat(a[key])
      ),
      direction: {
        [key]: this.state.direction[key] === "asc" ? "desc" : "asc"
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Table data={this.state.data} sortBy={this.sortBy} />
      </div>
    );
  }
}
export default App;
