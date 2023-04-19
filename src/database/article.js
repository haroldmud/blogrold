const apiKey = process.env.REACT_APP_KEY;
export const Articles = `https://news-proxy.netlify.app/api/everything?q=Apple&from=2023-03-27&sortBy=popularity&pageSize=10&apiKey=${apiKey}`;
