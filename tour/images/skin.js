// Garden Gnome Software - Skin
// Pano2VR 4.0beta/2595
// Filename: Tour_Skin.ggsk
// Generated Thu Aug 9 16:19:16 2012

function pano2vrSkin(player,base) {
	var me=this;
	var flag=false;
	var nodeMarker=new Array();
	var activeNodeMarker=new Array();
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=new Array();
	this.elementMouseOver=new Array();
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	for(i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
			domTransition=prefixes[i] + 'Transition';
			domTransform=prefixes[i] + 'Transform';
		}
	}
	
	this.player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=new Array();
		stack.push(startElement);
		while(stack.length>0) {
			e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	parameterToTransform=function(p) {
		return 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=new Array();
		var stack=new Array();
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		this._buttons_container=document.createElement('div');
		this._buttons_container.ggId='buttons_container'
		this._buttons_container.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._buttons_container.ggVisible=true;
		this._buttons_container.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-117 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-48 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -117px;';
		hs+='top:  -48px;';
		hs+='width: 281px;';
		hs+='height: 33px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._buttons_container.setAttribute('style',hs);
		this._button_zoom_in=document.createElement('div');
		this._button_zoom_in.ggId='button_zoom_in'
		this._button_zoom_in.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_zoom_in.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  1px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._button_zoom_in.setAttribute('style',hs);
		this._button_zoom_in__img=document.createElement('img');
		this._button_zoom_in__img.setAttribute('src',basePath + 'images/button_zoom_in.svg');
		this._button_zoom_in__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;');
		this._button_zoom_in.appendChild(this._button_zoom_in__img);
		this._button_zoom_in.onmouseover=function () {
			me._button_zoom_in__img.src=basePath + 'images/button_zoom_in__o.svg';
		}
		this._button_zoom_in.onmouseout=function () {
			me._button_zoom_in__img.src=basePath + 'images/button_zoom_in.svg';
			me.elementMouseDown['button_zoom_in']=false;
		}
		this._button_zoom_in.onmousedown=function () {
			me.elementMouseDown['button_zoom_in']=true;
		}
		this._button_zoom_in.onmouseup=function () {
			me.elementMouseDown['button_zoom_in']=false;
		}
		this._button_zoom_in.ontouchend=function () {
			me.elementMouseDown['button_zoom_in']=false;
		}
		this._buttons_container.appendChild(this._button_zoom_in);
		this._button_zoom_out=document.createElement('div');
		this._button_zoom_out.ggId='button_zoom_out'
		this._button_zoom_out.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_zoom_out.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 50px;';
		hs+='top:  1px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._button_zoom_out.setAttribute('style',hs);
		this._button_zoom_out__img=document.createElement('img');
		this._button_zoom_out__img.setAttribute('src',basePath + 'images/button_zoom_out.svg');
		this._button_zoom_out__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;');
		this._button_zoom_out.appendChild(this._button_zoom_out__img);
		this._button_zoom_out.onmouseover=function () {
			me._button_zoom_out__img.src=basePath + 'images/button_zoom_out__o.svg';
		}
		this._button_zoom_out.onmouseout=function () {
			me._button_zoom_out__img.src=basePath + 'images/button_zoom_out.svg';
			me.elementMouseDown['button_zoom_out']=false;
		}
		this._button_zoom_out.onmousedown=function () {
			me.elementMouseDown['button_zoom_out']=true;
		}
		this._button_zoom_out.onmouseup=function () {
			me.elementMouseDown['button_zoom_out']=false;
		}
		this._button_zoom_out.ontouchend=function () {
			me.elementMouseDown['button_zoom_out']=false;
		}
		this._buttons_container.appendChild(this._button_zoom_out);
		this._button_home=document.createElement('div');
		this._button_home.ggId='button_home'
		this._button_home.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_home.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 100px;';
		hs+='top:  1px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._button_home.setAttribute('style',hs);
		this._button_home__img=document.createElement('img');
		this._button_home__img.setAttribute('src',basePath + 'images/button_home.svg');
		this._button_home__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;');
		this._button_home.appendChild(this._button_home__img);
		this._button_home.onclick=function () {
			me.player.moveToDefaultView(10);
		}
		this._button_home.onmouseover=function () {
			me._button_home__img.src=basePath + 'images/button_home__o.svg';
		}
		this._button_home.onmouseout=function () {
			me._button_home__img.src=basePath + 'images/button_home.svg';
		}
		this._buttons_container.appendChild(this._button_home);
		this._button_full_screen=document.createElement('div');
		this._button_full_screen.ggId='button_full_screen'
		this._button_full_screen.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_full_screen.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 150px;';
		hs+='top:  1px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._button_full_screen.setAttribute('style',hs);
		this._button_full_screen__img=document.createElement('img');
		this._button_full_screen__img.setAttribute('src',basePath + 'images/button_full_screen.svg');
		this._button_full_screen__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;');
		this._button_full_screen.appendChild(this._button_full_screen__img);
		this._button_full_screen.onclick=function () {
			me.player.toggleFullscreen();
		}
		this._button_full_screen.onmouseover=function () {
			me._button_full_screen__img.src=basePath + 'images/button_full_screen__o.svg';
		}
		this._button_full_screen.onmouseout=function () {
			me._button_full_screen__img.src=basePath + 'images/button_full_screen.svg';
		}
		this._buttons_container.appendChild(this._button_full_screen);
		this._button_map=document.createElement('div');
		this._button_map.ggId='button_map'
		this._button_map.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_map.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 200px;';
		hs+='top:  1px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._button_map.setAttribute('style',hs);
		this._button_map__img=document.createElement('img');
		this._button_map__img.setAttribute('src',basePath + 'images/button_map.svg');
		this._button_map__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;');
		this._button_map.appendChild(this._button_map__img);
		this._button_map.onclick=function () {
			flag=me._nav_map.ggPositonActive;
			if (me.player.transitionsDisabled) {
				me._nav_map.style[domTransition]='none';
			} else {
				me._nav_map.style[domTransition]='all 1000ms ease-out 0ms';
			}
			if (flag) {
				me._nav_map.ggParameter.rx=0;me._nav_map.ggParameter.ry=0;
				me._nav_map.style[domTransform]=parameterToTransform(me._nav_map.ggParameter);
			} else {
				me._nav_map.ggParameter.rx=-240;me._nav_map.ggParameter.ry=0;
				me._nav_map.style[domTransform]=parameterToTransform(me._nav_map.ggParameter);
			}
			me._nav_map.ggPositonActive=!flag;
			flag=me._nav_map.ggOpacitiyActive;
			if (me.player.transitionsDisabled) {
				me._nav_map.style[domTransition]='none';
			} else {
				me._nav_map.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._nav_map.style.opacity='1';
				me._nav_map.style.visibility=me._nav_map.ggVisible?'inherit':'hidden';
			} else {
				me._nav_map.style.opacity='0.1';
				me._nav_map.style.visibility=me._nav_map.ggVisible?'inherit':'hidden';
			}
			me._nav_map.ggOpacitiyActive=!flag;
		}
		this._button_map.onmouseover=function () {
			me._button_map__img.src=basePath + 'images/button_map__o.svg';
		}
		this._button_map.onmouseout=function () {
			me._button_map__img.src=basePath + 'images/button_map.svg';
		}
		this._buttons_container.appendChild(this._button_map);
		this.divSkin.appendChild(this._buttons_container);
		this._nav_map=document.createElement('div');
		this._nav_map.ggId='nav_map'
		this._nav_map.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._nav_map.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 10px;';
		hs+='top:  10px;';
		hs+='width: 230px;';
		hs+='height: 317px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._nav_map.setAttribute('style',hs);
		this._map=document.createElement('div');
		this._map.ggId='map'
		this._map.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._map.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 230px;';
		hs+='height: 317px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._map.setAttribute('style',hs);
		this._map__img=document.createElement('img');
		this._map__img.setAttribute('src',basePath + 'images/map.png');
		this._map__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._map__img);
		this._map.appendChild(this._map__img);
		this._marker_node1=document.createElement('div');
		this._marker_node1.ggId='marker_node1'
		this._marker_node1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node1.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 94px;';
		hs+='top:  263px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._marker_node1.setAttribute('style',hs);
		this._marker_node1.ggMarkerNodeId='{node1}';
		nodeMarker.push(this._marker_node1);
		this._marker_node1.onclick=function () {
			me.player.openNext('{node1}');
		}
		this._marker_node1.onmouseover=function () {
			me._marker_title5.style[domTransition]='none';
			me._marker_title5.style.visibility='inherit';
			me._marker_title5.ggVisible=true;
		}
		this._marker_node1.onmouseout=function () {
			me._marker_title5.style[domTransition]='none';
			me._marker_title5.style.visibility='hidden';
			me._marker_title5.ggVisible=false;
		}
		this._marker_node1.ggActivate=function () {
			me._compass.style[domTransition]='none';
			me._compass.ggParameter.rx=94;me._compass.ggParameter.ry=263;
			me._compass.style[domTransform]=parameterToTransform(me._compass.ggParameter);
		}
		this._marker_title5=document.createElement('div');
		this._marker_title5.ggId='marker_title'
		this._marker_title5.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title5.ggVisible=false;
		this._marker_title5.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.style.left=(-60 + (150-this.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -60px;';
		hs+='top:  -38px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: #000000;';
		hs+='background-image:url(images/alpha_background_ffffff_180.png);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 5px 6px 5px 6px;'
		hs+='overflow: hidden;';
		this._marker_title5.setAttribute('style',hs);
		this._marker_title5.innerHTML="Park One";
		this._marker_node1.appendChild(this._marker_title5);
		this._map.appendChild(this._marker_node1);
		this._marker_node2=document.createElement('div');
		this._marker_node2.ggId='marker_node2'
		this._marker_node2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node2.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 38px;';
		hs+='top:  273px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._marker_node2.setAttribute('style',hs);
		this._marker_node2.ggMarkerNodeId='{node2}';
		nodeMarker.push(this._marker_node2);
		this._marker_node2.onclick=function () {
			me.player.openNext('{node2}');
		}
		this._marker_node2.onmouseover=function () {
			me._marker_title4.style[domTransition]='none';
			me._marker_title4.style.visibility='inherit';
			me._marker_title4.ggVisible=true;
		}
		this._marker_node2.onmouseout=function () {
			me._marker_title4.style[domTransition]='none';
			me._marker_title4.style.visibility='hidden';
			me._marker_title4.ggVisible=false;
		}
		this._marker_node2.ggActivate=function () {
			me._compass.style[domTransition]='none';
			me._compass.ggParameter.rx=38;me._compass.ggParameter.ry=273;
			me._compass.style[domTransform]=parameterToTransform(me._compass.ggParameter);
		}
		this._marker_title4=document.createElement('div');
		this._marker_title4.ggId='marker_title'
		this._marker_title4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title4.ggVisible=false;
		this._marker_title4.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.style.left=(-60 + (150-this.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -60px;';
		hs+='top:  -38px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: #000000;';
		hs+='background-image:url(images/alpha_background_ffffff_180.png);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 5px 6px 5px 6px;'
		hs+='overflow: hidden;';
		this._marker_title4.setAttribute('style',hs);
		this._marker_title4.innerHTML="Park Two";
		this._marker_node2.appendChild(this._marker_title4);
		this._map.appendChild(this._marker_node2);
		this._marker_node3=document.createElement('div');
		this._marker_node3.ggId='marker_node3'
		this._marker_node3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node3.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 47px;';
		hs+='top:  186px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._marker_node3.setAttribute('style',hs);
		this._marker_node3.ggMarkerNodeId='{node3}';
		nodeMarker.push(this._marker_node3);
		this._marker_node3.onclick=function () {
			me.player.openNext('{node3}');
		}
		this._marker_node3.onmouseover=function () {
			me._marker_title3.style[domTransition]='none';
			me._marker_title3.style.visibility='inherit';
			me._marker_title3.ggVisible=true;
		}
		this._marker_node3.onmouseout=function () {
			me._marker_title3.style[domTransition]='none';
			me._marker_title3.style.visibility='hidden';
			me._marker_title3.ggVisible=false;
		}
		this._marker_node3.ggActivate=function () {
			me._compass.style[domTransition]='none';
			me._compass.ggParameter.rx=47;me._compass.ggParameter.ry=186;
			me._compass.style[domTransform]=parameterToTransform(me._compass.ggParameter);
		}
		this._marker_title3=document.createElement('div');
		this._marker_title3.ggId='marker_title'
		this._marker_title3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title3.ggVisible=false;
		this._marker_title3.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.style.left=(-60 + (150-this.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -60px;';
		hs+='top:  -38px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: #000000;';
		hs+='background-image:url(images/alpha_background_ffffff_180.png);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 5px 6px 5px 6px;'
		hs+='overflow: hidden;';
		this._marker_title3.setAttribute('style',hs);
		this._marker_title3.innerHTML="Park Three";
		this._marker_node3.appendChild(this._marker_title3);
		this._map.appendChild(this._marker_node3);
		this._marker_node4=document.createElement('div');
		this._marker_node4.ggId='marker_node4'
		this._marker_node4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node4.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 180px;';
		hs+='top:  66px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._marker_node4.setAttribute('style',hs);
		this._marker_node4.ggMarkerNodeId='{node4}';
		nodeMarker.push(this._marker_node4);
		this._marker_node4.onclick=function () {
			me.player.openNext('{node4}');
		}
		this._marker_node4.onmouseover=function () {
			me._marker_title2.style[domTransition]='none';
			me._marker_title2.style.visibility='inherit';
			me._marker_title2.ggVisible=true;
		}
		this._marker_node4.onmouseout=function () {
			me._marker_title2.style[domTransition]='none';
			me._marker_title2.style.visibility='hidden';
			me._marker_title2.ggVisible=false;
		}
		this._marker_node4.ggActivate=function () {
			me._compass.style[domTransition]='none';
			me._compass.ggParameter.rx=180;me._compass.ggParameter.ry=66;
			me._compass.style[domTransform]=parameterToTransform(me._compass.ggParameter);
		}
		this._marker_title2=document.createElement('div');
		this._marker_title2.ggId='marker_title'
		this._marker_title2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title2.ggVisible=false;
		this._marker_title2.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.style.left=(-60 + (150-this.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -60px;';
		hs+='top:  -38px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: #000000;';
		hs+='background-image:url(images/alpha_background_ffffff_180.png);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 5px 6px 5px 6px;'
		hs+='overflow: hidden;';
		this._marker_title2.setAttribute('style',hs);
		this._marker_title2.innerHTML="Park Four";
		this._marker_node4.appendChild(this._marker_title2);
		this._map.appendChild(this._marker_node4);
		this._marker_node5=document.createElement('div');
		this._marker_node5.ggId='marker_node5'
		this._marker_node5.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node5.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 174px;';
		hs+='top:  162px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._marker_node5.setAttribute('style',hs);
		this._marker_node5.ggMarkerNodeId='{node5}';
		nodeMarker.push(this._marker_node5);
		this._marker_node5.onclick=function () {
			me.player.openNext('{node5}');
		}
		this._marker_node5.onmouseover=function () {
			me._marker_title1.style[domTransition]='none';
			me._marker_title1.style.visibility='inherit';
			me._marker_title1.ggVisible=true;
		}
		this._marker_node5.onmouseout=function () {
			me._marker_title1.style[domTransition]='none';
			me._marker_title1.style.visibility='hidden';
			me._marker_title1.ggVisible=false;
		}
		this._marker_node5.ggActivate=function () {
			me._compass.style[domTransition]='none';
			me._compass.ggParameter.rx=174;me._compass.ggParameter.ry=162;
			me._compass.style[domTransform]=parameterToTransform(me._compass.ggParameter);
		}
		this._marker_title1=document.createElement('div');
		this._marker_title1.ggId='marker_title'
		this._marker_title1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title1.ggVisible=false;
		this._marker_title1.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.style.left=(-60 + (150-this.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -60px;';
		hs+='top:  -38px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: #000000;';
		hs+='background-image:url(images/alpha_background_ffffff_180.png);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 5px 6px 5px 6px;'
		hs+='overflow: hidden;';
		this._marker_title1.setAttribute('style',hs);
		this._marker_title1.innerHTML="Park Five";
		this._marker_node5.appendChild(this._marker_title1);
		this._map.appendChild(this._marker_node5);
		this._compass=document.createElement('div');
		this._compass.ggId='compass'
		this._compass.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._compass.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 30px;';
		hs+='height: 30px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._compass.setAttribute('style',hs);
		this._compass__img=document.createElement('img');
		this._compass__img.setAttribute('src',basePath + 'images/compass.svg');
		this._compass__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 30px;height: 30px;');
		this._compass.appendChild(this._compass__img);
		this._map.appendChild(this._compass);
		this._nav_map.appendChild(this._map);
		this.divSkin.appendChild(this._nav_map);
		this._loading=document.createElement('div');
		this._loading.ggId='loading'
		this._loading.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loading.ggVisible=true;
		this._loading.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-105 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-30 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -105px;';
		hs+='top:  -30px;';
		hs+='width: 210px;';
		hs+='height: 60px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._loading.setAttribute('style',hs);
		this._loading.onclick=function () {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		}
		this._loadingbg=document.createElement('div');
		this._loadingbg.ggId='loadingbg'
		this._loadingbg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingbg.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 210px;';
		hs+='height: 60px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.5;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='background-color: #000000;';
		this._loadingbg.setAttribute('style',hs);
		this._loading.appendChild(this._loadingbg);
		this._loadingbrd=document.createElement('div');
		this._loadingbrd.ggId='loadingbrd'
		this._loadingbrd.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingbrd.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: -1px;';
		hs+='top:  -1px;';
		hs+='width: 208px;';
		hs+='height: 58px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.5;';
		hs+='visibility: inherit;';
		hs+='border: 2px solid #ffffff;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		this._loadingbrd.setAttribute('style',hs);
		this._loading.appendChild(this._loadingbrd);
		this._loadingtext=document.createElement('div');
		this._loadingtext.ggId='loadingtext'
		this._loadingtext.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingtext.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 16px;';
		hs+='top:  12px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;'
		hs+='overflow: hidden;';
		this._loadingtext.setAttribute('style',hs);
		this._loadingtext.ggUpdateText=function() {
			this.innerHTML="Loading... "+(me.player.getPercentLoaded()*100.0).toFixed(0)+"%";
		}
		this._loadingtext.ggUpdateText();
		this._loading.appendChild(this._loadingtext);
		this._loadingbar=document.createElement('div');
		this._loadingbar.ggId='loadingbar'
		this._loadingbar.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingbar.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 15px;';
		hs+='top:  35px;';
		hs+='width: 181px;';
		hs+='height: 12px;';
		hs+=cssPrefix + 'transform-origin: 0% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 1px solid #808080;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='background-color: #ffffff;';
		this._loadingbar.setAttribute('style',hs);
		this._loading.appendChild(this._loadingbar);
		this.divSkin.appendChild(this._loading);
		this._hide_template=document.createElement('div');
		this._hide_template.ggId='hide_template'
		this._hide_template.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._hide_template.ggVisible=false;
		hs ='position:absolute;';
		hs+='left: 596px;';
		hs+='top:  100px;';
		hs+='width: 187px;';
		hs+='height: 45px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='overflow: hidden;';
		this._hide_template.setAttribute('style',hs);
		this._markertemplate=document.createElement('div');
		this._markertemplate.ggId='markertemplate'
		this._markertemplate.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._markertemplate.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 60px;';
		hs+='top:  0px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._markertemplate.setAttribute('style',hs);
		this._markertemplate.ggMarkerNodeId='';
		nodeMarker.push(this._markertemplate);
		this._markertemplate.onmouseover=function () {
			me._marker_title0.style[domTransition]='none';
			me._marker_title0.style.visibility='inherit';
			me._marker_title0.ggVisible=true;
		}
		this._markertemplate.onmouseout=function () {
			me._marker_title0.style[domTransition]='none';
			me._marker_title0.style.visibility='hidden';
			me._marker_title0.ggVisible=false;
		}
		this._markertemplate.ggActivate=function () {
			me._compass.style[domTransition]='none';
			me._compass.ggParameter.rx=60;me._compass.ggParameter.ry=0;
			me._compass.style[domTransform]=parameterToTransform(me._compass.ggParameter);
		}
		this._marker_title0=document.createElement('div');
		this._marker_title0.ggId='marker_title'
		this._marker_title0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title0.ggVisible=false;
		this._marker_title0.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.style.left=(-60 + (150-this.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -60px;';
		hs+='top:  -38px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: #000000;';
		hs+='background-image:url(images/alpha_background_ffffff_180.png);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 5px 6px 5px 6px;'
		hs+='overflow: hidden;';
		this._marker_title0.setAttribute('style',hs);
		this._marker_title0.ggUpdateText=function() {
			this.innerHTML=me.player.userdata.title;
		this.ggUpdatePosition();
		}
		this._marker_title0.ggUpdateText();
		this._markertemplate.appendChild(this._marker_title0);
		this._hide_template.appendChild(this._markertemplate);
		this._marker_active=document.createElement('div');
		this._marker_active.ggId='marker_active'
		this._marker_active.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_active.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 105px;';
		hs+='top:  0px;';
		hs+='width: 31px;';
		hs+='height: 31px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._marker_active.setAttribute('style',hs);
		this._marker_active__img=document.createElement('img');
		this._marker_active__img.setAttribute('src',basePath + 'images/marker_active.svg');
		this._marker_active__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 31px;height: 31px;');
		this._marker_active.appendChild(this._marker_active__img);
		this._hide_template.appendChild(this._marker_active);
		this._marker_normal=document.createElement('div');
		this._marker_normal.ggId='marker_normal'
		this._marker_normal.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_normal.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 140px;';
		hs+='top:  0px;';
		hs+='width: 31px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._marker_normal.setAttribute('style',hs);
		this._marker_normal__img=document.createElement('img');
		this._marker_normal__img.setAttribute('src',basePath + 'images/marker_normal.svg');
		this._marker_normal__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 31px;height: 32px;');
		this._marker_normal.appendChild(this._marker_normal__img);
		this._hide_template.appendChild(this._marker_normal);
		this.divSkin.appendChild(this._hide_template);
		this._marker_node1__normal=this._marker_normal.cloneNode(true);
		this._marker_node1__normal.style.visibility='inherit';
		this._marker_node1__normal.style.left=0;
		this._marker_node1__normal.style.top=0;
		this._marker_node1.ggMarkerNormal=this._marker_node1__normal;
		this._marker_node1__active=this._marker_active.cloneNode(true);
		this._marker_node1__active.style.visibility='hidden';
		this._marker_node1__active.style.left=0;
		this._marker_node1__active.style.top=0;
		this._marker_node1.ggMarkerActive=this._marker_node1__active;
		if (this._marker_node1.firstChild) {
			this._marker_node1.insertBefore(this._marker_node1__active,this._marker_node1.firstChild);
		} else {
			this._marker_node1.appendChild(this._marker_node1__active);
		}
		if (this._marker_node1.firstChild) {
			this._marker_node1.insertBefore(this._marker_node1__normal,this._marker_node1.firstChild);
		} else {
			this._marker_node1.appendChild(this._marker_node1__normal);
		}
		this._marker_node2__normal=this._marker_normal.cloneNode(true);
		this._marker_node2__normal.style.visibility='inherit';
		this._marker_node2__normal.style.left=0;
		this._marker_node2__normal.style.top=0;
		this._marker_node2.ggMarkerNormal=this._marker_node2__normal;
		this._marker_node2__active=this._marker_active.cloneNode(true);
		this._marker_node2__active.style.visibility='hidden';
		this._marker_node2__active.style.left=0;
		this._marker_node2__active.style.top=0;
		this._marker_node2.ggMarkerActive=this._marker_node2__active;
		if (this._marker_node2.firstChild) {
			this._marker_node2.insertBefore(this._marker_node2__active,this._marker_node2.firstChild);
		} else {
			this._marker_node2.appendChild(this._marker_node2__active);
		}
		if (this._marker_node2.firstChild) {
			this._marker_node2.insertBefore(this._marker_node2__normal,this._marker_node2.firstChild);
		} else {
			this._marker_node2.appendChild(this._marker_node2__normal);
		}
		this._marker_node3__normal=this._marker_normal.cloneNode(true);
		this._marker_node3__normal.style.visibility='inherit';
		this._marker_node3__normal.style.left=0;
		this._marker_node3__normal.style.top=0;
		this._marker_node3.ggMarkerNormal=this._marker_node3__normal;
		this._marker_node3__active=this._marker_active.cloneNode(true);
		this._marker_node3__active.style.visibility='hidden';
		this._marker_node3__active.style.left=0;
		this._marker_node3__active.style.top=0;
		this._marker_node3.ggMarkerActive=this._marker_node3__active;
		if (this._marker_node3.firstChild) {
			this._marker_node3.insertBefore(this._marker_node3__active,this._marker_node3.firstChild);
		} else {
			this._marker_node3.appendChild(this._marker_node3__active);
		}
		if (this._marker_node3.firstChild) {
			this._marker_node3.insertBefore(this._marker_node3__normal,this._marker_node3.firstChild);
		} else {
			this._marker_node3.appendChild(this._marker_node3__normal);
		}
		this._marker_node4__normal=this._marker_normal.cloneNode(true);
		this._marker_node4__normal.style.visibility='inherit';
		this._marker_node4__normal.style.left=0;
		this._marker_node4__normal.style.top=0;
		this._marker_node4.ggMarkerNormal=this._marker_node4__normal;
		this._marker_node4__active=this._marker_active.cloneNode(true);
		this._marker_node4__active.style.visibility='hidden';
		this._marker_node4__active.style.left=0;
		this._marker_node4__active.style.top=0;
		this._marker_node4.ggMarkerActive=this._marker_node4__active;
		if (this._marker_node4.firstChild) {
			this._marker_node4.insertBefore(this._marker_node4__active,this._marker_node4.firstChild);
		} else {
			this._marker_node4.appendChild(this._marker_node4__active);
		}
		if (this._marker_node4.firstChild) {
			this._marker_node4.insertBefore(this._marker_node4__normal,this._marker_node4.firstChild);
		} else {
			this._marker_node4.appendChild(this._marker_node4__normal);
		}
		this._marker_node5__normal=this._marker_normal.cloneNode(true);
		this._marker_node5__normal.style.visibility='inherit';
		this._marker_node5__normal.style.left=0;
		this._marker_node5__normal.style.top=0;
		this._marker_node5.ggMarkerNormal=this._marker_node5__normal;
		this._marker_node5__active=this._marker_active.cloneNode(true);
		this._marker_node5__active.style.visibility='hidden';
		this._marker_node5__active.style.left=0;
		this._marker_node5__active.style.top=0;
		this._marker_node5.ggMarkerActive=this._marker_node5__active;
		if (this._marker_node5.firstChild) {
			this._marker_node5.insertBefore(this._marker_node5__active,this._marker_node5.firstChild);
		} else {
			this._marker_node5.appendChild(this._marker_node5__active);
		}
		if (this._marker_node5.firstChild) {
			this._marker_node5.insertBefore(this._marker_node5__normal,this._marker_node5.firstChild);
		} else {
			this._marker_node5.appendChild(this._marker_node5__normal);
		}
		this._markertemplate__normal=this._marker_normal.cloneNode(true);
		this._markertemplate__normal.style.visibility='inherit';
		this._markertemplate__normal.style.left=0;
		this._markertemplate__normal.style.top=0;
		this._markertemplate.ggMarkerNormal=this._markertemplate__normal;
		this._markertemplate__active=this._marker_active.cloneNode(true);
		this._markertemplate__active.style.visibility='hidden';
		this._markertemplate__active.style.left=0;
		this._markertemplate__active.style.top=0;
		this._markertemplate.ggMarkerActive=this._markertemplate__active;
		if (this._markertemplate.firstChild) {
			this._markertemplate.insertBefore(this._markertemplate__active,this._markertemplate.firstChild);
		} else {
			this._markertemplate.appendChild(this._markertemplate__active);
		}
		if (this._markertemplate.firstChild) {
			this._markertemplate.insertBefore(this._markertemplate__normal,this._markertemplate.firstChild);
		} else {
			this._markertemplate.appendChild(this._markertemplate__normal);
		}
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggViewerInit=function() {
		}
		this.divSkin.ggLoaded=function() {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		}
		this.divSkin.ggReLoaded=function() {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='inherit';
			me._loading.ggVisible=true;
		}
		this.divSkin.ggEnterFullscreen=function() {
		}
		this.divSkin.ggExitFullscreen=function() {
		}
		this.skinTimerEvent();
	};
	this.hotspotProxyClick=function(id) {
	}
	this.hotspotProxyOver=function(id) {
	}
	this.hotspotProxyOut=function(id) {
	}
	this.changeActiveNode=function(id) {
		var newMarker=new Array();
		var i,j;
		var tags=me.player.userdata.tags;
		for (i=0;i<nodeMarker.length;i++) {
			var match=false;
			if (nodeMarker[i].ggMarkerNodeId==id) match=true;
			for(j=0;j<tags.length;j++) {
				if (nodeMarker[i].ggMarkerNodeId==tags[j]) match=true;
			}
			if (match) {
				newMarker.push(nodeMarker[i]);
			}
		}
		for(i=0;i<activeNodeMarker.length;i++) {
			if (newMarker.indexOf(activeNodeMarker[i])<0) {
				if (activeNodeMarker[i].ggMarkerNormal) {
					activeNodeMarker[i].ggMarkerNormal.style.visibility='inherit';
				}
				if (activeNodeMarker[i].ggMarkerActive) {
					activeNodeMarker[i].ggMarkerActive.style.visibility='hidden';
				}
				if (activeNodeMarker[i].ggDeactivate) {
					activeNodeMarker[i].ggDeactivate();
				}
			}
		}
		for(i=0;i<newMarker.length;i++) {
			if (activeNodeMarker.indexOf(newMarker[i])<0) {
				if (newMarker[i].ggMarkerNormal) {
					newMarker[i].ggMarkerNormal.style.visibility='hidden';
				}
				if (newMarker[i].ggMarkerActive) {
					newMarker[i].ggMarkerActive.style.visibility='inherit';
				}
				if (newMarker[i].ggActivate) {
					newMarker[i].ggActivate();
				}
			}
		}
		activeNodeMarker=newMarker;
	}
	this.skinTimerEvent=function() {
		setTimeout(function() { me.skinTimerEvent(); }, 10);
		if (me.elementMouseDown['button_zoom_in']) {
			me.player.changeFovLog(-1,true);
		}
		if (me.elementMouseDown['button_zoom_out']) {
			me.player.changeFovLog(1,true);
		}
		var hs='';
		if (me._compass.ggParameter) {
			hs+=parameterToTransform(me._compass.ggParameter) + ' ';
		}
		hs+='rotate(' + (-1.0*(1 * me.player.getPanNorth() + 0)) + 'deg) ';
		me._compass.style[domTransform]=hs;
		this._loadingtext.ggUpdateText();
		var hs='';
		if (me._loadingbar.ggParameter) {
			hs+=parameterToTransform(me._loadingbar.ggParameter) + ' ';
		}
		hs+='scale(' + (1 * me.player.getPercentLoaded() + 0) + ',1.0) ';
		me._loadingbar.style[domTransform]=hs;
		this._marker_title0.ggUpdateText();
	};
	function SkinHotspotClass(skinObj,hotspot) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		this.elementMouseDown=new Array();
		this.elementMouseOver=new Array();
		this.__div=document.createElement('div');
		this.__div.setAttribute('style','position:absolute; left:0px;top:0px;visibility: inherit;');
		
		this.findElements=function(id,regex) {
			var r=new Array();
			var stack=new Array();
			var pat=new RegExp(id,'');
			stack.push(me.__div);
			while(stack.length>0) {
				e=stack.pop();
				if (regex) {
					if (pat.test(e.ggId)) r.push(e);
				} else {
					if (e.ggId==id) r.push(e);
				}
				if (e.hasChildNodes()) {
					for(i=0;i<e.childNodes.length;i++) {
						stack.push(e.childNodes[i]);
					}
				}
			}
			return r;
		}
		
		{
			this.__div=document.createElement('div');
			this.__div.ggId='hs'
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			hs ='position:absolute;';
			hs+='left: 640px;';
			hs+='top:  246px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me._marker_title.style[domTransition]='none';
				me._marker_title.style.visibility='inherit';
				me._marker_title.ggVisible=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me._marker_title.style[domTransition]='none';
				me._marker_title.style.visibility='hidden';
				me._marker_title.ggVisible=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._hs_image=document.createElement('div');
			this._hs_image.ggId='hs_image'
			this._hs_image.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hs_image.ggVisible=true;
			hs ='position:absolute;';
			hs+='left: -15px;';
			hs+='top:  -16px;';
			hs+='width: 32px;';
			hs+='height: 32px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._hs_image.setAttribute('style',hs);
			this._hs_image__img=document.createElement('img');
			this._hs_image__img.setAttribute('src',basePath + 'images/hs_image.svg');
			this._hs_image__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;');
			this._hs_image.appendChild(this._hs_image__img);
			this.__div.appendChild(this._hs_image);
			this._marker_title=document.createElement('div');
			this._marker_title.ggId='marker_title'
			this._marker_title.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._marker_title.ggVisible=false;
			this._marker_title.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.style.left=(-74 + (150-this.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -74px;';
			hs+='top:  -54px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			hs+='border: 1px solid #000000;';
			hs+='border-radius: 5px;';
			hs+=cssPrefix + 'border-radius: 5px;';
			hs+='color: #000000;';
			hs+='background-image:url(images/alpha_background_ffffff_180.png);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 5px 6px 5px 6px;'
			hs+='overflow: hidden;';
			this._marker_title.setAttribute('style',hs);
			this._marker_title.innerHTML=me.hotspot.title;
			this.__div.appendChild(this._marker_title);
		}
	};
	this.addSkinHotspot=function(hotspot) {
		return new SkinHotspotClass(me,hotspot);
	}
	this.addSkin();
};