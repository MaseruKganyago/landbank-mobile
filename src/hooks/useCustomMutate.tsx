// import { getAccessToken } from '@/utils/auth';
// import axios, { AxiosResponse } from 'axios';

// export interface ICustomApiParams {
//   url: string;
//   method: 'PUT' | 'POST';
// }

// export interface ICustomMutateProps {
//   mutate: (data: any) => Promise<AxiosResponse<any>>;
// }

// export const useCustomMutate = (apiEndpoint: ICustomApiParams): ICustomMutateProps => {
//   const headers = { Authorization: `Bearer ${getAccessToken()?.accessToken}` };
//   const verb = apiEndpoint.method.toLocaleLowerCase() as 'post' | 'put';
//   axios.defaults.headers[verb] = headers;

//   return { mutate: (data) => axios({ ...apiEndpoint, data }) };
// };
