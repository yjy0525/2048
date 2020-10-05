//初始化16个棋盘格的位置 这里是每个相应的格子与顶部的距离
function getPosTop( i , j ){
    return 20 + i*120;
}
//初始化16个棋盘格的位置 这里是每个相应的格子与左部的距离
function getPosLeft( i , j ){
    return 20 + j*120;
}

//该函数是为了改变空格背景颜色
function getNumberBackgroundColor( number ){
	switch( number ){
		case 2:return "#eee4da";break;
        case 4:return "#ede0c8";break;
        case 8:return "#f2b179";break;
        case 16:return "#f59563";break;
        case 32:return "#f67c5f";break;
        case 64:return "#f65e3b";break;
        case 128:return "#edcf72";break;
        case 256:return "#edcc61";break;
        case 512:return "#9c0";break;
        case 1024:return "#33b5e5";break;
        case 2048:return "#09c";break;
        case 4096:return "#a6c";break;
        case 8192:return "#93c";break;
    
	}
	return 'black';
}

//该函数是为了改变空格字体颜色
function getNumberColor( number ){
	if( number <= 4 )
		return '#776e65';
	return 'white';
}

//该函数是为了判断是否还有空格可以加入
function nospace( board ){
	for( var i = 0 ; i < 4 ; i ++ )
		for( var j = 0 ; j < 4 ; j ++ )
			if( board[i][j] == 0)
			return false;
	return true;
}

//如果检测的格子是有数字的那么对它进行判断  判断其左边的格子是否为空或者与它内部的数字相等
//若上述满足则可以向左移动
//该函数用作判断格子能否向左移动
function canMoveLeft( board ){
	for( var i = 0 ; i < 4 ; i ++ )
		for( var j = 1 ; j < 4 ; j ++ )
			if( board[i][j] != 0)
				if( board[i][j-1] == 0 || board[i][j-1] == board[i][j] )
					return true;
	
	return false;
}

//如果检测的格子是有数字的那么对它进行判断  判断其上面的格子是否为空或者与它内部的数字相等
//若上述满足则可以向上移动
//该函数用作判断格子能否向上移动
function canMoveUp( board ){
	
	for( var j = 0 ; j < 4 ; j ++ )
		for( var i = 1 ; i < 4 ; i ++ )
			if( board[i][j] != 0)
				if( board[i-1][j] == 0 || board[i-1][j] == board[i][j] )
					return true;
	
	return false;
}

//如果检测的格子是有数字的那么对它进行判断  判断其右边的格子是否为空或者与它内部的数字相等
//若上述满足则可以向右移动
//该函数用作判断格子能否向右移动
function canMoveRight( board ){
	for( var i = 0 ; i < 4 ; i ++ )
		for( var j = 0 ; j < 3 ; j ++ )
			if( board[i][j] != 0)
				if( board[i][j+1] == 0 || board[i][j+1] == board[i][j] )
					return true;
	
	return false;
}

//为了检测第row行  col1和col2之间有没有数  如果存在的话就返回false
//该函数用作障碍物检测
function noBlockHorizontal( row , col1 , col2 , board ){
	for( var i = col1 + 1 ; i < col2 ; i ++ )
		if( board[row][i] != 0 )
			return false;
	return true;
}

//如果检测的格子是有数字的那么对它进行判断  判断其下面的格子是否为空或者与它内部的数字相等
//若上述满足则可以向下移动
//该函数用作判断格子能否向下移动
function canMoveDown( board ){
	
	for( var j = 0 ; j < 4 ; j ++ )
		for( var i = 0 ; i < 3 ; i ++ )
			if( board[i][j] != 0)
				if( board[i+1][j] == 0 || board[i+1][j] == board[i][j] )
					return true;
	
	return false;
}

//为了检测第col列  row1和row2之间有没有数  如果存在的话就返回false
//该函数用作障碍物检测
function noBlockVertical( col , row1 , row2 , board ){
	for( var i = row1 + 1 ; i < row2 ; i ++ )
		if( board[i][col] != 0 )
			return false;
	return true;
}

//判断整个矩阵是否还能移动
function nomove( board ){
	if( canMoveLeft( board ) ||
		canMoveUp( board ) ||
		canMoveRight( board ) ||
		canMoveDown( board ) )
		return false;
	
	return true;
}