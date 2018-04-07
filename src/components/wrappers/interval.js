import React, { Component } from 'react';

const withInterval = Base =>
  class extends Component {
    constructor(props) {
      super(props);

      this.state = { on: props.on || false };
      this.interval = null;
      this.startInterval = this.startInterval.bind(this);
      this.stopInterval = this.stopInterval.bind(this);
      this.resetInterval = this.resetInterval.bind(this);
      this.toggleInterval = this.toggleInterval.bind(this);
    }

    componentWillReceiveProps(nextProps) {
      nextProps.remaining < 1 && this.state.on && this.stopInterval();
    }

    setInt(cb, dur) {
      this.interval = setInterval(cb, dur);
    }
    clearInt() {
      clearInterval(this.interval);
    }

    startInterval(cb, dur) {
      this.stopInterval();
      this.setState({ on: true }, () => this.setInt(cb, dur));
    }

    toggleInterval(cb, dur) {
      this.state.on ? this.stopInterval() : this.startInterval(cb, dur);
    }

    stopInterval() {
      this.setState({ on: false }, this.clearInt);
    }

    resetInterval(cb, dur) {
      this.stopInterval();
      this.startInterval(cb, dur);
    }

    render() {
      const { on } = this.state;

      const {
        stopInterval,
        resetInterval,
        startInterval,
        toggleInterval,
      } = this;

      const through = {
        on,
        stopInterval,
        resetInterval,
        toggleInterval,
        startInterval,
      };

      return <Base {...this.props} {...through} />;
    }
  };

export default withInterval;
