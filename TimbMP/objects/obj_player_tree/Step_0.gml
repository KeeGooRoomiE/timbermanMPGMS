/// @description Live reactions to triggers

#region -- player position changeand sprite depenency
if (isPlayerLive)
{
	playerSpr=spr_player;
		
	if (isChompingLeft)
	{
		playerXpos=x-34;
		isChompingLeft=false;
	}
		
	if (isChompingRight)
	{
		playerXpos=x+32;
		isChompingRight=false;
	}
}
else
{
	playerSpr=spr_grave;
}
#endregion

#region -- left trigger
if (leftTrigger)
{
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
	leftTrigger = false;
}
#endregion

#region -- right trigger
if (rightTrigger)
{
	if (canChomp)
	{
		if (treearr[1]!=2)
		{
			isChompingRight=true;
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
	rightTrigger = false;
}
#endregion

//