"use strict";
window.onhashchange=switchToStateFromURLHash;

var stateSPA={};

function switchToStateFromURLHash() {
    var hashURL=window.location.hash;
    var stateJSON=decodeURIComponent(hashURL.substr(1));
    if ( stateJSON!="" )
        stateSPA=JSON.parse(stateJSON);
    else
        stateSPA={pagename:'main'};

    var pageHTML="";
    switch ( stateSPA.pagename ) {
        case 'main':
            pageHTML+="<div class='container'>";
            pageHTML+="<div id='menu'>";
            pageHTML+="<h1>Пасьянс Паук</h1>";
            pageHTML+="<div><a onclick='switchToNewGamePage()'>Игра</a></div>";
            pageHTML+="<div><a onclick='switchToRulesGamePage()'>Правила игры</a></div>";
            pageHTML+="<div><a onclick='switchToResultPage()'>Рекорды</a></div>";
            pageHTML+="</div>";
            pageHTML+="</div>";
            break;
        case 'newGame':
            var gameStart=stateSPA.countSt;
            pageHTML+="<div class='container'>";
            pageHTML+="<div class='main-rows clearfix'>";
            pageHTML+="<div id='0-row'></div>";
            pageHTML+="<div id='1-row'></div>";
            pageHTML+="<div id='2-row'></div>";
            pageHTML+="<div id='3-row'></div>";
            pageHTML+="<div id='4-row'></div>";
            pageHTML+="<div id='5-row'></div>";
            pageHTML+="<div id='6-row'></div>";
            pageHTML+="<div id='7-row'></div>";
            pageHTML+="<div id='8-row'></div>";
            pageHTML+="<div id='9-row'></div>";
            pageHTML+="</div>";
            pageHTML+="<div class='ordered-row'></div>";
            pageHTML+="<div class='game-deck'></div>";
            pageHTML+="<div id='mainback' onclick='switchToMainPage()'>Назад</div>";
            pageHTML+="</div>";
            pageHTML+="<div id='record'>";
            pageHTML+="<div>Поздравляем!<div>Ваше имя</div>";
            pageHTML+="<div><input type='text' id='userName' autofocus/></div>";
            pageHTML+="<div onclick='sendMessage()' id='sendRecord'>Ок</div>";
            pageHTML+="</div>";
            pageHTML+="</div>"
            if (gameStart) {
                
                pageHTML+="<div id='choiceType'>";
                pageHTML+="<div>";
                pageHTML+="<div onclick='continueGame()'>Продолжить </div>";
                pageHTML+="<div onclick='startNewGame()'>Новая игра</div>";
                pageHTML+="</div>";
                pageHTML+="</div>"
            } 
            else {
                pageHTML+="<div id='choiceType'>";
                pageHTML+="<div>Выберите уровень сложности<br>";
                pageHTML+="<div onclick='oneSuit()'>1 масть</div>";
                pageHTML+="<div onclick='twoSuits()'>2 масти</div>";
                pageHTML+="<div onclick='threeSuits()'>4 масти</div>";
                pageHTML+="</div>";
                pageHTML+="</div>";
            }
            
            break;
        case 'rulesGame':
            pageHTML+="<div class='container'>";
            pageHTML+="<div id='menu'>";
            pageHTML+="<h1>Правила игры</h1>";
            pageHTML+="<p>Пасьянс паук - один из онлайн вариантов пасьянса. Время игры не ограниченно. В игре есть на выбор три варианта сложности. Первый предполагает наличие только одной масти - пики. Разумеется, это наиболее лёгкий вариант игры. Второй вариант, предполагает наличие уже двух мастей - пики и черви. Это уже усложняет задачу, так как складывать последовательности нужно по мастям. Хотя 'прицепить' 8 пик к 9 червей можно, но в конце необходимо получить последовательность по убыванию именно одной масти, которая затем сбрасывается. И наконец третий вариант, самый сложный, предполагает наличие всех четырёх мастей. После того как Вы собрали всю последовательность от Короля до Двойки и Туза, последовательность сбрасывается. Удачи!</p>";
            pageHTML+="<div id='back' onclick='switchToMainPage()'>Назад</div>";
            pageHTML+="</div>";
            pageHTML+="</div>";
            break;
        case 'result':
            pageHTML+="<div class='container'>";
            pageHTML+="<div id='menu'>";
            pageHTML+="<h1>Рекорды</h1>";
            pageHTML+="<div id='tableResult' class='clearfix'>";
            pageHTML+="<div id='place'></div>";
            pageHTML+="<div id='nameWin'></div>";
            pageHTML+="<div id='numberStep'></div>";
            pageHTML+="</div>";
            pageHTML+="<div id='back' onclick='switchToMainPage()'>Назад</div>";
            pageHTML+="</div>";
            pageHTML+="</div>";
            break;
    }
    document.getElementById('myContainer').innerHTML=pageHTML;
    if (stateSPA.pagename==='result')
        refreshMessages();

}

function switchToState(newState) {
    location.hash=encodeURIComponent(JSON.stringify(newState));
}
function switchToMainPage() {
    switchToState( { pagename:'main' } );
}

function switchToNewGamePage() {
    switchToState( { pagename:'newGame' } );
    if (countStep!==0) 
        switchToState( { pagename:'newGame', countSt: true } );
    else
        switchToState( { pagename:'newGame', countSt: false } );


}

function switchToRulesGamePage() {
    switchToState( { pagename:'rulesGame' } );
}
function switchToResultPage() {
    switchToState( { pagename:'result' } );
}

switchToStateFromURLHash();