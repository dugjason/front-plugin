var conversation;

function unassign() {
  Front.unassign(conversation);
}

function toggleArchive() {
  Front.toggleArchive(conversation);
}

function toggleTrashed() {
  Front.toggleTrashed(conversation);
}

function replyOld() {
  let replyAll = false;
  Front.reply({
    body: 'Template reply OLD',
    subject: 'Template subject',
  }, replyAll, conversation);
}

function replyNew() {
  let replyAll = false;
  Front.reply({
    body: 'Template reply NEW',
    subject: 'Template subject',
  }, replyAll);
}

function replyBodyOnly() {
  Front.reply({
    body: 'Added reply body from Plugin'
  }, false)
}

function replywithCannedVariable() {
  Front.reply({
    body: '{{user.name}} is adding a reply containing a canned response variable'
  }, false)
}

function replyWithMobileRecipient() {
  Front.reply({
    to: ['+14156199776'],
    body: 'Template reply'
  }, false, conversation);
}

function replyHtml() {
  Front.insertHTML('<b>This is</b> Automatically inserted <i>HTML</i>');
}

function replyFrontIcon() {
  Front.insertHTML('<img src="https://frontapp.com/assets/img/favicons/favicon-128x128.png" />');
}

function alertDialog() {
  Front.dialog('alert', {
    title: 'I\'m an alert dialog',
    message: 'You are now alerted',
  }, function () {
    console.log('Alert closed');
  });
}

function confirmDialog() {
  Front.dialog('confirm', {
    title: 'I\'m a confirm dialog',
    message: 'Do you confirm',
    okTitle: 'OK Button',
    cancelTitle: 'Cancel Button'
  }, function (confirmed) {
    if (confirmed)
      console.log('User confirmed');
    else
      console.log('User cancelled');
  });
}

function promptDialog() {
  Front.dialog('prompt', {
    title: 'I\'m a prompt dialog',
    message: 'Please enter something'
  }, function (data) {
    if (data)
      console.log('User input :', data);
    else
      console.log('User cancelled');
  });
}

function fetchTeammates() {
  Front.fetchAllowedTeammates(function (teammates) {
    if (!teammates)
      return;

    console.log(teammates);
  });
}

function fetchInboxes() {
  Front.fetchInboxes(function (inboxes) {
    if (!inboxes)
      return;

    console.log(inboxes);
  });
}

function sendMessage() {
  Front.reply({
    body: 'Sending a smile :)',
  }, true);
}

function tag() {
  Front.attachTag('sss_self_serve_trials');
}

function addTopic() {
  Front.addTopic({
      type: 'web',
      name: 'Link example',
      ext_link: 'http://example.com'
  }, function() {
      console.log('Added topic');
  });
}

function composeTest() {
  var email = 'jason@frontapp.com';
  Front.compose({ to: [email] });
}

Front.on('conversation', function (data) {
  console.log('Conversation', data.conversation);
  console.log('Contact', data.contact);
  console.log('Message', data.message);
  console.log('OtherMessages', data.otherMessages);
  console.log('Full data', data);
  conversation = data.conversation;
});
