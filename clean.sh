#!/bin/bash
echo "init react app"
npm cache clean --force \
rm -rf node_modules \
rm -rf package-lock.json \
npm install \
npm start