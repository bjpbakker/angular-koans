# Angular Koans

This project contains some koans for learning AngularJS. Using tags various practices are offered.

## Quick Start

To start working on the first koan quickly, checkout the koan and read the description using the 
following commands.

    $ git checkout -b bootstrap-impl 01-bootstrap-angular
    $ git show --quiet 01-bootstrap-angular

Read the description and get cracking at it. To move to the next koan checkout the `02-default-route` 
tag, then tag `3-greetings`, and so on.

The remainder of this README describes how to run a koan and provides more details on the koan and 
solution tags provided by this repository.

## Running a Koan

These koans are created using Node.js. If you haven't already make sure to install Node.js from 
[nodejs.org](http://nodejs.org/). Installation details are provided by Node.js.

From any tag you can run the koans using the included server. First you need to install the required 
dependencies.

    $ npm install

Then you can run the server.

    $ npm start

## Koans

A list of koans is simply populated from the tags in this repository. These are annotated tags 
containing a description of the koan.

To get a list of koans with a brief summary, you list the tags in the repository:

    $ git tag -ln1

To read the full description of a koan, you show the full annotation of the commit.

    $ git show --quiet <tag>

Note: this also includes the message of the commit that is marked by the tag. You can safely ignore 
this.

For each koan two tags are provided. The first one marks the starting point of the koan. The second 
one marks the solution point in this repository. To start working on a koan you'd branch off the 
starting point. For example, to start with first koan you do create a solving branch and checkout 
that branch:

    $ git checkout -b bootstrap-impl 01-bootstrap-angular

Tip: when you get stuck solving a koan you can consider reading the commit logs of the corresponding 
solution tag. These commit messages should be verbose on the changes.

