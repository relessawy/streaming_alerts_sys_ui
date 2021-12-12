#!/bin/bash

oc project rhpam-mod1
oc delete all -l app=order-management-ui

oc new-app --strategy="source" \
--name="order-management-ui" \
--code="https://github.com/relessawy/order_management_ui"


oc expose svc/order-management-ui
