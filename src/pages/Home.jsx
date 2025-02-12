import { Link } from "react-router-dom"; // we use it instead of standard anchor element <a></a>, beacuse as we click on anchor element, a http request is sent, and restarts the JS coode again, load the entire react app again and restart the react app again. That's a lot of unnessary work

import { useNavigate } from "react-router-dom"; // use to naviagte programmatically


export default function HomePage() {

  const navigate = useNavigate();

  function navigateHandler() {
    navigate('/products')
  }


  return (
    <>
      <h1>My Home Page</h1>
      <p>
        Go to <Link to="products">the list of products</Link>. {/* Link element does render a anchor element <a></a>, but it basically prevents the browser default of sending a http request if the link is clicked and instead simpley look at the route defination (here in app.jsx) to update the page accordingly*/}
      </p>
      <button onClick={navigateHandler}>Navigate</button>
    </>
  );
}
