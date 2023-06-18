import Item from "./Item";

const List = () => {
  return (
    <ul className="w-full flex flex-col gap-4 list-none">
      <Item>
        Descobrir produtos e construir o que importa
      </Item>

      <Item>
        Medir para garantir que as atualizações sejam um sucesso
      </Item>

      <Item>
        E muito mais!
      </Item>
    </ul>
  )
}

export default List;
