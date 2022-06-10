import client from '@services/axios';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import Router from 'next/router';
import { Pages } from '@enums/pages';

interface ILoginResponse {
  data: {
    accessToken: string;
    user: {
      email: string;
    };
  };
}

export default async function useLogin(email: string, password: string) {
  await client
    .post('/login', {
      email,
      password,
    })
    .then((response: ILoginResponse) => {
      Cookies.set(
        process.env.NEXT_PUBLIC_COOKIE_NAME as string,
        response.data.accessToken,
      );
      toast.success('Login feito com sucesso', {
        position: toast.POSITION.BOTTOM_RIGHT,
        theme: 'colored',
      });
      Router.replace(Pages.CUSTOMERS);
    })
    .catch(error => {
      if (error.response.data === 'Cannot find user') {
        toast.error('E-mail não encontrado', {
          position: toast.POSITION.BOTTOM_RIGHT,
          theme: 'colored',
        });
      }

      if (error.response.data === 'Incorrect password') {
        toast.error('Senha incorreta', {
          position: toast.POSITION.BOTTOM_RIGHT,
          theme: 'colored',
        });
      }
    });
}
