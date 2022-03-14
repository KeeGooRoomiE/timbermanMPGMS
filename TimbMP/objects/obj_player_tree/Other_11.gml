/// @description Shift tree array

// Choose next cell in most upper side of tree
var nextcell = choose(0,1,2);
show_debug_message( "Next cell is" + string(nextcell) );

//random tree cell image
treeCellImg = irandom_range(0,4);

//random branch image
switch (nextcell)
{
	case 0: treeBrImg = 4; break;
	case 1: treeBrImg = irandom_range(0,3); break;
	case 2: treeBrImg = irandom_range(5,8); break;
	default: treeBrImg = 4; break;
}

//Shift all items in array
for (i = 0; i < arrL; i++)
{
	show_debug_message("Checking whole tree array...")
	if ( i = 9 )
	{
		//if its a most upper part
		//change cell to suggested one
		treearr[i] = nextcell;
		treecellarr[i] = treeCellImg;
		treebrarr[i] = treeBrImg;
		show_debug_message( "Last cell changed to nextcell" );
	}
	else
	{
	treearr[i] = treearr[i+1];
	treecellarr[i] = treecellarr[i+1];
	treebrarr[i] = treebrarr[i+1];
	}
}
