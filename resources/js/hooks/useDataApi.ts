import { useEffect, useState } from 'react';
import axios from 'axios';

//import { Payload } from 'qna-types'

/*
interface Loadable { 
  isLoading: boolean 
}
interface Question extends Loadable, QuestionData { 
  data: [] | null 
}
interface Answer extends Loadable, AnswerData { 
  data: object | null
} */


const useDataApi = (url: string) => {
  const [dataState, setDataState] = useState({ data: [], isLoading: true });
  const [endpointUrl] = useState(url);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        //setDataState({ ...dataState, isLoading: true });
        const response = await axios.get(endpointUrl);
        setDataState({
          ...dataState,
          data: response.data,
          isLoading: false
        });
      } catch (e) {
        console.log(e);
        setDataState({ ...dataState, isLoading: false });
      }
    };
    fetchDataFromApi();
  }, []);

  return [dataState];
};

export default useDataApi;
