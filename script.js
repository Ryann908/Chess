let copy;


const chess = document.getElementById("chessBoard");

for(let i = 0; i < 8; i++) {
    const rows = document.createElement("div");
    chess.appendChild(rows);
    rows.style.border = "Solid 1px";
    rows.id = "row"
    for(let j = 0; j < 8; j++) {
        const col = document.createElement('div');
        col.id = "col"
        rows.appendChild(col);
        col.style.border = "solid 1px"
        if(j == 0 && i == 0 || j == 0 && i == 7) {
            col.textContent += "♖";
        }  
        if(j == 0 && i == 1 || j == 0 && i == 6) {
            col.textContent += "♘";
        }
        if(j == 0 && i == 2 || j == 0 && i == 5) {
            col.textContent += "♗";
        }    
        if (j == 0 && i == 4) {
            col.textContent += "♔"
        }
        if (j == 0 && i == 3) {
            col.textContent += "♕"
        }
        
        if (j == 1){
            col.textContent += "♙";
        }
        if (j == 6){
            col.textContent += "♟";
        }
        

        if(j == 7 && i == 0 || j == 7 && i == 7) {
            col.textContent += "♜";
        }  
        if(j == 7 && i == 1 || j == 7 && i == 6) {
            col.textContent += "♞";
        }
        if(j == 7 && i == 2 || j == 7 && i == 5) {
            col.textContent += "♝";
        }    
        if (j == 7 && i == 4) {
            col.textContent += "♚"
        }
        if (j == 7 && i == 3) {
            col.textContent += "♛"
        }
      if (col.textContent == "♟" ) {
        col.addEventListener('click', () => {
            col.textContent = "";
        }); 
      } else if (col.textContent == "") {
            col.addEventListener('click', () => {
            col.textContent += "♟";
            console.log(col.textContent);
            }); 
    }   
     
   
        
    }
}
