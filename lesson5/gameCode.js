
var board = document.createElement("table");
var numbers = ['8','7','6','5','4','3','2','1']
var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G','H']
var chessesWhite = [9814, 9816, 9815, 9813, 9812,9815,9816,9814]
var chessesBlack = [9820, 9822, 9821, 9819, 9818, 9821, 9822, 9820]
var whitePawn = [9817,9817,9817,9817,9817,9817,9817,9817]
var blackPawn = [9823, 9823,9823,9823,9823,9823,9823,9823]

for(var i=0;i<10;i++){
    var lineBoard = document.createElement("tr");
    lineBoard.id= 'lineBoard' + i;
    board.append(lineBoard);
    var numberLine = 'lineBoard' + i;
    for(var j=0;j<10;j++){
        var cellBoard = document.createElement("td");
        cellBoard.id= 'cellBoard' + j;
        cellBoard.className = "cell";
        if((i == 0 || i == 9) && j>0 && j < 9){
            cellBoard.innerText = letters[j-1];
            
        }else if(i!=0 && i!=9 &&(j==0 || j==9)) {
            cellBoard.innerText = numbers[i-1];
        }else if((i!=0 && i!=9 && j!=0 && j!=9)){
            if((i%2==0 && j%2==1)||(j%2==0 && i%2==1)){
               cellBoard.className += " black_cell" 
            }else{
                cellBoard.className += " white_cell"
            }
        }
        if(j!=0 && j!=9){
            if(i == 1){
                cellBoard.innerText = String.fromCharCode(chessesWhite[j-1]);
            }else if(i == 2){
                cellBoard.innerText = String.fromCharCode(whitePawn[j-1]);
            }else if(i == 8){
                cellBoard.innerText = String.fromCharCode(chessesBlack[j-1]);
            }else if(i == 7){
                cellBoard.innerText = String.fromCharCode(blackPawn[j-1]);
            }
            
        }
        if(i == 0 || j == 9){
                cellBoard.className += " rotate_cell"
                }
        
        
        lineBoard.append(cellBoard)
        
}
}

document.querySelector("div").append(board);

