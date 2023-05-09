import { Link } from "react-router-dom";

const Public = () => {
  const content = (
    <section className="public">
      <header>
        <h1>
          Welcome to <span className="nowrap">XBug Colab!</span>
        </h1>
      </header>
      <main className="public__main">
        <p>
          This Web application provides an easy way of assigning notes to
          different roles(Employee, Manager, Admin). Only Manager and Admin can
          create new users and update user's details. Employee can only view
          notes and add new notes and change its status.
        </p>
        <br />
        <p>Contact Details</p>
        <address className="public__addr">
          Bipin Raj Sitoula
          <br />
          Sydney
          <br />
          Australia
          <br />
          <a href="tel:0410738870">(041) 073 8870</a>
        </address>
        <br />
        <p>Owner: Bipin Raj Sitoula</p>
        <br />
        <br />
        <br />
        <br />
        <p>
          The purpose of this web application is to collaborate the task between
          the employees, manager and admin.
        </p>
      </main>
      <footer>
        <Link to="/login">Employee Login</Link>
      </footer>
    </section>
  );
  return content;
};
export default Public;
