///@description player position changeand sprite depenency

if (isPlayerLive)
{		
	if (isChompingLeft)
	{
		playerXpos=x-36 * xsc;
		player.x = playerXpos;
		side = 1;
		player.image_speed = 1;
		isChompingLeft=false;
	}
		
	if (isChompingRight)
	{
		playerXpos=x+36 * xsc;
		player.x = playerXpos;
		side = -1;
		player.image_speed = 1;
		isChompingRight=false;
	}
}
