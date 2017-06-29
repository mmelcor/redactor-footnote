(function($) {
$.Redactor.prototype.footnote = function()
{
	var count = 1;
	return {
		getTemplate: function()
		{
			return String()
			+ '<div class="modal-section" id="redactor-modal-footnote">'
			    + '<section>'
				    + '<label for="url">Footnote URL</label>'
					+ '<input type="text" id="footnote-url" name="url" value="http://" />'
					+ '<label for="description">Description</label>'
					+ '<input type="text" id="footnote-description" name="description" />'
				+ '</section>'
			+ '</div>';
		},
		init:function() {
			console.log("Yay Footnotes!");
			var button = this.button.add('footnote', 'Footnote');
			this.button.setAwesome('footnote', 'fa-comment');
			this.button.addCallback(button, this.footnote.show);
			this.$editor.on('keyup.redactor-limiter', this.footnote.countNotes);
		},
		show:function()
		{
		this.modal.addTemplate('footnote',
		this.footnote.getTemplate());
		this.modal.load('footnote','Footnote Modal',400);
		this.modal.createCancelButton();
		var button=this.modal.createActionButton('Insert');
		button.on('click',this.footnote.addSource);
		this.selection.save();
		this.modal.show();
		$('#footnote-url').focus();
		},
		addSource: function()
		{
			this.selection.restore();
			this.inline.format('sup');
			this.insert.html('<a class="note-link" id="note' + count + '" href="#' + count + '">' + count + '</a>');
			if(count == 1) {
				this.line.insert();
			} else {
				this.caret.setAfter($('#'+(count - 1)));
			}
				this.insert.html('<p class="footnote" id="' + count +'"><span class="number">' + count + '</span>. <a href="' + $('#footnote-url').val() + '">' + $('#footnote-description').val() + '</a></p>', false);
				this.modal.close();
			this.caret.setAfter($('sup'));
			count++;

		},
		countNotes: function()
		{
			var notes = $('.footnote');
			var links = $('.note-link');

			if((notes.length + 1) != count || (links.length + 1) != count) {
				count = notes.length;
				
				for(i=0; i< count; i++) {
					notes.eq(i).attr('id', i+1);
					notes.eq(i).find('.number').html(i+1);
					links.eq(i).attr('id', 'note'+i+1);
					links.eq(i).attr('href', '#'+i+1);
					links.eq(i).html(i+1);
				}
			}
		}
	};
};
})(jQuery);