import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  CloseButton,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from './styles'
import { Controller, useForm } from 'react-hook-form'

const NewTransactionSchema = zod.object({
  description: zod.string(),
  price: zod.number(),
  category: zod.string(),
  type: zod.enum(['income', 'outcome']),
})

type NewTransactionInputs = zod.infer<typeof NewTransactionSchema>

export function NewTransactionModal() {
  const {
    control,
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm<NewTransactionInputs>({
    resolver: zodResolver(NewTransactionSchema),
    defaultValues: {
      type: 'income',
    },
  })

  function handleCreateNewTransaction(data: NewTransactionInputs) {
    console.log(data)
  }
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            type="text"
            placeholder="Descrição"
            required
            {...register('description')}
          />
          <input
            type="number"
            placeholder="Preço"
            required
            {...register('price', { valueAsNumber: true })}
          />
          <input
            type="text"
            placeholder="Categoria"
            required
            {...register('category')}
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <TransactionType
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <TransactionTypeButton value="income" variant="income">
                    <ArrowCircleUp size={24} />
                    Entrada
                  </TransactionTypeButton>
                  <TransactionTypeButton variant="outcome" value="outcome">
                    <ArrowCircleDown size={24} />
                    Saída
                  </TransactionTypeButton>
                </TransactionType>
              )
            }}
          />

          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
