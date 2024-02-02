---
title: "2024-02-02: Sync for Payables package name change"
date: "2024-02-02"
tags: ["Deprecation"]
draft: true
authors: Amy-Roberts
---
On Febuary 2nd, 2024 Codat will be updating the name of the Sync for Payables client library  to ... . 

We will be making some changes to our SDKs which will mean that clients who have previously implemented the sync for payables product previously will need to change the libary name when they are next doing a package update. The version number will remain the same. 

## Action required

1. Update client libray name to :

| Languages  | Old name | New name | Version | 
|-----------------------|----------|---------|
| C#         | GBP      | GBP      |         |
| F#         | GBP      | GBP      |         |
| Go         | GBP      | GBP      |         |
| HTML       | GBP      | GBP      |         |
| JavaScript | GBP      | GBP      |         |
| Python     | GBP      | GBP      |         |
| R          | GBP      | GBP      |         |
| SCSS       | GBP      | GBP      |         |
| TypeScript | GBP      | GBP      |         |


2. Update JSON file ...

## Expected impact if no action is taken

If the package is updated without a updating the name then the associated code will not complie. 
