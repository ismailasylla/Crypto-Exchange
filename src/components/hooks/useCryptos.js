import { useEffect, useState } from 'react';
import { useGetCryptosQuery } from '../../services/cryptoApi';

const useCryptos = (simplified, count) => {
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setCryptos(cryptosList?.data?.coins);

    const filteredData = cryptosList?.data?.coins.filter((item) =>
      item.name.toLowerCase().includes(searchTerm)
    );

    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

  return {
    cryptos,
    isFetching,
    searchTerm,
    handleSearchTermChange: (value) => setSearchTerm(value.toLowerCase()),
  };
};

export default useCryptos;
