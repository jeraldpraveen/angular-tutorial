// Multiple Logger
// DB Logger
// Console Logger

export interface ILogger {
  Log(): any;
}

export class BaseLogger implements ILogger {
  Log() {}
}

export class ConsoleLogger extends BaseLogger {
  override Log() {
    return console.log('Console Logger');
  }
}

export class DBLogger extends BaseLogger {
  override Log() {
    return console.log('DB Logger');
  }
}
