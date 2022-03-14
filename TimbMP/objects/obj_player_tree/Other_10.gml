/// @description Create chopping effect

var xx=x-1;
var yy=y-12;
//create object
var p=instance_create_depth(xx,yy,depth-1,obj_tree_particle);

//set sprtie
p.sprite_index=spr_tt;
p.image_speed=0;

//set direction damping
var ddamp=irandom_range(-20,20);

//set movement direction
if (isChompingLeft)
{
	p.direction=irandom(0+ddamp);
}
if (isChompingRight)
{
	p.direction=irandom(180-ddamp);
}

//set proper image
//[DEBUG] placed image same as tree 
p.image_index=treearr[0];