const bottom = document.querySelector('.bottom');
show();

async function show(){
    let database = localStorage.getItem('database');
    if(database == null){
        databaseObj = [];
    }
    else{
        databaseObj = JSON.parse(database);
        if(databaseObj.length == 0){
            bottom.innerHTML = `<h1 class="h1">No Favorite Super Hero added</h1>`;
        }
        else{
            let html = "";
            for(let i = 0; i < databaseObj.length; i++){
                let ap = await fetch(`https://superheroapi.com/api.php/1755377837942796/`+`${databaseObj[i]}`);
                let make = await ap.json(); 
                html += `
                        <div class="card">
                        <img src="${make.image.url}"></img>
                        <div class="card-data">
                            <div class="cat0">
                                <h1 class="data" id="id">Id: ${make.id}</h1>
                                <h1 class="data" id="n">Name: ${make.name}</h1><br><br>
                            </div>
                            <div class="cat1">
                            <h2 class="data" id="gender">Gender: ${make.appearance.gender}</h2>
                                <h2 class="data" id="race">Race: ${make.appearance.race}</h2>
                            </div>
                            <div class="cat2">
                                <h2 class="data" id="intelligence">Intelligence: ${make.powerstats.intelligence}</h2>
                                <h2 class="data" id="strength">Strength: ${make.powerstats.strength}</h2>
                            </div>
                            <div class="cat3">
                                <h2 class="data" id="power">Power: ${make.powerstats.power}</h2>
                                <h2 class="data" id="speed">Speed: ${make.powerstats.speed}</h2>
                            </div>
                            <div class="cat4">
                                <h2 class="data" id="full-name">Full Name: ${make.biography.full-name}</h2>
                                <h2 class="data" id="publisher">Publisher: ${make.biography.publisher}</h2>
                            </div>
                        </div>
                        <div class="button">
                            <a href="show.html" id="a"><button id="showDetail" class="show">Show More</button></a>
                            <button class="show" id="${i}" onclick="remove(this.id)">Remove Favorite</button>
                        </div>
                    </div>`;
                bottom.innerHTML = html;
            }

            const showDetail = document.getElementById('showDetail');
            showDetail.addEventListener('click', () => {
                let showcase = localStorage.getItem('showcase');
                        
                if(showcase == null){
                    showcaseObj = [];
                }
                else{
                    showcaseObj = JSON.parse(showcase);
                }
                showcaseObj.push(make.id);
                localStorage.setItem('showcase', JSON.stringify(showcaseObj));
            })
        }
    }
}

function remove(index){
    let database = localStorage.getItem("database");
    if(database == null){
        databaseObj = [];
    }
    else{
        databaseObj = JSON.parse(database);
    }
    databaseObj.splice(index, 1);
    localStorage.setItem('database', JSON.stringify(databaseObj));
    show();
}