import axios from 'axios';

const baseUrl = 'http://localhost:3001/persons';

const getAll = () => {
  return axios.get(baseUrl)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      window.alert('Error fetching data: ' + error.message);
      throw error;
    });
};

const create = (newObject) => {
  return axios.post(baseUrl, newObject)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      window.alert('Error creating data: ' + error.message);
      throw error;
    });
};

const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      window.alert('Error updating data: ' + error.message);
      throw error;
    });
};

const deletePerson = (id) => {
  return axios.delete(`${baseUrl}/${id}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      window.alert('Error deleting data: ' + error.message);
      throw error;
    });
};

export default { getAll, create, update, deletePerson };
