import EventEmitter from 'events';

const ChildProcessMock = class extends EventEmitter {
  constructor() {
    super();
    this.stdin = () => {};
    this.stdout = () => {};
    this.stdio = () => {};
  }
};

module.exports = {
  execFile: () => new ChildProcessMock(),

  exec: () => new ChildProcessMock(),
};
