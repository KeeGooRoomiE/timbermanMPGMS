/// @description Create chopping effect

var xx=x-1;
var yy=y-12;
//create object
var p=instance_create_depth(xx,yy,depth-1,obj_tree_particle);

//set sprtie
p.sprite_index=treeCellSpr;
p.image_speed=0;
p.image_index=irandom(p.image_number-1);

//set direction damping
var ddamp=irandom_range(-5,5);

//set movement direction
if (isChompingLeft)
{
	p.direction=5;
}
if (isChompingRight)
{
	p.direction=175;
}

//set proper image
//[DEBUG] placed image same as tree 
p.image_index=treearr[0];