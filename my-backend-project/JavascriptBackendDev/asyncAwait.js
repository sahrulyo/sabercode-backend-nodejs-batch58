//api ---> https://dummyjson.com/docs/products

//async await
async function getData (){
    try {
        const respone = await fetch ('https://dummyjson.com/products')
        const data = await respone.json();
        console.log(data);
} catch (error) {
    console.error('error fetching data:', error);
}
}

getData();


//promise
function fetchData(url){
    return new Promise ((resolve, reject) => {
        fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error fetching data');
            }
            return response.json();
        })
        .then(data => resolve(data))
        .catch(error => reject(error));
    })
}


fetchData('https://dummyjson.com/products/categories')
    .then(data => {
        console.log('Data fetched:', data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

//callback
function fetchData(url, callback) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => callback(null, data))
        .catch(error => callback(error, null));
}

fetchData('https://api.example.com/data', function (err, data) {
    if (err) {
        console.error('Error fetching data:', err);
        return;
    }
    console.log('Data fetched:', data);
});

