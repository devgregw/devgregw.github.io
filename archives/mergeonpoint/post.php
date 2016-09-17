<?php
  $myFile = "feed.txt";
  $fh = fopen($myFile, 'a');
  $privstring = "false";
  $postpriv = $_POST['private'];
  if ($postpriv != null) {
    $privstring = "true";
  }
  $stringData = sprintf("%s?%s?%s?%s&\n", urlencode($_POST['name']), $privstring, urlencode($_POST['message']), date("Y-m-d\TH:i:sO"));
  fwrite($fh, $stringData."\n");
  fclose($fh);
  header("Location: http://www.mergeonpoint.com/livefeed.html");
  die();
?>
