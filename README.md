# Angular Koans

This project contains some koans for learning AngularJS. Using tags various practices are offered.

## Koans

A list of koans is simply populated from the tags in this repository. These are annotated tags containing a description of the koan.

To get a list of koans with a brief summary, you list the tags in the repository:

    $ git tag -ln1

To read the full description of a koan, you show the full annotation of the commit.

    $ git show --quiet <tag>

Note: this also includes the message of the commit that is marked by the tag. You can safely ignore this.

For each kaon two tags are provided. The first one marks the starting point of the koan. The second one marks the solution point in this repository. To start working on a koan you'd branch off the starting point. For example, to start with first koan you do create a solving branch and checkout that branch:

    $ git checkout -b bootstrap-solution 01-bootstrap-angular

## Running the Koans

These koans are created using Node.js. If you haven't already make sure to install Node.js from [nodejs.org](http://nodejs.org/). Installation details are provided by Node.js.

From any tag you can run the koans using the included server. First you need to install the required depenendecies.

    $ npm install

Then you can run the server.

    $ npm start

