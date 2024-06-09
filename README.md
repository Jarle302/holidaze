This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Holidaze

![image](https://github.com/Jarle302/portofolio2/blob/main/public/holidaze.jpg)

Welcome to the Holidaze website! This project was created as my final semester project at Noroff, where I studied Front-End Development. The goal of this project is to implement a comprehensive platform for managing and booking venues. Users can search for venues, view detailed information, manage bookings, update profiles, and more. This README will guide you through the functionality, technologies used, and setup of the application.

## Technologies Used

- [Next.js](https://nextjs.org/): A React framework for building server-rendered React applications.
- [React](https://reactjs.org/): A JavaScript library for building user interfaces.
- [TypeScript](https://www.typescriptlang.org/): A typed superset of JavaScript that enhances code quality and development experience.
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for building custom designs quickly.
- [Zod](https://github.com/colinhacks/zod): A TypeScript-first schema declaration and validation library for validating form data.

## Features

### User Authentication

- Users with a `stud.noroff.no` email can register as customers.
- Users can create accounts and log in securely to the Holidaze platform.
- Authentication ensures that only registered users can perform certain actions, such as creating bookings and managing venues.

### Venue Browsing and Searching

- Users can view a list of available venues.
- Users can search for specific venues.
- Users can view a details page for specific venues.

### Venue Availability

- Users can view a calendar displaying available dates for each venue.

### Customer Features

- Registered customers can create bookings at venues.
- Registered customers can view their upcoming bookings.

### Venue Manager Features

- Users with a `stud.noroff.no` email can register as venue managers.
- Registered venue managers can create new venues.
- Venue managers can update the details of venues they manage.
- Venue managers can delete venues they manage.
- Venue managers can view bookings for the venues they manage.

### User Profiles and Account Management

- Registered users can update their avatars.
- Users can securely log out of their accounts.

## Getting Started

Follow these steps to set up and run the Holidaze website on your local machine:

### Clone the Repository and Install Dependencies

```bash
git clone https://github.com/Jarle302/holidaze/
cd holidaze
npm i




2. **Set Up Environment Variables:**
Create a .env file in the root directory and configure your environment variables, including the Noroff API key.

```bash
env
APIKEY=your_noroff_api_key
NEXT_PUBLIC_BASE_URL=http://localhost:3000

```


3. **Start the development server**

```bash
npm run dev
```
The application should now be running locally on http://localhost:3000.

4. **Access the Website:**

Open your web browser and navigate to http://localhost:3000 to use the Holidaze website.



