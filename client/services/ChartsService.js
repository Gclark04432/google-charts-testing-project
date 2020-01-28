const baseURL = 'http://localhost:3000/api/charts/'

export default {
  getCharts(){
    return fetch(baseURL)
    .then(res => res.json())
  }
}
