#Gulp:
##gulp dev

###templating
В html/templates/ -- основа для страницы
В html/templates/macros, html/templates/partials -- куски переиспользуемого кода
В html/templates/pages -- страницы

###html/templates/pages

% set title = '100-TOKENS-BANNER' %}  подключаем заголовок

{% extends "base.nunjucks" %}  подключаем основу для страницы

{% block style %}              если в base есть блок style
   
{% endblock %}

{% block content %}  основной контент

{% endblock %}

{% include "partials/scripts.nunjucks" %} подключение компонента со скриптами // пример

{% include "../templates/partials/header.nunjucks" %} подключение компонента header из 

{% block script %} {% endblock %} Блок со скриптами

#html/templates/partials/*

{% import "macros/some-module.nunjucks" as SOME_MODULE %} подключение макроса

{{ SOME_MODULE.test() }} Прокидываение его в шаблоне

#html/templates/macros/*

{% import 'macros/super-macros.nunjucks' as SUPER_MACROS %} подключение макроса в макросе

{% macro test(some_parameter) %}  объявление макроса

{% endmacro %}

###data
Данные описываются в виде JSON { "items": [{"a": "some_val"}, {"a": "some_val"}] };

В #html/templates/partials/* Можно получить доступ через {% set items = items %}

###sass
Файлы в корне без _ в начале имени файла, компилируются в dist похдватывая то что заимпортировано в них