class Danger extends Parent {
    constructor(x, y) {
     super(x,y)
        this.multiply = 0
        
    }

    mul() {
        this.multiply++;
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        if (newCell && this.multiply >= 20) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 5;

            var newDanger = new Danger(newX, newY, 1);
            dangerArr.push(newDanger);
            this.multiply = 0;
        }
    }
   
    
    

}