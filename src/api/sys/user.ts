import { defHttp } from '/@/utils/http/axios';
import { GetUserInfoModel, LoginParams, LoginResult } from './model/userModel';

import { ErrorMessageMode } from '/#/axios';

enum Api {
  Login = 'api/Identity/login',
  Logout = 'api/Identity/logout',
  GetUserInfo = 'api/Identity/getUserInfo',
  GetPermCode = '/getPermCode',
}

/**
 * @description: user login api
 */
export function loginApi(params: LoginParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<LoginResult>(
    {
      url: Api.Login,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}

/**
 * @description: getUserInfo
 */
export function getUserInfo() {
  return defHttp.post<GetUserInfoModel>({ url: Api.GetUserInfo }, { errorMessageMode: 'none' });
}

export function getPermCode() {
  return defHttp.get<string[]>({ url: Api.GetPermCode });
}

export function doLogout() {
  return defHttp.post({ url: Api.Logout });
}
