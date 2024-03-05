import { FC } from "react"
import { Header } from "../../components/Header/Header"
import { IHeaderBgColor } from "../../helpers/interface"

export const Nannies: FC<IHeaderBgColor> = () => {
  return (
    <div>
      <Header backgroundColor="var(--background-color)" />
      Nannies
    </div>
  )
}
