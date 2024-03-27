import { useEffect, useState, useCallback } from 'react';
import { useGetCryptosQuery } from '../../services/cryptoApi';

const useCryptos = (simplified, count) => {
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchTermChange = useCallback((value) => {
    setSearchTerm(value.toLowerCase());
  }, []);

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
    handleSearchTermChange,
  };
};

export default useCryptos;
