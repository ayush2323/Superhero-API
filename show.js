show();

async function show() {
    const showcase = localStorage.getItem('showcase');
    if (showcase == null) {
        showcaseObj = [];
    }
    else {
        showcaseObj = JSON.parse(showcase);
        let ap = await fetch(`https://superheroapi.com/api.php/1755377837942796/`+`${showcaseObj}`);
        let make = await ap.json();
        console.log(make);      
    
        let html = '';
            html = `
                    <div class="details">
                    <div class="image">
                        <h1>ID: <span>${make.id}</span></h1>
                        <center><img src="${make.image.url}"></center>
                        <h1>Name: <span id=nam">${make.name}</span></h1>
                    </div>
                    <div class="line2">
                        <h2>Intelligence: ${make.powerstats.intelligence}</h2>
                        <h2>Strength: ${make.powerstats.strength}</h2>
                        <h2>Speed: ${make.powerstats.speed}</h2>
                    </div>
                    <div class="line3">
                        <h2>Durability: ${make.powerstats.durability}</h2>
                        <h2>Power: ${make.powerstats.power}</h2>
                        <h2>Combat: ${make.powerstats.combat}</h2>
                    </div>
                    <div class="line4">
                        <h2>Gender: ${make.appearance.gender}</h2>
                        <h2>Race: ${make.appearance.race}</h2>
                        <h2>Height: ${make.appearance.height}</h2>
                    </div>
                    <div class="line5">
                        <h2>Weight: ${make.appearance.weight}</h2>
                        <h2>Eye Color: ${make.appearance.eye_color}</h2>
                        <h2>Hair Color: ${make.appearance.hair_color}</h2>
                    </div>
                    <div class="line6">
                        <h2>Full Name: ${make.biography.full-name}</h2>
                        <h2>Alter Egos: ${make.biography.alter_egos}</h2>
                        <h2>Group Affiliation: ${make.connections.group_affliliation}</h2>
                    </div>
                    <div class="line7">
                        <h2>First Appearance: ${make.biography.first_appearance}</h2>
                        <h2>Publisher: ${make.biography.publisher}</h2>
                        <h2>Alignment: ${make.biography.alignment}</h2>
                    </div>
                    <div class="line8">
                        <h2>Occupation: ${make.work.occupation}</h2>
                        <h2>Place of birth: ${make.biography.place_of_birth}</h2>
                    </div>
                    <div class="line9">
                        <h2>Base of operation: ${make.work.base}</h2>
                    </div>
                    <div class="line10">
                        <h2>Aliases: ${make.biography.aliases}</h2>
                    </div>
                    <div class="line11">
                        <h2>Relatives: ${make.connections.relatives}</h2>
                    </div>
                </div>`;
                const bottom = document.querySelector('.bottom');
                bottom.innerHTML = html;
    }
}

function goBack(index){
    let showcase = localStorage.getItem('showcase');
    if (showcase == null) {
        showcaseObj = [];
    }
    else {
        showcaseObj = JSON.parse(showcase);
    }
    showcaseObj.splice(index, 1);
    localStorage.setItem('showcase', JSON.stringify(showcaseObj));

    window.history.back();
};