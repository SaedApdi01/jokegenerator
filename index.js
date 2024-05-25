
const btn = document.getElementById('btn');
const showjokes = document.getElementById('showjoke');
const loading = document.getElementById('loading');

const apiKey = 'WQ1u+v/FdGZfNuCWj4QwTQ==vsxDjHYzkdUL2gwE';

const myapiinfo = {
  method : "GET" , 
  headers : {
    "X-Api-Key" : apiKey ,
  },
}

const apiUrl = 'https://api.api-ninjas.com/v1/jokes?limit=1';

async function getJoke(){
 try{
  loading.innerHTML = 'Loading...'
  loading.style.display = 'block';
  showjokes.style.display = 'none'
  const response = await fetch(apiUrl , myapiinfo)
  const data = await response.json();
  loading.style.display = 'none';
  showjokes.style.display = 'block'
  showjokes.innerHTML = `${data[0].joke}😂`
 }catch(error){
  console.log(error)
 }
}