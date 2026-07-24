"use client";
import useReadingTracker from "@/components/useReadingTracker";
import React from "react";

const InstallationMongo = () => {
  useReadingTracker("installationMongo");
  return (
    <>
      <div className="p-6 ml-80">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-4xl font-semibold text-gray-800">
            MongoDB Installation Guide
          </h1>

          {/* Introduction Section */}
          <p className="mt-4 text-lg text-gray-600">
            MongoDB is a popular NoSQL database system. In this guide, we will
            walk through the steps for installing MongoDB on various operating
            systems, including Windows, macOS, and Linux. Additionally, we'll
            cover how to set up MongoDB in a Docker container.
          </p>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              Prerequisites
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Before installing MongoDB, ensure that you have the following
              prerequisites:
            </p>
            <ul className="mt-4 text-lg text-gray-600 list-disc pl-6">
              <li>Administrator or root privileges on your system.</li>
              <li>Internet connection to download MongoDB.</li>
              <li>
                Basic understanding of the terminal/command line interface.
              </li>
            </ul>
          </div>

          {/* Installation on Windows Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              Installing MongoDB on Windows
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Follow these steps to install MongoDB on Windows:
            </p>
            <ol className="mt-4 text-lg text-gray-600 list-decimal pl-6">
              <li>
                <strong>Download MongoDB</strong> - Visit the official MongoDB
                download center:{" "}
                <a
                  href="https://www.mongodb.com/try/download/community"
                  className="text-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MongoDB Download Center
                </a>{" "}
                and select the version for Windows.
              </li>
              <li>
                <strong>Run the Installer</strong> - After downloading, run the
                installer `.msi` file and follow the setup wizard.
              </li>
              <li>
                <strong>Choose Setup Type</strong> - Choose the "Complete" setup
                type for a full installation.
              </li>
              <li>
                <strong>Enable MongoDB as a Service</strong> - During the
                installation, check the option to run MongoDB as a Windows
                Service so that it starts automatically when the system starts.
              </li>
              <li>
                <strong>Complete the Installation</strong> - Finish the
                installation and make sure MongoDB is added to your system’s
                PATH environment variable.
              </li>
              <li>
                <strong>Verify the Installation</strong> - Open Command Prompt
                and type:
                <pre className="p-4 bg-gray-100 text-green-600 rounded-lg">
                  mongod --version
                </pre>
                If MongoDB is installed successfully, this command will return
                the MongoDB version.
              </li>
            </ol>
          </div>

          {/* Installation on macOS Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              Installing MongoDB on macOS
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Follow these steps to install MongoDB on macOS using Homebrew:
            </p>
            <ol className="mt-4 text-lg text-gray-600 list-decimal pl-6">
              <li>
                <strong>Install Homebrew</strong> - If you don’t have Homebrew
                installed, you can install it by running the following command
                in your terminal:
                <pre className="p-4 bg-gray-100 text-green-600 rounded-lg">
                  /bin/bash -c "$(curl -fsSL
                  https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
                </pre>
              </li>
              <li>
                <strong>Update Homebrew</strong> - Run the following command to
                ensure Homebrew is up to date:
                <pre className="p-4 bg-gray-100 text-green-600 rounded-lg">
                  brew update
                </pre>
              </li>
              <li>
                <strong>Install MongoDB</strong> - Install MongoDB using
                Homebrew by running the following command:
                <pre className="p-4 bg-gray-100 text-green-600 rounded-lg">
                  brew tap mongodb/brew
                </pre>
                <pre className="p-4 bg-gray-100 text-green-600 rounded-lg">
                  brew install mongodb-community
                </pre>
              </li>
              <li>
                <strong>Start MongoDB</strong> - Start MongoDB as a service
                using Homebrew:
                <pre className="p-4 bg-gray-100 text-green-600 rounded-lg">
                  brew services start mongodb/brew/mongodb-community
                </pre>
              </li>
              <li>
                <strong>Verify Installation</strong> - To verify that MongoDB is
                running, open another terminal window and type:
                <pre className="p-4 bg-gray-100 text-green-600 rounded-lg">
                  mongod --version
                </pre>
              </li>
            </ol>
          </div>

          {/* Installation on Linux Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              Installing MongoDB on Linux
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              For most Linux distributions, MongoDB can be installed using the
              package manager. Below is the installation for Ubuntu/Debian-based
              systems:
            </p>
            <ol className="mt-4 text-lg text-gray-600 list-decimal pl-6">
              <li>
                <strong>Import MongoDB Public Key</strong> - Run the following
                command to import MongoDB's public GPG key:
                <pre className="p-4 bg-gray-100 text-green-600 rounded-lg">
                  curl -fsSL https://pgp.mongodb.com/server-6.0.asc | sudo gpg
                  -o /etc/apt/trusted.gpg.d/mongodb.asc
                </pre>
              </li>
              <li>
                <strong>Add MongoDB Repository</strong> - Add the MongoDB
                repository to your system:
                <pre className="p-4 bg-gray-100 text-green-600 rounded-lg">
                  /bin/echo "deb [ arch=amd64,arm64 ]
                  https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0
                  multiverse" |<br /> sudo tee
                  /etc/apt/sources.list.d/mongodb-org-6.0.list
                </pre>
              </li>
              <li>
                <strong>Update the Package Database</strong> - Update your
                system’s package database:
                <pre className="p-4 bg-gray-100 text-green-600 rounded-lg">
                  sudo apt update
                </pre>
              </li>
              <li>
                <strong>Install MongoDB</strong> - Install MongoDB with the
                following command:
                <pre className="p-4 bg-gray-100 text-green-600 rounded-lg">
                  sudo apt install -y mongodb-org
                </pre>
              </li>
              <li>
                <strong>Start MongoDB</strong> - Start the MongoDB service:
                <pre className="p-4 bg-gray-100 text-green-600 rounded-lg">
                  sudo systemctl start mongod
                </pre>
              </li>
              <li>
                <strong>Verify Installation</strong> - Check the MongoDB
                version:
                <pre className="p-4 bg-gray-100 text-green-600 rounded-lg">
                  mongod --version
                </pre>
              </li>
            </ol>
          </div>

          {/* Docker Installation Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              Installing MongoDB with Docker
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              If you prefer using Docker, you can easily run MongoDB in a
              container:
            </p>
            <ol className="mt-4 text-lg text-gray-600 list-decimal pl-6">
              <li>
                <strong>Pull MongoDB Docker Image</strong> - First, pull the
                official MongoDB image from Docker Hub:
                <pre className="p-4 bg-gray-100 text-green-600 rounded-lg">
                  docker pull mongo
                </pre>
              </li>
              <li>
                <strong>Run MongoDB Container</strong> - Run the MongoDB
                container in detached mode:
                <pre className="p-4 bg-gray-100 text-green-600 rounded-lg">
                  docker run --name mongodb -d -p 27017:27017 mongo
                </pre>
              </li>
              <li>
                <strong>Verify MongoDB is Running</strong> - Verify the MongoDB
                container is running:
                <pre className="p-4 bg-gray-100 text-green-600 rounded-lg">
                  docker ps
                </pre>
              </li>
            </ol>
          </div>

          {/* Conclusion Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">Conclusion</h2>
            <p className="mt-4 text-lg text-gray-600">
              MongoDB can be easily installed and configured on various
              platforms, including Windows, macOS, Linux, and Docker. Follow the
              instructions for your operating system to get started with
              MongoDB.
            </p>
          </div>

          {/* Call to Action */}
        </div>
      </div>
    </>
  );
};

export default InstallationMongo;
