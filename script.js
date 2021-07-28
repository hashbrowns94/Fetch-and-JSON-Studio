window.addEventListener('load', function(){
    this.fetch('https://handlers.education.launchcode.org/static/astronauts.json').then(function(response) {
        response.json().then(function(json) {
            const container = document.getElementById('container');
            let newP = document.createElement('newP');
            let counter = json.length;
            json.sort((a, b) => a.hoursInSpace > b.hoursInSpace ? 1 : -1);
            newP.innerHTML = `Astronaut Count: ${counter}`;
            for (prop in json) {
                let newDiv = document.createElement('div');
                let colorSwitch = (json[prop].active === true) ? 'green' : 'red';
                let counter = 0;
                newDiv.classList.add('astronaut'); 
                newDiv.innerHTML = `
                        <div class = 'bio'>
                            <h3>${json[prop].firstName} ${json[prop].lastName}</h3>
                            <ul>
                                <li>Hours in Space: ${json[prop].hoursInSpace}</li>
                                <li id = 'active' style = 'color: ${colorSwitch}'>Active: ${json[prop].active}</li>
                                <li>Skills: ${json[prop].skills}</li>
                            </ul>
                        </div>
                        <img class = 'avatar' src = '${json[prop].picture}'>
                `
                container.appendChild(newDiv);
                container.appendChild(newP);
            }
            
        });
    });
});