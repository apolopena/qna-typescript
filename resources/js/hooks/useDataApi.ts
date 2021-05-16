import { useEffect, useState } from 'react';
import axios from 'axios';

import { Payload } from 'qna-types'

const useDataApi = <Response>(url: string): Payload<Response> => {
  const [dataState, setDataState] = useState<Payload<Response>>({ data: null, isLoading: true });
  const [endpointUrl] = useState(url);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const { data } = await axios.get(endpointUrl);
        setDataState({ data, isLoading: false });
      } catch (e) {
        console.log(e);
        setDataState({ data: null, error: e.message, isLoading: false });
      }
    };
    fetchDataFromApi();
  }, []);

  return dataState;
};

export default useDataApi;
