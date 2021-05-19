<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Images Gallery</title>

    <link rel="stylesheet" href="/css/app.css">
    <script src="/js/app.js"></script>
</head>
<body>
    <header class="header">
        <div class="container container_header">
            <a href="/">
                <img src="/img/logo.svg" class="header__logo" alt="logo">
            </a>

            <span class="header__phone">+380508878879</span>
        </div>
    </header>
    @yield('content')
</body>
</html>
