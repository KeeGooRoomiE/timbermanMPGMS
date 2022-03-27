/// @description Shift tree array

// Choose next cell in most upper side of tree
var nextcell = choose(0,1,2);
show_debug_message( "Next cell is" + string(nextcell) );

//Update tree length
treeLength++;

//random tree cell image
treeCellImg = irandom_range(0,4);

//random branch image
switch (nextcell)
{
	case 0: treeBrImg = 2; break;
	case 1: treeBrImg = choose(0,1); break;
	case 2: treeBrImg = choose(3,4); break;
	case 3: treeBrImg = 5; break;
	case 4: treeBrImg = 6; break;
	default: treeBrImg = 6; break;
}

//Check for tree ending
if (treeLength == 500)
{
	nextcell = 3;
	show_debug_message( "Next cell is nest" );
	treeCellImg = 5;
	treeBrImg = 5;
}

if (treeLength > 500)
{
	nextcell = 4;
	show_debug_message( "Next cell is empty" );
	treeCellImg = 5;
	treeBrImg = 6;
}




//Shift all items in array
for (i = 0; i < arrL; i++)
{
	show_debug_message("Checking whole tree array...")
	if ( i = arrL-1 )
	{
		//if its a most upper part
		//change cell to suggested one
		
		if (treeLength < 500)
		{
			if (treearr[i-1] != 0)
			{
				treearr[i]=0;
				nextcell=0;
			}
			else
			{
			
				treearr[i]=choose(1,2);
				nextcell=treearr[i];
			}
		} 
		else 
		{
			treearr[i] = nextcell;
		}
		
		switch (nextcell)
		{
			case 0: treeBrImg = 2; break;
			case 1: treeBrImg = choose(0,1); break;
			case 2: treeBrImg = choose(3,4); break;
			case 3: treeBrImg = 5; break;
			case 4: treeBrImg = 6; break;
			default: treeBrImg = 6; break;
		}

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
