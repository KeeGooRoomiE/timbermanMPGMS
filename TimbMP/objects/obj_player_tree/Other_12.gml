///@description player position changeand sprite depenency

if (isPlayerLive)
{		
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
