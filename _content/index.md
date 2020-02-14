# Homepage

{% if environment.output == "draft" %}
Draft text
{% endif %}

{{ environment.output }}

<p> layout is {{ _content.layout }}</p>

{% include "./_snippets/imasnippet.md" %}