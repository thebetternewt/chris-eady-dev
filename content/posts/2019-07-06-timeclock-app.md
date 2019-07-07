---
template: SinglePost
title: Shift (A Timeclock Application)
status: Published
date: 2019-07-06T18:37:14.450Z
featuredImage: 'https://ucarecdn.com/b58cae5d-acc8-484f-9aae-546a5d56fb71/'
excerpt: >-
  A full-stack timeclock application with a Typescript/GraphQL backend and a
  React frontend.
categories:
  - category: Projects
meta:
  title: Shift (A Timeclock application)
---
I recently lead a project in my current job at my university where we built a full-stack timeclock application for student employees to clock in and out of their shifts. It was a complex project since students could be active employees in multiple departments, but we had to make sure they could not be clocked into multiple departments at once.

We also implemented multiple user roles within the application -- regular employees, supervisors, and admins -- each with increasing levels of authorization for certain actions.

Other features of application include:

* PDF timesheet generation with [PDFmake](http://pdfmake.org)
* Integration with [CAS Single Sign-On](https://www.apereo.org/projects/cas), our university's authentication system.
* A budget module to show supervisors their remaining budget for the current fiscal year (in progress).

As for the initial design process, I experimented with [Figma](https://www.figma.com/). I feel it's a really cool tool I'll reach for fairly often for simple site layouts and collaboration.

**Landing/Login page:**

![Shift Login Page](https://ucarecdn.com/a6fe067f-6efc-41a3-9895-29ad8dadd14e/ "Login")

**Employee Dashboard:**

![Employee Dashboard screenshot](https://ucarecdn.com/e7a5cd0c-9b5c-4ff3-8365-491ba42dc6b1/ "Employee Dashboard")

**History Search Component:**

![History screenshot](https://ucarecdn.com/63847406-7dd7-42d8-a37a-cf20fd9f20de/ "History Search Component")

Deployment of the application was also tricky since we needed to host it ourselves behind a secured firewall. I deployed the application running behind a reverse proxy through [nginx](https://www.nginx.com/) on an Ubuntu Linux server.

We just launched the application to our department, which amounts to just over 100 users when fully staffed. Bugs are going to come, but we're hoping the new application will solve a lot of problems with the one it replaced.

**Future Plans:**

We currently built the backend with the awesome [TypeGraphQL library](https://typegraphql.ml/) and connected it to a PostgreSQL database through [TypeORM](https://typeorm.io). However, I will likely look at moving out code over into a more opinionated framework such as [NestJS](https://nestjs.com/). Migrating the code should not be too difficult since Nest uses the TypeGraphQL library under the hood for GraphQL generation already.

We will also work on writing some Jest testing for some of our resolvers since there are some pretty complex calculations going on. However, this is an area I need to get some real practice in.

This has been my first big full-stack project deployed to an enterprise environment. I've enjoyed working with Typescript as well. I will likely reach for it in some future projects as well.

**TypeGraphQL backend Github link:** <https://github.com/thebetternewt/timeclock-typescript>

**React frontend Github link:** <https://github.com/thebetternewt/timeclock-3-react>
