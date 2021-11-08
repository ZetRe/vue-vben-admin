export interface BasicPageParams {
  page: number;
  pageSize: number;
}

export interface DataResult<T = any> {
  code: ResultStatus;
  message: string;
  data: T;
  isSucess: boolean;
}

export enum ResultStatus {
  /// <summary>
  ///     成功
  /// </summary>
  Success = 0,

  /// <summary>
  ///     失败
  /// </summary>
  Fail = 1,

  NoAuthorization = 2,

  /// <summary>
  ///     异常
  /// </summary>
  Exception = 9,

  /// <summary>
  ///     网络脱离
  /// </summary>
  NetworkShedding = 901,
}
