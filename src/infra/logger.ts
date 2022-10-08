import { createLogger, format, transports } from 'winston';

const { combine, timestamp, prettyPrint } = format;

export const logger = createLogger({
  level: 'info',
  format: combine(
    timestamp(),
    prettyPrint(),
  ),
  transports: [
    new transports.File({ filename: `${__dirname}/logs/migrations.log` }),
    new transports.File({ filename: `${__dirname}/logs/errors.log`, level: 'error' }),
  ],
});
