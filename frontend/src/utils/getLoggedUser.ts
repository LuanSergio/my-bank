import Cookies from 'js-cookie';

export default function getLoggedUser(): string | undefined {
  const user = Cookies.get(process.env.NEXT_PUBLIC_COOKIE_NAME as string);

  return user;
}
