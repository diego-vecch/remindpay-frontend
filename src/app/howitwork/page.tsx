import { NavbarHomepage } from '@/components/NavbarHomepage'
export default function page (): JSX.Element {
  return (
    <div className='h-full flex flex-col justify-center w-full'>
      <NavbarHomepage active=' ' />
      <div>How It Work</div>

    </div>
  )
}
