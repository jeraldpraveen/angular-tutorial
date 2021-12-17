// Multiple Logger
// DB Logger
// Console Logger

export interface ILogger {
  Log(): any;
}

export class ConsoleLogger implements ILogger {
  Log() {
    return console.log('Console Logger');
  }
}

export class DBLogger implements ILogger {
  Log() {
    return console.log('DB Logger');
  }
}
