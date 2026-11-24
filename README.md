# JSTACK – Responsive Job Portal Website

JSTACK is a responsive job portal website designed to help users explore job opportunities, search for jobs, save interesting listings, and connect with potential career opportunities.

The website provides a clean and user-friendly interface with job categories, freelancer profiles, company information, and interactive forms. It is developed using HTML, CSS, and JavaScript.

## Features

- **Responsive Design:** Works across desktop, tablet, and mobile screen sizes.
- **Job Search:** Search for jobs using job titles, company names, or keywords.
- **Job Categories:** Filter job listings by Full Time, Part Time, Freelancer, and Internship.
- **Saved Jobs:** Bookmark and remove jobs from the saved list.
- **Local Storage:** Saves bookmarked jobs in the browser using Local Storage, so they remain saved after refreshing the page.
- **Job Application Form:** Opens an application form with the selected job title automatically filled in.
- **Join Now Form:** Provides a registration form with password confirmation validation.
- **Popular Searches:** Quickly search for Web Developer, Designer, and Marketing jobs.
- **Freelancer Profiles:** Displays freelancer information, skills, ratings, and experience.
- **Scroll Animations:** Uses Intersection Observer to reveal website sections as the user scrolls.
- **Mobile Navigation:** Includes a responsive navigation menu for smaller screens.

## Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Website structure and content |
| CSS3 | Styling, layouts, animations, and responsive design |
| JavaScript | Search, filtering, forms, and interactive functionality |
| Local Storage | Saving bookmarked jobs in the browser |
| Boxicons | Icons used throughout the website |
| Google Fonts | Poppins typography |

## Project Structure

JSTACK/
│
├── index.html
├── style.css
├── script.js
├── toggle.js
│
├── images/
│   ├── logo.png
│   ├── hero1.PNG
│   ├── google.png
│   ├── uber.png
│   ├── linkedin.png
│   ├── facebook.png
│   ├── yahoo.png
│   ├── t1.png
│   ├── t2.png
│   ├── t3.png
│   ├── t4.png
│   ├── t6.png
│   ├── fl-1.png
│   ├── fl-2.png
│   ├── fl-3.png
│   └── fl-4.png
│
└── README.md

*Note: Keep all image files in the `images` folder and maintain the filenames used in the HTML code.*

## How to Run the Project

1. Download or clone this repository.
2. Open the project folder in Visual Studio Code or any code editor.
3. Make sure all the required images are present inside the `images` folder.
4. Open `index.html` in your web browser.
5. Explore the website and try its search, filtering, bookmarking, and form features.

No additional installation or package setup is required.

**Note:** An internet connection is required to load Google Fonts and Boxicons from their external CDNs.

## How It Works

- Users can enter a keyword in the search bar to find matching job listings.
- Job category buttons display jobs according to the selected employment type.
- Clicking the bookmark icon saves or removes a job from the saved list.
- Saved jobs are stored using browser Local Storage.
- Clicking **Apply Now** opens a job application form.
- Clicking **Join Now** opens the registration form.
- The mobile navigation menu can be opened and closed using the menu icon.

## Project Limitations

This project is currently a front-end demonstration.

- Job listings are sample data written directly in the HTML.
- Application submissions display a success message but are not sent to a server.
- Registration is demonstrated through client-side form validation; no actual account is created.
- There is no backend, database, or user authentication system.

## Future Improvements

- Add more job listings.
- Improve job search and filtering.
- Enhance the user interface.
- Add more features for job seekers.

## Acknowledgement

This project was developed as part of the **CodSoft Web Development Internship** to practice front-end web development skills and build an interactive, responsive job portal website.

---

**Developed with HTML, CSS, and JavaScript.**