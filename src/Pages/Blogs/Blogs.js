import React from 'react';

const Blogs = () => {
    return (
        <div className="hero min-h-screen bg-base-200  ">
            <div className="hero-content text-center flex flex-col">
                <div >
                    <h1 className="text-2xl font-bold ">1. What are the different ways to manage a state in a React application?</h1>
                    <p className="py-3 text-purple-500">In React apps, there are at least seven ways to handle the state.Some of them are url,Web Storage,Local State,Lifted State,Derived State. </p>
                </div>
                <div >
                    <h1 className="text-2xl font-bold ">2.How does prototypical inheritance work?</h1>
                    <p className="py-3 text-purple-500">Simply put, prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.</p>
                </div>
                <div >
                    <h1 className="text-2xl font-bold ">3.What is a unit test? Why should we write unit tests?</h1>
                    <p className="py-3 text-purple-500">Unit Testing is a type of software testing where individual units or components of a software are tested.
                        Unit Testing is important because software developers sometimes try saving time doing minimal unit testing and this is myth because inappropriate unit testing leads to high cost Defect fixing during System Testing, Integration Testing and even Beta Testing after application is built. If proper unit testing is done in early development, then it saves time and money in the end.</p>
                </div>
                <div >
                    <h1 className="text-2xl font-bold ">3.What is the difference between React vs. Angular vs. Vue?</h1>
                    <p className="py-3 text-purple-500">React:React can be used as a UI library to render elements, without enforcing a specific project structure, and thats why its not strictly a framework.
                        React Elements are the smallest building blocks of React apps. They are more powerful than DOM elements because the React DOM makes sure to update them efficiently whenever something changes.
                        Components are larger building blocks that define independent and reusable pieces to be used throughout the application. They accept inputs called props and produce elements that are then displayed to the user. <br />
                        Vue: The Vue.js core library focuses on the View layer only. Its called a progressive framework because you can extend its functionality with official and third-party packages, such as Vue Router or Vuex, to turn it into an actual framework.

                        Although Vue is not strictly associated with the MVVM Model-View-ViewModel pattern, its design was partly inspired by it. With Vue, youll be working mostly on the ViewModel layer, to make sure that the application data is processed in a way that allows the framework to render an up-to-date View.

                        Vues templating syntax lets you create View components, and it combines familiar HTML with special directives and features. This templating syntax is preferred, even though raw JavaScript and JSX are also supported.
                        <br />
                        Angular:AngularJS, the original framework, is an MVC (Model-View-Controller)) framework. But in Angular 2, there’s no strict association with MV*-patterns as it is also component-based.

                        Projects in Angular are structured into Modules, Components, and Services. Each Angular application has at least one root component and one root module.

                        Each component in Angular contains a Template, a Class that defines the application logic, and MetaData (Decorators). The metadata for a component tells Angular where to find the building blocks that it needs to create and present its view.

                        Angular templates are written in HTML but can also include Angular template syntax with special directives to output reactive data and render multiple elements, among other things.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;