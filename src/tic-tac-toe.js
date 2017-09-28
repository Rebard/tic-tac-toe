class TicTacToe {
    constructor() {
		this.symbolPlayer = 'x';
		this.arr = new Array();
		for( var i = 0; i < 3; i++)
		{
			this.arr[i] = new Array();
			for(var j = 0; j < 3; j++)
				this.arr[i][j] = null;
		}
    }

    getCurrentPlayerSymbol() {
		return this.symbolPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
		if(this.arr[rowIndex][columnIndex] == null)
		{
			this.arr[rowIndex][columnIndex] = this.symbolPlayer;
			if(this.symbolPlayer == 'x')
				this.symbolPlayer = 'o';
			else this.symbolPlayer = 'x';
		}
    }

    isFinished() {
		if(this.getWinner() != null || this.noMoreTurns())
			return true;
		 else return false;
    }

    getWinner() {
		for(var i = 0; i < 3; i++)
		{
			if(this.arr[i][0] == this.arr[i][1] && this.arr[i][0] == this.arr[i][2])
			{
				if(this.arr[i][0] == 'x')
					return 'x';
				if(this.arr[i][0] == 'o')
					return 'o';
			}
			if(this.arr[0][i] == this.arr[1][i] && this.arr[0][i] == this.arr[2][i] )
			{
				if(this.arr[0][i] == 'x' )
					return 'x';
				if(this.arr[0][i] == 'o')
					return 'o';
			}	
		}
		if( (this.arr[0][0] == this.arr[1][1] && this.arr[0][0] == this.arr[2][2]) || (this.arr[0][2] == this.arr[1][1] && this.arr[0][2] == this.arr[2][0]) )
		{
			if(this.arr[1][1] == 'x')
					return 'x';
			if(this.arr[1][1] == 'o')
					return 'o';
		}
		return null;
    }

    noMoreTurns() {
		for(var i = 0; i < 3; i++)
		{
			for(var j = 0;j < 3; j++)
			{
				if(this.arr[i][j] == null)
					return false;
			}
		}
		return true;
    }

    isDraw() {
		if(this.getWinner() == null && this.noMoreTurns())
			return true;
		else return false;	
    }

    getFieldValue(rowIndex, colIndex) {
		return this.arr[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
