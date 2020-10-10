const accesstoken = '1755377837942796';
const searchBtn = document.getElementById('searchbtn');
const database = localStorage.getItem('database');
const content = document.querySelector('.content');
content.innerHTML = '<h2 id="h1">Search Your Favorite Superhero or Villian</h2>';

if(content == ''){
    content.innerHTML = 'Search the Super Hero above';
}

searchBtn.addEventListener('click', async () => {
    let search = document.getElementById('search');

    if(search.value == ''){
        alert('please enter the name of superhero');
    }
    else{
        let url = await fetch(`https://superheroapi.com/api.php/${accesstoken}/search/${search.value}`);
        let store = await url.json();
        let use = store.results;
        console.log(store);
        showData(use);
    }
});

function showData(use){
    let html = '';
    use.forEach(function(element,index) {
        console.log(use);
        console.log(element);
        console.log(element.id);
        console.log(index);
        console.log(element.index);
        console.log(index.id);
        html += `<div class="card">
                    <img alt="No image available" src="${element.image.url}">
                    <div class="card-data">
                        <div class="cat0">
                            <h1 class="data" id="id">Id: ${element.id}</h1>
                            <h1 class="data" id="n">Name: ${element.name}</h1><br><br>
                        </div>
                        <div class="cat1">
                            <h2 class="data" id="gender">Gender: ${element.appearance.gender}</h2>
                            <h2 class="data" id="race">Race: ${element.appearance.race}</h2>
                        </div>
                        <div class="cat2">
                            <h2 class="data" id="intelligence">Intelligence: ${element.powerstats.intelligence}</h2>
                            <h2 class="data" id="strength">Strength: ${element.powerstats.strength}</h2>
                        </div>
                        <div class="cat3">
                            <h2 class="data" id="power">Power: ${element.powerstats.power}</h2>
                            <h2 class="data" id="speed">Speed: ${element.powerstats.speed}</h2>
                        </div>
                        <div class="cat4">
                            <h2 class="data" id="full-name">Full Name: ${element.biography.full-name}</h2>
                            <h2 class="data" id="publisher">Publisher: ${element.biography.publisher}</h2>
                        </div>
                    </div>
                    <div class="button">
                        <a href="show.html" id="a"><button id="showDetail" class="show">Show More</button></a>
                        <button class="show" id="add">Add Favorite</button>
                    </div>
                </div>`;
        content.innerHTML = html;

        const showDetail = document.getElementById('showDetail');
        showDetail.addEventListener('click', async () => {
            let showcase = localStorage.getItem('showcase');
            
            if(showcase == null){
                showcaseObj = [];
            }
            else{
                showcaseObj = JSON.parse(showcase);
            }
            showcaseObj.push(element.id);
            console.log(element.id);
            localStorage.setItem('showcase', JSON.stringify(showcaseObj));
        })

        const add = document.getElementById('add');
        add.addEventListener('click', async () => {
            let database = localStorage.getItem('database');
            console.log(use);
            console.log(element);
            console.log(index);
            console.log(element.id);
            

            if(database == null){
                databaseObj = [];
            }
            else{
                databaseObj = JSON.parse(database);
            }
            databaseObj.push(element.id);
            localStorage.setItem('database', JSON.stringify(databaseObj));

            alert('Added to Favorite list');
        })
    }); 
}

    
