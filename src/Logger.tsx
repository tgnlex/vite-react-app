interface LogFn {
  (message?: any, ...opts: any[])
}
class Logger {
  log: LogFn
  debug: LogFn
  info: LogFn
  warn: LogFn
  error: LogFn
}
class ConsoleLogger implements Logger {
  log(message?: any, opts: any[]): void{
    console.log(message, ...opts)
  }
  debug(message?: any, opts: any[]): void {
    console.debug(message, ...opts)
  }
  info(message?: any, opts: any[]): void {
    console.info(meessage, ...opts)
  }
  warn(message?: any, opts: any[]): void {
    console.warn(message, ...opts)
  }
  error(message?: any, opts: any[]): void {
    console.error(message, ...opts)
  }

}