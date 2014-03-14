function listPosts(data) {
 var output='<ul data-role="listview" data-filter="true">';
	$.each(data.posts,function(key,val) {
        
        var tempDiv =
            document.createElement("tempDiv");
        tempDiv.innerHTML=val.excerpt;
        $("a",tempDiv).remove();
        var excerpt = tempDiv.innerHTML;
        
		output += '<li>';
       
        output += '<a href="#blogpost" onclick="showPost(' + val.id + ')">';
         output += (val.thumbnail) ?
			'<img src="' + val.thumbnail + '" alt="' + val.title + '" />':
			'<img src="img/MadeinNaija_logo.png" alt="ChrisGate Logo" />';

		output += '<h3>' + val.title + '</h3>';
     
        output += '<p>' + excerpt + '</p>';
        output += '</a>';
		output+= '</li>';
	}); // go through each post
	output +=' </ul>';
	$('#postlist').html(output);
} // lists all the posts

function showPost(id) {
	$.getJSON('http://hearthisnaija.com/?json=get_post&post_id=' + id + '&callback=?', function(data) {
		var output='';
		output += '<h3>' + data.post.title + '</h3>';
		output += data.post.content;
		$('#mypost').html(output);
	}); //get JSON Data for Stories
} //showPost

