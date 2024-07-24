import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import React from 'react'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Layout from '../../components/Layout'
import Title from '../../components/Title'
import { useMutation } from '../../lib/graphql'

const CREATE_CATEGORY = `
  mutation createCategory($name: String!, $slug: String!) {
    createCategory(input: { name: $name, slug: $slug }) {
      id
      name
      slug
    }
  }
`

const Create: React.FC = () => {
  const { push } = useRouter()
  const [data, createCategory] = useMutation(CREATE_CATEGORY)

  const form = useFormik({
    initialValues: {
      name: '',
      slug: ''
    },
    onSubmit: async values => {
      await createCategory(values)
      push('/categories')
    }
  })

  return (
    <Layout>
      <Title>Devshop - Criar nova categoria</Title>

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
              <Button type="submit" className='w-full'>Criar categoria</Button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Create
