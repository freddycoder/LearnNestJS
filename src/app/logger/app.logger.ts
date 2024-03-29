import { Injectable, LoggerService, Scope } from "@nestjs/common";
import { ContextLogger } from "./context.logger";
import { ConfigService } from "@nestjs/config";
import { getWinstonLogger } from "./config.functions";

@Injectable({ scope: Scope.REQUEST })
export class AppLogger implements LoggerService {

  private static logger: LoggerService

  /**
   *
   */
  constructor(private readonly context: ContextLogger, private readonly config: ConfigService) {
    if (!AppLogger.logger) {
      AppLogger.logger = getWinstonLogger(config)
    }
  }

  /**
   * Write a 'log' level log.
   */
  log(message: any, ...optionalParams: any[]) {
    AppLogger.logger.log(message, [{trackingId: this.context.trackingId}, {transactionId: this.context.transationId}, ...optionalParams]);
  }

  /**
   * Write an 'error' level log.
   */
  error(message: any, ...optionalParams: any[]) {
    AppLogger.logger.error(message, [{trackingId: this.context.trackingId}, {transactionId: this.context.transationId}, ...optionalParams])
  }

  /**
   * Write a 'warn' level log.
   */
  warn(message: any, ...optionalParams: any[]) {
    AppLogger.logger.warn(message, [{trackingId: this.context.trackingId}, {transactionId: this.context.transationId}, ...optionalParams])
  }

  /**
   * Write a 'debug' level log.
   */
  debug?(message: any, ...optionalParams: any[]) {
    AppLogger.logger.debug(message, [{trackingId: this.context.trackingId}, {transactionId: this.context.transationId}, ...optionalParams])
  }

  /**
   * Write a 'verbose' level log.
   */
  verbose?(message: any, ...optionalParams: any[]) {
    AppLogger.logger.verbose(message, [{trackingId: this.context.trackingId}, {transactionId: this.context.transationId}, ...optionalParams])
  }
}
