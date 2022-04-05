/// @description [DEBUG] Sensor controls

#region -- Camera setups
var cw = camera_get_view_width(view_camera[0]);
var ch = camera_get_view_height(view_camera[0]);
var cx = camera_get_view_x(view_camera[0]);
var cy = camera_get_view_y(view_camera[0]);
#endregion

if ( point_in_rectangle(mouse_x,mouse_y,cx,cy,cx+cw/2,cy+ch) ) 
{
	//LEFT SIDE
	show_debug_message("Sensor behaviour left");
	leftTrigger = true;
}

if ( point_in_rectangle(mouse_x,mouse_y,cx+cw/2,cy,cx+cw,cy+ch) )
{
	//RIGHT SIDE
	show_debug_message("Sensor behaviour right");
	rightTrigger = true;
}