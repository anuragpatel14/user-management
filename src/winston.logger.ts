// // import { Injectable} from "@nestjs/common";
// // import * as winston from 'winston';
// // import  {winstonConfig} from './winston.config';
// // import {Logger} from 'winston';

// // @Injectable()
// // export class LoggerService{
// //     private readonly logger: Logger;
    
// //     constructor(){
// //         this.logger = winston.createLogger(winstonConfig);
// //     }

// //     // log(message: string)
// //     {
// //         this.logger.log({level:'info', message});
// //     }
// // // 
// //     error(message: string)
// //     {
// //         this.logger.log({level:'error', message});
// //     }
    
// // }

// import { Injectable, Logger } from '@nestjs/common';
// import { createLogger, transports, format } from 'winston';

// @Injectable()
// export class LoggerService extends Logger {
//   private logger = createLogger({
//     transports: [
//       new transports.Console({
//         format: format.combine(
//           format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
//           format.colorize(),
//           format.simple(),
//         ),
//       }),
//     //   new transports.File({
//     //     filename: 'logs/error.log',
//     //     level: 'error',
//     //     format: format.combine(
//     //       format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
//     //       format.simple(),
//     //     ),
//     //   }),
//       // Add more transports if needed
//     ],
//   });

//   log(message: string, context?: string) {
//     this.logger.info(message, { context });
//   }

//   error(message: string, trace?: string, context?: string) {
//     this.logger.error(message, { trace, context });
//   }

//   warn(message: string, context?: string) {
//     this.logger.warn(message, { context });
//   }

//   debug(message: string, context?: string) {
//     this.logger.debug(message, { context });
//   }

//   verbose(message: string, context?: string) {
//     this.logger.verbose(message, { context });
//   }
// }
import { Injectable } from '@nestjs/common';
import { createLogger, transports, format } from 'winston';

@Injectable()
export class WinstonLogger {
  private readonly logger = createLogger({
    transports: [
      new transports.Console({
        format: format.combine(
          format.timestamp(),
          format.colorize(),
          format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`)
        ),
      }),
      new transports.File({ filename: 'error.log', level: 'error' }),
      new transports.File({ filename: 'combined.log' }),
    ],
  });

  error(message: string, trace: string) {
    this.logger.error(message, trace);
  }

  warn(message: string) {
    this.logger.warn(message);
  }

  info(message: string) {
    this.logger.info(message);
  }

  debug(message: string) {
    this.logger.debug(message);
  }
}
