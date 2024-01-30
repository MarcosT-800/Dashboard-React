
export default function Home() {
  return (
    <main>
     <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
  <div className="flex-auto p-4">
    <div className="flex flex-wrap -mx-3">
      <div className="flex-none w-2/3 max-w-full px-3">
        <div>
          <p className="mb-0 font-sans font-semibold leading-normal text-sm">Today's Money</p>
          <h5 className="mb-0 font-bold">
            $53,000
            <span className="leading-normal text-sm font-weight-bolder text-lime-500">+55%</span>
          </h5>
        </div>
      </div>
      <div className="w-4/12 max-w-full px-3 ml-auto text-right flex-0">
        <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500 shadow-soft-2xl">
          <i className="ni ni-money-coins text-lg relative top-3.5 text-white" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  </div>
</div>
    </main>
  );
}
