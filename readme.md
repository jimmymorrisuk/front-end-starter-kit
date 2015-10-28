Gulp Front end starter kit
=======

A starter kit to bootstrap front end projects, lightweight enough to be reusable, helpfully enough to give you a boost, at the start. 

There are two main purposes to this kit. One is to create a general workflow managed by Gulp to automate tasks. The other is to provide a project bootstrap to speed up starting a project in ensure conventions are followed (of course these can be removed to suit).

What is included
-----------

**Workflow tasks (via `gulp` command):**
 * Static file server via [localhost](http://localhost:3000)
 * Live reload of file changes
 * SASS to CSS compilation
 * CSS browser prefixes
 * Minified CSS and JS (renamed to include .min)
 * CSS and JS source maps
 * Image opimisation (runs only on new/changed files)

**Project bootstrapping:**
 * TODO

Getting started
-----------

 **Machine set up**
 * Install node for you machine: [http://nodejs.org](http://nodejs.org)
 * Install Gulp: `sudo npm install --global gulp`

 **Using this on a project**
 * Clone this repo
 * Get npm to install the project dependencies `npm install`
 * When ready run `gulp` any you are away

The workflow
-----------

You add your file and make edit inside of the `app/src` folder this is your working environment. The `app/dist` folder is your production code designed to be efficient for the browser.

Make human friendly code in `app/src` -> see browser friendly output in `app/dis` for use in the production enviroment.

Troubleshooting
-----------

**npm EACCESS - error**

Quite often you can have issues with npm and access permissions. First try running the command with `sudo` or `sudo !!` to run the last command as sudo. If that fails try checking the node_module folder has the correct owner and try again.

**Segmentation fault: 11 - error**

I had this error while using Gulp. I am not exactly sure what caused it but agreeing to XCode's license agreement seemed to have solved the issue.

License
-----------
  
Bunnyfoot Front end starter kit
Copyright (C) 2015 Bunnyfoot Ltd.

This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; either version 2 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License along
with this program; if not, write to the Free Software Foundation, Inc.,
51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.

*For full license details see LICENSE.txt*

Basic license agreements
-----------

**Required**

* Disclose Source
* License and copyright notice
* State Changes

**Permitted**

* Commercial Use
* Distribution
* Modification
* Patent Grant
* Private Use

**Forbidden**

* Hold Liable
* Sublicensing

*For full license details see LICENSE.txt*


