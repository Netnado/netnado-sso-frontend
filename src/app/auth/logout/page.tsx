'use client';

import { logoutCase } from '@/store/account/accountSyncThunk';
import { useAppDispatch } from '@/store/store';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

function LogoutPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const onLogout = async (): Promise<void> => {
      await dispatch(logoutCase());
      router.push("/");
    }

    onLogout();
  }, [router, dispatch]);

  return (
    <div>

    </div>
  );
}

export default LogoutPage;