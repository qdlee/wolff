/**
 * axios实例
 */
import axios, { AxiosResponse } from 'axios';

interface ResponseData {
  code: number;
  status: number;
  msg: string;
  data: any;
}

const service = axios.create();

/* 添加请求拦截器 */
service.interceptors.request.use(
  (config) => {
    if (import.meta.env.DEV) {
      config.url = '/service' + config.url;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

/* 添加响应拦截器 */
service.interceptors.response.use(
  (res: AxiosResponse<ResponseData>) => {
    const resCode = Number(res.data.code);
    const resStatus = Number(res.data.status);

    // 请求成功，直接返回数据
    if (res.request.responseType === 'blob' || resCode === 0) {
      return res;
    }
    // 登录过期处理
    if (resCode === 103) {
      location.assign(res.data.data.loginUrl);
      return Promise.reject(new Error(res.data.msg));
    }
    ElMessage({
      message: res.data.msg,
      type: resStatus === 1 ? 'warning' : 'error',
      duration: 5 * 1000,
    });
    return Promise.reject(new Error(res.data.msg));
  },
  (error) => {
    ElMessage({
      message: '服务器异常',
      type: 'error',
      duration: 5 * 1000,
    });
    return Promise.reject(error);
  },
);

export default service;

export async function get(url: string, data?: any) {
  const res = await service.post<ResponseData>(url, data);
  return res.data.data;
}
