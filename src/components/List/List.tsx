import { useEffect, useState } from "react"

type TListProps = {
  onClick: (id: number) => void
}

function List(props: TListProps) {

  const [list, setList] = useState([])
  useEffect(() => {

    async function fetchData() {
      try {
        const data = await fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json ')
        if (!data.ok) {
          throw new Error(data.statusText)
        }
        const res = await data.json()
        setList(res)
      } catch (err) {
        console.log(err)
      }
    }

    fetchData()


  }, [])
  return (
    <ul className="list">{list.map((item: {id: number, name: string}) => <li key={item.id} onClick={() => props.onClick(item.id)}>
      {item.name}
    </li>)}</ul>
  )
}

export default List
