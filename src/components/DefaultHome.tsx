import DefaultHomeImage from '../assets/images/DefaultHome.png';

const DefaultHome = () => {
  return (
    <div className="flex justify-center items-center mt-6">
      <img 
        src={DefaultHomeImage} 
        alt="Placeholder Image" 
        className="w-[640px] h-[454px] object-cover rounded-md shadow-lg"
      />
    </div>
  );
}

export default DefaultHome;
