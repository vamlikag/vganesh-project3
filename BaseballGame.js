// implement the class BaseballGame for game logic
class BaseballGame {
    keyGenerate(){
        let keyValue = game.keyMethod();
        document.getElementById('key').innerHTML= keyValue;
        let button = document.querySelectorAll('button');
        button.forEach(function(button){
            button.disabled = false;
        });
        let guessValue = [];
        let count = 0;
        let tabBody = document.getElementById('tbody-stat');
        tabBody.innerHTML = '';
        for(let i =0;i<10;i++){
            button[i].onclick = function(){
                count ++;
                guessValue.push(parseInt(button[i].innerHTML));
                button[i].disabled = true;
                if(count ==3){
                    let tabRow = document.createElement('tr');
                    let tabData1 = document.createElement('td');
                    tabData1.innerHTML = guessValue;
                    tabRow.appendChild(tabData1);

                    let tabData2 = document.createElement('td');
                    tabData2.innerHTML = game.ballsVerify(guessValue, keyValue);
                    tabRow.appendChild(tabData2);

                    let tabData3 = document.createElement('td');
                    tabData3.innerHTML = game.strikesVerify(guessValue, keyValue);
                    tabRow.appendChild(tabData3);

                    tabBody.appendChild(tabRow);

                    if(game.strikesVerify(guessValue,keyValue)===3){
                        window.alert("strike out ~~~ \n The key was " + keyValue + "\n <New> to play again");
                        document.getElementById('guess').innerHTML = '';
                        let k = 0;
                        while(k<10)
                        {
                            button[k].disabled = true;
                            k++;
                        }
                    }
                    else{
                        let k = 0;
                        while(k<10)
                        {
                            button[k].disabled = false;
                            k++;
                        }
                    }
                    guessValue = [];
                    count = 0;

                }
                document.getElementById('guess').innerHTML = guessValue;
            }
        }
    }
    keyMethod(){
        let key = [];
        while(key.length<3){
            let randomNum = Math.floor(Math.random() * 10);
            if(!key.includes(randomNum)){
                key.push(randomNum);
            }


        }
        return key;
    }

    strikesVerify(guessValue,keyValue){
        let strikes = 0;
        for(let i=0;i<guessValue.length;i++){
            if(guessValue[i]===keyValue[i]){
                strikes++;
            }
        }
        return strikes;
    }

    ballsVerify(guessValue,keyValue){
        let balls = 0;
        for(let num of guessValue){
            if(keyValue.includes(num)){
                balls++;
            }
        }
        return balls - this.strikesVerify(guessValue,keyValue);
    }
}