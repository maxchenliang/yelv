<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <script>
    window.__INITIAL_STATE__ = <%- JSON.stringify(__INITIAL_STATE__ || {}) %>
  </script>
</head>
<body>
  <div id="app"><%- content %></div>
</body>
</html>
