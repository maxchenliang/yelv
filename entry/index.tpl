<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv=X-UA-Compatible content="IE=edge">
  <script>
    window.__INITIAL_STATE__ = <%- JSON.stringify(__INITIAL_STATE__ || {}) %>
  </script>
</head>
<body>
  <div id="app"><%- content %></div>
</body>
</html>
