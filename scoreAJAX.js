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