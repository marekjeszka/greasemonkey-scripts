# Greasemonkey scripts

My scripts that I use with Greasemonkey Firefox [add-on](https://addons.mozilla.org/firefox/addon/greasemonkey/).

## List of scripts

### Show a `Remote status` button for a task in Airflow

- adds a button on modal dialog with shortcut to open the remote statuses of given task
- should be configured as `User includes`, with URL https://airflow_address/admin/airflow/graph*, with `Only use these` enabled
- [source code](src/airflow_show_remote_status.js) - replace `airflow_address` with address of your Airflow instance
