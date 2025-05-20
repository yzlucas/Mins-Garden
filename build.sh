#!/usr/bin/env bash
# exit on error
set -o errexit

npm install
npm run build

# 确保 _redirects 文件被复制到 build 目录
cp public/_redirects build/_redirects 