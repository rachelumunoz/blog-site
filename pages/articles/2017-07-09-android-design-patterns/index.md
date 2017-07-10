---
title: Learning Design Patterns through Android development
layout: post
date: 2017-07-09T23:10:31.191Z
path: "/2017-07-09/"
category: "Android, Java, Design Patterns"
description: Uncovering design patterns through building
---

Have you ever found something that really piqued your interest? That something glittering with intrigue because it’s **a)** partly familiar but **b)** so very different than what you are familiar with?

Perhaps it was learning how to scuba dive after spending time snorkeling on the ocean’s surface, or maybe baking a lemon meringue pie from scratch after baking dozens of cupcakes from a box. 

That something for me is Java. After learning how to program with dynamic languages such as Ruby and JavaScript, the static, compiled language of Java was something so different yet so alluring. 

While I was aware that how some things are set up in Ruby and JS are special to dynamic languages, I didn’t have practice programming in a compiled static language, so the differences that I was aware of felt abstract and academic. 

Through jumping in and building Android apps (following tutorials) I’ve been able to put into practice concepts and ideas that I had previously only read about. This first post focuses on design patterns that I have encountered while building apps while learning Java and the next will explore Object Oriented Programming in Java.

Here are some aha! moments with design patterns in Java and Android development that I am excited to share: 

# MVC
  While I’m familiar with the idea of organizing code into models, views, and controllers from Rails, it wasn’t until building Android apps that the efficacy of this design pattern became clear. Having a project divided into a model layer, a view layer, and controller layer makes it easy to know where you are and where you need to go with the feature you are trying to add. I found this especially helpful on the View layer when trying to identify how Fragments are inflated in an Activity. 

# Proxy
  Before jumping into Android development my experience with the proxy design pattern was purely academic. When I first read about what it is, I thought “wow, that’s cool, I wonder if I’ll see it in the wild.” While my analogy may not be 100% the proxy design pattern, thinking of it in this way has helped me understand the relationship between activities and fragments.

  I think of the relationship between an Activity and a Fragment it hosts as a *reciprocal-proxy* relationship. At some times the Fragment acts as a proxy for the Activity and other times the Activity acts as a proxy for the Fragment.

  * *Fragments as a proxy for the Activity*

    Since Fragments are Controller objects, they are where we handle the interaction between the View layer and the Model layer. However, Fragments are just that, fragments and represent a small piece of the UI. 

    In order for a fragment to be seen, the Activity that hosts the Fragment needs to inflate it. This is where the Fragment acts as a proxy to the Activity. The Fragment acts as the controller for the UI that it defines instead of the Activity which is normally the controller. 

    So the Fragment becomes the controller, a proxy for the User Interaction and passes it back to the Activity so it can host the Fragment.


  * *Activity as a proxy for the Fragment*

    While the Fragment acts as a proxy controller on behalf of its Activity, the Activity will act as a proxy for the Fragment when communicating with the OS.

    An Activity hosts its fragments with the help of a FragmentManager. It is this FragmentManager which is connected to the host Activity that will call the corresponding lifecycle methods managed by the OS, the ActivityManager.

# Singleton

  My experience with the singleton design pattern before Java and Android development was in relation to JavaScript. In JavaScript since it is not a class-based language and there are only objects, the idea of a singleton was demonstrated with the fact that all objects in JavaScript are unique. And that a Singleton in JavaScript is something very trivial.

  However, when introduced to this design pattern for Android development, I was excited to learn about something unique to a static compiled language.

  The singleton design pattern is used in Android development as a way to temporarily store data that is accessible throughout the whole application.  

  This global object exists as long as the application remains in memory and outlives a single fragment or activity. And with only one instance of the class, it is a way to ensure that changes made in the class are available and updated wherever it is needed and used. Pretty cool!


# Dependency Injection  

  My aha moment with dependency injection came when launching a Fragment that needed information that had been passed to the host Activity as an extra in its intent. 

  One way to get the host Activity’s intent extra, is to call ```getActivity().getIntent().getSerializableExtra(HostActivity.NAME_OF_EXTRA);```

  However, this approach directly ties the Fragment to its host activity, therefore reducing its reusability.

  An alternative would be to create a method that returns a new Fragment instance that can be passed the arguments needed when hosted by a particular host.

    public static FragmentType newInstance(TypeOfInfoNeeded param){
      Bundle args = new Bundle();
      args.putSerializable(ARG_NAME_OF_INFO, param);

      FragmentType fragment = new FragmentType();
      fragment.setArguments(args);
      return fragment;
    }

  So the method ```newInstance(infoToSend)``` will be invoked in the host Activity when it is time to add the Fragment to its FragmentManager.

  By encapsulating and returning a new instance of the fragment we are able to make the fragment more reusable by decoupling its dependencies. It no longer needs to be tied to its host Activity, and will be passed the information it needs upon creation of the instance. 

  Tangentially, passing data through Bundle arguments through dependency injection reminds me of React’s unidirectional data flow and how child components are passed down information via props. A child component doesn't know about its parent component, the parent tells the child what it needs.


Uncovering these design patterns while building Android apps with Java has been exciting! Identifying these concepts has been fun because it gives life to things that I've previously only read about, or helps illustrate how helpful the patterns actually are.  
