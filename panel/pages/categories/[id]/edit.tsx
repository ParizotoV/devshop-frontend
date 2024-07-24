import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import Button from '../../../components/Button'
import Input from '../../../components/Input'
import Layout from '../../../components/Layout'
import Title from '../../../components/Title'
import { useMutation, useQuery } from '../../../lib/graphql'

const UPDATE_CATEGORY = `
  mutation updateCategory($id: String!, $name: String!, $slug: String!) {
    updateCategory(input: { 
      id: $id, 
      name: $name, 
      slug: $slug 
    }) {
      id
      name
      slug
    }
  }
`

const Edit: React.FC = () => {
  const { query, push } = useRouter()
  const { data } = useQuery(`
  query {
    getCategoryById(id:"${query?.id}") {
      name
      slug
    }
  }
`)

  const [updatedData, updateCategory] = useMutation(UPDATE_CATEGORY)

  const form = useFormik({
    initialValues: {
      name: '',
      slug: ''
    },
    onSubmit: async values => {
      const category = {
        ...values,
        id: query?.id
      }
      await updateCategory(category)
      push('/categories')
    }
  })

  useEffect(() => {
    if (data && data?.getCategoryById) {
      form.setFieldValue('name', data?.getCategoryById?.name)
      form.setFieldValue('slug', data?.getCategoryById?.slug)
    }
  }, [data])

  return (
    <Layout>
      <Title>Devshop - Editar categoria</Title>
      <div className='mt-8'></div>
      <Button.Outline href='/categories'>Voltar</Button.Outline>

      <div className='flex flex-col mt-8'>
        <div className='py-2 -my-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 '>
          <div className='py-12 px-8 bg-white inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg'>
            <form onSubmit={form.handleSubmit}>
              <div className='grid md:grid-cols-2 md:gap-6'>
                <div className='relative z-0 w-full mb-5 group'>
                  <Input
                    name='name'
                    onChange={form.handleChange}
                    value={form.values.name}
                    label='Nome'
                    placeholder='Preencha o nome da categoria'
                  />
                </div>
                <div className='relative z-0 w-full mb-5 group'>
                  <Input
                    name='slug'
                    onChange={form.handleChange}
                    value={form.values.slug}
                    label='Slug'
                    placeholder='Preencha com o slug da categoria'
                    helpText='Slug é utilizado para URLs amigáveis.'
                  />
                </div>
              </div>
              <Button type="submit" className='w-full'>Editar categoria</Button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Edit
