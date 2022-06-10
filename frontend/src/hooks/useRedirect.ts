import { useEffect } from 'react';
import getLoggedUser from '@utils/getLoggedUser';
import { useRouter } from 'next/router';
import { Pages } from '@enums/pages';

export default function useRedirect(): void {
  const router = useRouter();
  useEffect(() => {
    const loggedUser = getLoggedUser();

    if (!loggedUser) {
      router.replace(Pages.REGISTER);
    }
  }, []);
}
