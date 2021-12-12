#!/bin/bash

project_name="rhpam-mod2"
oc project ${project_name}
oc delete all -l app=order-management-ui


oc new-app --strategy="source" \
--name="order-management-ui" \
--code="https://github.com/relessawy/order_management_ui

oc set env dc/order-management-ui KIE=http://kieserver-http-rhpam-mod2.apps.cluster-zp67m.zp67m.sandbox944.opentlc.com/

oc expose svc/order-management-ui
