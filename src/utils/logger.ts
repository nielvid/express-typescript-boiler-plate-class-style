import * as winston from 'winston';

export const Logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
//   defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    // new winston.transports.File({ filename: 'combined.log' }),
  ],
});
if (process.env.NODE_ENV !== 'production') {
  Logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
  );
}




