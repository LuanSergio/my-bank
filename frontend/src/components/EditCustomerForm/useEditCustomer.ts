import client from '@services/axios';
import { toast } from 'react-toastify';
import Router from 'next/router';
import formatDate from '@utils/formatDate';
import { Pages } from '@enums/pages';
import { Dispatch, SetStateAction } from 'react';

interface IUseEditCustomerParams {
  id: number;
  name: string;
  document: string;
  agency: string;
  account: string;
  bankName: string;
  code: string;
  forceUpdate: Dispatch<SetStateAction<number>>;
}

interface IEditResponse {
  data: {
    accessToken: string;
    user: {
      email: string;
    };
  };
}

export default async function useEditCustomer({
  id,
  name,
  document,
  agency,
  account,
  code,
  bankName,
  forceUpdate,
}: IUseEditCustomerParams) {
  const formattedAccount =
    account.substring(0, account.length - 1) +
    '-' +
    account[account.length - 1];

  await client
    .put(`/customers/${id}`, {
      id,
      name,
      date: formatDate(new Date()),
      document,
      bank: {
        bankName,
        code,
        agency,
        account: formattedAccount,
      },
    })
    .then((response: IEditResponse) => {
      toast.success('Cliente editado com successo', {
        position: toast.POSITION.BOTTOM_RIGHT,
        theme: 'colored',
      });
      forceUpdate(previousValue => previousValue + 1);
      Router.replace(Pages.CUSTOMERS);
    })
    .catch(error => {
      if (error.response.data) {
        toast.error(error.response.data, {
          position: toast.POSITION.BOTTOM_RIGHT,
          theme: 'colored',
        });
      }
    });
}
