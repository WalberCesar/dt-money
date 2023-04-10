import { MagnifyingGlass } from 'phosphor-react'
import { SearchFormContainer } from './styles'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTransaction } from '../../../../Contexts/useTransaction'
import { memo } from 'react'

const searchFormSechema = zod.object({
  query: zod.string(),
})

type SearchFormInputs = zod.infer<typeof searchFormSechema>

function SearchFormComponent() {
  const { fetchTransaction } = useTransaction()
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSechema),
  })

  async function handleSearchTransaction(data: SearchFormInputs) {
    await fetchTransaction(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransaction)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register('query')}
      />

      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  )
}

export const SearchForm = memo(SearchFormComponent)
