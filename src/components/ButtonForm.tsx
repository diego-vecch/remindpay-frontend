export function ButtonForm ({ nameButton, click }: { nameButton: string, click: any }): JSX.Element {
  return (
    <button
      onClick={click}
      type='submit' className='bg-purple-700 text-white p-2 w-full rounded-md mb-2'
    >
      {nameButton}
    </button>
  )
}
