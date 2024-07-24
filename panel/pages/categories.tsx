import React from 'react'

import Card from '../components/Card'
import Layout from '../components/Layout'
import Table from '../components/Table'
import Title from '../components/Title'
import { useQuery } from '../lib/graphql'

const query = {
  query: `
    query {
      getAllCategories {
        id
        name
        slug
      }
    }
  `
}

const Categories: React.FC = () => {
  const {} = useQuery(query)
  return (
    <Layout>
      <Title>Devshop - Gerenciar categorias</Title>

      <div className='mt-4'>
        <div className='flex flex-wrap -mx-6'>
          <Card>
            <Card.Icon>
              <div className='p-3 bg-orange-600 bg-opacity-75 rounded-full'>
                <svg
                  className='w-8 h-8 text-white'
                  viewBox='0 0 28 28'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M4.19999 1.4C3.4268 1.4 2.79999 2.02681 2.79999 2.8C2.79999 3.57319 3.4268 4.2 4.19999 4.2H5.9069L6.33468 5.91114C6.33917 5.93092 6.34409 5.95055 6.34941 5.97001L8.24953 13.5705L6.99992 14.8201C5.23602 16.584 6.48528 19.6 8.97981 19.6H21C21.7731 19.6 22.4 18.9732 22.4 18.2C22.4 17.4268 21.7731 16.8 21 16.8H8.97983L10.3798 15.4H19.6C20.1303 15.4 20.615 15.1004 20.8521 14.6261L25.0521 6.22609C25.2691 5.79212 25.246 5.27673 24.991 4.86398C24.7357 4.45123 24.2852 4.2 23.8 4.2H8.79308L8.35818 2.46044C8.20238 1.83722 7.64241 1.4 6.99999 1.4H4.19999Z'
                    fill='currentColor'
                  ></path>
                  <path
                    d='M22.4 23.1C22.4 24.2598 21.4598 25.2 20.3 25.2C19.1403 25.2 18.2 24.2598 18.2 23.1C18.2 21.9402 19.1403 21 20.3 21C21.4598 21 22.4 21.9402 22.4 23.1Z'
                    fill='currentColor'
                  ></path>
                  <path
                    d='M9.1 25.2C10.2598 25.2 11.2 24.2598 11.2 23.1C11.2 21.9402 10.2598 21 9.1 21C7.9402 21 7 21.9402 7 23.1C7 24.2598 7.9402 25.2 9.1 25.2Z'
                    fill='currentColor'
                  ></path>
                </svg>
              </div>
            </Card.Icon>
            <Card.Data>
              <Card.Title>2000</Card.Title>
              <Card.Description>Produtos</Card.Description>
            </Card.Data>
          </Card>

          <Card>
            <Card.Icon>
              <div className='p-3 bg-orange-600 bg-opacity-75 rounded-full'>
                <svg
                  className='w-8 h-8 text-white'
                  viewBox='0 0 28 28'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M4.19999 1.4C3.4268 1.4 2.79999 2.02681 2.79999 2.8C2.79999 3.57319 3.4268 4.2 4.19999 4.2H5.9069L6.33468 5.91114C6.33917 5.93092 6.34409 5.95055 6.34941 5.97001L8.24953 13.5705L6.99992 14.8201C5.23602 16.584 6.48528 19.6 8.97981 19.6H21C21.7731 19.6 22.4 18.9732 22.4 18.2C22.4 17.4268 21.7731 16.8 21 16.8H8.97983L10.3798 15.4H19.6C20.1303 15.4 20.615 15.1004 20.8521 14.6261L25.0521 6.22609C25.2691 5.79212 25.246 5.27673 24.991 4.86398C24.7357 4.45123 24.2852 4.2 23.8 4.2H8.79308L8.35818 2.46044C8.20238 1.83722 7.64241 1.4 6.99999 1.4H4.19999Z'
                    fill='currentColor'
                  ></path>
                  <path
                    d='M22.4 23.1C22.4 24.2598 21.4598 25.2 20.3 25.2C19.1403 25.2 18.2 24.2598 18.2 23.1C18.2 21.9402 19.1403 21 20.3 21C21.4598 21 22.4 21.9402 22.4 23.1Z'
                    fill='currentColor'
                  ></path>
                  <path
                    d='M9.1 25.2C10.2598 25.2 11.2 24.2598 11.2 23.1C11.2 21.9402 10.2598 21 9.1 21C7.9402 21 7 21.9402 7 23.1C7 24.2598 7.9402 25.2 9.1 25.2Z'
                    fill='currentColor'
                  ></path>
                </svg>
              </div>
            </Card.Icon>
            <Card.Data>
              <Card.Title>2000</Card.Title>
              <Card.Description>Produtos</Card.Description>
            </Card.Data>
          </Card>

          <Card>
            <Card.Icon>
              <div className='p-3 bg-orange-600 bg-opacity-75 rounded-full'>
                <svg
                  className='w-8 h-8 text-white'
                  viewBox='0 0 28 28'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M4.19999 1.4C3.4268 1.4 2.79999 2.02681 2.79999 2.8C2.79999 3.57319 3.4268 4.2 4.19999 4.2H5.9069L6.33468 5.91114C6.33917 5.93092 6.34409 5.95055 6.34941 5.97001L8.24953 13.5705L6.99992 14.8201C5.23602 16.584 6.48528 19.6 8.97981 19.6H21C21.7731 19.6 22.4 18.9732 22.4 18.2C22.4 17.4268 21.7731 16.8 21 16.8H8.97983L10.3798 15.4H19.6C20.1303 15.4 20.615 15.1004 20.8521 14.6261L25.0521 6.22609C25.2691 5.79212 25.246 5.27673 24.991 4.86398C24.7357 4.45123 24.2852 4.2 23.8 4.2H8.79308L8.35818 2.46044C8.20238 1.83722 7.64241 1.4 6.99999 1.4H4.19999Z'
                    fill='currentColor'
                  ></path>
                  <path
                    d='M22.4 23.1C22.4 24.2598 21.4598 25.2 20.3 25.2C19.1403 25.2 18.2 24.2598 18.2 23.1C18.2 21.9402 19.1403 21 20.3 21C21.4598 21 22.4 21.9402 22.4 23.1Z'
                    fill='currentColor'
                  ></path>
                  <path
                    d='M9.1 25.2C10.2598 25.2 11.2 24.2598 11.2 23.1C11.2 21.9402 10.2598 21 9.1 21C7.9402 21 7 21.9402 7 23.1C7 24.2598 7.9402 25.2 9.1 25.2Z'
                    fill='currentColor'
                  ></path>
                </svg>
              </div>
            </Card.Icon>
            <Card.Data>
              <Card.Title>2000</Card.Title>
              <Card.Description>Produtos</Card.Description>
            </Card.Data>
          </Card>
        </div>
      </div>

      <div className='mt-8'></div>

      <div className='flex flex-col mt-8'>
        <div className='py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8'>
          <div className='inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg'>
            <Table>
              <Table.Head>
                <Table.Th>Name</Table.Th>
                <Table.Th>Title</Table.Th>
                <Table.Th>Status</Table.Th>
                <Table.Th>Role</Table.Th>
                <Table.Th> </Table.Th>
              </Table.Head>

              <Table.Body>
                <Table.Tr>
                  <Table.Td>
                    <div className='flex items-center'>
                      <div className='flex-shrink-0 w-10 h-10'>
                        <img
                          className='w-10 h-10 rounded-full'
                          src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80'
                          alt=''
                        />
                      </div>

                      <div className='ml-4'>
                        <div className='text-sm font-medium leading-5 text-gray-900'>
                          John Doe
                        </div>
                        <div className='text-sm leading-5 text-gray-500'>
                          john@example.com
                        </div>
                      </div>
                    </div>
                  </Table.Td>

                  <Table.Td>
                    <div className='text-sm leading-5 text-gray-900'>
                      Software Engineer
                    </div>
                    <div className='text-sm leading-5 text-gray-500'>
                      Web dev
                    </div>
                  </Table.Td>

                  <Table.Td>
                    <span className='inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full'>
                      Active
                    </span>
                  </Table.Td>

                  <Table.Td>Owner</Table.Td>

                  <Table.Td>
                    <a
                      href='#'
                      className='text-indigo-600 hover:text-indigo-900'
                    >
                      Edit
                    </a>
                  </Table.Td>
                </Table.Tr>
              </Table.Body>
            </Table>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Categories
