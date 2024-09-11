import DoesNotExistImage from '../assets/images/DoesNotExist.png'

const DoesNotExist = () => {
  return (
    
      <div className="flex justify-center items-center mt-6">
      <img 
        src={DoesNotExistImage} 
        alt="Placeholder Image" 
        className="w-[640px] h-[454px] object-cover rounded-md shadow-lg"
      />
    </div>
    
  )
}

export default DoesNotExist
