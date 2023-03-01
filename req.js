const Http = new XMLHttpRequest();
const url='https://jsonplaceholder.typicode.com/posts';
Http.open("POST", url);
Http.send({username:"this is test"});

Http.onreadystatechange = (e) => {
  console.log(Http.responseText)
}
