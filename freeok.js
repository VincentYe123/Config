var body = $response.body.replace(
  /<head>/,
  `<head>
    <style>
      .module-adslist, 
      .player-rm > a[target="_blank"],
      .popupShow,
      .container-slide {
        display: none !important;
      }
    </style>`
).replace(
  /<meta name="apple-mobile-web-app-capable" content="yes">/,
  '<meta name="apple-mobile-web-app-capable" content="no">'
);
$done({ body });
