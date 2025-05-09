'use client';
import { login } from './actions';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();

  const handleSignupRedirect = () => {
    router.push('/signup'); // Redirige a la página de Sign Up
  };

  return (
    <div>
      <form>
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" required />
        <button formAction={login}>Log in</button>
      </form>
      <button type="button" onClick={handleSignupRedirect}>
        Sign up
      </button>
    </div>
  );
}
