"use client";

import { useEffect, ReactNode } from 'react';
import { useRouter } from 'next/router';
import { checkAuth } from '../../utils/Auth';

interface SecureProps {
  children: ReactNode;
}

function Secure({ children }: SecureProps) {
  const router = useRouter();

  useEffect(() => {
    if (!checkAuth()) {
      router.push('/login');
    }
  }, [router]);

  return <>{children}</>;
}

export default Secure;
