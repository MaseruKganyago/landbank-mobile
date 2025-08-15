// import jseu from 'js-encoding-utils';

// const ACCESS_TOKEN_NAME = 'xDFcxiooPQxazdndDsdRSerWQPlincytLDCarcxVxv';

// export const getAccessToken = (): IAccessToken | null => {
//   const token = localStorage.getItem(ACCESS_TOKEN_NAME);

//   if (token) {
//     const deserializedToken = JSON.parse(jseu.encoder.decodeBase64(token) as string) as IAccessToken;

//     if (hasTokenExpired(deserializedToken.expireOn || '')) {
//       removeAccessToken();

//       return null;
//     }
//     return deserializedToken;
//   }

//   return null;
// };

// export const hasTokenExpired = (date: string): boolean => {
//   return new Date(date) < new Date();
// };

// export const removeAccessToken = () => {
//   try {
//     localStorage.removeItem(ACCESS_TOKEN_NAME);
//     //localStorage.clear();
//     return true;
//   } catch (error) {
//     return false;
//   }
// };
