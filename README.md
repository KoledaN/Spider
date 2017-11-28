<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Spider</title>
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <meta name="viewport" content="width=device-width, height=device-height, target-densitydpi=device-dpi, initial-scale=1"> 
</head>
<style>
    html, body {
        margin: 0;
        padding: 0;
    }
    body {
        font-family: 'Roboto', sans-serif;      
    }
    .game-field {
        position: relative;
        background: url('pictures/field.jpg') no-repeat center top /cover;
        min-width: 100%;
        min-height: 100vh;
    }
    .container {
        position: relative;
        padding-left: 1%;
        padding-right: 1%;
        max-width: 1550px;
        margin-left: auto;
        margin-right: auto;
        height: 100vh;
    }
    #menu {
        font-size: 26px;
        padding: 30px;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        width: 50vw;
        height: 45vw;
        margin: auto;
        color: white;
        background: rgba(172, 183, 142, 0.4);
        box-shadow: 0px 0px 25px 1px #1a1e10;
    }
    h1 {
        text-align: center;
        margin-bottom: 40px;
        text-transform: uppercase;
    }
    #menu div:first-child {
        padding-top: 70px;
    }
    #menu div {
        margin: 20px;
        text-align: center;       
    }
    #menu a {
        transition: 0.5s;
        border-bottom: 3px solid transparent; 
        padding-bottom: 3px;
    }
    #menu a:hover {
        border-color: white;
    }
    #menu p {
        font-size: 18px;
        line-height: 1.4em;
        text-align: justify;
    }
    #mainback {
        color: white;
        position: absolute;
        bottom: 2vw;
        border-radius: 5px;
        padding: 10px;
        transition: 0.5s;
        background: rgba(172, 183, 142, 0.4);
    }
    #mainback:hover {
        box-shadow: 0px 0px 5px yellow;
    }
    div #back {
        width: 60px;
        margin-right: auto;
        margin-left: auto;
        font-size: 20px;
        transition: 0.5s;
        border-bottom: 3px solid transparent; 
        padding-bottom: 5px;
    }
    #back:hover {
        border-color: white;
    }
    div #choiceType {
        position: fixed;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background: rgba(172, 183, 142, 0.8);
    }
    div #record {
        display: none;
        position: fixed;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        transform: translateY(-100%);
        background: rgba(172, 183, 142, 0.8);
    }

    #choiceType>div, #record>div {
        color: white;
        font-size: 40px;
        text-align: center;
        position: absolute;
        display: block;
        top: 40%;
        left: 0;
        right: 0;   
    }
    #choiceType>div div {
        font-size: 20px;
        display: inline-block;
        border: 1px solid yellow;
        padding: 10px 20px;
        margin: 40px 20px;
        border-radius: 5px;
        transition: 0.5s;
    }
    #choiceType div div:hover {
        background: rgba(172, 183, 142, 1);
    }
    #record div div:first-child {
        font-size: 30px;
        margin-top: 10px;
    }
    #record input {
        margin-top: 15px;
        margin-bottom: 15px;
        width: 200px;
        padding: 10px;
        border-radius: 5px;
        font-size: 16px;
    }
    #record input:focus {
        outline: none;
        border-color: yellow;
        box-shadow: 0px 0px 5px yellow;
    }
    #sendRecord {
        font-size: 30px;
        /*border: 2px solid yellow;*/
        width: 80px;
        margin-left: auto;
        margin-right: auto;
        border-radius: 5px;
        padding: 5px;
        transition: 0.5s;
        background: rgba(172, 183, 142, 0.4);
    }
    #sendRecord:hover {
        box-shadow: 0px 0px 5px yellow;
    }
    div #tableResult {
        max-width:450px;
        margin-left: auto;
        margin-right: auto;
    }
    div #tableResult div {
        float: left;
        width: 170px;
        padding: 10px;
        margin: 0;
        font-size: 20px;
    }
    div #tableResult div:first-child {
        padding: 10px;
        width: 50px;
    }
    div #tableResult div:last-child {
        width: 170px;
    }
    .clearfix::after {
        content: "";
        display: block;
        clear: both;

    }
    .main-rows>div {
        position: relative;
        float:left;
        border: 3px solid yellow;
        width: 7.6vw;
        height: 10.6vw;
        margin: 2vw 0.6vw;
        border-radius: 8%;
    }
    .main-rows>div:first-child {
        margin-left: 0;
    }
    .main-rows>div:last-child {
        margin-right: 0;
    }
    .main-rows>div>div {
        width: 8vw;
        height: 11vw;
        border: 2px solid lightgray;
        position: absolute;
        border-radius: 8%;
        background-size: cover;
        transform: translateZ(0);
    }
    .face-down::before {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        background: url('pictures/5.jpg') no-repeat 0% 0%;
        background-size: cover;
        border-radius: 5%;

    }
    .game-deck {
        width: 7.6vw;
        height: 10.6vw;
        right: 10vh;
        bottom: 2vw;
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        border: 3px solid yellow;
        border-radius: 5%;
    }
    .newrow {
        position: absolute;
        top: -3px;
        width: 8vw;
        height: 11vw;
        background: url('pictures/5.jpg') no-repeat 0% 0%;
        background-size: cover;
        border: 2px solid lightgray;
        border-radius: 5%;
    }
    
    @media only all and (min-width: 1600px) {
        div.main-rows>div {
            width: 127px;
            height: 177px;
            margin: 40px 12px;
        }
        div.main-rows>div>div, div.newrow {
            width: 130px;
            height: 180px;
        }
        div.game-deck {
            width: 127px;
            height: 177px;
            right: 1%;
        }
        div#menu {
            width: 600px;
            height: 550px;

        }
    }

    @media only all and (max-width: 1150px) {
        div h1 {
            margin-bottom: 20px;
            font-size: 34px;
        }
        div#menu p {
            font-size: 9px;
        }
        div div#tableResult div {
            font-size: 9px;
            width: 22vw;
        }

        div div#tableResult div:first-child {
            width: 4vw;
        }
        div div#tableResult div:last-child {
            width: 7vh;
        }

    }

    @media only all and (max-width: 560px) {
        div.main-rows>div {
            width: 6.6vw;
            height: 9.55vw;
        }
        div.main-rows>div>div, div.newrow {
            width: 7.8vw;
            height: 10.8vw;
        }
        div div.game-deck {
            width: 6.6vw;
            height: 9.1vw;
        }
        div div#menu {
            width: 80vw;
            height: 100vw;
        }
     }

    @media only all and (max-height: 700px) {
        div#mainback, div div div.game-deck {
            bottom: 8vw;
        }   
    }
    
