/// @description Live reactions to triggers
if (browser_width > browser_height )
    {
	x= camera_get_view_width(view_camera[0]) / 2 +200;
	y=272
	}
#region -- check player living

if (isPlayerLive)
{
	playerSpr=global.playerTwoSprite;
}
else
{
	playerSpr=global.playerGrave;
	player.image_xscale = 1;
	side = 1;
}

player.sprite_index = playerSpr;
player.image_xscale = side * xsc;
player.image_yscale = xsc;

#endregion

#region -- check player reached nest

/*if (playerReachedNest = true)
{
	show_debug_message("!!!PLAYER REACHED NEST!!!");
	canChomp = false;
}
*/
if ( treearr[0] = 3 or treearr[0] = 4 )
{
	canChomp = false;
	playerReachedNest = true;
	show_debug_message("!!!PLAYER REACHED NEST!!!");
}
	
#endregion

#region -- left trigger

if (leftTrigger)
{	
	if (canChomp)
	{
		isChompingLeft=true;
		
		event_user(0);	//inherits chomping effect
		event_user(2);	//move player and check for death
		
		if ( treearr[1] = 1 )//or treearr[0] = 1 )
		{
			if (playerLives > 1)
			{
				//playerLives -= 1;
				event_user(3);
				
				with (player)
				{
					event_user(0);
				}
			}
			else
			{
				playerLives = 0;
				isPlayerLive=false;
				canChomp=false;
				
				with (player)
				{
					event_user(0);
				}
			}
			
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
		
		if ( treearr[1] = 2 )//or treearr[0] = 2 )
		{
			if (playerLives > 1)
			{
				//playerLives -= 1;
				event_user(3);
				
				with (player)
				{
					event_user(0);
					
				}
			}
			else
			{
				isPlayerLive = false;
				canChomp = false;
				playerLives = 0;
				
				with (player)
				{
					event_user(0);
				}
			}
		}
		
		event_user(1);  //shift all cells in array
	}
	rightTrigger = false;
}

#endregion

//