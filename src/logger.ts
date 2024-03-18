// import { transports, format} from 'winston';

// export const winstonConfig = {
//     transports:[
//         new transports.Console({
//             format: format.combine(
//                 format.timestamp(),
//                 format.colorize(),
//                 format.simple()
//             ),
//         }),
//     ]
// }

import * as winston from 'winston';

const logger = winston.createLogger({
  level: 'info', 
  format: winston.format.combine(
    winston.format.timestamp(), 
    winston.format.simple() 
  ),
  transports: [
    new winston.transports.Console() 
  ]
});

export default logger;