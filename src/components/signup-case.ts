import { AddAccountRepository } from '@/components/account-repository'

export class SingUpUseCase {
  signUp (email: string, password: string, repeatPassword: string) {
    if (password === repeatPassword && email.includes('@')) {
      new AddAccountRepository().add(email, password)
      return 'User created successfully'
    }
  }
}
