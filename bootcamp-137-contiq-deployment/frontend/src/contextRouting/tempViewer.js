import { useData } from '../context/UserContext'

function DataViewer() {
  const { data } = useData()

  return (
    <div>
      <h2>Stored Data:</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default DataViewer
