import { useParams, Link } from "react-router-dom";

export default function ProductDetailPage() {
  const params = useParams(); // this hook gives us params object(simple JS object), which contains every dynamic path segment we defined in our route defination as a property.
  //                             meaning => part after ':' the is the identifier, which we use as the property name

  return (
    <>
      <h1>Product Details!!</h1>
      <p>{params.productId}</p>
      <p>
        <Link to=".." relative="path"> {/* ".." is a relative path */}
          Back
        </Link>
        {/* default value => relative="route" */}
        {/* going up one level / going back to the previoulsy active route . It is also a relative path*/}
      </p>
    </>
  );
}
