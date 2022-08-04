
export const Titulo = ({ texto, color }) => {
  return (
    <div
      style={{ width: '100%', border: `1px solid blue`, padding: '1rem 0', textAlign: 'center' }}>
      <h1 style={{ color: color }}>{texto}</h1>
    </div>
  )
}
