(function() {
 const messages = JSON.parse("{\"Zzqtqw\":\"View all comments\",\"wJCTCw\":\"Your reaction wasn't saved. Press to try again.\",\"EX+mtw\":\"You need to be online to access resolved comments.\",\"13+qHQ\":\"Failed to send.\",\"GXDK9g\":\"Something went wrong with comment reactions. Refresh the page to try again.\",\"LRA3hg\":\"Comment resolved\",\"p8Tn6Q\":\"Close reaction menu\",\"1hV5dA\":\"You've already added a sticker\",\"fq5CFw\":\"Back\",\"nid+HQ\":\"{0} reactions, long press to see who has reacted with \\\"{1}\\\"\",\"Em9Gww\":\"{0, number}\",\"BMl1pA\":\"View {0} unread {0, plural, one {comment} other {comments}}\",\"ZZ9WPg\":\"Close thread\",\"wZB85A\":\"Assigned to {0}\",\"2jNjmA\":\"Love\",\"P82FGA\":\"Thread\",\"KAQIsg\":\"Resolved comments couldn't be loaded. Please try again later\",\"GNidlg\":\"Deleted user\",\"r/GefQ\":\"Edit reply\",\"GhalUg\":\"Save\",\"BBdsDw\":\"Reactions are unavailable when offline.\",\"ZFmo0Q\":\"You're offline\",\"bRA1pg\":\"Submit comment\",\"mbaR6w\":\"Please <b><a data-anchor-id=\\\"sign-up\\\">sign up</a></b> or <b><a data-anchor-id=\\\"log-in\\\">log in</a></b> to leave a reply to this comment\",\"6jlbsQ\":\"Previous comment\",\"DJPZfg\":\"Comments\",\"D1R4ig\":\"Add sticker\",\"s4iUTw\":\"Please <b><a data-anchor-id=\\\"sign-up\\\">sign up</a></b> or <b><a data-anchor-id=\\\"log-in\\\">log in</a></b> to leave a comment\",\"5mSssg\":\"Close Comments\",\"LEl31Q\":\"Unresolved\",\"RLCnwQ\":\"Comments are offline\",\"Y3aQng\":\"<b>{1} and {2}</b> reacted with \\\"{0}\\\"\",\"L1Ai+w\":\"Edit comment\",\"2DNsgQ\":\"More options\",\"uLTu2w\":\"Comment could not be found\",\"Z40ezQ\":\"Resolved\",\"uKyp1A\":\"Fantastic\",\"aFhaIw\":\"No resolved comments\",\"fq9A5Q\":\"Comments failed to load\",\"BWT+Yg\":\"Delete Comment\",\"Ep6eqg\":\"Resolved comments\",\"WomfwA\":\"New\",\"y9ZrvQ\":\"Show less\",\"lPPh2w\":\"Reacted with \\\"{0}\\\"\",\"M1hYiA\":\"View reactions\",\"CRsrKA\":\"Add comment\",\"xIEPdw\":\"Excellent\",\"INes9g\":\"Comment has been resolved or deleted\",\"SNYQdA\":\"Resolve comment\",\"iLdOLg\":\"Stickers failed to load, please <a data-anchor-id=\\\"try-again\\\">try again</a>.\",\"I5pONg\":\"<b>{1}, {2}, you and {3, plural, one {# more person} other {# more people}}</b> reacted with \\\"{0}\\\"\",\"a5Sxgw\":\"<b>{1}, {2} and {3}</b> reacted with \\\"{0}\\\"\",\"+RNIXg\":\"New\",\"9o4bFQ\":\"Continue\",\"MN4+3w\":\"Comment draft. Add a comment or @mention.\",\"Rll9DQ\":\"Delete sticker\",\"ZKrOZQ\":\"Show {0, plural, one {reply} other {all # replies}}\",\"4IDysA\":\"To add a comment, select an element or page\",\"SOvnag\":\"Thinking\",\"63XlkQ\":\"Done\",\"5wWqPQ\":\"Next comment\",\"GxneBw\":\"Clicking on this comment thread will select the element is it connected to.\",\"6hbT9Q\":\"Save comment\",\"CkkEoQ\":\"Cancel\",\"hZ18Gg\":\"Wow!\",\"2CAShQ\":\"Resolve Comment\",\"KIj+iw\":\"<b>{1}</b> reacted with \\\"{0}\\\"\",\"kdJ+sQ\":\"(edited)\",\"yL97Gg\":\"Can edit\",\"ioraqw\":\"By continuing, you will lose the comment you have drafted.\",\"31xktA\":\"{0} / {1}\",\"ZVR6fg\":\"More assignees\",\"pkqYIQ\":\"Cancel edit\",\"Tb2Muw\":\"Retry\",\"17eDJA\":\"Delete reply\",\"688VSA\":\"Comment\",\"Q+IZtg\":\"99+\",\"Vro+UA\":\"Reply\",\"qah/Qw\":\"<b>{1}, {2}, {3} and {4, plural, one {# more person} other {# more people}}</b> reacted with \\\"{0}\\\"\",\"XLcrCg\":\"Assign to {0}\",\"OtBQrw\":\"View {0, plural, one {# reply} other {# replies}}\",\"yj7EFQ\":\"Go back\",\"girWKA\":\"Can comment\",\"zXvGKA\":\"There are no resolved comments to show.\",\"0Ya4KA\":\"Like\",\"w3hueg\":\"{0, number}\",\"w+xSJA\":\"<b>You</b> reacted with \\\"{0}\\\"\",\"VE1dcw\":\"Reply...\",\"2z3WOA\":\"<b>{1} and you</b> reacted with \\\"{0}\\\"\",\"jighsQ\":\"Laughing\",\"F0cgrA\":\"There are no comments on this design.\",\"TWOUuA\":\"Assigned to you\",\"MIVioA\":\"Move to attached comments\",\"G5BCuQ\":\"{0, plural, one {# reply} other {# replies}}\",\"LxivSA\":\"Cancel reply\",\"jPxw4A\":\"Suggestions\",\"Frp0dA\":\"Press to try again\",\"HnDGTQ\":\"Open comment from {0}. {1, plural, one {# reply} other {# replies}}.\",\"NemJFw\":\"We couldn't load your resolved comments.\",\"GRZAsA\":\"Try again\",\"DLh9+A\":\"This comment has been resolved\",\"KwLzzw\":\"View all\",\"fmWSuw\":\"Cancel comment\",\"zBy57w\":\"Assign to you\",\"wpUDNQ\":\"We couldn't load your comments.\",\"YhRlUw\":\"Submit reply\",\"kFxubQ\":\"Cancel\",\"pW1yIw\":\"Show more\",\"Q22p1A\":\"Back\",\"shLpRQ\":\"Add reaction\",\"viFGCQ\":\"Your comment wasn't submitted. Please try again.\",\"qzmdJQ\":\"Assigned to\",\"Vbt1RQ\":\"We'll invite your @mention to this design and send an email.\",\"uNE1Zw\":\"{0, number} comments\",\"Cj3aIw\":\"Delete thread\",\"PGLyHw\":\"Reply draft. Add a reply or @mention.\",\"rnE3Tg\":\"Undo\",\"mRofdQ\":\"Unknown user\",\"/ST7iw\":\"Your draft comment will be lost\",\"OFcESA\":\"View {0, plural, one {comment} other {comments}}\",\"sCcq7A\":\"Add a comment or @mention\",\"qDuAvQ\":\"Save reply\",\"ZuJEvg\":\"<b>{1}, {2} and you</b> reacted with \\\"{0}\\\"\",\"MMTpHg\":\"Please try again\",\"Nv62Ng\":\"Reactions to comments failed to load\"}");
 const cmsg = window["cmsg"] = window["cmsg"] || {};
 const strings = cmsg["strings"] = cmsg["strings"] || {};
 strings["en-GB"] = strings["en-GB"] ? Object.assign(strings["en-GB"], messages) : messages;
})();