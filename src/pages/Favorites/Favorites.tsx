import { FC } from "react"
import { Header } from "../../components/Header/Header"
import { IHeaderBgColor } from "../../helpers/interface"

export const Favorites: FC<IHeaderBgColor> = () => {
  return (
    <div>
      <Header $backgroundColor="var(--background-color)" />
      Favorites
    </div>
  )
}
