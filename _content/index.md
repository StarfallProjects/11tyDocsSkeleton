# Homepage

{% if environment.output == "draft" %}
Draft text
{% endif %}

{{ environment.output }}

{% include "./_snippets/imasnippet.md" %}