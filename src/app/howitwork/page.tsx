import { NavbarHomepage } from '@/components/NavbarHomepage'
import { LogoNavbar } from '@/components/IconsSvg'

type HistoryPay = {
  index: number
  service: string
  user: string
  date: string
  import: string
  state: string
}

const subsHistory: HistoryPay[] = [
  {
    index: 1,
    service: 'Netflix',
    user: 'Katherine Murphy',
    date: '18/03/2022',
    import: '1000',
    state: 'Outcome'
  },
  {
    index: 2,
    service: 'Prime Video',
    user: 'Katherine Murphy',
    date: '18/03/2022',
    import: '2000',
    state: 'Income'
  },
  {
    index: 3,
    service: 'Netflix',
    user: 'Katherine Murphy',
    date: '18/03/2022',
    import: '3000',
    state: 'Income'
  }
]

const paymentHistory: HistoryPay[] = [
  {
    index: 1,
    service: 'Netflix',
    user: 'Katherine Murphy',
    date: '18/03/2022',
    import: '1000',
    state: 'Outcome'
  },
  {
    index: 2,
    service: 'Prime Video',
    user: 'Katherine Murphy',
    date: '18/03/2022',
    import: '2000',
    state: 'Income'
  }
]

export default function page (): JSX.Element {
  return (
    <main className='h-screen flex flex-col justify-center w-full max-h-[1000px] min-h-[550px] '>
      <NavbarHomepage />
      <div className='h-full pt-16 flex justify-center items-center '>
        <div className='flex gap-10 w-full px-8 h-[580px] max-w-[1200px] py-2'>
          <section className='w-72 h-80 pt-10'>
            <div
              className='bg-purple-regular text-yellow-50 w-60 h-60 px-10 rounded-full text-start flex justify-center items-center'
            >
              <h2 className='text-base font-light pt-2'> Remind Pay will help you manage your subscriptions and remind you when to renew them.</h2>
            </div>
          </section>
          <section
            className='w-full'
          >
            <div className='border-[1.3px] border-purple-800 rounded-lg overflow-hidden flex h-full'>
              <div className='relative left-0 bg-purple-half-dark w-[115px] h-full text-yellow-50 flex justify-center flex-col gap-8 text-xs font-extralight py-1 '>
                <div className=' px-2 flex justify-center h-20 pt-6'>
                  <LogoNavbar />
                </div>
                <div
                  className='flex flex-col gap-5 px-3 py-4 h-full'
                >
                  <div>Subcriptions</div>
                  <div>Expired</div>
                  <div>Calendar</div>
                  <div>Settings</div>
                  <div>Shared Subs</div>
                  <div>Wish List</div>
                </div>

                <div
                  className='border-t-[1.5px] border-t-purple-800 px-3 py-4 h-16'
                >Help & Support
                </div>
              </div>
              <div
                className='grid grid-cols-3 gap-5 h-full py-6 w-full ml-5'
              >
                <div className='col-span-2 bg-violet-400 rounded-lg pt-2 pb-4'>
                  <header className='px-6 pt-4 text-purple-dark font-semibold text-base'>
                    <h3>Subs History</h3>
                  </header>
                  <section className='text-xs px-0 pt-4'>
                    <table className='w-full'>
                      <thead className='flex text-center w-full pb-2'>
                        <tr className='flex justify-between text-center w-full [&>th]:w-full'>
                          <th>Service</th>
                          <th>User</th>
                          <th>Date</th>
                          <th>Import</th>
                          <th>State</th>
                        </tr>
                      </thead>
                      {subsHistory.map((sub) => {
                        return (
                          <tbody
                            key={sub.index}
                            className='flex text-center w-full pb-2'
                          >
                            <tr
                              className='flex justify-between text-center w-full py-1 [&>td]:w-full'
                            >
                              <td>{sub.service}</td>
                              <td>{sub.user}</td>
                              <td>{sub.date}</td>
                              <td>${sub.import}</td>
                              <td>{sub.state}</td>
                            </tr>
                          </tbody>
                        )
                      })}

                    </table>
                  </section>
                  <footer className='flex justify-center items-center'>
                    <h4 className='px-6 text-purple-800 font-medium text-xs'>Show All</h4>
                  </footer>
                </div>
                <div className='col-span-1 row-span-2 bg-violet-400 rounded-lg'>
                  <header className='pl-6 pr-12 pt-6 text-purple-dark font-semibold text-xs flex justify-between'>
                    <h3>Date</h3>
                    <h3>Report</h3>
                  </header>
                  <section className='text-xs px-5 pt-8'>
                    <div>
                      Today (dd/mm/yyyy)
                      <div className='grid grid-cols-2 gap-4 pl-2 pr-6 [&>div]:text-end pt-3 text-xs font-light text-purple-900'>
                        <div>Netflix</div>
                        <div>$200</div>
                        <div>Twitch</div>
                        <div>$500</div>
                        <div>EUR to USD</div>
                        <div>$900</div>
                      </div>
                    </div>
                    <div className='pt-10'>
                      Yesterday (dd/mm/yyyy)
                      <div className='grid grid-cols-2 gap-4 pl-2 pr-6 [&>div]:text-end pt-3 text-xs font-light text-purple-900'>
                        <div>Netflix</div>
                        <div>$200</div>
                        <div>Twitch</div>
                        <div>$500</div>
                        <div>EUR to USD</div>
                        <div>$900</div>
                      </div>
                    </div>
                    <div className='pt-10'>
                      (dd/mm/yyyy)
                      <div className='grid grid-cols-2 gap-4 pl-2 pr-6 [&>div]:text-end pt-3 text-xs font-light text-purple-900'>
                        <div>Netflix</div>
                        <div>$200</div>
                        <div>Twitch</div>
                        <div>$500</div>
                        <div>EUR to USD</div>
                        <div>$900</div>
                      </div>
                    </div>
                  </section>
                </div>
                <div
                  className='col-span-2 row-span-1 bg-violet-400 h-full rounded-lg  pt-2 pb-4'
                >
                  <header className='px-6 pt-4 text-purple-dark font-semibold text-base'>
                    <h3>Payment History</h3>
                  </header>
                  <section className='text-xs pt-4'>
                    <table className='w-full'>
                      <thead className='flex justify-between text-center w-full pb-2'>
                        <tr className='flex justify-between text-center w-full  [&>th]:w-full'>
                          <th>Service</th>
                          <th>User</th>
                          <th>Date</th>
                          <th>Import</th>
                          <th>State</th>
                        </tr>
                      </thead>
                      {paymentHistory.map((payment) => {
                        return (
                          <tbody
                            key={payment.index}
                            className='flex text-center w-full pb-2'
                          >
                            <tr className='flex justify-between text-center w-full py-1 [&>td]:w-full'>
                              <td>{payment.service}</td>
                              <td>{payment.user}</td>
                              <td>{payment.date}</td>
                              <td>${payment.import}</td>
                              <td>{payment.state}</td>
                            </tr>
                          </tbody>
                        )
                      })}
                    </table>
                  </section>
                  <footer className='flex justify-center items-center'>
                    <h4 className='px-6 text-purple-800 font-medium text-xs'>Show All</h4>
                  </footer>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
