export interface Log {
  /**
   * 访问主机
   */
  remotehost: string | null;
  /**
   * 标识
   */
  ident: string | null;
  /**
   * 授权用户
   */
  authuser: string | null;
  /**
   * 日期时间
   */
  date: string | null;
  /**
   * 请求
   */
  request: {
    /**
     * 请求类型
     */
    method: string | null;
    /**
     * 请求资源
     */
    resource: string | null;
    /**
     * 协议版本号
     */
    protocol: string | null;
  };
  /**
   * 状态码
   */
  status: string | null;
  /**
   * 传输字节数
   */
  bytes: string | null;
  /**
   * 来源页面
   */
  referrer: string | null;
  /**
   * 用户代理
   */
  agent: string | null;
}
