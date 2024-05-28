import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
export default class App extends Component {
  pageSize = 20;
  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <LoadingBar
            color="#f11946"
            height={3}
            progress={this.state.progress}
          />
          <Switch>
            <Route exact path="/">
              <News
                key="general"
                setProgress={this.setProgress}
                country="in"
                category="general"
                pageSize={this.pageSize}
              />
            </Route>
            <Route exact path="/business">
              <News
                key="business"
                setProgress={this.setProgress}
                country="in"
                category="business"
                pageSize={this.pageSize}
              />
            </Route>
            <Route exact path="/entertainment">
              <News
                setProgress={this.setProgress}
                key="entertainment"
                country="in"
                category="entertainment"
                pageSize={this.pageSize}
              />
            </Route>
            <Route exact path="/general">
              <News
                setProgress={this.setProgress}
                key="general"
                country="in"
                category="general"
                pageSize={this.pageSize}
              />
            </Route>
            <Route exact path="/health">
              <News
                setProgress={this.setProgress}
                key="health"
                country="in"
                category="health"
                pageSize={this.pageSize}
              />
            </Route>
            <Route exact path="/science">
              <News
                setProgress={this.setProgress}
                key="science"
                country="in"
                category="science"
                pageSize={this.pageSize}
              />
            </Route>
            <Route exact path="/sports">
              <News
                setProgress={this.setProgress}
                key="sports"
                country="in"
                category="sports"
                pageSize={this.pageSize}
              />
            </Route>
            <Route exact path="/technology">
              <News
                setProgress={this.setProgress}
                key="technology"
                country="in"
                category="technology"
                pageSize={this.pageSize}
              />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
