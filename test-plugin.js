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

function coverGenius() {
  let coverGeniusBody = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">

  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width">

    <!-- Force Apple's automatic context links to conform to colour scheme -->
    <style>
      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
      }
    </style>

    <!-- Force Gmail's automatic context links to conform to colour scheme -->
    <style>
      u + #body a {
        color: inherit;
        text-decoration: none;
        font-size: inherit;
        font-family: inherit;
        font-weight: inherit;
        line-height: inherit;
      }
    </style>

    <!-- Only display custom fonts outside Outlook -->
    <!--[if mso]>
      <style>
        body, table.body, h1, h2, h3, h4, h5, h6, p, td, th, a {
            font-family: Helvetica, Arial, sans-serif !important;
        }
      </style>
    <![endif]-->

    <!--[if !mso]>-->
      <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
    <!--<![endif]-->
  </head>

  <body id="body" style="-moz-box-sizing:border-box;-ms-text-size-adjust:100%;-webkit-box-sizing:border-box;-webkit-text-size-adjust:100%;Margin:0;box-sizing:border-box;color:#0e1d35;font-family:Montserrat,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:1.3;margin:0;min-width:100%;padding:0;text-align:left;width:100%!important">
    <style>
      @media only screen {
        html {
          min-height: 100%;
          background: #f3f3f3
        }
      }

      @media only screen and (max-width:620px) {
        .small-float-center {
          margin: 0 auto!important;
          float: none!important;
          text-align: center!important
        }
        .small-text-center {
          text-align: center!important
        }
        .small-text-left {
          text-align: left!important
        }
        .small-text-right {
          text-align: right!important
        }
      }

      @media only screen and (max-width:620px) {
        table.body table.container .show-for-large {
          display: none!important;
          width: 0;
          mso-hide: all;
          overflow: hidden
        }
      }

      @media only screen and (max-width:620px) {
        table.body img {
          width: auto;
          height: auto
        }
        table.body center {
          min-width: 0!important
        }
        table.body .container {
          width: 95%!important
        }
        table.body .columns {
          height: auto!important;
          -moz-box-sizing: border-box;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          padding-left: 20px!important;
          padding-right: 20px!important
        }
        table.body .columns .columns {
          padding-left: 0!important;
          padding-right: 0!important
        }
        table.body .collapse .columns {
          padding-left: 0!important;
          padding-right: 0!important
        }
        th.small-1 {
          display: inline-block!important;
          width: 8.33333%!important
        }
        th.small-2 {
          display: inline-block!important;
          width: 16.66667%!important
        }
        th.small-6 {
          display: inline-block!important;
          width: 50%!important
        }
        th.small-10 {
          display: inline-block!important;
          width: 83.33333%!important
        }
        th.small-12 {
          display: inline-block!important;
          width: 100%!important
        }
        .columns th.small-12 {
          display: block!important;
          width: 100%!important
        }
      }

      @media only screen and (max-width:620px) {
        .header .wrapper-inner {
          padding: 20px 0 0!important
        }
      }

      @media only screen and (max-width:620px) {
        .header-partner-block {
          float: none!important
        }
        .header-partner-block.rtl {
          float: none!important
        }
      }

      @media only screen and (max-width:620px) {
        .footer .wrapper-inner {
          padding: 20px 0 0!important
        }
      }

      @media only screen and (max-width:620px) {
        .banner .banner-padding {
          padding-bottom: 0!important
        }
      }

      @media only screen and (max-width:620px) {
        .banner--receipt .wrapper-inner {
          padding: 30px 0!important
        }
        .banner--receipt .banner-box .wrapper-inner {
          height: auto!important;
          padding: 15px!important
        }
      }

      @media only screen and (max-width:620px) {
        .banner--tripreminder .wrapper-inner {
          padding: 30px 0!important
        }
        .banner--tripreminder .wrapper-inner .columns {
          padding-bottom: 0!important
        }
        .banner--tripreminder .banner-box .wrapper-inner {
          padding: 15px!important
        }
      }

      @media only screen and (max-width:620px) {
        .panel .wrapper-inner {
          padding: 20px 0 0!important
        }
        .panel .wrapper-inner .wrapper-inner {
          padding: 0!important
        }
      }

      @media only screen and (max-width:620px) {
        .panel--large .wrapper-inner {
          padding: 40px 0 20px!important
        }
        .panel--large .wrapper-inner .wrapper-inner {
          padding: 0!important
        }
      }

      @media only screen and (max-width:620px) {
        .policy-edit {
          text-align: left!important
        }
        .policy-edit table {
          display: table!important;
          text-align: left!important
        }
      }

      @media only screen and (max-width:620px) {
        .coverage .first {
          padding-bottom: 0!important
        }
      }

      @media only screen and (max-width:620px) {
        .rating-heading th {
          text-align: center!important
        }
      }

      @media only screen and (max-width:620px) {
        .calltoaction .wrapper-inner {
          padding: 20px 0 0!important
        }
      }

      @media only screen and (max-width:620px) {
        .appheader .wrapper-inner {
          padding: 10px 0 0!important
        }
      }

      @media only screen and (max-width:620px) {
        .appheader-heading {
          font-size: 18px!important
        }
      }

      @media only screen and (max-width:620px) {
        .appfooter .wrapper-inner {
          padding: 20px 0 0!important
        }
      }

      @media only screen and (max-width:620px) {
        .appfooter-download--apple {
          padding-right: 10px!important
        }
      }

      @media only screen and (max-width:620px) {
        .appfooter-download--apple.rtl {
          padding-right: 0!important;
          padding-left: 10px!important
        }
      }

      @media only screen and (max-width:620px) {
        table.body th.signature-avatar.columns {
          padding-right: 0!important
        }
      }

      @media only screen and (max-width:620px) {
        table.body th.signature-text.columns {
          padding-left: 10px!important
        }
      }
    </style>

          <!-- Email preview text -->
      <span class="preheader" style="color:#f3f3f3;display:none!important;font-size:1px;line-height:1px;max-height:0;max-width:0;mso-hide:all!important;opacity:0;overflow:hidden;visibility:hidden"></span>

    <!-- Body wrapper -->
    <table class="body" style="Margin:0;background:#f3f3f3;border-collapse:collapse;border-spacing:0;color:#0e1d35;font-family:Montserrat,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;height:100%;line-height:1.3;margin:0;padding:0;text-align:left;vertical-align:top;width:100%">
      <tr style="padding:0;text-align:left;vertical-align:top">
        <td class="center" align="center" valign="top" style="-moz-hyphens:none;-webkit-hyphens:none;Margin:0;border-collapse:collapse!important;color:#0e1d35;font-family:Montserrat,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:none;line-height:1.3;margin:0;padding:0;text-align:left;vertical-align:top;word-break:normal;word-wrap:break-word">
          <center data-parsed="" style="min-width:600px;width:100%">
            <table align="center" class="container float-center" style="Margin:0 auto;background:#fefefe;border-collapse:collapse;border-spacing:0;float:none;margin:0 auto;padding:0;text-align:center;vertical-align:top;width:600px">
              <tbody>
                <tr style="padding:0;text-align:left;vertical-align:top">
                  <td style="-moz-hyphens:none;-webkit-hyphens:none;Margin:0;border-collapse:collapse!important;color:#0e1d35;font-family:Montserrat,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:none;line-height:1.3;margin:0;padding:0;text-align:left;vertical-align:top;word-break:normal;word-wrap:break-word">

                    <!-- Top -->
                                          <table bgcolor="#f3f3f3" class="wrapper top" align="center" style="background:#f3f3f3;border-collapse:collapse;border-spacing:0;padding:0;text-align:left;vertical-align:top;width:100%">

                      <tr style="padding:0;text-align:left;vertical-align:top">
                        <td class="wrapper-inner" style="-moz-hyphens:none;-webkit-hyphens:none;Margin:0;border-collapse:collapse!important;color:#0e1d35;font-family:Montserrat,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:none;line-height:1.3;margin:0;padding:0;text-align:left;vertical-align:top;word-break:normal;word-wrap:break-word">
                          <table class="row collapse" style="border-collapse:collapse;border-spacing:0;display:table;padding:0;position:relative;text-align:left;vertical-align:top;width:100%">
                            <tbody>
                              <tr style="padding:0;text-align:left;vertical-align:top">

                                <!-- Partner info -->
                                <th class="top-partner small-12 large-8 columns first" valign="middle" style="Margin:0 auto;color:#0e1d35;font-family:Montserrat,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;height:36px;line-height:1.3;margin:0 auto;padding:0;padding-bottom:0;padding-left:0;padding-right:0;text-align:left;width:410px">
                                  <table style="border-collapse:collapse;border-spacing:0;padding:0;text-align:left;vertical-align:top;width:100%">
                                    <tr style="padding:0;text-align:left;vertical-align:top">
                                      <th style="Margin:0;color:#0e1d35;font-family:Montserrat,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:1.3;margin:0;padding:0;text-align:left">
                                                                              </th>
                                    </tr>
                                  </table>
                                </th>

                                <!-- View on web -->
                                <th class="top-viewonline small-12 large-4 columns last" valign="middle" style="Margin:0 auto;color:#0e1d35;font-family:Montserrat,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;height:36px;line-height:1.3;margin:0 auto;padding:0;padding-bottom:0;padding-left:0;padding-right:0;text-align:left;width:210px">
                                  <table style="border-collapse:collapse;border-spacing:0;padding:0;text-align:left;vertical-align:top;width:100%">
                                    <tr style="padding:0;text-align:left;vertical-align:top">
                                      <th style="Margin:0;color:#0e1d35;font-family:Montserrat,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:1.3;margin:0;padding:0;text-align:left">
                                                                              </th>
                                    </tr>
                                  </table>
                                </th>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </table>

                    <!-- Header -->
                                          <table bgcolor="#0e1d35" class="wrapper header" align="center" style="background-color:#0e1d35;border-collapse:collapse;border-spacing:0;padding:0;text-align:left;vertical-align:top;width:100%">
                                          <tr style="padding:0;text-align:left;vertical-align:top">
                        <td class="wrapper-inner" style="-moz-hyphens:none;-webkit-hyphens:none;Margin:0;border-collapse:collapse!important;color:#0e1d35;font-family:Montserrat,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:none;line-height:1.3;margin:0;padding:10px 10px 0;text-align:left;vertical-align:top;word-break:normal;word-wrap:break-word">
                          <table class="row" style="border-collapse:collapse;border-spacing:0;display:table;padding:0;position:relative;text-align:left;vertical-align:top;width:100%">
                            <tbody>
                              <tr style="padding:0;text-align:left;vertical-align:top">

                              <!-- Logo -->
                                                              <th class="header-logo small-12 large-6 columns first" height="36" valign="middle" style="Margin:0 auto;color:#0e1d35;font-family:Montserrat,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;height:30px;line-height:1.3;margin:0 auto;padding:0;padding-bottom:10px;padding-left:20px;padding-right:10px;text-align:left;width:280px">
                                                              <table style="border-collapse:collapse;border-spacing:0;padding:0;text-align:left;vertical-align:top;width:100%">
                                    <tr style="padding:0;text-align:left;vertical-align:top">
                                      <th style="Margin:0;color:#0e1d35;font-family:Montserrat,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:1.3;margin:0;padding:0;text-align:left">
                                      <a href="https://www.rentalcover.com/" style="Margin:0;color:#08a5d2;font-family:Montserrat,Helvetica,Arial,sans-serif;font-weight:400;line-height:1.3;margin:0;padding:0;text-align:left;text-decoration:none">
                                        <img src="https://files.rentalcover.com/img/rc-logo/w_hori.png" alt="RentalCover.com" width="238" height="24" class="brand-logo" style="-ms-interpolation-mode:bicubic;border:none;clear:both;display:block;height:48px!important;max-width:100%;outline:0;text-decoration:none;width:238px!important">
                                      </a>
                                    </th>
                                  </tr>
                                </table>
                              </th>

                              <!-- Partner site -->

                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </table>

                    <!-- Body content -->
                                          <div>
                                          <table align="center" bgcolor="#ffffff" class="wrapper panel panel--large content" style="background-color:#fefefe;border-collapse:collapse;border-spacing:0;padding:0;text-align:left;vertical-align:top;width:100%">
  <tbody>
    <tr style="padding:0;text-align:left;vertical-align:top">
      <td class="wrapper-inner" style="-moz-hyphens:none;-webkit-hyphens:none;Margin:0;border-collapse:collapse!important;color:#0e1d35;font-family:Montserrat,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:none;line-height:1.3;margin:0;padding:40px 10px 20px;text-align:left;vertical-align:top;word-break:normal;word-wrap:break-word">
      <table class="row" style="border-collapse:collapse;border-spacing:0;display:table;padding:0;position:relative;text-align:left;vertical-align:top;width:100%">
        <tbody>
          <tr style="padding:0;text-align:left;vertical-align:top">
            <th class="small-12 large-12 columns first last" style="Margin:0 auto;color:#0e1d35;font-family:Montserrat,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:1.3;margin:0 auto;padding:0;padding-bottom:20px;padding-left:20px;padding-right:20px;text-align:left;width:580px">
            <table style="border-collapse:collapse;border-spacing:0;padding:0;text-align:left;vertical-align:top;width:100%">
              <tbody>
                <tr style="padding:0;text-align:left;vertical-align:top">
                  <th style="Margin:0;color:#0e1d35;font-family:Montserrat,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:1.3;margin:0;padding:0;text-align:left">
                  <h4 style="Margin:0 0 20px 0;Margin-bottom:20px;color:inherit;font-family:Montserrat,Helvetica,Arial,sans-serif;font-size:24px;font-weight:400;line-height:1.3;margin:0 0 20px 0;margin-bottom:20px;padding:0;text-align:left;word-wrap:normal">Hi Huiyan,&nbsp;</h4>
                  Thank you for making a claim. As you know we have started working on your claim. We unfortunately haven’t received all the documents or couldn’t open/read them - please reply to this email with the below documents and we will proceed with your claim.

                  <p style="Margin:0 0 20px 0;Margin-bottom:20px;color:#0e1d35;font-family:Montserrat,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:1.3;margin:0 0 20px 0;margin-bottom:20px;padding:0;text-align:left"><br />
                  <strong>Could you please send us the documents below? (please send through images/PDFs in medium-high resolution):</strong></p>

                  <ul>
                    <li style="color: rgb(14, 29, 53); font-family: Montserrat, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 1.3; margin: 0px 0px 20px; padding: 0px; text-align: left;"><strong>&nbsp;Bank statement/s that clearly show these transactions:</strong>

                    <ul>
                      <li style="color: rgb(14, 29, 53); font-family: Montserrat, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 1.3; margin: 0px 0px 20px; padding: 0px; text-align: left;">&nbsp;The final amount paid to the rental company;</li>
                      <li style="color: rgb(14, 29, 53); font-family: Montserrat, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 1.3; margin: 0px 0px 20px; padding: 0px; text-align: left;">&nbsp;Any&nbsp;refund received (this is common if the full excess was deducted initially and the final damage cost&nbsp;was less than the excess that you paid).</li>
                    </ul>

                    <p>We need this to verify that the payment has been made. Please send us the bank statement because:</p>

                    <ul>
                      <li><span style="background-color:#FF8C00;">There was no bank statement uploaded on your claim.</span></li>
                      <li><span style="background-color:#FF8C00;">We have only received a payment receipt. Please send us a bank statement (a screenshot is fine) showing the relevant transaction.</span></li>
                      <li><span style="background-color:#FF8C00;">The bank statement you submitted:</span><br />
                      - <span style="background-color:#FF8C00;">was unable to be read due to low resolution.</span><br />
                      <span style="background-color:#FF8C00;">- could not be opened because of the format it was sent in.</span><br />
                      <span style="background-color:#FF8C00;">- did not show the payment of the final charged amount of xxx [currency of loss].</span></li>
                    </ul>
                    </li>
                  </ul>
                  &nbsp;

                  <ul>
                    <li style="color: rgb(14, 29, 53); font-family: Montserrat, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 1.3; margin: 0px 0px 20px; padding: 0px; text-align: left;"><strong>&nbsp;The final receipt from the rental company that clearly shows:</strong>

                    <ul>
                      <li style="color: rgb(14, 29, 53); font-family: Montserrat, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 1.3; margin: 0px 0px 20px; padding: 0px; text-align: left;">&nbsp;A cost breakdown that separates rental costs from damage costs or excess charges;&nbsp;</li>
                      <li style="color: rgb(14, 29, 53); font-family: Montserrat, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 1.3; margin: 0px 0px 20px; padding: 0px; text-align: left;">&nbsp;Any refunds that you have received (if applicable);</li>
                    </ul>

                    <p>We need this to see the final damage amount charged by the Rental company. Please send us the final receipt from the rental company because:</p>

                    <ul>
                      <li><span style="background-color:#FF8C00;">There was no final receipt uploaded to your claim.</span></li>
                      <li><span style="background-color:#FF8C00;">The receipt you submitted </span><br />
                      <span style="background-color:#FF8C00;">- was not able to be read due to low resolution.</span><br />
                      <span style="background-color:#FF8C00;">- could not be opened because of the format it was sent in.</span><br />
                      <span style="background-color:#FF8C00;">- only shows the excess charges. As the damage related costs are less than the excess, we will need to see a receipt, showing the final charges from the rental company.</span></li>
                    </ul>
                    </li>
                  </ul>
                  &nbsp;

                  <ul>
                    <li style="color: rgb(14, 29, 53); font-family: Montserrat, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 1.3; margin: 0px 0px 20px; padding: 0px; text-align: left;"><strong>&nbsp;All correspondence from the rental company.</strong></li>
                    <li style="color: rgb(14, 29, 53); font-family: Montserrat, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 1.3; margin: 0px 0px 20px; padding: 0px; text-align: left;"><strong>&nbsp;A receipt from the service provider who repaired the damages OR a copy of the pricing table <span style="background-color:#FF8C00;">(not necessary for destination Japan)</span>.&nbsp;</strong>
                    <p>We need this to make sure the amount for damage on the final receipt correlates with the amount on the repair invoice. Please send us a receipt from the service provider or a copy of the pricing table because:</p>

                    <ul>
                      <li><span style="background-color:#FF8C00;">There was no final receipt uploaded to your claim.</span></li>
                      <li><span style="background-color:#FF8C00;">The receipt you submitted </span><br />
                      <span style="background-color:#FF8C00;">- was not able to be read due to low resolution.</span><br />
                      <span style="background-color:#FF8C00;">- could not be opened because of the format it was sent in.</span><br />
                      <span style="background-color:#FF8C00;">- was an estimate and not the final receipt (tax invoice).</span><br />
                      <span style="background-color:#FF8C00;">- was the receipt from the rental company. In order to finalise the claim, we need to see the actual repair invoice from the service provider (e.g. repairer/mechanic) or a copy of the pricing table. Please ask your rental company for this document.</span></li>
                    </ul>
                    </li>
                  </ul>
                  &nbsp;

                  <ul>
                    <li style="color: rgb(14, 29, 53); font-family: Montserrat, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 1.3; margin: 0px 0px 20px; padding: 0px; text-align: left;">&nbsp;<strong>A signed rental agreement.</strong>

                    <p>We need this to confirm details such as the name of the authorised drivers, the rental dates, the excess, etc. Please send us your rental agreement because:</p>

                    <ul>
                      <li><span style="background-color:#FF8C00;">There was no rental agreement attached to the email.</span></li>
                      <li><span style="background-color:#FF8C00;">The document you submitted </span><br />
                      <span style="background-color:#FF8C00;">- was not readable due to low resolution. </span><br />
                      <span style="background-color:#FF8C00;">- is a booking confirmation. We need the rental agreement issued by the rental company to confirm all authorised drivers and the excess amount.</span></li>
                    </ul>
                    </li>
                  </ul>
                  &nbsp;

                  <ul>
                    <li style="color: rgb(14, 29, 53); font-family: Montserrat, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 1.3; margin: 0px 0px 20px; padding: 0px; text-align: left;"><strong>A detailed description of the incident.</strong>

                    <p>We need this to be able to properly assess your claim. Please send us a description of the incident because:</p>

                    <ul>
                      <li><span style="background-color:#FF8C00;">There was no description of the incident mentioned when you reported the claim.</span></li>
                      <li><span style="background-color:#FF8C00;">There was no description of the incident mentioned in your email.</span></li>
                      <li><span style="background-color:#FF8C00;">We need to know who was at fault.</span></li>
                    </ul>
                    </li>
                  </ul>
                  &nbsp;

                  <ul>
                    <li style="color: rgb(14, 29, 53); font-family: Montserrat, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 1.3; margin: 0px 0px 20px; padding: 0px; text-align: left;"><strong>A copy of your driving licence.</strong>

                    <p>We need this to verify your details. Please send us a copy of your driving licence because:</p>

                    <ul>
                      <li><span style="background-color:#FF8C00;">There was no driving licence uploaded to your claim.</span></li>
                      <li><span style="background-color:#FF8C00;">The document you submitted:</span><br />
                      <span style="background-color:#FF8C00;">- was not readable due to blurriness or glare</span><br />
                      <span style="background-color:#FF8C00;">- could not be opened because of the format it was sent in.</span></li>
                    </ul>
                    </li>
                  </ul>
                  &nbsp;

                  <p style="Margin:0 0 20px 0;Margin-bottom:20px;color:#0e1d35;font-family:Montserrat,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:1.3;margin:0 0 20px 0;margin-bottom:20px;padding:0;text-align:left"><br />
                  <strong>How is your claim tracking?</strong><br />
                  We want to process your claim as fast as possible! Here’s a progress update:<br />
                  <br />
                  <strong>•&nbsp;Step 1</strong> is claim submission. <strong>This step is complete.</strong><br />
                  <strong>•</strong>&nbsp;<strong>Step 2</strong> is where we request any clarification or further documents, and where we notify you of the final outcome of your claim.&nbsp;<strong>This step is in progress.</strong><br />
                  <strong>•</strong>&nbsp;<strong>Step 3</strong> is where we pay your claim and let you know if there are issues.<br />
                  <strong>•</strong>&nbsp;<strong>Step 4</strong> is required if there is anything outstanding after Step 2 and 3.<br />
                  <br />
                  <strong>Need help?</strong><br />
                  Please visit our <a href="https://www.rentalcover.com/help">Help Centre</a>.&nbsp;<br />
                  <br />
                  <br />
                  <strong>Still have a question?</strong><br />
                  We aim to complete the entire claim process within 3 days. Please reply if you have a question not covered above, but keep in mind that this might slow down the claims process.</p>
                  </th>
                  <th class="expander" style="Margin:0;color:#0e1d35;font-family:Montserrat,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:1.3;margin:0;padding:0!important;text-align:left;visibility:hidden;width:0">&nbsp;</th>
                </tr>
                <tr>
                  <th style="Margin:0;color:#0e1d35;font-family:Montserrat,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:1.3;margin:0;padding:0;text-align:left">&nbsp;</th>
                  <th class="expander" style="Margin:0;color:#0e1d35;font-family:Montserrat,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:1.3;margin:0;padding:0!important;text-align:left;visibility:hidden;width:0">&nbsp;</th>
                </tr>
              </tbody>
            </table>
            </th>
          </tr>
        </tbody>
      </table>

      <table class="row signature" style="border-collapse:collapse;border-spacing:0;display:table;padding:0;position:relative;text-align:left;vertical-align:top;width:100%">
        <tbody>
          <tr style="padding:0;text-align:left;vertical-align:top">
            <th class="signature-avatar small-2 large-2 columns first" style="Margin:0 auto;color:#0e1d35;font-family:Montserrat,Helvetica,Arial,sans-serif;font-size:12px;font-weight:400;line-height:1.3;margin:0 auto;padding:0;padding-bottom:20px;padding-left:20px;padding-right:0;text-align:left;width:80px">
            <table style="border-collapse:collapse;border-spacing:0;padding:0;text-align:left;vertical-align:top;width:100%">
              <tbody>
                <tr style="padding:0;text-align:left;vertical-align:top">
                  <th style="Margin:0;color:#0e1d35;font-family:Montserrat,Helvetica,Arial,sans-serif;font-size:12px;font-weight:400;line-height:1.3;margin:0;padding:0;text-align:left"><img alt="Melissa B." height="48" src="https://files.rentalcover.com/email/img/icons/melissa.png" style="-ms-interpolation-mode:bicubic;clear:both;display:block;height:48px!important;max-width:100%;outline:0;text-decoration:none;width:48px!important" width="48" /></th>
                </tr>
              </tbody>
            </table>
            </th>
            <th class="signature-text small-10 large-10 columns last" style="Margin:0 auto;color:#0e1d35;font-family:Montserrat,Helvetica,Arial,sans-serif;font-size:12px;font-weight:400;line-height:1.3;margin:0 auto;padding:0;padding-bottom:20px;padding-left:0;padding-right:20px;text-align:left;width:480px">
            <table style="border-collapse:collapse;border-spacing:0;padding:0;text-align:left;vertical-align:top;width:100%">
              <tbody>
                <tr style="padding:0;text-align:left;vertical-align:top">
                  <th style="Margin:0;color:#0e1d35;font-family:Montserrat,Helvetica,Arial,sans-serif;font-size:12px;font-weight:400;line-height:1.3;margin:0;padding:0;text-align:left">
                  <p style="Margin:0 0 20px 0;Margin-bottom:20px;color:#0e1d35;font-family:Montserrat,Helvetica,Arial,sans-serif;font-size:12px;font-weight:400;line-height:1.3;margin:0 0 20px 0;margin-bottom:20px;padding:0;text-align:left"><strong class="signature-name" style="font-size:14px">Melissa B.</strong><br />
                  Customer Success Manager at <a class="rclink" href="https://www.rentalcover.com/" style="Margin:0;color:#0e1d35;font-family:Montserrat,Helvetica,Arial,sans-serif;font-size:12px;font-weight:400;line-height:1.3;margin:0;padding:0;text-align:left;text-decoration:none">RentalCover.com</a>.<br />
                  <strong>Paying claims super fast and making customers happy every day!</strong></p>
                  </th>
                </tr>
              </tbody>
            </table>
            </th>
          </tr>
        </tbody>
      </table>
      </td>
    </tr>
  </tbody>
