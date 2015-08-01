export class DisposalService {

  get() {
    return fetch('http://localhost:3001/api/random-word', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then((response) => {
      return response.text();
    })
    .then((text) => {
      return JSON.parse(text);
    })
  }
  
}