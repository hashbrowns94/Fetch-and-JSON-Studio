window.addEventListener('load', function(){
    this.fetch('https://handlers.education.launchcode.org/static/astronauts.json').then(function(response) {
        response.json().then(function(json) {
            const container = document.getElementById('container');

            for (prop in json) {
                let newDiv = document.createElement('div');
                newDiv.classList.add('astronaut'); 
                newDiv.innerHTML = `
                        <div class = 'bio'>
                            <h3>${json[prop].firstName} ${json[prop].lastName}</h3>
                            <ul>
                                <li>Hours in Space: ${json[prop].hoursInSpace}</li>
                                <li>Active: ${json[prop].active}</li>
                                <li>Skills: ${json[prop].skills}</li>
                            </ul>
                        </div>
                        <img class = 'avatar' src = '${json[prop].picture}'>
                `
                container.appendChild(newDiv);
            }
        });
    });
});