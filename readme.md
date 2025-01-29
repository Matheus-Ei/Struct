# Struct - Project Management Tool
Struct is a tool designed to simplify the use of multiple work tools by providing a single subscription-based service. Instead of paying for several different tools, users can pay for Struct and access a wide range of essential tools organized into various modules. These modules can be used to create projects, and within these projects, users can create pages that consist of different modules tailored to their specific needs (e.g., notes, financial data, task boards, etc.). Struct also offers workflows, customizations, and integrations to automate tasks, improve collaboration, and enhance user experience.

This README provides an overview of the Struct project, its technology stack, architecture, and development processes.

## Table of Contents
- [Project Overview](#project-overview)
- [Technology Stack](#technology-stack)
- [Features](#features)
  - [Modules](#modules)
  - [Tools](#tools)
  - [Workflows](#workflows)
  - [Customization](#customization)
  - [Collaboration](#collaboration)
- [Architecture](#architecture)
  - [Frontend](#frontend)
  - [Backend](#backend)
  - [Database](#database)
- [Development Workflow](#development-workflow)
  - [Git Workflow](#git-workflow)
  - [Sprints & Milestones](#sprints--milestones)
  - [Documentation](#documentation)
- [Hosting](#hosting)

---

## Project Overview
Struct allows users to create **projects** that contain multiple **pages**. Each page can be composed of different **modules** based on the needs of the user. Some common module types include:

- **Notes**: For writing down ideas or keeping track of project details.
- **Task Boards**: For managing tasks with Kanban-like functionality.
- **Financial Data**: For managing budgets, expenses, and other financial aspects.
  
Besides modules, Struct also offers various **tools** to enhance functionality within these pages. Tools are different from modules because they don't store data but perform specific tasks, such as:

- **Compiler**: Used to compile code blocks added in the notes module.

Struct allows for full **customization** of themes and data presentation, so users can tailor the platform to suit their needs. **Workflows** enable automation, where users can define triggers and actions to automate repetitive tasks or interactions between modules.

The platform also supports **real-time collaboration**, allowing multiple users to work on the same project and make modifications simultaneously.

---

## Technology Stack
Struct utilizes a modern web stack designed to ensure performance, scalability, and ease of development:

- **Frontend**: 
  - ReactJS with TypeScript
  - TailwindCSS with DaisyUI for some specific components
- **Backend**:
  - Node.js with Express and TypeScript
  - Sequelize for database ORM (PostgreSQL)
- **Database**: PostgreSQL
- **Version Control**: Git with GitHub
- **Hosting**: Hetzner (for production deployment)

---

## Features
### Modules
Modules in Struct represent different features or tools that users can add to their project pages. Some module examples include:

- **Notes**: Store text and information for easy reference.
- **Boards**: Kanban-style boards for task management.
- **Financial Data**: Manage budgets, expenses, and income data.
- **Custom Modules**: Users can create custom modules based on their needs.

### Tools
Tools are used to extend the functionality of modules but do not store data. For example:

- **Compiler Tool**: When added to a Notes module, users can input code and use the compiler tool to execute or compile the code directly within the page.
- **Data Manipulation Tools**: Tools that interact with data inside the modules, allowing users to manipulate and process their data.

### Workflows
Workflows are a key feature for automating tasks. They allow users to:

- **Create triggers**: Automatically trigger actions based on certain conditions (e.g., update a module or run a tool).
- **Define routes**: Map actions to buttons or other UI elements to execute specific tasks when clicked.

Workflows can also interact with both modules and tools, enabling complex automation across different project components.

### Customization
Struct provides extensive customization options to suit different workflows and personal preferences:

- **Themes**: Customize the appearance of the platform (colors, fonts, layout).
- **Data Presentation**: Choose how data is displayed on dashboards and within modules (e.g., list view, table view, graphs).
  
### Collaboration
- **Real-time Collaboration**: Multiple users can collaborate on the same project and make edits simultaneously.
- **Permissions & Sharing**: Share projects with other users, and manage permissions to control access to different project pages and modules.

---

## Architecture
### Frontend
The frontend is built using **ReactJS** with **TypeScript** for type safety and better maintainability. We are using **TailwindCSS** for styling, which allows for rapid and responsive design. For some specific components, we utilize **DaisyUI**, a set of pre-designed UI components that integrate well with TailwindCSS.

### Backend
The backend is built with **Node.js**, using the **Express** framework and **TypeScript** for strong typing and better scalability. The backend handles RESTful routes that perform CRUD operations on various modules and tools.

- **Sequelize** is used to manage database models for simpler database operations, while **SQL queries** are used for more complex operations.
- Routes follow **RESTful principles** and are designed to be simple and intuitive.

### Database
We use **PostgreSQL** as the relational database to store data. The database schema is organized to handle projects, pages, modules, tools, and workflows.

---

## Development Workflow
### Git Workflow
Struct follows **GitFlow** for version control:

- **Main** and **Develop** branches are used for stable releases and ongoing development, respectively.
- **Feature** and **Bugfix** branches are created from the `develop` branch to implement new features or fix bugs. These branches are associated with GitHub issues or cards.
- Once a feature or fix is complete, a **Pull Request** is made to merge it into `develop`. After sufficient testing, `develop` is merged into `main` and a **tag** is created to mark a release.

### Sprints & Milestones
- We use **GitHub Projects** for project management, organizing tasks into sprints. Each sprint has a duration of approximately **one week**.
- Tasks are broken down into detailed cards, with milestones set to track progress.
- Work is tracked using **GitHub Issues**, with clear labels and priorities.

### Documentation
All documentation is maintained on the **GitHub Wiki**, which includes:

- Detailed descriptions of **API routes** and **database schemas**.
- Information on how to use the system, including setup, workflows, and integrations.
- Development guidelines and best practices for contributing to the project.

---

## Hosting
When the project is ready for deployment, it will be hosted on **Hetzner**, which provides reliable and scalable cloud infrastructure.
