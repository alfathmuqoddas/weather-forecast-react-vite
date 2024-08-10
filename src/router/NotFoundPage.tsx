import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div
      className="bg-black h-screen
flex items-center justify-center"
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-gray-600 mb-4">Page Not Found</p>
        <Link
          to={import.meta.env.BASE_URL}
          className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
