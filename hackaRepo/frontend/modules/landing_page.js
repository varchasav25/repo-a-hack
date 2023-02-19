
async function init() {
  //Fetches list of all cities along with their images and description
  let arr=anime;
  let arrObj=[];
  for(let i=0;i<arr.length;i++)
  {
    let data=await fetchAnime(arr[i]);
    arrObj.push(data);
  }
  console.log(arrObj);
  arrObj.forEach((key,idx) => {
    rentAnime(key.Title,key.Year,idx);
  });
  let div=document.getElementById('card0');
  div.innerHTML=`
  <div>Plot:${arrObj[0].Plot}</div>
  <div>Country:${arrObj[0].Country}</div>
  <div>IMDB Rating:${arrObj[0].imdbRating}</div>
  `
}

async function fetchAnime(url) {
  try{
    let response= await fetch(`http://www.omdbapi.com/?apikey=c44cf269&t=${url}`);
    let data= await response.json();
    return data;
  }
  catch(e)
  {
    return null;
  }
}

function rentAnime(title,year,idx) 
{
  let tile2=document.getElementById(`tile${idx}`);
  let div1=document.createElement('div');
  div1.setAttribute('class','tile-text text-center');
  div1.innerHTML=`<h3>${title}</h3>
                  <p>${year}</p>`;
  tile2.append(div1);
}
export { init, fetchAnime};
