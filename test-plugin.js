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

function replyWithAttachment() {
  const attachmentUid = (message.attachments[0] && message.attachments[0].uid) || undefined;
  Front.reply({
    to: ['someone@somewhere.com'],
    subject: 'Optional subject',
    body: 'Optional body',
    attachment_uids: [attachmentUid]
  }, false);
}

function newMessagewithAttachment() {
  const attachmentUid = (message.attachments[0] && message.attachments[0].uid) || undefined;
  Front.compose({
    to: ['someone@somewhere.com'],
    subject: 'Optional subject',
    body: 'Optional body',
    attachment_uids: [attachmentUid],
    hide_composer: false
  }, false);
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
  Front.alert({
    title: 'I\'m an alert dialog',
    message: 'You are now alerted',
  }, function () {
    console.log('Alert closed');
  });
}

function confirmDialog() {
  Front.confirm({
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
  Front.prompt({
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
  Front.attachTag('star');
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

function composeEmail() {
  let recipient = 'jason@frontapp.com';
  Front.compose({
    from: 'support@frontapp.com',
    to: [recipient]
  });
}

function composeSms() {
  let recipient = '+14156199776';
  Front.compose({
    from: '+14153017372',
    to: [recipient]
  });
}

function openURL() {
  Front.openUrl('https://www.example.com');
}

function composeIncludeLink() {
  Front.compose({
    from: 'support@frontapp.com',
    to: ['jason@frontapp.com'],
    subject: "Testing Composer including a URL",
    body: "Testing this plugin function <a href='https://example.com'>example.com</a>"
  })
}

function showFuzzyLists() {
  Front.fuzzylist({
    items: [
        {title: 'L1 - Options 1'},
        {title: 'L1 - Options 2'},
        {title: 'L1 - Options 3'},
        {title: 'L1 - Options 4'}
    ]
  }, function (item) {
    if (item)
      Front.fuzzylist({
        items: [
          {title: 'L2 - Options 1'},
          {title: 'L2 - Options 2'},
          {title: 'L2 - Options 3'},
          {title: 'L2 - Options 5'},
          {title: 'L2 - Options 4'}
        ]
      }, function (item2) {
        Front.alert({
          title: 'Alert',
          message: 'You clicked ' + item2.title
        },()=>{});
      });
    else
      console.log('User canceled');
  });
}

function windowOpen() {
  window.open('https://example.com', 'Opened window from Plugin', 'height=600,width=1050');
}

Front.on('conversation', function (data) {
  console.log('Conversation', data.conversation);
  console.log('Contact', data.contact);
  console.log('Message', data.message);
  console.log('OtherMessages', data.otherMessages);
  console.log('Full data', data);
  conversation = data.conversation;
  message = data.message;

  var frontUser = Front.user;
  console.log('Front user', frontUser);
  var userContent = document.getElementById("user").innerHTML;
  userContent = frontUser;

  user.innerHTML = JSON.stringify(frontUser);
  requester.innerHTML = data.contact.handle;
});
