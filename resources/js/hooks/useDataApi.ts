import { useEffect, useState } from 'react';
import axios from 'axios';

import { Payload } from 'qna-types'

const useDataApi = <FetchedData>(url: string): Payload<FetchedData> => {
  
  const [dataState, setDataState] = useState<Payload<FetchedData>>({ isLoading: true });
  const [endpointUrl] = useState(url);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        //setDataState({ ...dataState, isLoading: true });
        const { data } = await axios.get(endpointUrl);
        setDataState({
          /*...dataState,*/
          data,
          isLoading: false
        });
      } catch (e) {
        console.log(e);
        setDataState({ ...dataState, isLoading: false });
      }
    };
    fetchDataFromApi();
  }, []);

  return dataState;
};

export default useDataApi;
