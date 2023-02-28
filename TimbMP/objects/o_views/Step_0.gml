if (browser_width < browser_height )
    {
    // MOB
	
	var _bw = browser_width;
	var _bh = browser_height;

	view_wport[0] = _bw;
	view_hport[0] = _bh;
	window_set_size(_bw, _bh);
	surface_resize(application_surface, view_wport[0], view_hport[0]);

    }else{
		//window_set_size(840, 840);
		canvas_fullscreen(840)
	}
