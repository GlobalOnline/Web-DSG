/*dotdotdot*/
(function(j,d){if(j.fn.dotdotdot){return}j.fn.dotdotdot=function(x){if(this.length==0){j.fn.dotdotdot.debug('No element found for "'+this.selector+'".');return this}if(this.length>1){return this.each(function(){j(this).dotdotdot(x)})}var t=this;if(t.data("dotdotdot")){t.trigger("destroy.dot")}t.data("dotdotdot-style",t.attr("style")||"");t.css("word-wrap","break-word");if(t.css("white-space")==="nowrap"){t.css("white-space","normal")}t.bind_events=function(){t.bind("update.dot",function(A,C){A.preventDefault();A.stopPropagation();v.maxHeight=(typeof v.height=="number")?v.height:q(t);v.maxHeight+=v.tolerance;if(typeof C!="undefined"){if(typeof C=="string"||C instanceof HTMLElement){C=j("<div />").append(C).contents()}if(C instanceof j){y=C}}u=t.wrapInner('<div class="dotdotdot" />').children();u.contents().detach().end().append(y.clone(true)).find("br").replaceWith("  <br />  ").end().css({height:"auto",width:"auto",border:"none",padding:0,margin:0});var B=false,z=false;if(s.afterElement){B=s.afterElement.clone(true);B.show();s.afterElement.detach()}if(m(u,v)){if(v.wrap=="children"){z=c(u,v,B)}else{z=o(u,t,u,v,B)}}u.replaceWith(u.contents());u=null;if(j.isFunction(v.callback)){v.callback.call(t[0],z,y)}s.isTruncated=z;return z}).bind("isTruncated.dot",function(A,z){A.preventDefault();A.stopPropagation();if(typeof z=="function"){z.call(t[0],s.isTruncated)}return s.isTruncated}).bind("originalContent.dot",function(A,z){A.preventDefault();A.stopPropagation();if(typeof z=="function"){z.call(t[0],y)}return y}).bind("destroy.dot",function(z){z.preventDefault();z.stopPropagation();t.unwatch().unbind_events().contents().detach().end().append(y).attr("style",t.data("dotdotdot-style")||"").data("dotdotdot",false)});return t};t.unbind_events=function(){t.unbind(".dot");return t};t.watch=function(){t.unwatch();if(v.watch=="window"){var B=j(window),A=B.width(),z=B.height();B.bind("resize.dot"+s.dotId,function(){if(A!=B.width()||z!=B.height()||!v.windowResizeFix){A=B.width();z=B.height();if(r){clearInterval(r)}r=setTimeout(function(){t.trigger("update.dot")},100)}})}else{w=l(t);r=setInterval(function(){if(t.is(":visible")){var C=l(t);if(w.width!=C.width||w.height!=C.height){t.trigger("update.dot");w=C}}},500)}return t};t.unwatch=function(){j(window).unbind("resize.dot"+s.dotId);if(r){clearInterval(r)}return t};var y=t.contents(),v=j.extend(true,{},j.fn.dotdotdot.defaults,x),s={},w={},r=null,u=null;if(!(v.lastCharacter.remove instanceof Array)){v.lastCharacter.remove=j.fn.dotdotdot.defaultArrays.lastCharacter.remove}if(!(v.lastCharacter.noEllipsis instanceof Array)){v.lastCharacter.noEllipsis=j.fn.dotdotdot.defaultArrays.lastCharacter.noEllipsis}s.afterElement=b(v.after,t);s.isTruncated=false;s.dotId=n++;t.data("dotdotdot",true).bind_events().trigger("update.dot");if(v.watch){t.watch()}return t};j.fn.dotdotdot.defaults={ellipsis:"... ",wrap:"word",fallbackToLetter:true,lastCharacter:{},tolerance:0,callback:null,after:null,height:null,watch:false,windowResizeFix:true};j.fn.dotdotdot.defaultArrays={lastCharacter:{remove:[" ","\u3000",",",";",".","!","?"],noEllipsis:[]}};j.fn.dotdotdot.debug=function(r){};var n=1;function c(u,y,x){var w=u.children(),r=false;u.empty();for(var t=0,s=w.length;t<s;t++){var v=w.eq(t);u.append(v);if(x){u.append(x)}if(m(u,y)){v.remove();r=true;break}else{if(x){x.detach()}}}return r}function o(s,t,y,x,w){var r=false;var v="table, thead, tbody, tfoot, tr, col, colgroup, object, embed, param, ol, ul, dl, blockquote, select, optgroup, option, textarea, script, style";var u="script, .dotdotdot-keep";s.contents().detach().each(function(){var A=this,z=j(A);if(typeof A=="undefined"||(A.nodeType==3&&j.trim(A.data).length==0)){return true}else{if(z.is(u)){s.append(z)}else{if(r){return true}else{s.append(z);if(w){s[s.is(v)?"after":"append"](w)}if(m(y,x)){if(A.nodeType==3){r=e(z,t,y,x,w)}else{r=o(z,t,y,x,w)}if(!r){z.detach();r=true}}if(!r){if(w){w.detach()}}}}}});return r}function e(t,v,G,w,s){var D=t[0];if(!D){return false}var z=i(D),r=(z.indexOf(" ")!==-1)?" ":"\u3000",B=(w.wrap=="letter")?"":r,E=z.split(B),A=-1,H=-1,C=0,u=E.length-1;if(w.fallbackToLetter&&C==0&&u==0){B="";E=z.split(B);u=E.length-1}while(C<=u&&!(C==0&&u==0)){var x=Math.floor((C+u)/2);if(x==H){break}H=x;a(D,E.slice(0,H+1).join(B)+w.ellipsis);if(!m(G,w)){A=H;C=H}else{u=H;if(w.fallbackToLetter&&C==0&&u==0){B="";E=E[0].split(B);A=-1;H=-1;C=0;u=E.length-1}}}if(A!=-1&&!(E.length==1&&E[0].length==0)){z=g(E.slice(0,A+1).join(B),w);a(D,z)}else{var y=t.parent();t.detach();var F=(s&&s.closest(y).length)?s.length:0;if(y.contents().length>F){D=f(y.contents().eq(-1-F),v)}else{D=f(y,v,true);if(!F){y.detach()}}if(D){z=g(i(D),w);a(D,z);if(F&&s){j(D).parent().append(s)}}}return true}function m(s,r){return s.innerHeight()>r.maxHeight}function g(r,s){while(j.inArray(r.slice(-1),s.lastCharacter.remove)>-1){r=r.slice(0,-1)}if(j.inArray(r.slice(-1),s.lastCharacter.noEllipsis)<0){r+=s.ellipsis}return r}function l(r){return{width:r.innerWidth(),height:r.innerHeight()}}function a(s,r){if(s.innerText){s.innerText=r}else{if(s.nodeValue){s.nodeValue=r}else{if(s.textContent){s.textContent=r}}}}function i(r){if(r.innerText){return r.innerText}else{if(r.nodeValue){return r.nodeValue}else{if(r.textContent){return r.textContent}else{return""}}}}function k(r){do{r=r.previousSibling}while(r&&r.nodeType!==1&&r.nodeType!==3);return r}function f(s,v,r){var u=s&&s[0],t;if(u){if(!r){if(u.nodeType===3){return u}if(j.trim(s.text())){return f(s.contents().last(),v)}}t=k(u);while(!t){s=s.parent();if(s.is(v)||!s.length){return false}t=k(s[0])}if(t){return f(j(t),v)}}return false}function b(r,s){if(!r){return false}if(typeof r==="string"){r=j(r,s);return(r.length)?r:false}return !r.jquery?false:r}function q(u){var v=u.innerHeight(),t=["paddingTop","paddingBottom"];for(var w=0,s=t.length;w<s;w++){var r=parseInt(u.css(t[w]),10);if(isNaN(r)){r=0}v-=r}return v}var p=j.fn.html;j.fn.html=function(r){if(r!=d&&!j.isFunction(r)&&this.data("dotdotdot")){return this.trigger("update",[r])}return p.apply(this,arguments)};var h=j.fn.text;j.fn.text=function(r){if(r!=d&&!j.isFunction(r)&&this.data("dotdotdot")){r=j("<div />").text(r).html();return this.trigger("update",[r])}return h.apply(this,arguments)}})(jQuery);

