import { useEffect,  useState } from 'react'

type TDetailsProps = {
  info: {
    id: number | undefined,
    name: string
  }
}

function Details(props: TDetailsProps) {
  const { id } = props.info

  const [data, setCurrentData ] = useState<{
    id: number,
    name: string,
    avatar: string,
    details: {
      city: string,
      company: string,
      position: string
    }
  } | undefined>(undefined)

  useEffect(() => {

    async function fetchData(id: number) {

      try {
        const data = await fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`)
        if (!data.ok) {
          throw new Error(data.statusText)
        }
        const res = await data.json()
        setCurrentData(res)
      } catch (e) {
        console.log(e)
      }
    }

    if (id) {
      fetchData(id)
    }

    return () => setCurrentData(undefined)
  }, [id])


  return (
    <div className='details'>
      <div>{id &&
        <div> {!data ? <h1>Loading...</h1> :
          <div>
            <img src={data.avatar} alt="" />
            <h1>{data.name}</h1>
            <p>City: {data.details.city}</p>
            <p>Company: {data.details.company}</p>
            <p>Position: {data.details.position}</p>
          </div>
        }</div>}
      </div>

    </div>
  )
}

export default Details
