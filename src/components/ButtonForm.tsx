export function ButtonForm ({ nameButton }: { nameButton: string }): JSX.Element {
  return (
    <button
      type='submit' className='bg-purple-700 text-white p-2 w-full rounded-md mb-2'
    >
      {nameButton}
    </button>
  )
}
