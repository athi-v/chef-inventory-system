import { TailSpin } from  'react-loader-spinner'

function Loader() {
  return (
    <div className='section'>
    <div className='container h-[100vh] flex flex-col items-center justify-center gap-8'>
        <div>      
      <TailSpin
  height="80"
  width="80"
  color="grey"
  ariaLabel="tail-spin-loading"
  radius="1"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
</div>
<div><p className='font-semibold'>Please wait...</p></div>

    </div>
    </div>

  )
}

export default Loader