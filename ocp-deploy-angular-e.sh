#!/bin/bash

project_name="streaming-alerts-system"
oc project ${project_name}
oc delete all -l app=streaming-alerts-ui


oc new-app --strategy="source" \
--name="streaming-alerts-ui" \
--code="https://github.com/relessawy/streaming_alerts_sys_ui/"

oc set env dc/streaming-alerts-ui KIE=http://kieserver-http-streaming-alerts-system.apps.rosa-1423.qxhy.p1.openshiftapps.com/

oc expose svc/streaming-alerts-ui
