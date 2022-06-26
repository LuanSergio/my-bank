import client from '@services/axios';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import parseLinkHeader from '@utils/parseLinkHeader';

interface IPagination {
  first: number;
  next: number;
  last: number;
}

interface ICustomerResponse {
  customers: ICustomer[];
  lastPage: number;
}

export default function useCustomers(
  currentPage: number,
  forceUpdate: number,
): ICustomerResponse {
  const [customers, setCustomers] = useState<ICustomer[]>([]);
  const [lastPage, setLastPage] = useState(1);

  useEffect(() => {
    async function fetchCustomers(): Promise<{
      data: ICustomer[];
      pagination: IPagination;
    }> {
      const response = await client.get(`/customers?_page=${currentPage}`);
      const pagination = parseLinkHeader(response.headers.link);
      return { data: response.data, pagination };
    }

    fetchCustomers()
      .then(value => {
        setCustomers([...value.data]);
        setLastPage(value.pagination.last);
      })
      .catch(err => {
        if (err.response.data === 'Missing authorization header') {
          toast.error('Faça o login para continuar', {
            position: toast.POSITION.BOTTOM_RIGHT,
            theme: 'colored',
          });
        }
        if (err.response.data === 'jwt expired') {
          Cookies.remove(process.env.NEXT_PUBLIC_COOKIE_NAME as string);
          toast.error(
            'Sua sessão expirou. faça login novamente para continuar.',
            {
              position: toast.POSITION.BOTTOM_RIGHT,
              theme: 'colored',
            },
          );
        }
      });
  }, [currentPage, forceUpdate]);

  return {
    customers: customers,
    lastPage: lastPage,
  };
}
