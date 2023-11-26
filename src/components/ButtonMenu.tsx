type propMenu = {
  name: string
}
export default function ButtonMenu ({ name }: propMenu): JSX.Element {
  return (
    <div>
      <button className='text-sm sm:text-base vy-sm:text-base vy-sm:font-bold px-2 md:px-3 py-1 bg-blue-regular rounded-md hover:bg-violet-700 active:bg-violet-700  text-purple-light focus:outline-none focus:ring focus:ring-violet-100'>{name}
      </button>
    </div>
  )
}
