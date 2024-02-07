import LoginTemplate from "@modules/account/templates/login-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sign in",
  description: "Inicia sesión en tu cuenta Medusa Riojano.",
}

export default function Login() {
  return <LoginTemplate />
}
