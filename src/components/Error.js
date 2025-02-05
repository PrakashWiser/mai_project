import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ErrorPage() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100 bg-light text-center p-4">
      <AlertTriangle size={60} className="text-danger mb-3" />
      <h1 className="display-4 fw-bold text-dark">Oops! Page Not Found</h1>
      <p className="text-muted mt-2">The page you are looking for might have been removed or is temporarily unavailable.</p>
      <Link to="/" className="btn btn-primary mt-3 px-4 py-2">
        Go Back Home
      </Link>
    </div>
  );
}