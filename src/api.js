const url = "https://fe-assignment-server.herokuapp.com/api/v1/food";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.LBHszzcjG4uVpYR-SpxUUbUEwhz8S8csczNW63L93xM";

var settings = {
    method: 'GET',
    headers: new Headers({
        'Authorization': "Bearer " + token
    })
};  

export {
    url,
    settings
}