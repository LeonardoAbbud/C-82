
//criam uma variável mouseEvent inicializada como uma string vazia, e duas variáveis.
var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;

//obtêm a referência para um elemento de canvas HTML e seu contexto de desenho.
// CTX é um objeto do canvas

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    // definem uma cor de linha e uma largura de linha padrão
    color = "cyan";
    width_of_line = 5;

    // definem uma cor de linha e uma largura de linha padrão
    // e adiciona um listener de evento de clique do mouse ao canvas, que chamará uma função
    // my_mousedown quando o botão do mouse for pressionado.

    canvas.addEventListener("mousedown", my_mousedown);
    function my_mousedown(e)
    {
    
// Define a variável color como o valor do elemento HTML com o id "color"

        color = document.getElementById("color").value;

 //variável width_of_line como o valor do elemento HTML com o id "width_of_line"

        width_of_line = document.getElementById("width_of_line").value;
        
//Atualiza a variável mouseEvent para "mouseDown"

mouseEvent = "mouseDown";
}

//"mousemove": chama a função "my_mousemove" sempre que o mouse é movido no canvas.

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    // as coordenadas atuais do mouse são obtidas

    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

//Se a variável mouseEvent ainda contém o valor "mouseDown", então um caminho é criado usando:
    if (mouseEvent == "mouseDown") {

    // um caminho é criado 

    ctx.beginPath();

    // Define a cor usada para desenhar uma linha
    ctx.strokeStyle = color;

    // define a largura da linha a ser desenhada
    ctx.lineWidth = width_of_line;

    console.log("Last position of x and y coordinates = ");
    console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);

    console.log("Current position of x and y coordinates = ");
    console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);

    // A posição anterior do mouse é registrada e a nova posição do mouse é usada para desenhar uma linha 

    ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
    ctx.stroke();
    }

    last_position_of_x = current_position_of_mouse_x; 
    last_position_of_y = current_position_of_mouse_y;
}

// "mouseup": chama a função "my_mouseup" quando o botão do mouse é liberado no canvas.

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseEvent = "mouseUP";
}

//"mouseleave": chama a função "my_mouseleave" quando o mouse sai do canvas.

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent = "mouseleave";
}

//Limpa o que foi feito no Canvas

function clearArea() {
ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

