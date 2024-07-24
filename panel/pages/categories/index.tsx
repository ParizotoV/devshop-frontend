import Link from 'next/link'
import React from 'react'
import Button from '../../components/Button'
import Layout from '../../components/Layout'
import Table from '../../components/Table'
import Title from '../../components/Title'
import { useMutation, useQuery } from '../../lib/graphql'

const GET_ALL_CATEGORIES = `
  query {
    getAllCategories {
      id
      name
      slug
    }
  }
`

const DELETE_CATEGORY = `
  mutation deleteCategory($id: String!) {
    deleteCategory(id: $id)
  }
`

const Categories: React.FC = () => {
  const { data, mutate } = useQuery(GET_ALL_CATEGORIES)
  const [deleteData, deleteCategory] = useMutation(DELETE_CATEGORY)

  const remove = id => async () => {
    deleteCategory({ id })
    mutate()
  }

  return (
    <Layout>
      <Title>Devshop - Gerenciar categorias</Title>
      <div className='mt-8'></div>
      <div>
        <Button.Link href='/categories/create'>
          Criar nova categoria
        </Button.Link>
      </div>

      <div className='flex flex-col mt-8'>
        <div className='py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8'>
          {data && data.getAllCategories && data.getAllCategories.length > 0 ? (
            <div className='inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg'>
              <Table>
                <Table.Head>
                  <Table.Th>Categorias</Table.Th>
                  <Table.Th> </Table.Th>
                </Table.Head>

                <Table.Body>
                  {data &&
                    data.getAllCategories &&
                    data.getAllCategories.map(item => (
                      <Table.Tr key={item?.id}>
                        <Table.Td>
                          <div className='flex items-center'>
                            <div>
                              <div className='text-sm font-medium leading-5 text-gray-900'>
                                {item?.name}
                              </div>
                              <div className='text-sm leading-5 text-gray-500'>
                                {item?.slug}
                              </div>
                            </div>
                          </div>
                        </Table.Td>

                        <Table.Td>
                          <Link
                            href={`/categories/${item.id}/edit`}
                            className='text-indigo-600 hover:text-indigo-900'
                          >
                            Edit
                          </Link>{' '}
                          |{' '}
                          <a
                            className='text-indigo-600 hover:text-indigo-900'
                            onClick={remove(item.id)}
                          >
                            Remove
                          </a>
                        </Table.Td>
                      </Table.Tr>
                    ))}
                </Table.Body>
              </Table>
            </div>
          ) : (
            <div className='flex items-center mt-6 text-center border rounded-lg h-96 dark:border-gray-700'>
              <div className='flex flex-col w-full max-w-sm px-4 mx-auto'>
                <div className='p-3 mx-auto text-blue-500 bg-blue-100 rounded-full dark:bg-gray-800'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke-width='1.5'
                    stroke='currentColor'
                    className='w-6 h-6'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                    />
                  </svg>
                </div>
                <h1 className='mt-3 text-lg text-gray-800 dark:text-white'>
                  Categorias não encontradas
                </h1>
                <p className='mt-2 text-gray-500 dark:text-gray-400'>
                  Crie uma nova categoria para sua loja!
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default Categories
