/// @description Insert description here
// You can write your code in this editor
if (canChomp)
{
	if (treearr[1]!=1)
	{
		isChompingLeft=true;
		event_user(0);	//inherits chomping effect

		event_user(1); //shift all cells in array
	}
	else
	{
		isPlayerLive=false;
		canChomp=false;
		
		event_user(0);	//inherits chomping effect

		event_user(1); //shift all cells in array
	}
}