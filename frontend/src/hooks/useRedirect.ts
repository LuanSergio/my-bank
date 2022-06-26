import { useEffect } from 'react';
import getLoggedUser from '@utils/getLoggedUser';
import { useRouter } from 'next/router';
import { Pages } from '@enums/pages';

export default function useRedirect(): void {
  const router = useRouter();
  useEffect(() => {
    const loggedUser = getLoggedUser();
    console.log(router.asPath);

    if (!loggedUser) {
      if (router.asPath === Pages.LOGIN) {
        router.replace(Pages.LOGIN);
      }

      if (router.asPath === Pages.REGISTER) {
        router.replace(Pages.REGISTER);
      }

      router.replace(Pages.REGISTER);
    } else {
      router.replace(Pages.CUSTOMERS);
    }
  }, []);
}
