# Homepage

{% if environment.output == "draft" %}
Draft text
{% endif %}

{{ environment.output }}

<p> layout is {{ data.data.layout }}</p>

{% include "./_snippets/imasnippet.md" %}