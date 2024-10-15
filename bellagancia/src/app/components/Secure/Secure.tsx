// src/components/SecureComponent.tsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { checkAuth } from '../utils/auth';

const Secure: React.FC = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    if (!checkAuth()) {
      router.push('/login');
    }
  }, []);

  return <>{children}</>;
}

export default Secure;
