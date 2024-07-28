interface LogFn {
  (message?: any, ...opts: any[])
}
class Logger {
  log: LogFn
  info: LogFn
  warn: LogFn
  error: LogFn
}
type LogLevel = 'log' | 'info' | 'warn' | 'error';
const NOOP: LogFn = (message?: any, opts: any[]): void => {}
class ConsoleLogger implements Logger {
  readonly log LogFn
  readonly info: LogFn
  readonly warn: LogFn
  readonly error: LogFn 
  constructor(opts?: {level: LogLevel}) {
    const { level} = opts || {}
    this.error = console.error.bind(console)

    if (level === 'error') {
      this.warn = NOOP;
      this.info = NOOP;
      this.log = NOOP;
    }
    this.warn = console.warn.bind(console)
    if (level === 'warn') {
        this.info = NOOP;
        this.log = NOOP;
    }
    this.info = console.info.bind(console)
    if (level === 'info') {
        this.log = NOOP;
    }
    this.log = console.log.bind(console)

  }
   

}
