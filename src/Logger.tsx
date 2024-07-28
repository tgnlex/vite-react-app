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
const NOOP: LogFn = (message?: any, opts: any[]): void => { return }
class ConsoleLogger implements Logger {
  readonly log: LogFn
  readonly info: LogFn
  readonly warn: LogFn
  readonly error: LogFn 
  constructor() {
    this.log = console.log.bind(console)
    this.info = console.info.bind(console)
    this.warn = console.warn.bind(console)
    this.error = console.error.bind(console)
  }
  log: LogFn(message?: any, opts: any[]): void{
    console.log(message, ...opts)
  }
   info: LogFn(message?: any, opts: any[]): void {
    console.info(meessage, ...opts)
  }
  warn: LogFn(message?: any, opts: any[]): void {
    console.warn(message, ...opts)
  }
   error: LogFn(message?: any, opts: any[]): void {
    console.error(message, ...opts)
  }
  

}