import { redirect } from 'next/navigation';

export default function NotFound() {
  // Automatically redirect all 404s to home page
  redirect('/');
}
