import { SingUpUseCase } from '@/components/signup-case'

export class SignupRouter {
  route (httpRequest) {
    const { email, password, repeatPassword } = httpRequest.body
    const user = new SingUpUseCase().signUp(email, password, repeatPassword)
    return {
      statusCode: 200,
      body: user
    }
  }
}
