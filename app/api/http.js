import DeviceInfo from 'react-native-device-info';
import { api, build } from '../config/config';

const _getProtocol = () =>
  build.isDebug ? api.protocol.dev : api.protocol.prod;

const _getApiDomain = () => (build.isDebug ? api.domain.dev : api.domain.prod);

const _getUserAgent = () =>
  DeviceInfo.getUserAgent ||
  'Mozilla/5.0 (iPhone; CPU iPhone OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Mobile/14D27 SSZWebViewType/2 Device/iPhone8,2 Shensz/1.0.0';

const _getQueryParamStr = params => {
  const str = Object.keys(params)
    .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
    .join('&');
  return str;
};

const _fetchData = async ({ argUrl, argOptions, argTimestamp }) => {
  const timeOutHandler = setTimeout(() => {
    Promise.reject({
      argUrl,
      header: argOptions,
      response: null,
      code: -1,
      msg: `请求超时`,
    });
  }, api.timeout);
  let retObj = null;
  try {
    const response = await fetch(argUrl, argOptions);
    clearTimeout(timeOutHandler);
    if (response.status === 200) {
      const responseBody = await response.json();
      if (responseBody.code === 0) {
        retObj = {
          response,
          code: responseBody.code,
          data: responseBody.data,
          msg: responseBody.msg,
        };
      } else {
        Promise.reject({
          argUrl,
          header: argOptions,
          response,
          code: responseBody.code,
          data: responseBody.data,
          msg: responseBody.msg,
        });
      }
    } else {
      Promise.reject({
        argUrl,
        header: argOptions,
        response,
        code: -1,
        msg: `网络异常: ${response.status}`,
      });
    }
  } catch (error) {
    clearTimeout(timeOutHandler);
    Promise.reject({
      argUrl,
      header: argOptions,
      response: null,
      code: -1,
      msg: `请求失败：${error}`,
    });
  }

  return retObj;
};

export const asyncGet = ({
  argUrlPath,
  argQueryParam = {},
  argApiVersion = 1,
}) => {
  const timestamp = new Date().valueOf();

  const protocol = _getProtocol();
  const apiDomain = _getApiDomain();
  const apiVersion = argApiVersion || 1;

  const queryParam = {};
  const queryParamStr = _getQueryParamStr({ ...argQueryParam, ...queryParam });
  const fullURL = `${protocol}://${apiDomain}/api/${apiVersion}/${argUrlPath}?${queryParamStr}`;

  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'User-Agent': _getUserAgent(),
    },
  };

  return _fetchData({
    argUrl: fullURL,
    argOptions: options,
    argTimestamp: timestamp,
  });
};

export const asyncPost = ({
  argUrlPath,
  argBodyParam = {},
  argApiVersion = 1,
}) => {
  const timestamp = new Date().valueOf();

  const protocol = _getProtocol();
  const apiDomain = _getApiDomain();
  const apiVersion = argApiVersion || 1;

  const fullURL = `${protocol}://${apiDomain}/api/${apiVersion}/${argUrlPath}`;

  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'User-Agent': _getUserAgent(),
    },
    body: argBodyParam,
  };

  return _fetchData({
    argUrl: fullURL,
    argOptions: options,
    argTimestamp: timestamp,
  });
};
