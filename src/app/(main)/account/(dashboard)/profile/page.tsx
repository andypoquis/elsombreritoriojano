import ProfileTemplate from "@modules/account/templates/profile-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Profile",
  description: "Vea y edite su perfil de Sombrerito Riojano.",
}

export default function Profile() {
  return <ProfileTemplate />
}
