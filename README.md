# RMS (Result Management System)

## Overview

The **RMS (Result Management System)** is a web application built with **Next.js** and **MongoDB**, designed to streamline the process of managing and viewing student results. The system allows **students** to view their results by entering their student ID without needing to log in, while **admins** are required to log in to upload assessment data via Excel files.

### Key Features:
- **Student Result View**: Students can search for their results by entering their **student ID**, which displays all assessment scores for that ID.
- **Admin Data Upload**: Admins can log in and upload Excel files containing assessment data, which are processed and saved to MongoDB.

## Functionality

### Student Portal
- **No Login Required**: Students can access the result search page without logging in.
- **Search by Student ID**: Students enter their **student ID** to view their results across multiple assessments, including:
  - Attendance
  - Project Review
  - Assessment
  - Project Submission
  - LinkedIn Post

The results are fetched from the following API route:
- `/api/results/[studentId]`

### Admin Panel
- **Admin Login**: Admins are required to log in to access the data upload functionality.
- **Excel Upload**: Admins can upload Excel files to add or update student data in bulk.
- **Dynamic Upload API**: Based on the selected assessment type, the data is uploaded to different API routes. The system supports the following categories:
  - Attendance
  - Project Review
  - Assessment
  - Project Submission
  - LinkedIn Post

### API Endpoints

- **Student Results**:
  - `GET /api/results/[studentId]`: Retrieves all results for the given student ID.
  
- **Admin Bulk Upload** (Requires Login):
  - `POST /api/upload/attendance`: Upload attendance data.
  - `POST /api/upload/project-review`: Upload project review data.
  - `POST /api/upload/assessment`: Upload assessment data.
  - `POST /api/upload/project-submission`: Upload project submission data.
  - `POST /api/upload/linkedIn-post`: Upload LinkedIn post data.

Each API route processes an uploaded Excel file, converts the data to JSON format, and saves it in MongoDB.

## Tech Stack

- **Frontend**: Next.js (React Framework)
- **Backend**: Node.js (NextJS API Routes)
- **Database**: MongoDB (for storing data)

## How to Run the Project

1. **Clone the Repository**:
   ```bash
   git clone <repo-url>
   cd result-management-system
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Project**:
   - For development: 
     ```bash
     npm run dev
     ```

4. **Access the Application**:
   - Visit `http://localhost:3000` to access the app locally.

## Usage

1. **For Students**:
   - Navigate to the result search page.
   - Enter your **student ID** to view your results for different assessments.

2. **For Admins**:
   - Log in to access the admin panel.
   - Choose the type of assessment (Attendance, Project Review, etc.).
   - Upload the relevant Excel file to update student results.

## License

This project is licensed under the MIT License.
