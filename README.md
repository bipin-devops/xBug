Live: <https://xbug-colab.onrender.com/> (Login Details available upon request)

## XBUG-Note Sharing and Management System

**Description:**

A RESTful API-based note sharing and management app to facilitate seamless sharing of notes within a company. The system includes features such as a public-facing page, employee login, role-based access control, note assignment, note tracking, and user settings. The app provides three distinct roles - admin, employee, and manager - each with their own access levels and permissions.

**Features:**

- **Secure Employee Login:** Implemented a secure login system, ensuring confidential access to the app.
- **Personalized Welcome Page:** Delivered a welcoming experience with customized messages upon successful login, enhancing user engagement.
- **Easy navigation:** Offers a user-friendly interface for seamless navigation within the app.
- **User authentication and role assignment:** Authenticates users and assigns appropriate roles (Employees, Managers, or Admins).
- **Login requirement:** Ensures users log in at least once per week to maintain access.
- **Immediate employee access removal:** Enables quick removal of employee access in case of necessary action.
- **Role-Based Access Control (RBAC):** Implemented RBAC to provide distinct permissions and access levels for Employees, Managers, and Admins.
- **Role-based note access:** Allows employees to view and edit only their assigned notes, while Managers and Admins have full access.
- **User Settings Management:** Provided exclusive access for Managers and Admins to handle user-related settings, including the creation of new users.
- **Efficient Note Management:** Streamlined note creation, editing, and deletion, with note attributes including ticket numbers, titles, bodies, and timestamps.
- **Task Assignment:** Facilitated efficient task assignment among employees, fostering collaboration and accountability.
- **Real-time Note Status:** Empowered users to track note progress, differentiating between "OPEN" and "COMPLETED" notes.

**Technologies Used:**

- **Backend:** Express.js, MongoDB, bcrypt for password hashing, cookie-parser for cookie management, cors for cross-origin resource sharing, jsonwebtoken for authentication tokens, and uuid for generating unique identifiers.
- **Frontend:** React.js, React Router for navigation, Redux Toolkit for state management, JWT-decode for decoding authentication tokens, react-spinners for loading animations, and Font Awesome for icons.

**Achievements:**

- Streamlined note management and communication processes, replacing the previous sticky note system.
- Improved data security and access control through role-based authentication and authorization.
- Enhanced user experience with a user-friendly interface and personalized welcome messages.
- Increased efficiency by enabling note assignment and tracking, ensuring accountability and transparency.
- Achieved a scalable and maintainable system architecture using modern technologies and best practices.

**Owner:** Bipin Raj Sitoula
