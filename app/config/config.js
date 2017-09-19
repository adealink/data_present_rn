export const api = {
  protocol: {
    dev: 'http',
    prod: 'https',
  },
  domain: {
    dev: '192.168.0.28:5001',
    prod: 'api.shensz.cn',
  },
  timeout: 60 * 1000,
};
export const build = {
  isDebug: __DEV__,
};
