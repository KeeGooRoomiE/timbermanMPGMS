/// @description Live reactions to triggers

#region -- check player living
if (isPlayerLive)
{
	playerSpr=global.playerTwoSprite;
}
else
{
	playerSpr=spr_grave;
}

player.sprite_index = playerSpr;
#endregion

#region -- left trigger
if (leftTrigger)
{
	if (canChomp)
	{
		isChompingLeft=true;
		
		event_user(0);	//inherits chomping effect
		event_user(2);	//move player and check for death
		
		if ( treearr[1] = 1 or treearr[0] = 1 )
		{
			isPlayerLive=false;
			canChomp=false;
		}
		
		event_user(1);  //shift all cells in array
	}
	leftTrigger = false;
}
#endregion

#region -- right trigger
if (rightTrigger)
{
	if (canChomp)
	{
		isChompingRight=true;
		
		event_user(0);	//inherits chomping effect
		event_user(2);	//move player and check for death
		
		if ( treearr[1] = 2 or treearr[0] = 2 )
		{
			isPlayerLive=false;
			canChomp=false;
		}
		
		event_user(1);  //shift all cells in array
	}
	rightTrigger = false;
}
#endregion

//