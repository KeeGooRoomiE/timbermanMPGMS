/// @description Shift tree array

// Choose next cell in most upper side of tree
var nextcell=choose(0,1,2);
show_debug_message("Next cell is"+string(nextcell));

//Shift all items in array
for (i=0; i<arrL; i++)
{
	show_debug_message("Checking whole tree array...")
	if (i=9)
	{
		//if its a most upper part
		//change cell to suggested one
		treearr[i]=nextcell;
		show_debug_message("Last cell changed to nextcell");
	}
	else
	{
	treearr[i]=treearr[i+1];
	}
}