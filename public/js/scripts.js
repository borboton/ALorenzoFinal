//const socket = io()

$(document).ready(() => {
    const cardid = $("#list")
    fetch('productos.hbs')
    .then(response => response.text())
    .then(templateStr => {        
        fetch('/api/productos')
        .then( response => response.json())
        .then( items => { 
            renderTemplate( templateStr, { items }, cardid )
        });
    })    
})

function renderTemplate(templateStr, items, htmlSelector){  
    var template = Handlebars.compile(templateStr);    
    $(htmlSelector).append( template(items) );
}

function addTextNode(msj){
    const text = `<div class="alert alert-info"><b style='color:blue !important;'>${msj.user}</b> <span style='color:brown'>${msj.date}</span> <i style='color:green'>${msj.msj}</i></div>`        
    const div = document.getElementById("mensajes")
    const div2 = document.createElement('div')
    div2.innerHTML = text
    div.appendChild(div2.firstChild);
}

function sendMensaje() { 
    const time = new Date()  
    const email = $("#email").val()
    const text = $("#textArea").val()           
    socket.emit('nuevoMensaje', { user: email, msj: text, date: time.toString()});
}

/* $(document).ready(function() {
    $(".card-text").click(function() { 
     let t = $(this)
     let p =t.find('p')
     p.val()
    });
}) */

/* 
$(function(){
    $(".card-footer").click(function(e){
        console.log( $(this).nodeName )

        
        $(this).closest("div.section").children().each(function(){
            alert($(this).tagName + " - " + $(this).html());
        });    
    })
})
 */
function editItem(e) {

}

function delItem(e) {

}

/* socket.on('connect', () => {
    console.log("Connect event")
})
socket.on('newitem', () => {
    getproductos()
});
socket.on('mensajes', (msj) => {
    addTextNode(msj)
}); */