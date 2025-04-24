import axios from 'axios';

export const executeCode = async (language, code) => {
  const response = await axios.post('http://localhost:5000/api/code', {
    language,
    code
  });
  return response.data.output;
};
