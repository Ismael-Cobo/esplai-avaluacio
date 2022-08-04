import { useState } from "react"
import { useForm } from "../../hooks"
import { sort } from "../../utils"

const formState = {
  campo: ''
}

export const Sorteo = () => {

  const { campo, onInputChange, reset } = useForm(formState)
  const [bolas, setBolas] = useState([])


  const handleSubmit = (e) => {

    e.preventDefault()
    if (campo === '') return

    setBolas([...bolas, Number(campo)].sort(function (a, b) {
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }

      return 0;

    }))
    reset()
  }



  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={campo}
          onChange={onInputChange}
          name='campo'
          type='number'
        />
        <button type="submit">afegir</button>
      </form>
      <div style={{ display: 'flex', gap: '1rem' }}>

        {
          bolas.map((bola, e) => (
            <div
              key={e}
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '999px',
                color: 'white',
                backgroundColor: 'red',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>{bola}</div>
          ))
        }
      </div>

    </>
  )
}