</table>                    </div>

                    <!-- Footer (top) -->
                                          <table bgcolor="#0e1d35" class="wrapper footer footer--top" align="center" style="background-color:#0e1d35;border-collapse:collapse;border-spacing:0;padding:0;text-align:left;vertical-align:top;width:100%">
                                          <tr style="padding:0;text-align:left;vertical-align:top">
                        <td class="wrapper-inner" style="-moz-hyphens:none;-webkit-hyphens:none;Margin:0;border-bottom:1px solid #5c7295;border-collapse:collapse!important;color:#5c7295;font-family:Montserrat,Helvetica,Arial,sans-serif;font-size:11px;font-weight:700;hyphens:none;line-height:1.3;margin:0;padding:30px 10px 0;text-align:left;vertical-align:top;word-break:normal;word-wrap:break-word">
                          <table class="row" style="border-collapse:collapse;border-spacing:0;display:table;padding:0;position:relative;text-align:left;vertical-align:top;width:100%">
                            <tbody>
                              <tr style="padding:0;text-align:left;vertical-align:top">

                                <!-- Logo -->
                                <th class="footer-logo small-12 large-6 columns first" valign="middle" style="Margin:0 auto;color:#5c7295;font-family:Montserrat,Helvetica,Arial,sans-serif;font-size:11px;font-weight:700;line-height:1.3;margin:0 auto;padding:0;padding-bottom:20px;padding-left:20px;padding-right:10px;text-align:left;width:280px">
                                  <table style="border-collapse:collapse;border-spacing:0;padding:0;text-align:left;vertical-align:top;width:100%">
                                    <tr style="padding:0;text-align:left;vertical-align:top">
                                      <th style="Margin:0;color:#5c7295;font-family:Montserrat,Helvetica,Arial,sans-serif;font-size:11px;font-weight:700;line-height:1.3;margin:0;padding:0;text-align:left">
                                        <a href="https://www.rentalcover.com/" style="Margin:0;color:#5c7295;font-family:Montserrat,Helvetica,Arial,sans-serif;font-size:11px;font-weight:700;line-height:1.3;margin:0;padding:0;text-align:left;text-decoration:none">
                                          <img src="https://files.rentalcover.com/img/rc-logo/w_hori.png" alt="RentalCover.com" width="238" height="24" class="brand-logo" style="-ms-interpolation-mode:bicubic;border:none;clear:both;display:block;height:48px!important;max-width:100%;outline:0;text-decoration:none;width:238px!important">
                                        </a>
                                      </th>
                                    </tr>
                                  </table>
                                </th>

                                <!-- Social media links -->
                                <th class="footer-social small-12 large-6 columns last" height="40" valign="middle" style="Margin:0 auto;color:#5c7295;font-family:Montserrat,Helvetica,Arial,sans-serif;font-size:11px;font-weight:700;height:40px;line-height:1.3;margin:0 auto;padding:0;padding-bottom:20px;padding-left:10px;padding-right:20px;text-align:left;width:280px">
                                  <table style="border-collapse:collapse;border-spacing:0;padding:0;text-align:left;vertical-align:top;width:100%">
                                    <tr style="padding:0;text-align:left;vertical-align:top">
                                      <th style="Margin:0;color:#5c7295;font-family:Montserrat,Helvetica,Arial,sans-serif;font-size:11px;font-weight:700;line-height:1.3;margin:0;padding:0;text-align:left">
                                                                                  <p class="text-right small-text-left" style="Margin:0;Margin-bottom:0;color:#5c7295;font-family:Montserrat,Helvetica,Arial,sans-serif;font-size:11px;font-weight:700;height:40px;line-height:1.3;margin:0;margin-bottom:0;padding:0;text-align:right">
                                                                                  <a href="https://www.facebook.com/rentalcover/" style="Margin:0;color:#5c7295;font-family:Montserrat,Helvetica,Arial,sans-serif;font-size:11px;font-weight:700;line-height:1.3;margin:0;padding:0;text-align:left;text-decoration:none">
                                            <img src="http://files.rentalcover.com/email/img/icons/social-facebook.png" alt="Find us on Facebook" width="38" height="38" style="-ms-interpolation-mode:bicubic;border:none;clear:both;display:inline-block;height:38px!important;max-width:100%;outline:0;text-decoration:none;width:38px!important">
                                          </a>
                                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                          <a href="https://twitter.com/RentalCover" style="Margin:0;color:#5c7295;font-family:Montserrat,Helvetica,Arial,sans-serif;font-size:11px;font-weight:700;line-height:1.3;margin:0;padding:0;text-align:left;text-decoration:none">
                                            <img src="http://files.rentalcover.com/email/img/icons/social-twitter.png" alt="Follow us on Twitter" width="38" height="38" style="-ms-interpolation-mode:bicubic;border:none;clear:both;display:inline-block;height:38px!important;max-width:100%;outline:0;text-decoration:none;width:38px!important">
                                          </a>
                                        </p>
                                      </th>
                                    </tr>
                                  </table>
                                </th>

                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </table>

                    <!-- Footer (bottom) -->
                                          <table bgcolor="#0e1d35" class="wrapper footer footer--bottom" align="center" style="background-color:#0e1d35;border-collapse:collapse;border-spacing:0;padding:0;text-align:left;vertical-align:top;width:100%">
                                          <tr style="padding:0;text-align:left;vertical-align:top">
                        <td class="wrapper-inner" style="-moz-hyphens:none;-webkit-hyphens:none;Margin:0;border-collapse:collapse!important;color:#5c7295;font-family:Montserrat,Helvetica,Arial,sans-serif;font-size:11px;font-weight:700;hyphens:none;line-height:1.3;margin:0;padding:30px 10px 0;padding-top:20px;text-align:left;vertical-align:top;word-break:normal;word-wrap:break-word">
                          <table class="row" style="border-collapse:collapse;border-spacing:0;display:table;padding:0;position:relative;text-align:left;vertical-align:top;width:100%">
                            <tbody>
                              <tr style="padding:0;text-align:left;vertical-align:top">

                                <!-- Footer links -->
                                <th class="footer-links small-12 large-7 columns first" style="Margin:0 auto;color:#5c7295;font-family:Montserrat,Helvetica,Arial,sans-serif;font-size:11px;font-weight:700;line-height:1.3;margin:0 auto;padding:0;padding-bottom:20px;padding-left:20px;padding-right:10px;text-align:left;width:330px">
                                  <table style="border-collapse:collapse;border-spacing:0;padding:0;text-align:left;vertical-align:top;width:100%">
                                    <tr style="padding:0;text-align:left;vertical-align:top">
                                      <th style="Margin:0;color:#5c7295;font-family:Montserrat,Helvetica,Arial,sans-serif;font-size:11px;font-weight:700;line-height:1.3;margin:0;padding:0;text-align:left">
                                                                                  <p style="Margin:0;Margin-bottom:0;color:#5c7295;font-family:Montserrat,Helvetica,Arial,sans-serif;font-size:11px;font-weight:700;line-height:1.3;margin:0;margin-bottom:0;padding:0;text-align:left">
                                                                                                                            <a href="https://www.rentalcover.com/terms" style="Margin:0;color:#5c7295;font-family:Montserrat,Helvetica,Arial,sans-serif;font-size:11px;font-weight:700;line-height:1.3;margin:0;padding:0;text-align:left;text-decoration:none">Terms of Use</a>
                                          | <a href="https://www.rentalcover.com/site/contact" style="Margin:0;color:#5c7295;font-family:Montserrat,Helvetica,Arial,sans-serif;font-size:11px;font-weight:700;line-height:1.3;margin:0;padding:0;text-align:left;text-decoration:none">FAQs</a>
                                          | <a href="https://www.rentalcover.com/site/contact" style="Margin:0;color:#5c7295;font-family:Montserrat,Helvetica,Arial,sans-serif;font-size:11px;font-weight:700;line-height:1.3;margin:0;padding:0;text-align:left;text-decoration:none">Contact Us</a>
                                        </p>
                                      </th>
                                    </tr>
                                  </table>
                                </th>

                                <!-- Copyright -->
                                <th class="footer-copyright small-12 large-5 columns last" style="Margin:0 auto;color:#5c7295;font-family:Montserrat,Helvetica,Arial,sans-serif;font-size:11px;font-weight:700;line-height:1.3;margin:0 auto;padding:0;padding-bottom:20px;padding-left:10px;padding-right:20px;text-align:left;width:230px">
                                  <table style="border-collapse:collapse;border-spacing:0;padding:0;text-align:left;vertical-align:top;width:100%">
                                    <tr style="padding:0;text-align:left;vertical-align:top">
                                      <th style="Margin:0;color:#5c7295;font-family:Montserrat,Helvetica,Arial,sans-serif;font-size:11px;font-weight:700;line-height:1.3;margin:0;padding:0;text-align:left">
                                                                                  <p class="text-right small-text-left" style="Margin:0;Margin-bottom:0;color:#5c7295;font-family:Montserrat,Helvetica,Arial,sans-serif;font-size:11px;font-weight:700;line-height:1.3;margin:0;margin-bottom:0;padding:0;text-align:right">
                                                                                  Copyright &copy; 2019 RentalCover.com                                        </p>
                                      </th>
                                    </tr>
                                  </table>
                                </th>

                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </table>

                  </td>
                </tr>
              </tbody>
            </table>
          </center>
        </td>
      </tr>
    </table>

    <!-- Prevent Gmail on iOS font size manipulation -->
    <div style="display:none;white-space:nowrap;font:15px courier;line-height:0">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div>
  </body>
</html>
`;
  Front.reply({
    body: coverGeniusBody,
    subject: 'Message subject',
  }, false, conversation);
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

function fetchDrafts() {
  console.log('STARTING fetchDrafts()');
  Front.fetchDraft(function (draft) {
    console.log('-- Logging drafts below --');
    console.log(draft);
    console.log('--');
    Front.report({
        title: 'Draft fetched',
        message: 'The draft was logged to the console'
    }, function() { null; });
  });
  console.log('ENDING fetchDrafts()');
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
  var userContent = document.getElementById("frontUser");
  userContent.innerHTML = frontUser.given_name;
});
