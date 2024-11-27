import {TailSpin} from "react-loader-spinner";

const Loader = () => {
  return (
    <div className='loader flex items-center justify-center h-screen'>
        <TailSpin
            visible={true}
            height="80"
            width="80"
            color="gold"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
        />
    </div>
  )
}

export default Loader
