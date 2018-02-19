import Debug from 'debug';

const debug = new Debug('almundo-api:middleware');

export const tokenExtract = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  debug(`Token extracting ${token}`);
  req.token = token;
  next();
};
