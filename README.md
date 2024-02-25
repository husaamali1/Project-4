# Project-4
# Tech Mobiles
Welcome to Tech Mobile, your go-to online mobile phone store. Explore our wide range of phones, complete with clear pictures. Our website's simple design and user-friendly interface make the process of buying or selling phones easy and efficient. Tech Mobile is a community for phone enthusiasts, providing a seamless platform for transactions.

## Deployment
Check out Tech Mobile live: [https://tech-mobile-998d3d8214b9.herokuapp.com/](https://tech-mobile-998d3d8214b9.herokuapp.com/)

## Technologies Used
- **Frontend:** React
- **Backend:** Python with MongoDB for database management
- **Additional Tools:** Django REST Framework for the Python Django API, PostgreSQL for the database, and React for the frontend.
  
## Project Duration
This project was independently developed from Thursday, January 11th, to Monday, January 22nd. It was a rewarding experience that provided numerous learning opportunities through problem-solving and the application of various technologies.

## Brief

In this project my technical requirements was to build a full-stack application by making my own backend and my own front-end

The technical requirements were multifaceted:
- Use a Python Django API using Django REST Framework to serve your data from a Postgres database.
- Consume your API with a separate front-end built with React.
- Be a complete product which most likely means multiple relationships and CRUD functionality for at least a couple of models.
- Implement thoughtful user stories/wireframes that are significant enough to help you know which features are core MVP.
- Have a visually impressive design to kick your portfolio up a notch and have something to wow future clients & employers. ALLOW time for this.
- Design the application to be visually impressive, aiming to elevate the portfolio and appeal to future clients and employers.
- Deploy the application online to make it publicly accessible.
- Maintain a git repository on GitHub with a link to the hosted project, ensuring frequent commits from the inception of the project.


## Planning and Implementation
I'll walk you through my app planning process. It began with sketching a wireframe using Excalidraw, which helped me visualise the app's layout and determine the essential files needed for the project. Using Quick Database Diagrams, I designed the schema for my application's database, ensuring that I fully understood the relationships between the data.
- Phone: This is the central table, with attributes like id, brand, model, year, price, and a foreign key memory linking to the Memory table.
- Memory: This table holds data about the memory options available for the phones, including id, storage, and size. The id in the Memory table is referenced by the memory foreign key in the Phone table.
- User: This table probably contains user information, with fields such as id, name, and email. The id here might be linked to the Phone table if there is a direct relationship, such as users listing phones for sale or registering their purchases.

The relationships between these tables are crucial for the app's functionality. The Phone table is related to the Memory table, which allows the app to display specific memory configurations for each phone. Additionally, the potential link between the Phone and User tables could be used to track which user is associated with each phone listing, enabling features like user profiles, personalised recommendations, or tracking user activity.
[image upload] [image upload] I will now show you my frontend wireframe making structuring my page straightforward [image upload]

## Development Process
Day 1: Laying the Foundations
I started off by visualising the structure for a phone shop platform using Excalidraw, mapping out both the backend and frontend. Diving into backend development presented a tough challenge. I found myself struggling with complex code and needing to take frequent breaks.

Day 2: Reset and Restart
Confronted with unresolved backend issues, I made the tough decision to scrap my progress from Day 1 and start fresh. This reset was needed to clear up the complications I couldn't figure out initially.

Day 3: Backend Breakthroughs
Despite the steep learning curve with Python, given only a week of preparation, I managed to make headway with the backend. Establishing data model relationships was tricky and critical, but I was determined to iron out these foundational issues before moving on. This how i set out my phone model: [image upload]


Day 4: Insomnia Testing and Frontend Transition
After wrapping up the backend, I rigorously tested all the endpoints using Insomnia, confirming they were working perfectly. This success gave me the green light to start on the frontend, where I could apply my recent project experience to make smoother progress.

Day 5: Building and Styling Core Components
Significant milestones were achieved as I completed the app.jsx, homepage, and single page components. Styling these components as I went along kept the development process organised and visually unified. This how i done my Homepage: [image upload] 
singlePhone component this how its been set up: [image upload] 

Day 6: Component Expansion and Debugging
New components were introduced, expanding the project's scope. However, I hit a snag with the displayPhone component due to data type mismatches. Thankfully, with my instructor's help, I resolved this, integrated the registration and login seamlessly, and ended the day with a focus on styling using Bootstrap.
In this code you can see how i applied bootstrap to style my login page: [image upload]

Day 7: Profile Page Challenges
Developing the profile page was tougher than expected. The issue of displaying the active user's name took some debugging, and presenting their listings proved even more challenging. I also had to revisit the backend to fix a URL problem, a reminder of how the backend and frontend must work.

Day 8: Finalising CRUD Operations
Persistence was key as I tackled the profile page create, update, and delete functionalities. The day was a mixture of frustration and success as I worked through unresponsive buttons and URL issues, but I ended up successfully completing all the CRUD operations, which felt incredibly rewarding. [image upload]

Day 9: Testing
Testing day brought me joy as I found no errors across the site. Implementing the image upload feature, which had been a hurdle in my last project, was a personal victory. I also spruced up the site with new styles and introduced a spinner for loading periods, adding to the user experience. This how it I implemented Upload Images: [image upload]

Day 10: Documentation and Deployment
With all project requirements met, I documented ideas for future features and focused on deployment. It was thrilling to prepare the application for launch, marking a significant step in my development journey and the project's lifecycle.


## Key Wins
[image upload]
The code snippet above is one code I'm really proud of. This is a testament to the modular design approach I've taken by using individual components. Mastering Bootstrap has been a highlight, as it's become my go-to tool for quickly and efficiently adding style to the app.
- Responsive Design: Utilising react-bootstrap, I’ve implemented a responsive layout that adapts to different screen sizes, ensuring a seamless user experience across devices.
- Efficient Data Handling: Leveraging useLoaderData from react-router-dom, you effectively fetch and display the phone data, demonstrating a solid grasp of data management within React components.
- Interactive UI Elements: The use of the <Link> component from react-router-dom to wrap around <Card.Img> provides an intuitive and interactive way for users to navigate to the details of each phone, enhancing the overall user interaction.
- Clean Code Structure: The component's code is well-organised and concise, making it easy to read and understand, which is beneficial for both current and future developers working on the project.
- Styling Integration: The integration of Bootstrap classes within your React component showcases your ability to blend functionality with aesthetic styling for a polished look.
[image upload]
I'm really proud of this code snippet as it marks my progress in CSS. Styling was a challenge in my last project, but I've since honed my skills, resulting in this polished and responsive design.

## Challenges
One challenging aspect was fetching and displaying data from the backend on my portfolio page. Initially, it only displayed a user's name, but my vision was to create a more comprehensive portfolio display. Due to time constraints, I had to prioritise functionality, aiming for a working page within the limited time available.

## Key Learnings
While building Tech Mobile, I've really gotten to grips with the styling. I've also gotten a better handle on Python and how different features work. Using MongoDB this time around has been smoother than my experience with Mongoose in my previous project, I believe there is still space for me to learn. Plus, the project has taught me patience, especially when I faced a complex issue with the portfolio page that I couldn't fix right away.

## Current Bugs
- You can update and delete from the homePage if you are the owner of the phone.
- Single page isn't styled properly.
- Portfolio page has lots of missing things that will be added soon.

## Future Improvements
Looking ahead, we plan to make Tech Mobile even better with updates like

- Fixing my portfolio page making it more interactive for the user where they can see what they own.
- Moving forward, I plan to dedicate time to refining the styling of the single page view, which I wasn't able to complete due to time constraints.
- Going forward, I aim to enhance the styling to make the page even more visually appealing and engaging for customers.