</style>
<body>
    <div class="game-field" id='myContainer'>
        <div id='choiceType'>
            <div style='display: none'>Поздравляем!<br>
                Введите ваше имя<br>
                <div>1 масть</div>
            </div>
        </div>
    </div>
    <script src="http://fe.it-academy.by/JQ/jquery.js"></script>
    <script>
        "use strict"
        var ajaxHandlerScript="http://fe.it-academy.by/AjaxStringStorage2.php";
        var messages;
        var updatePassword;
        var stringName='koleda_spider_records';

        function showMessages() {
            var strName='';
            var strRes='';
            var strCount='';
            var countRec=0;
            for ( var m=0; m<messages.length; m++ ) {
                messages.sort(compareRes);
                var message=messages[m];
                strName+=escapeHTML(message.name)+'<br>';
                strRes+=escapeHTML(message.res)+'<br>';
                countRec++;
                strCount+=countRec+'<br>';
            }
            console.log(strCount)
            document.getElementById('place').innerHTML=strCount;
            document.getElementById('nameWin').innerHTML=strName;
            document.getElementById('numberStep').innerHTML=strRes;
        }

        function compareRes(a,b) {
            return a.res-b.res;
        }

        function escapeHTML(text) {
            if ( !text )
                return text;
            text=text.toString()
                .split("&").join("&amp;")
                .split("<").join("&lt;")
                .split(">").join("&gt;")
                .split('"').join("&quot;")
                .split("'").join("&#039;");
            return text;
        }

        function refreshMessages() {
            $.ajax( {
                url : ajaxHandlerScript,
                type : 'POST', dataType:'json',
                data : { f : 'READ', n : stringName },
                cache : false,
                success : readReady,
                error : errorHandler
            } );
        }

        function readReady(callresult) {
            if ( callresult.error!=undefined )
                alert(callresult.error); 
            else {
                messages=[];
                if ( callresult.result!="" ) {
                    messages=JSON.parse(callresult.result);
                    if ( !Array.isArray(messages) )
                        messages=[];
                }
                showMessages();
            }
        }

        function sendMessage() {
            updatePassword=Math.random();
            $.ajax( {
                url : ajaxHandlerScript,
                type : 'POST', dataType:'json',
                data : { f : 'LOCKGET', n : stringName, p : updatePassword },
                cache : false,
                success : lockGetReady,
                error : errorHandler
            } );
        }

        function lockGetReady(callresult) {
            if ( callresult.error!=undefined )
                alert(callresult.error);
            else {
                messages=[];
                if ( callresult.result!="" ) {
                    messages=JSON.parse(callresult.result); 
                    if ( !Array.isArray(messages) )
                        messages=[];
                }
                var senderName=document.getElementById('userName').value;
                var message=countStep;
                messages.push( { name:senderName, res:message } );
                if ( messages.length>10 )
                    messages=messages.slice(messages.length-10);
                //showMessages();
                $.ajax( {
                    url : ajaxHandlerScript,
                    type : 'POST', dataType:'json',
                    data : { f : 'UPDATE', n : stringName, v : JSON.stringify(messages), p : updatePassword },
                    cache : false,
                    success : updateReady,
                    error : errorHandler
                } );
            } 
            document.getElementById('record').style.display="none";
            switchToResultPage();
            deckField=[];
            deckLast={};
            countStep=0;
            countNewRow=0;
            countOrderedRow=0;
        }

        function updateReady(callresult) {
            if ( callresult.error!=undefined )
                alert(callresult.error);
        }

        function errorHandler(jqXHR,statusStr,errorStr) {
            alert(statusStr+' '+errorStr);
        }
    </script>
    <script>
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
            console.log('Новое состояние приложения:');
            console.log(stateSPA);

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
                    pageHTML+="<div><input type='text' id='userName'/></div>";
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
    </script>
    <script>
        "use strict";
        var suits=4; //масти
        var cards=13; //количество карт каждой масти
        var deckLast={}; //хэш с картами, которые уже не в колоде
        var deckField=[]; //массив расположения всех карт на поле
        var countNewRow=0; //для создания рядов в колоде
        var rows=10; //количество рядов на игровом поле
        var testRow=4; //ряд в массиве deck для сравнения карт
        var shiftPos=3;//смещение для раскладки карт
        var orderedRow=[]; //массив собранных рядов !!!
        var countOrderedRow=0; //количество собранных рядов !!!
        var animAddRow=false; // нужно ли плавно раздавать новый ряд
        var deck; //массив с картами
        var repeatCard;// число необходимое для расдачи в колоде в зависимости от выбранной игры
        var countStep=0; //количество ходов в игре
        var rowCard=13; //количество карт в собранном ряде
        var dragObject = {}; //хэш, содержащий ин-ию для перемещения карт
        var cardMove={}; //хэш, содержащий информацию для плавного возврата брошенной карты
        var animDeckRow={}; // !!!
        var distBetween=26; //растояние между картами
        var soundLoad=false; //для подключения звуков
        var recordEl={};
 
        //колода
        var deck1 = [ ['SA', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8', 'S9', 'S10', 'SJ', 'SQ', 'SK'],
                    ['SA', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8', 'S9', 'S10', 'SJ', 'SQ', 'SK'],
                    ['SA', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8', 'S9', 'S10', 'SJ', 'SQ', 'SK'],
                    ['SA', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8', 'S9', 'S10', 'SJ', 'SQ', 'SK'],
                    ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']];
 
        var deck2 = [ ['SA', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8', 'S9', 'S10', 'SJ', 'SQ', 'SK'],
                    ['SA', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8', 'S9', 'S10', 'SJ', 'SQ', 'SK'],
                    ['HA', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'H9', 'H10', 'HJ', 'HQ', 'HK'],
                    ['HA', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'H9', 'H10', 'HJ', 'HQ', 'HK'],
                    ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']];
        
        var deck4 = [ ['SA', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8', 'S9', 'S10', 'SJ', 'SQ', 'SK'],
                    ['CA', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10', 'CJ', 'CQ', 'CK'],
                    ['DA', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10', 'DJ', 'DQ', 'DK'],
                    ['HA', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'H9', 'H10', 'HJ', 'HQ', 'HK'],
                    ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']];

        //распологает в на игровом поле нужное количество карт согласно DeckField
        function view(field) {
           var rowN=document.querySelectorAll('.main-rows>div');
            for (var n=0; n<rowN.length; n++) {
                var rowsN=rowN[n];
                var lastElem=rowsN.lastChild;
                //console.log(lastElem)
                if (!lastElem) {
                    var x=n;
                    var y=0;
                }
                else {
                    var m=lastElem.id.split('-');
                    var x=Number(m[0]);
                    var y=Number(m[1])+1;
                    //console.log(y);
                }            
 
                for (var i=y; i<field[x].length; i++) {
                    var divElem=document.createElement('div');
                    divElem.id=x+'-'+i;
                    divElem.style.backgroundImage="url(pictures/"+field[n][i]['name']+".gif)";
                    divElem.style.top=distBetween*i-shiftPos+'px';
                    divElem.style.left=-shiftPos+'px';
                    //console.log(field[n][i]['value'])
                    if (field[n][i]['value']===0)
                        divElem.className='face-down';
                    // divElem.appendChild(divElemText);
                    rowsN.appendChild(divElem);
                }
            }  
        }

        //отображает удаленный ряд из колоны
        function viewDeleteDeckRow() {
            var gameDeck=document.querySelector('.game-deck');
            var gameDeckLast=gameDeck.lastChild;
            gameDeck.removeChild(gameDeckLast);
        }

        //отображает на экране последнюю перевернутую карту
        function viewOpenLast(field, i, n) {
                // var text1=(field[n][i]['name']);
                // var text2=(field[n][i]['value']);
                var divElem=document.getElementById(n+'-'+i);
                // divElem.textContent=text1+' '+text2;  
                divElem.className=0;
        }

        //отображает на экране удаленный ряд
        function viewDelete(newM, x, y) {
            var len=newM.length;
            for (var i=0; i<len; i++) {
                var del=document.getElementById(x+'-'+(y+i));
                //console.log(del);
                var rowElem=del.parentNode;
                //var rowElem=document.querySelector('.main-rows>div:nth-child('+(x+1)+')');
                //console.log(rowElem);
                rowElem.removeChild(del);
            }
        }

        //media условие
        var MQ=window.matchMedia('(orientation: portrait)');
        MQ.addListener(F);
        function F() {
            if (MQ.matches) {
                console.log('yes');

                var newView=document.querySelectorAll('.main-rows>div');
                for (var i=0; i<newView.length; i++) {
                    newView[i].style.top='12vw';
                    newView[i].style.borderWidth='1px';
                    
                }
                var newDeck=document.querySelector('.game-deck');
                if (newDeck)
                    newDeck.style.top='1vw';
                // newDeck.style.bottom='0';
                var newBack=document.getElementById('mainback');
                if (newBack) {
                    newBack.style.top='1vw';
                    newBack.style.bottom='auto';
                }
                var newMenu=document.getElementById('menu');
                if (newMenu) {
                    newMenu.style.fontSize='20px';
                }
            }
            
            else {
                console.log('no');
                var newView=document.querySelectorAll('.main-rows>div');
                for (var i=0; i<newView.length; i++) {
                    newView[i].style.top='';
                    newView[i].style.borderWidth='';
                    
                }
                var newDeck=document.querySelector('.game-deck');
                if (newDeck)
                    newDeck.style.top='';
                // newDeck.style.bottom='0';
                var newBack=document.getElementById('mainback');
                if (newBack) {
                    newBack.style.top='';
                    newBack.style.bottom='';
                }
                var newMenu=document.getElementById('menu');
                if (newMenu) {
                    newMenu.style.fontSize='';
                }
            } 
        }

        //продолжить игру
        function continueGame() {
            if (deckField.length===0)
                switchToNewGamePage();
            else {
                var fixedPos=document.getElementById('choiceType');
                fixedPos.style.display='none';
                view(deckField); 
                createDeckRow(countNewRow); 
                eventStart();
            }   
        }

        //новая игра
        function startNewGame() {
            countStep=0;
            switchToNewGamePage();
            
        }

        //одна масть
        function oneSuit() {
            deck=deck1;
            repeatCard=7; 
            playNewGame(); 
                      
        }

        //две масти
        function twoSuits() {
            deck=deck2;
            repeatCard=3;  
            playNewGame();
             
        }

        //четыре масти
        function threeSuits() {
            deck=deck4;
            repeatCard=1;
            playNewGame();
                
        }
        
        //освежает все переменные для новой игры
        function playNewGame() {
            if (!soundLoad) {
                clickSoundFirst();
                soundLoad=true;
            }
            var fixedPos=document.getElementById('choiceType');
            fixedPos.style.display='none';
            deckField=[];
            deckLast={};
            countStep=0;
            countNewRow=0;
            countOrderedRow=0;
            addCard(5, 0);
            createDeckRow(countNewRow);
            turn(deckField);
            eventStart();
            clickSound3();
        }

        window.onbeforeunload=canUnload;
        //предупреждает о потере игры
        function canUnload(EO) {
            EO=EO||window.event;
            if ( countStep!==0 )
                EO.returnValue='Ваша игра не сохранится!';
        }

        //виброотклик
        function vibro(longFlag) {
            if ( navigator.vibrate ) {
                if ( !longFlag )
                    window.navigator.vibrate(100);
                else
                    window.navigator.vibrate(300); 
            }
        }

        //audio
        var clickAudio0=new Audio/*("audio/0.mp3")*/;
        var clickAudio1=new Audio/*("audio/1.mp3")*/;
        var clickAudio2=new Audio/*("audio/2.mp3")*/;
        var clickAudio3=new Audio/*("audio/3.mp3")*/;
        var clickAudio4=new Audio/*("audio/4.mp3")*/;

        if ( clickAudio1.canPlayType("audio/mpeg")==="probably" ) {
            clickAudio0.src="audio/0.mp3";
            clickAudio1.src="audio/1.mp3";
            clickAudio2.src="audio/2.mp3";
            clickAudio3.src="audio/3.mp3";
            clickAudio4.src="audio/4.mp3";
        }
             
        else {
            clickAudio0.src="audio/0.ogg";
            clickAudio1.src="audio/1.ogg";
            clickAudio2.src="audio/2.ogg";
            clickAudio3.src="audio/3.ogg";
            clickAudio4.src="audio/4.ogg";
        }

        //запускает и останавливает звук
        function clickSoundFirst() {
            clickAudio0.play();
            clickAudio0.pause();
            clickAudio1.play();
            clickAudio1.pause();
            clickAudio2.play();
            clickAudio2.pause();
            clickAudio3.play();
            clickAudio3.pause();
            clickAudio4.play();
            clickAudio4.pause();
        }

        function clickSound0() {
            clickAudio0.currentTime=0;
            clickAudio0.play();
        }

        function clickSound1() {
            clickAudio1.currentTime=0;
            clickAudio1.play();
        }

        function clickSound2() {
            clickAudio2.currentTime=0;
            clickAudio2.play();
        }

        function clickSound3() {
            clickAudio3.currentTime=0;
            clickAudio3.play();
        }

        function clickSound4() {
            clickAudio4.currentTime=0;
            clickAudio4.play();
        }
 
        //получает нужное количество случайных карт из колоды, каждая карта может повторяться нужное количество раз в зависимости от выбранной игры
        function addCard(cards1, val) {
            debugger;
            var cards2=cards1;
            for (var i=0; i<rows; i++) {
                if (deckField.length===i) {
                    deckField.push([]);
                    if (i<4)
                        cards2=6;
                    else
                        cards2=cards1;
                }
                for (var j=0; j<cards2; j++) {
                    do {
                        var suit=Math.floor(Math.random()*suits);
                        var card=Math.floor(Math.random()*cards);
                        var cardName=deck[suit][card];
                    }
                    while ((cardName in deckLast)&&(deckLast[cardName]===repeatCard))
                    if (cardName in deckLast) {
                        deckLast[cardName]+=1;
                    }   
                    else  {
                        deckLast[cardName]=0;
                    }
                    deckField[i].push({name:cardName, value:val});
                }
            }          
            view(deckField);
        } 

        //создает в колоде 5 рядов
        function createDeckRow(countNewRow) {
            var newDeckRow=5-countNewRow;
            for (var i=0; i<newDeckRow; i++) {
                var newDivRow=document.createElement('div');
                newDivRow.className='newrow';
                newDivRow.style.left=-distBetween*i-shiftPos+'px';
                var gameDeck=document.querySelector('.game-deck');
                gameDeck.appendChild(newDivRow);
            }
        }

        //переворачивает последнию закрытую карту где нужно
        function turn(field) {
            for (var n=0; n<field.length; n++) {
                var i=field[n].length-1;
                if (i<0) {
                    //viewOpenLast(field);
                    continue;
                }
                else if (field[n][i]['value']===0) {
                    field[n][i]['value']=1;
                    viewOpenLast(field, i, n);
                }
            }      
        }
        
        //получает true в случае если данную карту можно перемещать
        function resolveMove(elem) {
            var m=elem.id.split('-');
            var x=Number(m[0]);
            var y=Number(m[1]);
            if (isNaN(y))
                return false;
            if (deckField[x][y]['value']===0) {
                return false;
            }
            else {
                var last=deckField[x].length-1;
                if (deckField[x][y]===deckField[x][last]) {
                    //console.log('yes');
                    return true;
                }    
                else {
                    var len1=deckField[x].length-1;
                    for (var i=y; i<len1; i++) {
                        var newCard=deckField[x][i]['name'];
                        //console.log(newCard);
                        var nextCard=deckField[x][i+1]['name'];
                        //console.log(nextCard);
                        if (newCard[0]!==nextCard[0])
                            return false;
                        else {
                            if (!compareCard(newCard, nextCard)) {
                                return false;
                            }
                            else {
                                if (i!==(len1-1))
                                    continue;
                                else {
                                    return true;
                                }
                            }
                        }        
                    }
                }
            }
        }
 
        //возвращает true если целый ряд собран
        function checkRow(x) {
            var len=deckField[x].length-1;
            if ((len+1)<rowCard)
                return false;
            var countCard=0;
            for (var i=0; i<len; i++) {
                var newCard=deckField[x][i]['name'];
                var nextCard=deckField[x][i+1]['name'];
                if (newCard[0]!==nextCard[0]) {
                    countCard=0;
                    continue;
                }
                else {
                    if (compareCard(newCard,nextCard)) {
                        countCard++;
                        if (countCard===rowCard-1) {
                            vibro(true);
                            return true;
                        }
                        else {
                            continue;
                        }
                    }
                    else {
                        countCard=0;
                        continue;
                    }
                }
            }
        }

        //вызывает поле для ввода имени
        function showRecord() {
            clickSound4();
            var recordDiv=document.getElementById('record');
            recordDiv.style.display='block';
            recordEl.elem=recordDiv;
            recordEl.startPos=-100;
            recordEl.speed=0.5;
            tick();
        }
    
        function transformRecord() {
            recordEl.elem.style.transform='translateY('+recordEl.startPos+'%) translateZ(0)';

        }

        //удаляет собранный ряд
        function orderedCards(x) {
            if (checkRow(x)) {
                var len=deckField[x].length;
                var y=len-rowCard;
                var newM=deckField[x].splice(y);
                viewDelete(newM, x, y);
                countOrderedRow++;
                if (countOrderedRow===8) {
                    showRecord();
                }
            }
        }
       
        //сравнивает две карты
        function compareCard(currentCard, nextCard) {
            var cur=currentCard.slice(1);
            var next=nextCard.slice(1);
 
            var card1=deck[testRow].indexOf(cur);
            var card2=deck[testRow].indexOf(next);
            if (card1-card2===1)
                return true;
        }
 
        //можно ли на эту карту перемещать другие карты
        function resolveAdd(dragElem, dropElem) {
            var mdrag=dragElem.id.split('-');
            var xdrag=Number(mdrag[0]);
            var ydrag=Number(mdrag[1]);
            var mdrop=dropElem.id.split('-');
            var xdrop=Number(mdrop[0]);
            var ydrop=Number(mdrop[1]);
            if (isNaN(ydrop)) {
                var y=mdrop[1];
                var elem=document.getElementById(xdrag+'-'+y);
                if (elem)
                    return true;
                else
                    return false;
            }
            var last=deckField[xdrop].length-1;
            if (deckField[xdrop][ydrop]===deckField[xdrop][last]) {
                var nextCard=deckField[xdrag][ydrag]['name'];
                var curCard=deckField[xdrop][ydrop]['name'];
                if (compareCard (curCard, nextCard)) {
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        }
 
        //раздает новый ряд
        function addRow(EO) {
            EO=EO||window.event;
            var divElem=EO.target||EO.srcElement;
            var canAddRow=true;
            if (countNewRow<5) {
                for (var j=0; j<10; j++) {
                    if (deckField[j].length===0) {
                        canAddRow=false;
                        vibro(false);
                        clickSound2();
                        break;
                    }
                }
                if (canAddRow) {
                    animAddRow=true;
                    clickSound3();
                    addCard(1,1);
                    countNewRow++;
                    countStep++;
                    viewDeleteDeckRow();
                } 
            }
            for (var i=0; i<10; i++) {
                orderedCards(i);
            }
            turn(deckField);
        }
       
        //при нажатии мыши или прикосновении пальца на таче к карте
        function downCard(EO) {
            EO=EO||window.event;
            EO.preventDefault();
            var divElem=EO.target||EO.srcElement;
 
            if (getMouseWhich(EO)===3)  //если нажата правая кнопка мыши
                return;
 
            if (!resolveMove(divElem))
                return;
 
            dragObject.elem=divElem;
            dragObject.m=dragObject.elem.id.split('-');
            dragObject.x=Number(dragObject.m[0]);
            dragObject.y=Number(dragObject.m[1]);
 
            dragObject.last=deckField[dragObject.x].length-1;
            dragObject.len=deckField[dragObject.x].length;
 
            dragObject.top=dragObject.elem.style.top;
            dragObject.left=dragObject.elem.style.left;
 
            if (dragObject.elem.nextSibling) {
                var nextElem=dragObject.elem.nextSibling;
                var nextTop=parseFloat(nextElem.style.top);
                dragObject.distance=nextTop-parseFloat(dragObject.top);
            }
 
            dragObject.downX=EO.pageX||EO.targetTouches[0].pageX;
            dragObject.downY=EO.pageY||EO.targetTouches[0].pageY;
 
            var divElemPos=getElementPos(dragObject.elem);
            dragObject.elemPosLeft=divElemPos.left;
            dragObject.elemPosTop=divElemPos.top
 
            dragObject.posX=dragObject.downX-divElemPos.left+shiftPos;
            dragObject.posY=dragObject.downY-divElemPos.top+shiftPos;
            clickSound0();
        }
        
        //при перемещении карты курсором или пальцем на таче 
        function moveCard(EO) {
            EO=EO||window.event;
            EO.preventDefault();
 
            if (!dragObject.elem)
                return;
 
            var moveX = (EO.pageX||EO.targetTouches[0].pageX) - dragObject.downX;
            var moveY = (EO.pageY||EO.targetTouches[0].pageY) - dragObject.downY;
            if ( (Math.abs(moveX) < 3) && (Math.abs(moveY) < 3 ))
                return; // ничего не делать, мышь не передвинулась достаточно далеко
 
            var gameRow=dragObject.elem.parentNode;
            var gameRowPos=getElementPos(gameRow)
 
            dragObject.elem.style.left = (EO.pageX||EO.targetTouches[0].pageX) - gameRowPos.left  - dragObject.posX + 'px';
            dragObject.elem.style.top = (EO.pageY||EO.targetTouches[0].pageY) - gameRowPos.top - dragObject.posY  + 'px';
            dragObject.elem.style.zIndex="1000";
            dragObject.elem.style.boxShadow='0px 0px 10px 3px yellow';
 
            if (deckField[dragObject.x][dragObject.y]!==deckField[dragObject.x][dragObject.last]) {
                var pos=0;
                for (var i=dragObject.y+1; i<dragObject.len; i++) {
                    pos+=distBetween;
                    var divsElem=document.getElementById(dragObject.x+'-'+i);
                    divsElem.style.left=(EO.pageX||EO.targetTouches[0].pageX) - gameRowPos.left  - dragObject.posX + 'px';
                    divsElem.style.top=(EO.pageY||EO.targetTouches[0].pageY) - gameRowPos.top + pos- dragObject.posY  + 'px';
                    divsElem.style.zIndex='1000';
                    divsElem.style.boxShadow='0px 0px 5px 3px yellow';
               
                }
            }     
        }
 
        //при отпускании карты мышью или пальцем на таче
        function upCard(EO) {
            EO=EO||window.event;
            EO.preventDefault();
            if (dragObject.elem) {
                finishDrag(EO);
            }
            dragObject={};
        }
 
        //устанавливает карты на новое место либо возвращает обратно
        function finishDrag(EO) {
            var dropElem = findDroppable(EO);
 
            if (dropElem) {
                var newM=deckField[dragObject.x].splice(dragObject.y);
                countStep++;
                console.log(countStep);
                   
                var mdrop=dropElem.id.split('-');
                var xdrop=Number(mdrop[0]);
                var ydrop=Number(mdrop[1]);
                for (var i=0; i<newM.length; i++) {
                    var newsM=newM[i];
                    deckField[xdrop].push(newsM);
                }
                viewDelete(newM, dragObject.x, dragObject.y);
                clickSound1();
                view(deckField);
                if (deckField[xdrop].length>=12) {
                    orderedCards(xdrop);
                }
                turn(deckField);
            }
            else {
                vibro(false);
                clickSound2();
                cardMove.elem=dragObject.elem;
                cardMove.posEndX=parseFloat(dragObject.left);
                cardMove.posEndY=parseFloat(dragObject.top);
                cardMove.posStartX=parseFloat(dragObject.elem.style.left);
                cardMove.posStartY=parseFloat(dragObject.elem.style.top);
                cardMove.speedX=50;
                cardMove.distance=dragObject.distance;
                cardMove.x=dragObject.x;
                cardMove.y=dragObject.y;
                cardMove.len=dragObject.len;
                if ((cardMove.posStartX>cardMove.posEndX))
                        cardMove.speedX=-cardMove.speedX;
                cardMove.speedY=(cardMove.posEndY-cardMove.posStartY)*cardMove.speedX/(cardMove.posEndX-cardMove.posStartX);
                tick();
            }
        }

        // отображает на экране плавный возврат назад
        function cardMoveBack() {
            var pos=0;
            for  (var i=cardMove.y; i<cardMove.len; i++) {
                if (cardMove.distance)
                    pos+=cardMove.distance;
                cardMove.elems=document.getElementById(cardMove.x+'-'+i);     
                cardMove.elems.style.left=cardMove.posStartX + 'px';
                cardMove.elems.style.top=cardMove.posStartY + pos + 'px';
            }
        }

        //ставит карту на нужное место после плавного возврата
        function cardMoveBackPos() {
            var pos='';
            for  (var i=cardMove.y; i<cardMove.len; i++) {
                if (cardMove.distance)
                    pos=(i-cardMove.y)*cardMove.distance;
                cardMove.elems=document.getElementById(cardMove.x+'-'+i); 
                cardMove.elems.style.left=cardMove.posEndX+'px';
                cardMove.elems.style.top=cardMove.posEndY+pos+'px';
                cardMove.elems.style.boxShadow='';
                cardMove.elems.style.zIndex=0;
                cardMove.speedX=0;
                cardMove.speedY=0;
            }
            cardMove={};
        }

        // находит карту над которой находится перетаскиваемые, и возвращает эту карту, если на нее можно перетаскивать, либо false 
        function findDroppable(EO) {
            dragObject.elem.hidden=true;
            if (EO.changedTouches)
                var elemD = document.elementFromPoint(EO.changedTouches[0].clientX, EO.changedTouches[0].clientY);
            else
                var elemD = document.elementFromPoint(EO.clientX, EO.clientY)
            dragObject.elem.hidden=false;
 
            if (elemD===null)
                return false;
 
            if (resolveAdd(dragObject.elem, elemD))
                return elemD;
        }
        
        //проверяет какая кнопка мыши нажата
        function getMouseWhich(EO) {
            if ( EO.which ) return EO.which;
            if ( EO.button&1 ) return 1;
            if ( EO.button&4 ) return 2;
            if ( EO.button&2 ) return 3;
            return 0;
        }
 
        //находит коортинаты нужного элемента
        function getElementPos(elem) {
            var bbox=elem.getBoundingClientRect();
            return {
                left: bbox.left+window.pageXOffset,
                top: bbox.top+window.pageYOffset
            };
        }

        var RAF=
            // находим, какой requestAnimationFrame доступен
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function(callback)
                { window.setTimeout(callback, 1000 / 60); }
            ;

        function tick() {
            
            cardMove.posStartX+=cardMove.speedX;
            cardMove.posStartY+=cardMove.speedY;

            recordEl.startPos+=recordEl.speed;

            if (recordEl.startPos<0) {
                transformRecord();
                RAF(tick);
            }



            if (((cardMove.speedX>0)&&(cardMove.posStartX>=cardMove.posEndX))||((cardMove.speedX<0)&&(cardMove.posStartX<=cardMove.posEndX))) {
                cardMoveBackPos()
            }

            if ((cardMove.posStartX)&&(cardMove.posStartY)&&(cardMove.posEndX)&&(cardMove.posEndY)) {
                cardMoveBack();
                RAF(tick);
            }
        }

        //обработчик событий
        function eventStart() {
            var rowN=document.querySelectorAll('.main-rows>div');
            for (var n=0; n<rowN.length; n++) {
                var rowsN=rowN[n];
                rowsN.addEventListener('mousedown', downCard, false);
                rowsN.addEventListener('mouseup', upCard, false); 
                rowsN.addEventListener('touchstart', downCard, false);
                rowsN.addEventListener('touchend', upCard, false); 
            }
            var gameField=document.querySelector('.game-field');
            gameField.addEventListener('mousemove', moveCard, false);
            gameField.addEventListener('touchmove', moveCard, false);
 
            var newRow=document.querySelector('.game-deck');
            newRow.addEventListener('click', addRow, false);
        }
 
    </script>
</body>
</html>
