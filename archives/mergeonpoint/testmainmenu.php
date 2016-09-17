<html>
<head lang="en">
  <script type="text/javascript" src="js/jquery-1.11.3.min.js"></script>
  <script type="text/javascript" src="js/jquery-ui.min.js"></script>
  <script type="text/javascript" src="js/bootstrap.min.js"></script>
  <link rel="stylesheet" href="css/bootstrap.min.css">
  <link rel="stylesheet" href="css/bootstrap-theme.min.css">
  <meta name="viewport" content="width=device-width, initial-scale=1.0,minimal-ui">
  <meta charset="UTF-8">
  <title>Merge DNOW 2015</title>
  <style>
  .hiddenvideo {
    visibility: hidden;
  }

  html, body {
    height: 100%;
    width: 100%;
  }

  body, h1, h2, h3, h4, p {
    font-family: "Helvetica Neue", "Segoe UI", Segoe, Helvetica, Arial, "Lucida Grande", sans-serif;
    font-weight: normal;
    margin: 0;
    padding: 0;
    text-align: center;
  }

  p {
    margin-top: 10px;
  }

  .vid {
    width: 295px;
    height: 166px;
    background: transparent;
  }
  td, tr, table {
    text-align: center;
    align-content: center;
  }

  .td:hover {
    background-color: #ddd;
    cursor: pointer;
  }

  .hidden {
    visibility: collapse;
  }

  .shown {
    visibility: visible;
  }
  </style>
  <script type="text/javascript">
  function watch(id) {
    window.location.assign("https://player.vimeo.com/video/" + id);
  }
  function getURLParameter(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;
  }
  </script>
</head>
<body>
  <div class="navbar navbar-fixed-top" style="background-color: white; border-bottom: 1px solid #ddd; height: auto; width: 100%; margin-bottom: auto;">
    <img style="width: 295px; height: 166px;" src="images/dnow1.png">
    <table class="table" style="margin-bottom: 0px;">
      <tbody>
        <tr>
          <td>
            <a style="width: 180px; cursor: pointer;" href="landing.html"><strong>BACK TO MENU</strong></a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div style="overflow: auto; width: 100%; height: auto; margin-top: 203px;">
    <table class="table">
      <tbody>
        <tr style="height: auto;">
          <td class="<?php if ((new DateTime() > new DateTime("2015-11-9 4:00:00")) || $_GET['mode'] == "shown") echo "shown"; else echo "hidden"; ?>">
            <h1>Post-DNOW</h1>
          </td>
        </tr>
        <tr style="height: auto;">
          <td class="td <?php if ((new DateTime() > new DateTime("2015-11-9 4:00:00")) || $_GET['mode'] == "shown") echo "shown"; else echo "hidden"; ?>">
            <img class="vid" src="images/145069982_295x166.jpg">
            <h1>Monday</h1>
            <h4>Read <a href="https://www.bible.com/bible/1/heb.1.esv">Hebrews 12</a> After Watching</h4>
          </td>
        </tr>
        <tr style="height: auto;">
          <td>
            <h1>From the DNOW Weekend</h1>
          </td>
        </tr>
        <tr style="height: auto;">
          <td class="td shown" onclick="watch(144688979)">
            <img class="vid" src="images/144688979_295x166.jpg">
            <h1>Friday Night</h1>
            <h4>Before 1st Session</h4>
          </td>
        </tr>
        <tr style="height: auto;">
          <td class="td shown" onclick="watch(144687441)">
            <img class="vid" src="images/144687441_295x166.jpg">
            <h1>Friday Night</h1>
            <h4>Begin Family Time</h4>
          </td>
        </tr>
        <tr style="height: auto;">
          <td class="td shown" onclick="watch(144705681)">
            <img class="vid" src="images/144705681_295x166.jpg">
            <h1>Saturday Morning Before Breakfast</h1>
            <h4><strong>WATCH ALONE</strong></h4>
          </td>
        </tr>
        <tr style="height: auto;">
          <td class="td shown" onclick="watch(144689599)">
            <img class="vid" src="images/144689599_295x166.jpg">
            <h1>Saturday Morning</h1>
            <h4>Watch as a Family</h4>
          </td>
        </tr>
        <tr style="height: auto;">
          <td class="td shown" onclick="watch(144687087)">
            <img class="vid" src="images/144687087_295x166.jpg">
            <h1>DNOW Dance</h1>
            <h4>Tutorial</h4>
          </td>
        </tr>
        <tr style="height: auto;">
          <td class="td shown" onclick="watch(144685331)">
            <img class="vid" src="images/144685331_295x166.jpg">
            <h1>DNOW Dance</h1>
            <h4>Full Version</h4>
          </td>
        </tr>
        <tr style="height: auto;">
          <td class="td shown" onclick="watch(144503722)">
            <img class="vid" src="images/144503722_295x166.jpg">
            <h1>Super Swap</h1>
            <h4>Suturday's Activity</h4>
          </td>
        </tr>
        <tr style="height: auto;">
          <td class="td shown" onclick="watch(144689692)">
            <img class="vid" src="images/144689692_295x166.jpg">
            <h1>Saturday Night</h1>
            <h4>Begin Family Time</h4>
          </td>
        </tr>
        <tr style="height: auto;">
          <td class="td shown" onclick="watch(144688159)">
            <img class="vid" src="images/144688159_295x166.jpg">
            <h1>Sunday Morning Before Church</h1>
            <h4><strong>WATCH ALONE</strong></h4>
          </td>
        </tr>
        <tr style="height: auto;">
          <td class="td shown" onclick="watch(144688022)">
            <img class="vid" src="images/144688022_295x166.jpg">
            <h1>NEVER WATCH THIS VIDEO</h1>
            <h4><strong>Never.</strong></h4>
          </td>
        </tr>
      </tbody>
    </table>
    <div style="text-align: center; align-content: center; border-top: 1px solid #ddd; margin-bottom: 20px;">
      <img src="images/devgr.png" style="width: 100px; height: 100px;"/>
      <p>Designed and developed by <a href="http://www.devgregw.com">Greg Whatley</a> for <a href="http://www.pantego.org">Pantego Bible Church</a>.</p>
    </div>
  </div>
</body>
</html>
