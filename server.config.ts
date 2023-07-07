console.log('process', process.env.NODE_ENV);

const isDevelopment = process.env.NODE_ENV === 'development';

export const CONFIG = {
    apiEndPoint: isDevelopment ? 'http://localhost:3000' : 'http://localhost:3000'
}