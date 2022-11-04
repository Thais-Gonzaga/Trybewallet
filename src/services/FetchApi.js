const fetchApi = async () => {
  const url = 'https://economia.awesomeapi.com.br/json/all';
  const fetchCurry = await fetch(url);
  const data = await fetchCurry.json();
  return data;
};

export default fetchApi;
