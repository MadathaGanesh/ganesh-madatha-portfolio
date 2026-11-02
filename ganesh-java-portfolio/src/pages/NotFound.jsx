import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
export default function NotFound() {
  return <section className="shell not-found"><span className="section-kicker">404 / LOST ROUTE</span><h1>This endpoint doesn't exist<span className="accent-period">.</span></h1><p>Nothing was found at this address. Jump back to the portfolio.</p><Link to="/" className="button button-solid"><ArrowLeft size={18}/> Back home</Link></section>;
}
