/// @description Check statements

#region -- Win Statements
if ( global.pl1 != noone && global.pl2 != noone )
{
	
	//player one dead
	if ( !global.pl1.isPlayerLive )
	{
		isPlayerTwoWins = true;
		playersActive = false;
		show_debug_message("PLAYER ONE DEAD, PLAYER TWO WINS");
	}
	
	//player two dead
	if ( !global.pl2.isPlayerLive )
	{
		isPlayerOneWins = true;
		playersActive = false;
		show_debug_message("PLAYER TWO DEAD, PLAYER ONE WINS");
	}
	
	//player one reached nest
	if ( global.pl1.playerReachedNest )
	{
		isPlayerOneWins = true;
		isPlayerReachedNest = true;
		playersActive = false;
		show_debug_message("PLAYER ONE NESTED, PLAYER ONE WINS");
	}
	
	//player two reached nest
	if ( global.pl2.playerReachedNest )
	{
		isPlayerTwoWins = true;
		isPlayerReachedNest = true;
		playersActive = false;
		show_debug_message("PLAYER TWO NESTED, PLAYER TWO WINS");
	}
	
	//check time left to calculate score
	if (leftTime < 1)
	{
		show_debug_message("!!!TIME LEFT!!!");
		if ( global.pl1.playerScore > global.pl2.playerScore )
		{
			isPlayerOneWins = true;
			playersActive = false;
			show_debug_message("PLAYER ONE REACHED BIGGER SCORE, PLAYER ONE WINS");
		}
		
		if ( global.pl1.playerScore < global.pl2.playerScore )
		{
			isPlayerTwoWins = true;
			playersActive = false;
			show_debug_message("PLAYER TWO REACHED BIGGER SCORE, PLAYER TWO WINS");
		}
		
		if ( global.pl1.playerScore = global.pl2.playerScore )
		{
			isTie = true;
			playersActive = false;
			show_debug_message("PLAYERS HAVE SAME SCORE,TIE");
		}
	}
}
#endregion

#region -- Players activity
if ( global.pl1 != noone ) and ( global.pl2 != noone )
{
	global.pl1.canChomp = playersActive;
	global.pl2.canChomp = playersActive;
}
#endregion
