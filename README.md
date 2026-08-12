# Hope 4 Communities Foundation

A responsive static website developed for Hope 4 Communities Foundation.
The website provides information about the organization's mission,
activities, programs, and ways to support the community.

## 🌍 Project Overview

Hope 4 Communities is a static NGO website designed to create awareness
about community development initiatives and make information easily
accessible to visitors.

The project demonstrates the use of cloud computing services to host
and distribute a static website efficiently.

## 🚀 Technologies Used

- HTML
- CSS
- JavaScript
- AWS S3
- Amazon CloudFront
- GitHub
- Excalidraw

## ☁️ AWS Architecture

The website is hosted using Amazon S3 and distributed globally using
Amazon CloudFront.

![AWS Architecture](docs/aws-architecture.png)

### Architecture Flow


Amazon CloudFront (CDN)
   ↓
Amazon S3
   ↓
Static Website Files
   ↓
  User (internet)

## 📁 Project Structure

```text
hope4-communities/
├── public/
├── src/
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── docs/
│   └── aws-architecture.png
├── package.json
├── package-lock.json
└── README.md
☁️ AWS Deployment

The production files can be uploaded to an Amazon S3 bucket.

Basic deployment process:

Create an S3 bucket.
Configure the bucket for static website hosting where appropriate.
Upload the contents of the dist folder.
Create an Amazon CloudFront distribution.
Configure CloudFront to use the S3 bucket as the origin.
Configure the default root object as index.html.
Access the website through the CloudFront distribution.
💰 Cost Optimization

The project is designed to minimize cloud costs by:

Using Amazon S3 for inexpensive static storage.
Using CloudFront caching to reduce repeated requests to the origin.
Keeping the website static instead of using unnecessary backend servers.
Compressing and optimizing images and other website assets.
Monitoring AWS usage and costs.
🔐 Security

Security considerations include:

Using HTTPS through CloudFront.
Restricting direct access to the S3 bucket where appropriate.
Avoiding storage of sensitive information in the website.
Using appropriate AWS permissions.
📱 Features
Responsive design
Home page
About section
Programs and activities
Community-focused content
Contact information
Mobile-friendly navigation
🎯 Project Objectives

The main objectives are to:

Build a functional static NGO website.
Demonstrate cloud hosting using AWS.
Use a CDN to improve website delivery.
Apply cloud cost optimization principles.
Demonstrate deployment and version control using GitHub.
👩‍💻 Author

Chinwe Obodo

Cloud Computing Project

📄 License

This project is created for educational and project demonstration purposes © 2026 Hope 4 Communities Foundation. All rights reserved.
