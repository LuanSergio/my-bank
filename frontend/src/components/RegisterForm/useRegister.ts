import client from '@services/axios';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import Router from 'next/router';
import { Pages } from '@enums/pages';

interface IRegisterResponse {
  data: {
    accessToken: string;
    user: {
      email: string;
    };
  };
}

export default async function useRegister(email: string, password: string) {
  await client
    .post('/register', {
      email,
      password,
    })
    .then((response: IRegisterResponse) => {
      Cookies.set(
        process.env.NEXT_PUBLIC_COOKIE_NAME as string,
        response.data.accessToken,
      );

      toast.success('Conta criada com sucesso', {
        position: toast.POSITION.BOTTOM_RIGHT,
        theme: 'colored',
      });
      Router.replace(Pages.CUSTOMERS);
    })
    .catch(error => {
      if (error.response.data === 'Email already exists') {
        toast.error('E-mail já cadastrado', {
          position: toast.POSITION.BOTTOM_RIGHT,
          theme: 'colored',
        });
      }
    });
}
