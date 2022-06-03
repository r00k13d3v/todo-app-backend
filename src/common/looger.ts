import winston from "winston";
import path from "path";
import { NextFunction, Request, Response } from "express";

winston.addColors({
  error: "red",
  warn: "yellow",
  info: "green",
  http: "magenta",
  debug: "white",
});

const format = winston.format.combine(
  winston.format.json(),
  winston.format.label({ label: path.basename(require.main?.filename || "") }),
  winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss:ms" }),
  winston.format.printf(
    (info) => `${info.timestamp} ${info.level} [${info.label}]: ${info.message}`
  ),
  winston.format.colorize({ all: true })
);

const console = winston.createLogger({
  levels: {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    verbose: 4,
    debug: 5,
    silly: 6,
  },
  format,
  transports: [
    new winston.transports.Console({
      level: "debug",
      format: winston.format.combine(
        winston.format.printf(
          (info) =>
            `${info.timestamp} ${info.level} [${info.label}]: ${info.message}`
        )
      ),
    }),
  ],
});

export class Logger {
  public static http(req: Request, res: Response, next: NextFunction): void {
    console.http(
      JSON.stringify(
        {
          path: req.path,
          ip: req.ip,
          method: req.method,
          body: req.body,
        },
        null,
        2
      )
    );
    next();
  }

  public static error(message: string, ...args: any[]): void {
    console.error(message, ...args);
  }

  public static warn(message: string, ...args: any[]): void {
    console.warn(message, ...args);
  }

  public static info(message: string, ...args: any[]): void {
    console.info(message, ...args);
  }
}