/*slide-pagination on DSG*/
(function($) {
	var methods = {
		destroy: function() {
			var options = $(this).data('options');

			if(options === undefined) {
				return this;
			}

			$(this).off('click', '.prev, .next');
			$(this).find('.rr-pagination').remove();

			$(this).find(options.list).parent().find('> div').remove();

			if($(this).find(options.list).parent().hasClass('pagination-container')) {
				$(this).find(options.list).unwrap();
			}

			$(this).find(options.list).css('display', '');

			return this;
		},
		randomize: randomize
	};

  $.fn.slidePagination2 = function(options) {
    $(this).each(function() {
			if(typeof options == 'string') {
				return methods[options].call(this);
			}
			else {
				methods.destroy.call(this);
				bind.call(this, options);

				$(this).data('options', options);

				if(typeof options.random == 'boolean' && options.random) {
					randomize.call($(this).find(options.list));
				}

				create.call(this, options);
			}
    });
  };

	function randomize() {
    var li = $(this).find('li');

    li.sort(function(a, b){
      // Get a random number between 0 and 10
      var temp = parseInt( Math.random()*10 );
      // Get 1 or 0, whether temp is odd or even
      var isOddOrEven = temp%2;
      // Get +1 or -1, whether temp greater or smaller than 5
      var isPosOrNeg = temp>5 ? 1 : -1;
      // Return -1, 0, or +1
      return( isOddOrEven*isPosOrNeg );
    })
      // append list items to ul
        .appendTo($(this));
  }

  function bind() {
		var elem = this;

    $(this).on('click', '.prev, .next', function(e) {
      e.preventDefault();
      e.stopImmediatePropagation();

      if($(this).hasClass('inactive')) {
				return false;
			}

      var total = $(elem).data('total'),
          page = $(elem).data('page'),
          interval = $(elem).data('interval');

      $(elem).find('.next, .prev').removeClass('inactive');

      if($(this).hasClass('prev')) {
        if(--page == 0) {
					$(elem).find('.prev').addClass('inactive');
        }
      }
      else {
        if(++page == $(elem).data('totalpage') - 1) {
					$(elem).find('.next').addClass('inactive');
        }
      }

			$(elem)
				.data('page', page)
				.find('.pagination-container').find('> div').animate({left: -1 * (page * $(elem).data('width'))}, 500);

      var start = page * interval, end = (page + 1) * interval;

			$(elem).find('.rr-pagination').each(function() {
				if($(this).find('> span').length) {
					$(this).find('> span').find('span:eq(0)').html(start+1).end()
						.find('span:eq(1)').html(end > total ? total:end);
				}
			});
    });

    return true;
  }

  function create(options) {
    if($(this).data('processed') != undefined) {
			return false;
		}

    var elem = this,
				interval = parseInt(options.column) * parseInt(options.row),
				li = $(this).find(options.list).find('> li').clone().show(); //Find all LI's

    if(!options.force) {
      if(li.length < interval) {
				return false;
			}
    }

    var total = li.length,
        page = 0,
        totalRows = options.row,
        nextClass = (total <= (totalRows*options.column)) ? ' inactive':'',
        totalpage = Math.ceil(total/(totalRows*options.column));

    $(this).data('interval', interval);

    $(this).find(options.list).find('> li p').each(function() {
      if($(this).outerHeight(true) > 150) {
				$(this).dotdotdot({height: 150});
			}
    });

    //Add pagination html fragment.
    if (totalpage > 1) {
			$.each(options.pagination, function() {
				if(this.type == 'append') {
					if(typeof this.displayTotal == 'boolean' && this.displayTotal) {
						$(elem).find(this.selector).append('<div class="rr-pagination"><span>Viewing <span>1</span>-<span>' + ((total < options.interval) ? total : totalRows * options.column) + '</span> of ' + total + '</span><a href="#" class="prev inactive"></a><a href="#" class="next' + nextClass + '"></a></div>');
					}
					else {
						$(elem).find(this.selector).append('<div class="rr-pagination"><a href="#" class="prev inactive"></a><a href="#" class="next' + nextClass + '"></a></div>');
					}
				}
				else if(this.type == 'prepend') {
					$(elem).find(this.selector).prepend('<div class="rr-pagination"><a href="#" class="prev inactive"></a><a href="#" class="next' + nextClass + '"></a></div>');
				}
			});
    }

    $(this).find(options.list).wrap('<div>').parent().addClass('pagination-container');

		var width = $(this).find('.pagination-container').width();

		$(this)
			.data('total', total)
			.data('totalpage', totalpage)
			.data('page', page)
			.data('width', width);

		var divContainer = $('<div>').css({width: width * totalpage}).appendTo($(this).find(options.list).parent());

		for (var p = 0; p < totalpage; p++) {
			var ul = $('<ul>').css({width: width});

			for (var indx2 = p * interval; indx2 < (p + 1) * interval; indx2++) {
				ul.append(li.get(indx2));
			}

			ul.appendTo(divContainer);
		}

		//Hide UL
		$(this).find(options.list).data('processed', true).hide();

    return true;
  }
})(jQuery);